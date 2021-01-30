import React, { Component } from "react";
import { Text } from "react-native";

import { connect } from "react-redux";
import { NavigationInjectedProps } from "react-navigation";
import { TODO_ACTION } from "../store/actions/todoAction";
import { Button, ThemeProvider, Header } from "react-native-elements";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Icon } from "react-native-elements";

interface Props {
  count: number;
  increaseCounter(): void;
  decreaseCounter(): void;
}

const theme = {
	Button: {
	  raised: true,
	  titleStyle: {
			color: "red",
	  },
	},
};

class AppScreen extends Component<NavigationInjectedProps & Props> {
	render() {
		return (
			<SafeAreaProvider>
				<ThemeProvider theme={theme}>
					<Header
						placement="left"
						leftComponent={{ icon: "menu", color: "#fff" }}
						centerComponent={{ text: "MY TITLE", style: { color: "#fff" } }}
						rightComponent={{ icon: "home", color: "#fff" }}
					/>
					<Text>{this.props.count}</Text>
					<Button title={"+"} onPress={() => this.props.increaseCounter()} />
					<Button
						title={"Home"}
						onPress={() => this.props.navigation.navigate("Home")}
					/>
					<Button title={"-"} onPress={() => this.props.decreaseCounter()} />
				</ ThemeProvider>
			</SafeAreaProvider>
		);
	}
}

const mapStateToProps = (state: any) => {
	return {
		count: state.todoReducer.count,
	};
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		increaseCounter: () => dispatch({ type: TODO_ACTION.INCREASE }),
		decreaseCounter: () => dispatch({ type: TODO_ACTION.DECREASE }),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(AppScreen);
