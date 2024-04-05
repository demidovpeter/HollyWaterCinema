# Holly Water Cinema

This is a test task project implementation.
The app is designed to playback video content and text(books).

**Features**
<ol>
  <li>App user is able to return to the last part of recently viewed content</li>
  <li>Different types/formats of content are supported</li>
  <li>Video can be swiped like in most modern video hosting</li>
  <li>Category sections represent list of content according its rating and number of views</li>
  <li>Order of content sections can be changed as well as sort direction with Firebase remote config</li>
</ol>

# Setup

Firebase Remote Config required `google-service.json` file to be generated and copied into the project 
according to [documentation](https://rnfirebase.io/#generating-android-credentials)

The rest of instructions for running the app are default, and could be found below.
_________________

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.