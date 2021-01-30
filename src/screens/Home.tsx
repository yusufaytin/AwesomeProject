import React, { Component } from "react";
import { Text, Button } from "react-native";
import { NavigationInjectedProps } from "react-navigation";
import Screen from "./Screen";

class Detail extends Component<NavigationInjectedProps> {
	render() {
		return (
			<Screen>
				<Text>Home Page</Text>
				<Button
					title={"Detail"}
					onPress={() => this.props.navigation.navigate("Detail")}
				/>
			</Screen>
		);
	}
}

export default Detail;
