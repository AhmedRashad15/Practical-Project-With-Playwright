
# Playwright E-commerce Test Suite

This repository contains an end-to-end test suite for an e-commerce website, built using Playwright.  The tests cover key user flows, ensuring the functionality and reliability of the platform.

## Project Structure

The project is organized as follows:

- **`pageObjects`**: This directory houses the Page Object Model (POM) classes. Each class represents a page on the e-commerce site and encapsulates the selectors and actions related to that page. This promotes maintainability and readability of the tests.
    - **`authentication`**: Contains page objects related to user authentication (login, registration, logout).
    - **`checkOut`**: Page objects for the checkout process.
    - **`home`**: Page object for the home page.
    - **`products`**: Page objects related to product browsing and details.
- **`tests`**: This directory contains the actual test specifications.
    - **`data`**:  Contains test data, potentially in JSON or other formats, to be used in the tests. 
    - **`utilities`**:  Contains helper functions or utility classes used across the tests (e.g., for data generation, custom assertions, etc.).
    - **Test Files**:  Each `.spec.ts` file represents a test suite for a specific feature or user flow.  The included files are:
        - `LogOutTestCase.spec.ts`: Tests the user logout functionality.
        - `PlaceAnOrder.spec.ts`: Tests the process of placing an order.
        - `ProductDetails.spec.ts`: Tests the product details page and functionality.
        - `RegisterNewUser.spec.ts`: Tests the registration of a new user.
        - `SearchProduct.spec.ts`: Tests the product search functionality.
        - `loginTestCases.spec.ts`: Tests user login with various scenarios. 
- **`.gitignore`**: Specifies intentionally untracked files that Git should ignore.
- **`package-lock.json`**: Records the exact versions of dependencies used in the project.
- **`package.json`**: Contains metadata about the project, including dependencies and scripts.
- **`playwright.config.ts`**: Configuration file for Playwright, including browser settings, reporters, and other options.

## Getting Started

### Prerequisites

Before running the tests, ensure you have the following installed:

- **Node.js and npm (or yarn)**:  You can download and install them from [nodejs.org](nodejs.org).
- **Playwright**: Install Playwright and its browser dependencies:
  ```bash
  npm install playwright
  npx playwright install
### Installation

Install the dependencies:

npm install
Running the Tests
You can run the tests using the following command:

Bash:

npx playwright test

You can also specify a specific test file:

Bash:

npx playwright test tests/file-name

Reporting
Playwright provides built-in reporting capabilities. After running the tests, you can view the HTML 

Bash:

npx playwright show-report



### Contributing
Contributions are welcome! Feel free to submit pull requests or open issues.
  
