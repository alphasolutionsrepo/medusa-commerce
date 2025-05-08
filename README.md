# Alpha Solutions Medusa Commerce App for Contentstack
The Alpha Solutions Medusa Commerce app allows you to connect your Medusa ecommerce instance to a Contentstack stack and provides custom fields to associate Medusa products and product categories to content entries.

This app was built using the [Contentstack Marketplace ECOMMERCE App Boilerplate](https://github.com/contentstack/marketplace-ecomm-boilerplate-app)

##  Prerequisite

* [Contentstack Account](https://app.contentstack.com/#!/login)
* Nodejs - v14.18.2 & NPM - 8.1.4

## Environment Variables

* `.env` file are required in <APP_DIRECTORY>/ui. Rename `.env.example` files to `.env` and add value for `REACT_APP_UI_URL` `REACT_APP_API_URL`. 
* The value of `REACT_APP_UI_URL` is the URL of your app (the url for ui will be http://localhost:4000 and the url for api will be http://localhost:8080).

## Install Dependencies

* In the terminal go to APP_DIRECTORY and install the necessary packages :
```
cd <APP_DIRECTORY> 
npm i
```
* To install the necessary packages for ui , navigate to the ui folder
```
cd <APP_DIRECTORY>/ui 
npm i
``` 
* After you install the packages, run the following command in the ui folder to get started on all the Operation System(except Windows):
```
npm run start
```
* For Windows OS
```
npm run startWin
```

The UI server will start at port 4000.
* To install the necessary packages for API , navigate to the API folder
```
cd <APP_DIRECTORY>/api
npm i
```
* After you install the packages, run the following command in the API folder to start the server.
```
npm run dev
```
The API server will start at port 8080.
All the backend APIs are handled in an handler file in the `api/handler/index.js` and all the UI API calls are handled in the `ui/src/services.index.tsx` file.

In the API, the exports.handler function will be the entry point for processing incoming requests. Depending on the specific API route or endpoint, different predefined functions can be utilized for fetching products or categories from various third-party ecommerce systems are added inside handler/index.js, enabling modular and flexible data retrieval based on the requested resource. 
Storing dynamic user data in the root config enables centralization, allowing the handler/index.js to easily access and process this information, promoting consistency and simplifying data management within the API.

# Screenshots
### Product selector modal
![alt text](https://raw.githubusercontent.com/alphasolutionsrepo/medusa-commerce/refs/heads/main/screenshots/selector.png)

### Product custom field
![alt text](https://raw.githubusercontent.com/alphasolutionsrepo/medusa-commerce/refs/heads/main/screenshots/customfield.png)