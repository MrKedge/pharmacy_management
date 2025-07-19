import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:8000/admin/dashboard/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Laravel/);
});

test("Check sidebar on admin dashboard", async ({ page }) => {
  await page.goto('https://uat-pharmacy.nfshost.com/admin/dashboard/');
  // Expect an element with the id 'admin-name' to contain the text 'Admin'.
  const adminName = await page.getByRole('heading', { name: 'John Doe' });
  await expect(adminName).toBeVisible();

  await expect(page.getByText('Super Admin')).toBeVisible();

});
