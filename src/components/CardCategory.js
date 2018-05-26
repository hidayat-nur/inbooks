import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    TouchableHighlight
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import assets from '@assets';
import themes from '@settings/themes';

class CardCategory extends Component{
    render(){
        return (
            <TouchableHighlight onPress={this.props.onPress} style={styles.container} underlayColor="rgba(0,0,0,0.1)">
                <View>
                    <Image source={this.props.img} style={styles.icon} />
                    <Text style={styles.text}>{this.props.text}</Text>
                </View> 
            </TouchableHighlight>
        )
    }
}

const styles = {
    container: {
        width: '45%',
        height: '47%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        shadowColor: '#000',
        shadowRadius: 2,
    },
    icon: {
        width: 100,
        height: 100
    },
    text: {
        textAlign: 'center',
        fontSize: themes.font.small,
        marginTop: 10,
        fontWeight: 'bold'
    }
}

export default CardCategory;