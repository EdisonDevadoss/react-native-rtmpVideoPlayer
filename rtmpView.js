import React from "react";
import PropTypes from "prop-types";
import { NodePlayerView } from "react-native-nodemediaclient";
import { View, Button } from "react-native";

class RTMPView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      publishBtnTitle: "Start Publish",
      isPublish: false
    };
  }
  render() {
    return (
      <View>
        <NodePlayerView
          style={{ height: 400 }}
          ref={vb => {
            this.vb = vb;
          }}
          outputUrl={"rtmp://192.168.0.10/live/stream"}
          camera={{ cameraId: 1, cameraFrontMirror: true }}
          audio={{ bitrate: 32000, profile: 1, samplerate: 44100 }}
          video={{
            preset: 12,
            bitrate: 400000,
            profile: 1,
            fps: 15,
            videoFrontMirror: false
          }}
          autopreview={true}
        />
        <Button
          onPress={() => {
            if (this.state.isPublish) {
              this.setState({
                publishBtnTitle: "Start Publish",
                isPublish: false
              });
              this.vb.stop();
            } else {
              this.setState({
                publishBtnTitle: "Stop Publish",
                isPublish: true
              });
              this.vb.start();
            }
          }}
          title={this.state.publishBtnTitle}
          color="#841584"
        />
      </View>
    );
  }
}

export default RTMPView;
