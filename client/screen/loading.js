import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';

export default function Loading() {
	return (
		<View style={styles.load}>
			<ActivityIndicator size='large' color="#b71c1c"></ActivityIndicator>
		</View>
	)
}

const styles = StyleSheet.create({
	load: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	}
})