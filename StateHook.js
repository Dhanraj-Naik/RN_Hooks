import React, { useState } from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';

const StateHook = () => {

    //declaring new state variable called count
    const [count, setCount] = useState(0);
    const [fruit, setFruit] = useState('banana');
    const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);


    return (
        <View style={styles.containerStyle}>
            <Button
                title={'Click Me'}
                onPress={() => setCount(count + 1)}
            />
            <Text>{count}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        padding: 20,
    },
});

export default StateHook;
