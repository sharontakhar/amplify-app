import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "awd-amplify/ui-react";

function App() {
  return (
    <div className="App">
      <View className="App">
        <Card>
          <image src={logo} className="App-logo" alt="logo" />
          <Heading level={1}>WE NOW HAVE AUTH!</Heading>
        </Card>
      </View>
    </div>
  );
}

export default withAuthenticator(App);
