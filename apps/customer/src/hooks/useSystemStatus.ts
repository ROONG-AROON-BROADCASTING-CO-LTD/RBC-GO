import { useQuery } from '@tanstack/react-query';
import { Platform } from 'react-native';
import type { ApiResponse, SystemStatus } from '@stackbuild/types';

const defaultHost = Platform.OS === 'android' ? '10.0.2.2' : 'localhost';
const apiUrl = (
  process.env.EXPO_PUBLIC_API_URL ?? `http://${defaultHost}:8081/api/v1`
).replace(/\/$/, '');

export function useSystemStatus() {
  const query = useQuery({
    queryKey: ['system-status'],
    retry: false,
    refetchOnWindowFocus: false,
    queryFn: async ({ signal }) => {
      const controller = new AbortController();
      const abort = () => controller.abort();
      signal.addEventListener('abort', abort);
      if (signal.aborted) controller.abort();
      const timer = setTimeout(abort, 5000);
      try {
        const response = await fetch(`${apiUrl}/status`, {
          signal: controller.signal,
        });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const body: ApiResponse<SystemStatus> = await response.json();
        if (!body.success || !body.data?.capabilities)
          throw new Error('Invalid status response');
        return body.data;
      } finally {
        clearTimeout(timer);
        signal.removeEventListener('abort', abort);
      }
    },
  });
  const status =
    query.isFetching || query.isPending
      ? 'loading'
      : query.isError
        ? 'error'
        : 'connected';
  return { status, refresh: query.refetch };
}
