create-react-native-app my-project
cd my-project
npm start

TO CHANGE PORT
npx react-native start --port=8088

HAVE TO CHECK IT
npx react-native myfile

NAVIGATION
npm install @react-navigation/native @react-navigation/stack (if u have problems install expo first and again this)
EXPO
expo install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
!!! (To finalize installation of react-native-gesture-handler, add the following at the top (make sure it's at the top and there's nothing else before it) of your entry file, such as index.js or App.js:
import 'react-native-gesture-handler';
Now, you need to wrap the whole app in NavigationContainer. Usually you'd do this in your entry file, such as index.js or App.js:)!!!!



