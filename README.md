# React Data Table

![](presentation.webp)

[See React Data Table Live Demo](https://geo-tp.github.io/HRnet-Data-Table/)

React component to work with HTML table :

- Sort by fields
- Search occurences
- Pagination
- Details Dropdown

## How to use it

```
// Feed it with an array of objects
const employees = [
    {
        firstname: "string";
        lastname: "string";
        startdate: "string";
        department: "string";
        birthdate: "string";
        street: "string";
        city: "string";
        state: "string";
        zipcode: "string";
    },
    {
        firstname: "string";
        lastname: "string";
        startdate: "string";
        department: "string";
        birthdate: "string";
        street: "string";
        city: "string";
        state: "string";
        zipcode: "string";
    },
];

// Use it, fields prop can be null, keys from dataset will be used instead
<DataTable
    dataset={employees}
    fields={[
        "First Name",
        "Last Name",
        "Start Date",
        "Department",
        "Date of Birth",
        "Street",
        "City",
        "State",
        "Zip Code",
    ]}
/>
```

## NPM

```npm i react-typescript-data-table```

## Version

- npm version 8.11.0
- node version 17.9.1
- sass 1.53.2
- typescript 4.9.4

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

Install required dependencies for the project

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
