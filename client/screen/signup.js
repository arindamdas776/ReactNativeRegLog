import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, StatusBar, TextInput, KeyboardAvoidingView } from 'react-native';

import { Button } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Signup(props) {

	const [email, setEmail] = useState('');

	const [username, setUsername] = useState('');

	const [password, setPassword] = useState('');

	const sendCredential = () => {
		// console.log(username, email, password);

		fetch('http://192.168.42.238:4000/api/signin', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				"username": username,
				"email": email,
				"password": password
			})
		}).then(res => res.json())
			.then(data => {
				alert(data.messages);
			}).catch(error => {
				alert(data.messages);
			});
	}

	return (
		<View style={styles.container}>
			<KeyboardAvoidingView>

				<StatusBar barStyle="dark-content" hidden={false} backgroundColor="#880e4f" translucent={true} />

				<Text style={styles.Header}>User Register Section</Text>

				<TextInput style={styles.TextInput} value={username} onChangeText={(name) => setUsername(name)} placeholder="Enter Your name" />

				<TextInput style={styles.TextInput} value={email} onChangeText={(text) => setEmail(text)} placeholder="Enter Your email" />

				<TextInput style={styles.TextInput} value={password} onChangeText={(pass) => setPassword(pass)} placeholder="Enter Your password" />

				<Button mode="contained" style={styles.ButtonStyle} onPress={() => sendCredential()}>
					Register
  </Button>

				<TouchableOpacity>
					<Text style={{ fontSize: 20, marginTop: 30, marginLeft: 40, color: '#fff' }} onPress={() => props.navigation.navigate("Login")} >
						All ready have account ?
					</Text>
				</TouchableOpacity>


			</KeyboardAvoidingView>
		</View>
	);
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
	},
});