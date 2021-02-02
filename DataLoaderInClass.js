import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class DataLoaderInClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }

    async componentDidMount() {
        try {
            const API = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments');
            const response = await API.json();
            console.log('dogs succ ', response);
            this.setState({
                data: response,
            });
        } catch (error) {
            console.log('dogs err ', error);
        }
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <Text> USER COMMENTS </Text>
                {this.state.data.map((item) => {
                    return <Text key={item.id}>{item.email}</Text>;
                })}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        padding: 30,
    },
});
