import React, {Component} from 'react';
import {createRootNavigator} from './navigation/RootNavigator';
import {setCustomText} from 'react-native-global-props';

const customTextProps = { 
    style: { 
        fontFamily: 'AvenirNext-Regular'
    }
}
setCustomText(customTextProps);

export default class App extends Component {
    render(){
        const Layout = createRootNavigator();
        return <Layout />
    }
}