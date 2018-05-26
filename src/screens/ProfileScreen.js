import React, {Component} from 'react';
import {
    View,
    Text
} from 'react-native';
import theme from '@settings/themes';

class ProfileScreen extends Component{
    static navigationOptions = () => ({
        title: 'Profile',
        tabBarLabel: 'Profile',
    });

    render(){
        return (
            <View>
                <View style={styles.box}>
                    <View style={[styles.lists, {borderTopWidth: 0}]}>
                        <Text style={styles.text}>Username</Text>
                        <Text style={styles.text}>Melinda</Text>
                    </View>
                    <View style={styles.lists}>
                        <Text style={styles.text}>Email</Text>
                        <Text style={styles.text}>melinda@gmail.com</Text>
                    </View>
                    <View style={styles.lists}>
                        <Text style={styles.text}>No telepon</Text>
                        <Text style={styles.text}>0837437485883</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = {
    box: {
        margin: 10,
        borderWidth: 1,
        borderColor: theme.colors.gray3,
        borderRadius: 5
    },
    lists: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 15,
        paddingHorizontal: 15,
        borderTopWidth: 1,
        borderColor: theme.colors.gray3
    },
    text: {
        fontSize: theme.font.small
    }
}

export default ProfileScreen;