import { describe, expect, it } from 'vitest';
import { isMobilePhone } from './mobile-device';
describe('mobile login eligibility', () => {
  it('accepts iPhone and Android phones', () => {
    expect(isMobilePhone('Mozilla/5.0 (iPhone; CPU iPhone OS 18_0)')).toBe(
      true,
    );
    expect(
      isMobilePhone(
        'Mozilla/5.0 (Linux; Android 15) AppleWebKit Mobile Safari',
      ),
    ).toBe(true);
  });
  it('rejects desktop even in a narrow window', () => {
    expect(isMobilePhone('Mozilla/5.0 (Macintosh; Intel Mac OS X)')).toBe(
      false,
    );
  });
  it('rejects tablets', () => {
    expect(isMobilePhone('Mozilla/5.0 (iPad; CPU OS 18_0)')).toBe(false);
    expect(isMobilePhone('Mozilla/5.0 (Linux; Android 15) Safari')).toBe(false);
  });
  it('supports client hints', () => {
    expect(isMobilePhone('reduced user agent', true)).toBe(true);
    expect(isMobilePhone('reduced user agent', false)).toBe(false);
  });
});
