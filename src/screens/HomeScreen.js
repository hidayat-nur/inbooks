import React, {Component} from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';
import theme from '@settings/themes';
import assets from '@assets';

class HomeScreen extends Component{
    static navigationOptions = () => ({
        title: 'Home',
        tabBarLabel: 'Home',
    });

    render(){
        return (
            <View style={styles.container}>
                <Image source={assets.img.books} style={styles.img} />
                <Text style={styles.title}>"IN-BOOKS"</Text>
                <Text style={styles.subtitle}>with thousand of collections you can read for free</Text>
            </View>
        )
    }
}

const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    img: {
        width: 200,
        height: 200
    },
    title: {
        fontSize: theme.font.h4,
        marginTop: 15
    },
    subtitle: {
        fontSize: theme.font.normal,
        fontStyle: 'italic',
        textAlign: 'center',
        paddingHorizontal: 15
    }
}

export default HomeScreen;