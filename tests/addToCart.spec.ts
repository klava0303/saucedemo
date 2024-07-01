import { test, expect } from '@playwright/test';
import { PageManager } from '../pages/pageManager';
import { loginFunc } from './utils';

test.beforeEach(async ({ page }) => {
    await loginFunc(page);
  });

test ('Add first product on the page to cart', async ({ page}) => {
    const pm = new PageManager(page); 
    await expect(pm.onInventoryPage().title).toHaveText('Products');
    await expect(pm.onInventoryPage().addToCartButton).toBeVisible(); 
    await expect(pm.onInventoryPage().addToCartButton).toHaveText('Add to cart'); 
    await expect(pm.onInventoryPage().productPrice).not.toBeEmpty(); 
    await pm.onInventoryPage().addToCart();
    await expect(pm.onInventoryPage().cart).toHaveText('1'); 
    await expect(pm.onInventoryPage().addToCartButton).not.toBeVisible();
    await expect(pm.onInventoryPage().removeButton).toBeVisible(); 
    await expect(pm.onInventoryPage().removeButton).toHaveText('Remove'); 
}
)

test ('Information on Cart page is correct', async ({ page}) => {
    const pm = new PageManager(page); 
    await pm.onInventoryPage().addToCart();
    await pm.onCartPage().goTo(); 
    
    //check that product in the cart is the same as product selected from inventory
    const inventoryProduct = await pm.onInventoryPage().productName.innerText(); 
    const cartProduct = await pm.onCartPage().productName.innerText(); 
    expect (cartProduct).toEqual(inventoryProduct); 

    //check page title 
    await expect(pm.onCartPage().title).toHaveText('Your Cart');

    //check user can modify quantity of the product 
    await expect(pm.onCartPage().quantity).toBeEditable(); 

    //check user can remove product from cart 
    await expect(pm.onCartPage().removeButton).toBeVisible(); 
}
)