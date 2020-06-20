import React from 'react';
import { StyleSheet, Text, View, ScrollView, StatusBar, TextInput, KeyboardAvoidingView } from 'react-native';;

import { Button } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function Login(props) {
	return (
		<View style={styles.container}>
			<KeyboardAvoidingView>

				<StatusBar barStyle="dark-content" hidden={false} backgroundColor="#880e4f" translucent={true} />

				<Text style={styles.Header}>User Login Section</Text>

				<TextInput style={styles.TextInput} placeholder="Enter Your name" />

				<TextInput style={styles.TextInput} placeholder="Enter Your name" />

				<Button mode="contained" style={styles.ButtonStyle} onPress={(result) => alert(result)}>
					Login
  </Button>

				<TouchableOpacity>
					<Text style={{ fontSize: 20, marginTop: 30, marginLeft: 40, color: '#fff' }} onPress={() => props.navigation.navigate("Signup")} >
						All Ready  Have Account  ?
					</Text>
				</TouchableOpacity>


			</KeyboardAvoidingView>
		</View>
	)
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ad1457',
		alignItems: 'center',
		justifyContent: 'center',
	},
	Header: {
		fontSize: 30,
		color: '#fff',
		alignItems: 'center',
		fontFamily: 'Roboto',
		paddingTop: 30,
	},
	ButtonStyle: {
		backgroundColor: "#ec407a",
		marginTop: 50
	},
	TextInput: {
		marginTop: 30,
		height: 30,
		backgroundColor: '#fff',
		fontSize: 20,
		width: 300,
	}
});