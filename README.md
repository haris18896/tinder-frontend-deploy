 # Tinder FrontEnd

# `deploy`

create a project in the firebase console.

```js
// src/firebase.js
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAtGG-N43LXv8cZ-MAvIUUlqA2trc7lWeY",
    authDomain: "tinderclone-00.firebaseapp.com",
    projectId: "tinderclone-00",
    storageBucket: "tinderclone-00.appspot.com",
    messagingSenderId: "117048801370",
    appId: "1:117048801370:web:cece5dc990b68de81a4063"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
```

```sh
$ npm i firebase
$ npm i -g firebase-tools
$ firebase login
$ firebase init
```


* $ firebase init
    1. ? Are you ready to proceed? Yes
    2. >(*) Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys
    3. > Use an existing project
    4. > tinderclone-00 (tinderclone)
    5. ? What do you want to use as your public directory? build
    6. ? Configure as a single-page app (rewrite all urls to /index.html)? Yes
    7. ? Set up automatic builds and deploys with GitHub? Yes
    8. ? For which GitHub repository would you like to set up a GitHub workflow? (format: user/repository) haris18896/tinder-frontend-deploy
    9. ? Set up the workflow to run a build script before every deploy? Yes
    10. ? What script should be run before every deploy? (npm ci && npm run build)
    11. ? What script should be run before every deploy? npm run build
    12. ? Set up automatic deployment to your site's live channel when a PR is merged? Yes
    13. ? What is the name of the GitHub branch associated with your site's live channel? master

```sh
$ firebase deploy
$ npm run build
$ firebase deploy --only hosting
```

* IMPORTANT: you need to set proper HTTP caching headers for service-worker.js file in firebase.json file or you will not be able to see changes after first deployment (issue #2440). It should be added inside "hosting" key like next:


```json
{
  "hosting": {
    // ...
    "headers": [
      {"source": "/service-worker.js", "headers": [{"key": "Cache-Control", "value": "no-cache"}]}
    ]
    // ...
```
