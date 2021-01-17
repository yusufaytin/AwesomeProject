import React, { Component } from "react";
import { Text, Button } from "react-native";

import { connect } from "react-redux";
import { NavigationInjectedProps } from "react-navigation";
import { TODO_ACTION } from "../store/actions/todoAction";

interface Props {
  count: number;
  increaseCounter(): void;
  decreaseCounter(): void;
}

class AppScreen extends Component<NavigationInjectedProps & Props> {
	render() {
		return (
			<>
				<Text>{this.props.count}</Text>
				<Button title={"+"} onPress={() => this.props.increaseCounter()} />
				<Button
					title={"Home"}
					onPress={() => this.props.navigation.navigate("Home")}
				/>
				<Button title={"-"} onPress={() => this.props.decreaseCounter()} />
			</>
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
