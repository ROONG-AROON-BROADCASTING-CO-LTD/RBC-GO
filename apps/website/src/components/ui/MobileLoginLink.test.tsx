import '@testing-library/jest-dom/vitest';
import { act, cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { MobileLoginLink } from './MobileLoginLink';
afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
});
function device(userAgent: string, matches: boolean) {
  let listener: (() => void) | undefined;
  const media = {
    matches,
    addEventListener: vi.fn((_event, handler) => {
      listener = handler;
    }),
    removeEventListener: vi.fn(),
  };
  vi.stubGlobal('navigator', { userAgent });
  vi.stubGlobal('matchMedia', () => media);
  return {
    media,
    resize: (matches: boolean) => {
      media.matches = matches;
      act(() => listener?.());
    },
  };
}
describe('mobile-only Website login', () => {
  it('renders a real Customer link on a phone with a narrow touch viewport', () => {
    device('Mozilla/5.0 (iPhone; CPU iPhone OS 18_0)', true);
    render(<MobileLoginLink href="http://localhost:5183" />);
    expect(
      screen.getByRole('link', { name: 'เข้าสู่ระบบ RBC GO' }),
    ).toHaveAttribute('href', 'http://localhost:5183');
  });
  it('keeps the link absent on desktop, including narrow windows', () => {
    device('Mozilla/5.0 (Macintosh; Intel Mac OS X)', true);
    render(<MobileLoginLink href="http://localhost:5183" />);
    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });
  it('removes the link when the phone viewport no longer qualifies', () => {
    const mock = device('Mozilla/5.0 (iPhone; CPU iPhone OS 18_0)', true);
    const view = render(<MobileLoginLink href="http://localhost:5183" />);
    mock.resize(false);
    expect(screen.queryByRole('link')).not.toBeInTheDocument();
    view.unmount();
    expect(mock.media.removeEventListener).toHaveBeenCalled();
  });
});
