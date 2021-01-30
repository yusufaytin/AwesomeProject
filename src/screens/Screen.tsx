import React from "react";
import { ThemeProvider, Header } from "react-native-elements";
import { SafeAreaProvider } from "react-native-safe-area-context";

interface Props {
  children: React.ReactNode;
}

const Screen = ({ children }: Props) => {
	return (
		<SafeAreaProvider>
			<ThemeProvider>
				<Header
					placement="left"
					leftComponent={{ icon: "menu", color: "#fff" }}
					centerComponent={{ text: "MY TITLE", style: { color: "#fff" } }}
					rightComponent={{ icon: "home", color: "#fff" }}
				/>
				{children}
			</ThemeProvider>
		</SafeAreaProvider>
	);
};

export default Screen;
