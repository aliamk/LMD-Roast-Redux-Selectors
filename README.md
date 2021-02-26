# LMD Roast!

## An e-commerce site with authentication and payment
*React - Redux - Firebase - Google API - Node/Express - Stripe*
---
####This app was deployed on Heroku and can be reached on https://lmd-roast.herokuapp.com/ (heroku apps can be slow to load so it may be a good time to get a cup of coffee)
---
![React logo](https://img.icons8.com/plasticine/40/000000/react.png)&nbsp;&nbsp;**React:** A library that allows declarative programming with reusable components and uni-directional data flow

![Redux logo](https://img.icons8.com/color/30/000000/redux.png)&nbsp;&nbsp;**Redux:** To switch from local state management to single and global sources of truth in order to future-proof the app by making it scalable

![Firebase logo](https://img.icons8.com/color/30/000000/firebase.png)&nbsp;&nbsp;**Firebase:** For users to manually sign-in and be authenticated/stored on the Firebase database

![Google logo](https://img.icons8.com/color/30/000000/google-logo.png)&nbsp;&nbsp;**Google API:** For users to be authenticated and sign-in with their Google accounts

![NodeExpress logo](https://img.icons8.com/color/40/000000/nodejs.png)&nbsp;&nbsp;**Node + Express:** Used as a backend for the processing of Stripe payments

![Stripe logo](https://img.icons8.com/fluent/30/000000/stripe.png)&nbsp;&nbsp;**Stripe API:** For users to easily pay for their items

---
## Overview of the whole app
![github](https://github.com/aliamk/LMD-Roast-Redux-Selectors/blob/master/readme_assets/cofffee_beans_whole_app.gif)

## Checking-out with payment and address details via the Stripe API
![github](https://github.com/aliamk/LMD-Roast-Redux-Selectors/blob/master/readme_assets/cofffee_beans_checkout.gif)

## Manually signing-in as an existing user and having user data requested from the Firebase database
![github](https://github.com/aliamk/LMD-Roast-Redux-Selectors/blob/master/readme_assets/cofffee_beans_manual_sign_in.gif)

## Signing-in and being authenticated as a Google user
![github](https://github.com/aliamk/LMD-Roast-Redux-Selectors/blob/master/readme_assets/cofffee_beans_google_sign_in.gif)

---

If cloning this repo, you'll need the following:
1. Firebase account with configuration details like apiKey (firebase.utils.js file)
1. Google account for 3rd party sign-in and authentication
1. A Stripe account to use its API for payments
1. Once downloaded, run the terminal command in both the root and client folder of the project:  npm install
1. Add the various api keys/configuration for each of the APIs
1. Use terminal command in both root and client to open the app in a browser:  npm start
