import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    ImageBackground
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
            <ImageBackground style={styles.container} source={{uri: 'https://thumbs.dreamstime.com/b/newspaper-pattern-seamless-background-pages-vintage-newspapers-vector-illustration-60213867.jpg'}}>
                <Image source={assets.img.books} style={styles.img} />
                <Text style={styles.title}>"IN-BOOKS"</Text>
                <Text style={styles.subtitle}>with thousand of collections you can read for free</Text>
            </ImageBackground>
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
        marginTop: 15,
        color: theme.colors.red
    },
    subtitle: {
        fontSize: theme.font.normal,
        fontStyle: 'italic',
        textAlign: 'center',
        paddingHorizontal: 15,
        color: theme.colors.red
    }
}

export default HomeScreen;