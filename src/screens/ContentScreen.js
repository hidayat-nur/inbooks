import React, {Component} from 'react';
import {
    View
} from 'react-native';
import assets from '@assets';
import Card from '@components/CardCategory'

class ContentScreen extends Component{
    static navigationOptions = () => ({
        title: 'Kategori',
        tabBarLabel: 'Koleksi',
    });

    render(){
        const {navigate} = this.props.navigation;

        return (
            <View style={styles.container}>
                <View style={styles.box}>
                    <Card
                        img={assets.img.education}
                        text='Education'
                        onPress={() => navigate('ContentListScreen', {category: 'Education'})}
                    />
                    <Card
                        img={assets.img.news}
                        text='News'
                        onPress={() => navigate('ContentListScreen', {category: 'News'})}
                    />
                    <Card
                        img={assets.img.general}
                        text='General'
                        onPress={() => navigate('ContentListScreen', {category: 'General'})}
                    />
                    <Card
                        img={assets.img.entertain}
                        text='Entertain'
                        onPress={() => navigate('ContentListScreen', {category: 'Entertain'})}
                    />
                </View>
            </View>
        )
    }
}

const styles = {
    container: {
        flex: 1
    },
    box: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    }
}

export default ContentScreen;