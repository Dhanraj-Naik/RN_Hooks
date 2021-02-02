import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const DataLoaderInFunction = ({
    params,
}) => {

    console.log('IN DataLoaderInFunction');
    const [data, setData] = useState([]);

    const getCommentData = async () => {
        try {
            const API = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments');
            const response = await API.json();
            console.log('dogs succ ', response);
            setData(response);
        } catch (error) {
            console.log('dogs err ', error);
        }
    };

    useEffect(() => {
        getCommentData();
    }, []);


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

export default DataLoaderInFunction;
