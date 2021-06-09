# Netflix Clone Inc

A project of the portfolio type that implement a netflix clone.

## 📣 Summary

This app is a Netflix Clone. It was built using React and Styled Components for the frontend and Firebase for the backend.
You can see defferent pages such as:

- SignIn
- SignUp
- Browse
- Home

![Preview](public/images/misc/preview.jpg?raw=true)

# How to fork and clone

One quick note about cloning this project. If you wish to make commits and push the code up after cloning this repo, you should fork the project first. In order to own your own copy of this repository, you have to fork it so you get your own copy on your own profile!

You can see the fork button in the top right corner of every GitHub project; click it and a copy of the project will be added to your GitHub profile under the same name as the original project.

![alt text](https://i.ibb.co/1YN7SJ6/Screen-Shot-2019-07-01-at-2-02-40-AM.png 'image to fork button')

After forking the project, simply clone it the way you would from the new forked project in your own GitHub repository and you can commit and push to it freely!

# After you fork and clone:

## Install dependencies

In your terminal after you clone your project down, remember to run either `yarn` or `npm install` to build all the dependencies in the project.

## Set your firebase config

Remember to replace the `configs` variable in your `.env` file with your own config object from the firebase dashboard! Navigate to the project settings and scroll down to the config code.

![alt text](https://i.ibb.co/6ywMkBf/Screen-Shot-2019-07-01-at-11-35-02-AM.png 'image to firebase config')

Copy the object in the code and replace the variable in your cloned code.

![Preview](public/images/misc/env.jpg?raw=true)

| Variable                    | Value               |
| --------------------------- | ------------------- |
| REACT_APP_apiKey            | `apiKey`            |
| REACT_APP_authDomain        | `auth`              |
| REACT_APP_projectId         | `projectId`         |
| REACT_APP_storageBucket     | `storageBucket`     |
| REACT_APP_messagingSenderId | `messagingSenderId` |
| REACT_APP_appId             | `appId`             |

` `

## Run locally

Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `yarn start`

## Test

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn test`

### Coverage

![Preview](public/images/misc/coverage.jpg?raw=true)
