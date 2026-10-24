import { StatusBar } from 'expo-status-bar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { WelcomeScreen } from './screens/WelcomeScreen';
const queryClient = new QueryClient();
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <StatusBar style="light" />
        <SafeAreaView style={{ flex: 1, backgroundColor: '#080a08' }}>
          <WelcomeScreen />
        </SafeAreaView>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}
