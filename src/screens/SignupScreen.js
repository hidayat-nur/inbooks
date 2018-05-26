import React, {Component} from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableHighlight
} from 'react-native';
import themes from '@settings/themes';

class SignupScreen extends Component{
    state = {
        username: '',
        password: '',
        confirmPassword: ''
    }

    static navigationOptions = () => ({ title: 'Sign up' });

    render(){
        return (
            <View style={styles.container}>
                <View style={styles.wrapper}>
                    <Text style={styles.title}>InBook Library</Text>
                    <View style={styles.formElement}>
                        <TextInput
                            value={this.state.username}
                            onChangeText={(value) => this.setState({username: value})}
                            style={styles.input}
                            placeholder="Username"
                            placeholderTextColor='#fff'
                            underlineColorAndroid='transparent'
                        />
                        <TextInput
                            value={this.state.password}
                            onChangeText={(value) => this.setState({password: value})}
                            style={styles.input}
                            placeholder="Password"
                            placeholderTextColor='#fff'
                            underlineColorAndroid='transparent'
                        />
                        <TextInput
                            value={this.state.confirmPassword}
                            onChangeText={(value) => this.setState({confirmPassword: value})}
                            style={styles.input}
                            placeholder="Confirm password"
                            placeholderTextColor='#fff'
                            underlineColorAndroid='transparent'
                        />
                        <TouchableHighlight style={styles.touch}>
                            <View style={styles.btn}><Text style={styles.text}>Sign up</Text></View>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: themes.colors.dark
    },
    touch: {
        width: '70%',
    },
    btn: {
        backgroundColor: themes.colors.red,
        borderRadius: 50,
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginTop: 20,
        alignItems: 'center',
    },
    text: {
        color: '#fff',
        fontWeight: 'bold'
    },
    title: {
        fontSize: themes.font.h1,
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
        fontStyle: 'italic'
    },
    formElement: {
        alignItems: 'center',
        width: '100%',
        marginTop: 30
    },
    input: {
        width: '70%',
        height: 50,
        paddingHorizontal: 20,
        borderColor: themes.colors.dark1,
        borderWidth: 1,
        backgroundColor: themes.colors.dark2,
        borderRadius: 50,
        marginTop: 15,
        color: '#fff'
    },
    wrapper: {
        alignItems: 'center'
    }
}

export default SignupScreen;