import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import TodoList from './TodoList';

const ToDoHome = ({
    params,
}) => {

    const [value, setValue] = useState('');
    const [todos, setTodos] = useState([]);

    const addToDo = () => {
        if (value.length > 0) {
            setTodos([...todos, { text: value, key: Date.now(), checked: false }]);
            setValue('');
        }
    };

    const checkToDo = (id) => {
        console.log('checkToDo: ', id);
        setTodos(
            todos.map(todo => {
                if (todo.key === id) todo.checked = !todo.checked;
                return todo;
            })
        );
    };

    const deleteTodo = id => {
        console.log('deleteTodo: ', id);
        setTodos(
            todos.filter(todo => {
                if (todo.key !== id) return true;
            })
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Todo List</Text>
            <View style={styles.textInputContainer}>
                <TextInput
                    style={styles.textInput}
                    multiline={true}
                    placeholder='What do you want to do today?'
                    placeholderTextColor='#abbabb'
                    value={value}
                    onChangeText={(v) => setValue(v)}
                />
                <TouchableOpacity onPress={() => addToDo()}>
                    <Text style={[styles.header, { color: 'blue' }]}>+</Text>
                </TouchableOpacity>
            </View>

            <ScrollView style={{ width: '100%' }}>
                {
                    todos.map(item => {
                        console.log(item);
                        return <TodoList
                            key={item.key}
                            text={item.text}
                            checked={item.checked}
                            setChecked={() => checkToDo(item.key)}
                            deleteTodo={() => deleteTodo(item.key)}
                        />;
                    })
                }
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    header: {
        marginTop: '15%',
        fontSize: 20,
        color: 'red',
        paddingBottom: 10
    },
    textInputContainer: {
        flexDirection: 'row',
        alignItems: 'baseline',
        borderColor: 'black',
        borderBottomWidth: 1,
        paddingRight: 10,
        paddingBottom: 10
    },
    textInput: {
        flex: 1,
        height: 20,
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        paddingLeft: 10,
        minHeight: '3%'
    }
});

export default ToDoHome;
