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

class CardBorrow extends Component{
    render(){
        return (
            <TouchableHighlight onPress={null} style={styles.container} underlayColor="transparent">
                <View style={styles.box}>
                    <View style={styles.boxLeft}>
                        <Image source={this.props.img} style={styles.icon} />
                        <Text style={styles.text}>{this.props.text}</Text>
                    </View>
                    <View style={styles.boxRight}>
                        <TouchableHighlight onPress={null} underlayColor="rgba(0,0,0,0.1)">
                            <View style={styles.btn}><Text style={styles.textPinjam}>Kembalikan</Text></View>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={this.props.onPress} underlayColor="rgba(0,0,0,0.1)">
                            <View style={styles.btn}><Text style={styles.textPinjam}>Baca</Text></View>
                        </TouchableHighlight>
                    </View>
                </View> 
            </TouchableHighlight>
        )
    }
}

const styles = {
    container: {
        width: '94%',
        // height: '30%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        shadowColor: '#000',
        shadowRadius: 2,
        marginLeft: 10,
        marginRight: 10,
        paddingHorizontal: 5,
        paddingVertical: 15,
        marginBottom: 10,
        backgroundColor: '#fff',
        borderRadius: 5
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
        paddingVertical: 10,
        marginTop: 7,
        width: 150
    },
    textPinjam: {
        textAlign: 'center',
        color: '#fff'
    },
    box: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    boxRight: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    boxLeft: {
        alignItems: 'center',
        width: '50%',
    }
}

export default CardBorrow;