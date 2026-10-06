import { expect, test } from '@playwright/test';

test('Website serves stable public routes and crawl controls', async ({
  request,
}) => {
  const page = await request.get('/');
  expect(page.ok()).toBe(true);
  const html = await page.text();
  expect(html).toContain('lang="th"');
  expect(html).not.toContain('?lang=');
  expect(html).not.toContain('href="/th');
  expect(html).not.toContain('href="/en');
  for (const path of ['rides', 'how-it-works', 'pricing', 'about', 'help']) {
    const response = await request.get(`/${path}`);
    expect(response.ok()).toBe(true);
    expect(await response.text()).toContain(`http://localhost:5185/${path}`);
  }
  expect(html).toContain('name="description"');
  expect(html).toContain('rel="canonical"');
  expect(html).toContain('property="og:title"');
  expect(html).toContain('application/ld+json');
  expect(html).toContain('noindex');
  const robots = await request.get('/robots.txt');
  expect(await robots.text()).toContain('Disallow: /');
  const sitemap = await request.get('/sitemap.xml');
  const sitemapXml = await sitemap.text();
  expect(sitemapXml).toContain('http://localhost:5185/');
  expect(sitemapXml).not.toContain('?lang=');
  expect(sitemapXml).not.toContain('/th');
  expect(sitemapXml).not.toContain('/en');
  const share = await request.get('/opengraph-image');
  expect(share.ok()).toBe(true);
  expect(share.headers()['content-type']).toContain('image/png');
});

test('Website language switch keeps the current URL stable', async ({
  page,
}) => {
  await page.goto('/');

  await page.locator('button.locale-switch').click();

  await expect(page).toHaveURL('http://localhost:5185/');
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await expect(page).toHaveTitle('RBC GO | Electric motorcycle for your city');
  await expect(
    page.getByRole('heading', { name: 'Go beyond the everyday.' }),
  ).toBeVisible();
  await expect
    .poll(() =>
      page.evaluate(() => window.localStorage.getItem('rbc-go-language')),
    )
    .toBe('en');
});
test('Customer and Admin serve private app shells', async ({ request }) => {
  for (const port of [5183, 5184]) {
    const response = await request.get(`http://localhost:${port}/`);
    expect(response.ok()).toBe(true);
    expect(await response.text()).toContain('noindex, nofollow');
  }
});
test('API reports unconfigured adapters and exposes no wallet mutation', async ({
  request,
}) => {
  const response = await request.get('http://localhost:8081/api/v1/status');
  expect(response.ok()).toBe(true);
  expect((await response.json()).data.capabilities).toEqual({
    authentication: 'not_configured',
    billing: 'distance',
    iot: 'not_configured',
    payments: 'not_configured',
  });
  const topup = await request.post('http://localhost:8081/api/v1/wallet/topup');
  expect(topup.status()).toBe(404);
});
