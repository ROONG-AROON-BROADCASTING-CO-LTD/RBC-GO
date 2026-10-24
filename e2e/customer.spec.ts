import { expect, test } from '@playwright/test';

test('Customer completes an offline demo booking and can start again', async ({
  page,
}) => {
  await page.setViewportSize({ width: 320, height: 720 });
  const apiRequests: string[] = [];
  page.on('request', (request) => {
    if (request.url().includes('/api/')) apiRequests.push(request.url());
  });
  await page.goto('http://localhost:5183');
  await expect(
    page.getByRole('button', { name: 'เลือกวันเช่า  →' }),
  ).toBeDisabled();
  await page
    .getByRole('button', { name: 'เลือก Premium Electric SUV', exact: true })
    .click();
  await page.getByRole('button', { name: 'เลือกวันเช่า  →' }).click();
  await page.getByRole('button', { name: 'เดือนถัดไป' }).click();
  const now = new Date();
  const month = new Date(now.getFullYear(), now.getMonth() + 1, 1);
  const prefix = `${month.getFullYear()}-${String(month.getMonth() + 1).padStart(2, '0')}`;
  await page
    .getByRole('button', { name: `วันที่ ${prefix}-13`, exact: true })
    .click();
  await expect(
    page.getByRole('button', { name: 'ตรวจสอบการจอง  →' }),
  ).toBeDisabled();
  await page
    .getByRole('button', { name: `วันที่ ${prefix}-16`, exact: true })
    .click();
  await page.getByRole('radio', { name: '12:00', exact: true }).click();
  await page
    .getByRole('radio', { name: 'สาขาสาทร กรุงเทพฯ', exact: true })
    .click();
  await page.getByRole('button', { name: 'ตรวจสอบการจอง  →' }).click();
  await expect(
    page.getByRole('button', { name: 'ยืนยันการจองตัวอย่าง  →' }),
  ).toBeDisabled();
  await expect(page.getByText('฿5,700', { exact: true }).first()).toBeVisible();
  await page.getByRole('button', { name: 'แก้ไขวันเช่าและสถานที่  ↗' }).click();
  await expect(
    page.getByRole('radio', { name: '12:00', exact: true }),
  ).toBeChecked();
  await page.getByRole('button', { name: 'ตรวจสอบการจอง  →' }).click();
  await page.getByRole('radio', { name: 'QR Payment' }).click();
  await page
    .getByRole('checkbox', { name: 'รับทราบว่าเป็นการจองตัวอย่าง' })
    .click();
  await page.getByRole('button', { name: 'ยืนยันการจองตัวอย่าง  →' }).click();
  await expect(
    page.getByRole('heading', { name: 'จองตัวอย่างสำเร็จแล้ว!' }),
  ).toBeVisible();
  await expect(page.getByText('RBC-DEMO-026184')).toBeVisible();
  await expect(page.getByText('฿0', { exact: true })).toBeVisible();
  await page.getByRole('button', { name: 'สำรวจยานพาหนะอีกครั้ง' }).click();
  await expect(
    page.getByRole('button', { name: 'เลือกวันเช่า  →' }),
  ).toBeDisabled();
  await page.getByRole('radio', { name: 'เรือยอชต์', exact: true }).click();
  await page
    .getByRole('button', { name: 'เลือก Private Yacht', exact: true })
    .click();
  await page.getByRole('button', { name: 'เลือกวันเช่า  →' }).click();
  await expect(
    page.getByRole('radio', { name: 'ท่าเรือภูเก็ต', exact: true }),
  ).toBeVisible();
  expect(apiRequests).toEqual([]);
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth > innerWidth,
    ),
  ).toBe(false);
});
