import { expect } from '@playwright/test';
import { PageManager } from '../pages/pageManager';

export async function loginFunc(page) {
    const pm = new PageManager(page);
    await pm.onLoginPage().goto();
    await page.waitForLoadState('domcontentloaded');
    await pm.onLoginPage().logIn();
    return pm;
}
