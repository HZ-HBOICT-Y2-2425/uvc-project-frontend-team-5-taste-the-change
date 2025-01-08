# Frontend Sveltekit Project

## Overview
This project, Taste the Change, consists of a frontend built with SvelteKit & TailwindCSS. 

## Architecture
The project is structured as follows:
* **.github:** used as part of our development pipeline. 
* **.vercel/output:** used as part of our development pipeline.
* **src:** contains the core of our application such as: routes, stores, library and tests.
  * **lib:** serves as the library with all assets & components.
  * **routes** contains all routes with pages for the application.
  * **stores** contains stores used for the application.
  * **test** contains everything nessecary to test several parts of the application.
* **static** contains static elements for the application such as the favicon. 

## Features
1. **Recipes:**
    * You can choose/find recipes to cook for six different diet goals such as vegetarian and vegan recipes. You can also use filters to easier find what you are looking for.
2. **Goals:** 
    * Each week, you can select one goal to work on. Once completed you will be able to claim leaves, which are the currency of our application.
3. **Leaves** 

## Technologies Used
* **Node.js & npm** for package management.
* **TailwindCSS** for the styling of the pages.

## Getting Started
### Prerequisites
* Node.js & npm (for local development)

### Running the Project
1. Clone the repository:
    ```bash
    git clone <repository-url>
    cd <repository-folder>
    ```
2. Install node modules:
    ```bash
    npm install
    ```
3. (Optional) If you run into any errors on step 2:
    ```bash
    npm audit fix
    ```
4. Start the application:
    ```bash
    npm run dev
    ```
5. Access the application:
    - Taste the Change website: `http://localhost:5173`

### Stopping the Services
To stop the running services: use **ctrl + c** twice

## License
This project is licensed under the MIT License.