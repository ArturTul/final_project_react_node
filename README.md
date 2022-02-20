This assignment application (app) was made using react.js and node.js and several npm's from npmjs.com;

To start this app, open 2 separate terminals (one will be for app front-end, another for app back-end): front-end: using terminal, navigate to front directory, using "cd front". Then type npm start; back-end: using terminal, navigate to back directory, using "cd back". Then type "node index", or, if you are using nodemon npm, type "npx nodemon";
This app features these npm's: "nodemon" - for constant tracking of changes in code and "react-like" server establishment; "cors" - for providing a Connect/Express middleware; "email-validator" - for validating emails of newly created users; "express" - fast web framework for node; "mongoose" - MongoDB object modeling tool designed to work in an asynchronous environment;

App is working like this: Allows user to register Allows user to login; If user is not logged in, app hides "create product" and "cart" in toolbar. After login, those are visible; TODO (default logged in is set to true) Allows adding a new product, changing it's quantities and deleting; Allows putting products in cart, changing it's quantities and deleting; Allows viewing all created products; Allows user to buy product by deducting money and removing product from cart; TODO
