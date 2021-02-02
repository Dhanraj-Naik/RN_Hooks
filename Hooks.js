import React from 'react';
import { Button, ScrollView, Text, View } from 'react-native';
import { hooksData } from './HooksData';

const Hooks = ({
    navigation,
    route
}) => {
    return (
        <View>
            <ScrollView>
                {hooksData.map(hook => {
                    return <Button key={hook.id} title={hook.name}
                        onPress={() => {
                            navigation.navigate(hook.sceneName);
                        }}
                    />;
                })}
            </ScrollView>
        </View>
    );
};

export default Hooks;
