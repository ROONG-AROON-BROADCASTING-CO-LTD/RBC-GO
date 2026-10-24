import { expect, test } from '@playwright/test';

test('Customer native web preview retries the status request', async ({
  page,
}) => {
  await page.setViewportSize({ width: 375, height: 812 });
  let available = false;
  await page.route('**/api/v1/status', (route) =>
    route.fulfill({
      status: available ? 200 : 503,
      contentType: 'application/json',
      body: JSON.stringify({
        success: available,
        data: { capabilities: { payments: 'not_configured' } },
      }),
    }),
  );
  await page.goto('http://localhost:5183');
  await expect(
    page.getByText('ยังเชื่อมต่อระบบไม่ได้', { exact: true }),
  ).toBeVisible();
  available = true;
  await page
    .getByRole('button', { name: 'ตรวจสอบการเชื่อมต่ออีกครั้ง' })
    .click();
  await expect(
    page.getByText('เชื่อมต่อระบบสำเร็จ', { exact: true }),
  ).toBeVisible();
});
