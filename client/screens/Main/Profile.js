import React from "react";
import { connect } from "react-redux";
import {
  Text,
  Container,
  Content,
  Button,
  Header,
  Body,
  Thumbnail,
} from "native-base";
import moment from "moment";
import { FontAwesome } from "@expo/vector-icons";
import { logout } from "../../store/user";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      joined: "",
    };
  }
  componentDidMount() {
    this.setState({
      firstName: this.props.user.firstName,
      lastName: this.props.user.lastName,
      email: this.props.user.email,
      joined: moment(this.props.user.createdAt).format("MM-YYYY"),
    });
  }
  render() {
    return (
      <Container>
        <Header
          iosBarStyle
          androidStatusBarColor
          span
          style={{ backgroundColor: "#222831", height: 175 }}
        >
          <Body
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 30,
                fontWeight: "bold",
                color: "#fc5185",
              }}
            >
              {this.state.firstName} {this.state.lastName}
            </Text>

            <Text
              style={{
                color: "white",
              }}
            >
              {this.state.email}
            </Text>
          </Body>
        </Header>
        <Content>
          <Text
            style={{
              fontWeight: "bold",
              alignSelf: "center",
              paddingTop: 25,
              marginBottom: 30,
            }}
          >
            <Text style={{ color: "#fc5185", fontSize: 20 }}>Wallet </Text>
            <Text style={{ fontSize: 20 }}>member since </Text>
            <Text style={{ color: "#fc5185", fontSize: 20 }}>
              {this.state.joined}
            </Text>
          </Text>
          <Button
            large
            block
            onPress={() => this.props.navigation.navigate("Settings")}
            primary
            style={{
              margin: 10,
            }}
          >
            <Text style={{ fontWeight: "bold" }}>User Settings</Text>
          </Button>
          <Button
            large
            block
            secondary
            onPress={() => this.props.navigation.navigate("Link")}
            style={{
              margin: 10,
            }}
          >
            <Text style={{ fontWeight: "bold" }}>Link Bank Account</Text>
          </Button>
          <Button
            large
            block
            primary
            onPress={() => this.props.navigation.navigate("PasswordReset")}
            style={{
              margin: 10,
            }}
          >
            <Text style={{ fontWeight: "bold" }}>Change Password</Text>
          </Button>
          <Button
            large
            block
            danger
            style={{
              margin: 100,
            }}
          >
            <FontAwesome name="power-off" size={24} color="white" />
            <Text style={{ fontWeight: "bold" }}>Logout</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

const mapState = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatch = (dispatch) => {
  return {
    logout: (navigation) => dispatch(logout(navigation)),
  };
};

export default connect(mapState, mapDispatch)(Profile);
