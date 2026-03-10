# GreenKart Online Store Test Plan

## Application Overview

GreenKart is an online store for vegetables, fruits, and nuts. Users can search, browse products, adjust quantities, add items to the cart, and view cart details.

## Test Scenarios

### 1. Product Browsing and Cart

**Seed:** `tests/seed.spec.ts`

#### 1.1. Display all products

**File:** `tests/product-listing.spec.ts`

**Steps:**
  1. Navigate to the home page.
    - expect: A list of products is displayed with name, image, price, and 'ADD TO CART' button.
    - expect: Each product shows a default quantity of 1.

#### 1.2. Product details visibility

**File:** `tests/product-listing.spec.ts`

**Steps:**
  1. For each product, verify the name, image, and price are visible and correct.
    - expect: All product details are visible and accurate.

#### 1.3. Search for a product (happy path)

**File:** `tests/search.spec.ts`

**Steps:**
  1. Enter a valid product name (e.g., 'Tomato') in the search box.
    - expect: Only matching products are displayed.

#### 1.4. Search with no results

**File:** `tests/search.spec.ts`

**Steps:**
  1. Enter a non-existent product name (e.g., 'Dragonfruit').
    - expect: No products are displayed and a suitable message appears (if any).

#### 1.5. Search is case-insensitive

**File:** `tests/search.spec.ts`

**Steps:**
  1. Enter a product name in different cases (e.g., 'tomato', 'TOMATO').
    - expect: Matching products are displayed.

#### 1.6. Increase product quantity

**File:** `tests/quantity.spec.ts`

**Steps:**
  1. Click the '+' button for a product.
    - expect: The quantity increases by 1.

#### 1.7. Decrease product quantity

**File:** `tests/quantity.spec.ts`

**Steps:**
  1. Click the '-' button for a product.
    - expect: The quantity decreases by 1, but not below 1.

#### 1.8. Quantity does not go below 1

**File:** `tests/quantity.spec.ts`

**Steps:**
  1. Attempt to decrease quantity when it is 1.
    - expect: The quantity remains at 1.

#### 1.9. Add single product to cart

**File:** `tests/cart.spec.ts`

**Steps:**
  1. Click 'ADD TO CART' for a product.
    - expect: The cart item count and price update accordingly.

#### 1.10. Add multiple products to cart

**File:** `tests/cart.spec.ts`

**Steps:**
  1. Add several different products to the cart.
    - expect: The cart reflects the correct number of items and total price.

#### 1.11. Add same product multiple times

**File:** `tests/cart.spec.ts`

**Steps:**
  1. Increase quantity, then click 'ADD TO CART'.
    - expect: The cart reflects the correct quantity and price.

#### 1.12. View cart

**File:** `tests/cart.spec.ts`

**Steps:**
  1. Click the 'Cart' link.
    - expect: The cart page displays all added products, quantities, and total price.

#### 1.13. Cart updates after adding/removing items

**File:** `tests/cart.spec.ts`

**Steps:**
  1. Add and remove products, then view the cart.
    - expect: The cart updates correctly.

#### 1.14. Top Deals link

**File:** `tests/navigation.spec.ts`

**Steps:**
  1. Click the 'Top Deals' link.
    - expect: Navigation to the offers page.

#### 1.15. Flight Booking link

**File:** `tests/navigation.spec.ts`

**Steps:**
  1. Click the 'Flight Booking' link.
    - expect: Navigation to the flight booking site.

#### 1.16. Add to cart with zero products

**File:** `tests/cart.spec.ts`

**Steps:**
  1. Do not add any products.
    - expect: The cart shows zero items and zero price.

#### 1.17. Rapid quantity changes

**File:** `tests/quantity.spec.ts`

**Steps:**
  1. Rapidly click '+' and '-' for a product.
    - expect: The quantity and cart remain consistent.

#### 1.18. Cart persists after page reload

**File:** `tests/cart.spec.ts`

**Steps:**
  1. Add products to the cart.
    - expect: Reload the page.
    - expect: The cart contents persist (if supported).
