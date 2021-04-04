# [DylanAllen.net](https://dylanallen.net)

This is my personal site. It is a [React](https://github.com/facebook/create-react-app) app using Firebase auth, Firestore database, deployed on Netlify.

## Config

To set up this app you need:
- A Firebase project - for auth & comments
- A Google analytics ID - if you want to track analytics
- An AWS account with SES configured - for sending notification emails when a comment is posted.

To run locally with comments & admin functions you will need the Netlify CLI installed locally.

Copy the `.env.example` file and fill in all env variables with values from Firebase, Google analytics, and AWS:

```
project_id=project-name
private_key=---BEGIN Provate KEY---...
client_email=firebase-adminsdk-...
REACT_APP_GA_ID=qwerty
aws_accessKey=qwerty
aws_secretKey=qwerty
aws_region=us-east-1
from_email=mail@example.com
to_email=mail@example.com
```

## Build
```bash
yarn install
yarn build
```

## Install Netlify CLI
```bash
npm i -g netlify-cli
```

## Run
```
netlify dev
```

## Deploy
```bash
netlify deploy --prod
```
You will also need to add your Google analytics script as a code snippet in the Netlify project
