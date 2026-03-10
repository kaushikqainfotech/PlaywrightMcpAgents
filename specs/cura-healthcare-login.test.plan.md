# CURA Healthcare Login Test Plan - AW-1

## Application Overview

This test plan covers the login functionality for the CURA Healthcare Service Application as described in JIRA story AW-1. It includes comprehensive testing of authentication flows, error handling, session management, and security scenarios for the login feature at https://katalon-demo-cura.herokuapp.com/profile.php#login

## Test Scenarios

### 1. Authentication Flow Tests

**Seed:** `tests/seed.spec.ts`

#### 1.1. Successful Login with Valid Credentials

**File:** `tests/authentication/successful-login.spec.ts`

**Steps:**
  1. Navigate to the CURA Healthcare login page at https://katalon-demo-cura.herokuapp.com/profile.php#login
    - expect: Login page loads successfully
    - expect: Page title shows 'CURA Healthcare Service'
    - expect: Login form is visible with all required elements
    - expect: Demo account credentials are displayed
  2. Enter valid username 'John Doe' in the username field
    - expect: Username field accepts the input
    - expect: Text is displayed clearly in the field
  3. Enter valid password 'ThisIsNotAPassword' in the password field
    - expect: Password field accepts the input
    - expect: Password text is masked for security
  4. Click the 'Login' button
    - expect: User is successfully authenticated
    - expect: Page redirects to the appointment page (/#appointment)
    - expect: Navigation menu shows authenticated state with History, Profile, and Logout options
    - expect: Make Appointment form is displayed
    - expect: Login link is no longer visible in navigation

#### 1.2. Invalid Username Authentication Failure

**File:** `tests/authentication/invalid-username.spec.ts`

**Steps:**
  1. Navigate to the CURA Healthcare login page
    - expect: Login page loads successfully
  2. Enter invalid username 'InvalidUser' in the username field
    - expect: Username field accepts the input
  3. Enter valid password 'ThisIsNotAPassword' in the password field
    - expect: Password field accepts the input
  4. Click the 'Login' button
    - expect: Error message 'Login failed! Please ensure the username and password are valid.' is displayed
    - expect: User remains on the login page
    - expect: URL does not change from login page
    - expect: Navigation menu still shows Login option

#### 1.3. Invalid Password Authentication Failure

**File:** `tests/authentication/invalid-password.spec.ts`

**Steps:**
  1. Navigate to the CURA Healthcare login page
    - expect: Login page loads successfully
  2. Enter valid username 'John Doe' in the username field
    - expect: Username field accepts the input
  3. Enter invalid password 'WrongPassword' in the password field
    - expect: Password field accepts the input
  4. Click the 'Login' button
    - expect: Error message 'Login failed! Please ensure the username and password are valid.' is displayed
    - expect: User remains on the login page
    - expect: Login form is still accessible

#### 1.4. Empty Fields Validation

**File:** `tests/authentication/empty-fields-validation.spec.ts`

**Steps:**
  1. Navigate to the CURA Healthcare login page
    - expect: Login page loads successfully
  2. Leave username field empty
    - expect: Username field remains blank
  3. Leave password field empty
    - expect: Password field remains blank
  4. Click the 'Login' button
    - expect: Error message 'Login failed! Please ensure the username and password are valid.' is displayed
    - expect: User remains on the login page
    - expect: Form validation prevents successful submission

### 2. Session Management Tests

**Seed:** `tests/seed.spec.ts`

#### 2.1. Successful Logout and Session Termination

**File:** `tests/session/logout-session-termination.spec.ts`

**Steps:**
  1. Navigate to login page and log in with valid credentials (John Doe / ThisIsNotAPassword)
    - expect: User is successfully logged in
    - expect: Appointment page is displayed
    - expect: Navigation shows authenticated menu items
  2. Navigate to logout URL https://katalon-demo-cura.herokuapp.com/authenticate.php?logout
    - expect: User is logged out successfully
    - expect: Redirected to homepage (URL: https://katalon-demo-cura.herokuapp.com/)
    - expect: Navigation menu reverts to unauthenticated state showing Login option
    - expect: History, Profile, and Logout links are no longer visible
  3. Verify session termination by attempting to access appointment page directly
    - expect: Access to appointment page is denied
    - expect: User is redirected to homepage
    - expect: No appointment form is accessible

### 3. Security and Authorization Tests

**Seed:** `tests/seed.spec.ts`

#### 3.1. Unauthorized Access Prevention

**File:** `tests/security/unauthorized-access-prevention.spec.ts`

**Steps:**
  1. Ensure user is not logged in by visiting homepage
    - expect: Homepage displays correctly
    - expect: Navigation shows Login option
    - expect: User is in unauthenticated state
  2. Attempt to navigate directly to appointment page (/#appointment) without authentication
    - expect: Access is denied
    - expect: User is redirected to homepage
    - expect: Appointment form is not displayed
    - expect: Navigation remains in unauthenticated state
  3. Attempt to navigate to profile page without authentication
    - expect: Unauthorized access is prevented
    - expect: User cannot access protected functionality

#### 3.2. Make Appointment Button Security Check

**File:** `tests/security/make-appointment-security.spec.ts`

**Steps:**
  1. From the homepage, click on the 'Make Appointment' button without being logged in
    - expect: User is redirected to login page (profile.php#login)
    - expect: Authentication is required before accessing appointment functionality
  2. Complete login process with valid credentials from the redirected login page
    - expect: After successful login, user gains access to appointment functionality
    - expect: Appointment form becomes available

### 4. User Interface and Functional Tests

**Seed:** `tests/seed.spec.ts`

#### 4.1. Login Form Elements Validation

**File:** `tests/ui/login-form-elements.spec.ts`

**Steps:**
  1. Navigate to the CURA Healthcare login page
    - expect: Page loads successfully with correct title 'CURA Healthcare Service'
  2. Verify all required form elements are present
    - expect: Login heading is displayed
    - expect: Username field is present and labeled correctly
    - expect: Password field is present and labeled correctly
    - expect: Login button is present and clickable
    - expect: Demo account section shows sample credentials
    - expect: Instructional text 'Please login to make appointment.' is visible
  3. Verify form field behavior and accessibility
    - expect: Username field accepts text input
    - expect: Password field masks input for security
    - expect: All form elements are properly labeled for accessibility
    - expect: Tab navigation works correctly between form elements

#### 4.2. Demo Account Credentials Display

**File:** `tests/ui/demo-credentials-display.spec.ts`

**Steps:**
  1. Navigate to the login page and examine the demo account section
    - expect: Demo account section is visible
    - expect: Username 'John Doe' is displayed
    - expect: Password 'ThisIsNotAPassword' is visible for testing purposes
    - expect: Demo credentials are clearly separated from main login form
  2. Verify demo credentials are for reference only
    - expect: Demo credentials do not interfere with main form submission
    - expect: Users can enter different credentials in the main form fields

### 5. Cross-Browser and Performance Tests

**Seed:** `tests/seed.spec.ts`

#### 5.1. Login Performance and Responsiveness

**File:** `tests/performance/login-performance.spec.ts`

**Steps:**
  1. Navigate to login page and measure page load time
    - expect: Page loads within acceptable time limits (≤ 3 seconds)
    - expect: All form elements render properly
  2. Submit login form with valid credentials and measure authentication response time
    - expect: Authentication completes within 3 seconds as per non-functional requirements
    - expect: Redirect to appointment page occurs promptly
  3. Test form responsiveness on different viewport sizes
    - expect: Login form remains functional and properly positioned
    - expect: All elements are accessible on mobile and desktop views
