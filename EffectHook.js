import React, { useEffect, useState } from 'react';
import { Text, View, Button } from 'react-native';

const EffectHook = ({
    params,
}) => {
    console.log('EffectHook'); //this will call second
    const [count, setCount] = useState(0);
    const [isStarted, setIsStarted] = useState(false);


    const increaseCounter = () => {
        setCount(count + 1);
    };

    //
    useEffect(() => { //this will be called first
        //do here

        console.log('EffectHook useEffect'); //called 4th
        const interval = setInterval(() => {
            console.log('EffectHook useEffect setInterval'); //called 5th
            setCount(count + 1);
        }, 2000);
        return () => {
            clearInterval(interval);
        };
    }, [count]);

    console.log('EffectHook 2'); //this will call third

    return (
        <View style={{ padding: 20 }}>
            <Button
                title={'Click Me'}
                // onPress={() => setCount(count + 1)}
                onPress={increaseCounter}
            />
            <Text>{count}</Text>
        </View>
    );
};

export default EffectHook;
