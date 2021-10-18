# Aspire Test

This is the React Native skill test project.

## To run the project

Use yarn to install the dependencies.

```bash
yarn install
```

Then pod install required for ios.

```bash
npx pod-install
```

Run project

```bash
yarn ios
```

or

```bash
yarn android
```

## troubleshooting

if you experience the errors: "error: local variable networkFlipperPlugin is accessed from within inner class" & "error: local variable reactInstanceManager is accessed from within inner class"
inside ReactNativeFlipper.java, then just open android studio & open ReactNativeFlipper.java (generated file) and make these two variables final.
just to run the android app temporary.
