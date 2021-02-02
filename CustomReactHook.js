import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useFetch } from './useFetch';

const CustomReactHook = ({
    params,
}) => {

    const data = useFetch('https://jsonplaceholder.typicode.com/posts/1/comments');
    console.log('CustomReactHook');
    return (
        <View style={styles.containerStyle}>
            <Text> USER COMMENTS </Text>
            {data.map((item) => {
                return <Text key={item.id}>{item.email}</Text>;
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        padding: 30,
    },
});

export default CustomReactHook;
