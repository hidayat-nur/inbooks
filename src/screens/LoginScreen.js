import React, {Component} from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableHighlight
} from 'react-native';
import themes from '@settings/themes';
import assets from '@assets';
import Icon from 'react-native-vector-icons/FontAwesome';

class LoginScreen extends Component{
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }

    static navigationOptions = () => ({ title: null, header: null });

    render(){
        const {navigate} = this.props.navigation;

        return (
            <View style={styles.container}>
                <View style={styles.wrapper}>
                    <Text style={styles.title}>InBooks Library</Text>
                    {/* <Icon name="rocket" size={30} color="#900" /> */}
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
                        <TouchableHighlight style={styles.touch} onPress={() => navigate('AppStackNav')}>
                            <View style={styles.btn}><Text style={styles.text}>Login</Text></View>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.touch} onPress={() => navigate('SignupScreen')}>
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
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderColor: themes.colors.dark1,
        borderWidth: 1,
        borderRadius: 50,
        marginTop: 15,
        color: '#fff'
    },
    wrapper: {
        alignItems: 'center'
    }
}

export default LoginScreen;