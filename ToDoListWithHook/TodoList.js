import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const TodoList = (props) => {
    return (
        <View style={styles.listContainer}>
            <TouchableOpacity onPress={props.setChecked}>
                <Text
                    style={[styles.listItem, { color: 'black' }]}

                >{props.checked ? '[*]' : '[ ]'}</Text>
            </TouchableOpacity>
            <View style={{ flex: 1, }}>
                {props.checked && <View style={styles.verticalLine} />}
                <Text style={[styles.listItem, { color: 'blue' }]}>{props.text}</Text>
            </View>
            <TouchableOpacity
                onPress={props.deleteTodo}
            >
                <Text style={[styles.listItem, { color: 'red' }]}>{'Delete'}</Text>
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    listContainer: {
        marginTop: '5%',
        flexDirection: 'row',
        borderColor: '#aaaaaa',
        borderBottomWidth: 1.5,
        width: '100%',
        alignItems: 'stretch',
        minHeight: 40,
        paddingHorizontal: 10
    },
    listItem: {
        paddingBottom: 20,
        paddingLeft: 10,
        marginTop: 6,
        borderColor: 'green',
        borderBottomWidth: 1,
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white'
    },
    verticalLine: {
        borderBottomColor: 'green',
        borderBottomWidth: 4,
        marginLeft: 10,
        width: '100%',
        position: 'absolute',
        marginTop: 15,
        fontWeight: 'bold',
    }
});

export default TodoList;
