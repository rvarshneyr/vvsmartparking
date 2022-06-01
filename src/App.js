import logo from "./logo.svg";
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";
import {API, Auth} from 'aws-amplify'


function App({ signOut }) {
  async function callAPi () {
    const user = await Auth.currentAuthenticatedUser()
    const token = user.signInUserSession.idToken.jwtToken

    const data = await API.get ('', '/hello', )
    console.log(data)

  }
  return (
    <View className="App">
      <Card>
        <Image src={logo} className="App-logo" alt="logo" />
        <Heading level={1}>We now have Auth!</Heading>
      </Card>
      <Button onClick={signOut}>Sign Out</Button>
      <Button onClick={callAPi}> Find nearest parking</Button>
    </View>
  );
}
export default withAuthenticator(App);