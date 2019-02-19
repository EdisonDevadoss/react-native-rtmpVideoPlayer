/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import { AppRegistry } from "react-native";
// import App from './App';
// import RTMPView from './rtmpView'
import VideoPlayer from "./videoPlayer";
import { name as appName } from "./app.json";

AppRegistry.registerComponent(appName, () => VideoPlayer);
