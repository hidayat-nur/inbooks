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

class CardBook extends Component{
    render(){
        return (
            <TouchableHighlight onPress={this.props.onPress} style={styles.container}>
                <View>
                    <Image source={this.props.img} style={styles.icon} />
                    <Text style={styles.text}>{this.props.text}</Text>
                    <TouchableHighlight>
                        <View style={styles.btn}><Text style={styles.textPinjam}>Pinjam</Text></View>
                    </TouchableHighlight>
                </View> 
            </TouchableHighlight>
        )
    }
}

const styles = {
    container: {
        width: '45%',
        // height: '30%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#ddd',
        shadowColor: '#000',
        shadowRadius: 2,
        marginLeft: 12,
        paddingHorizontal: 5,
        paddingVertical: 15,
        marginBottom: 10,
        backgroundColor: '#fff'
    },
    icon: {
        width: 100,
        height: 100
    },
    text: {
        textAlign: 'center',
        fontSize: themes.font.small,
        marginTop: 10
    },
    btn: {
        backgroundColor: themes.colors.green0,
        borderRadius: 5,
        paddingVertical: 4,
        marginTop: 7
    },
    textPinjam: {
        textAlign: 'center',
        color: '#fff'
    }
}

export default CardBook;