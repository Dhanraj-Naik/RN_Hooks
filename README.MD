## RN_Hooks
+ Hooks are a new addition in React 16.8.
+ They let you use state and other React features without writing a class.
+ Hooks are backwards-compatible.


### **useState** hook
+ **useState** is a hook which we call inside the function component to add some local state to it.
+ React will preserve this state between re-renders.
+ **useState** returns a pair: the `current state` and the `function` that lets you update it.
+ It’s similar to this.setState in a class, except it doesn’t merge the old and new state together.
+ The only argument to useState is the initial state.
+ **Hooks are functions that let you “hook into” React state and lifecycle features from function components.**
+ Hooks don’t work inside classes — they let you use React without classes.

```javascript
const StateHook = () => {
    //declaring new state variable called count
    const [count, setCount] = useState(0);

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
```
