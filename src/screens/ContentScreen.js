import React, {Component} from 'react';
import {
    View,
    TextInput,
    TouchableHighlight
} from 'react-native';
import assets from '@assets';
import Card from '@components/CardCategory'
import themes from '@settings/themes';
import Icon from 'react-native-vector-icons/FontAwesome';

class ContentScreen extends Component{
    constructor(props){
        super(props);
        this.state = {
            search: ''
        }
    }

    static navigationOptions = () => ({
        title: 'Kategori',
        tabBarLabel: 'Koleksi',
    });

    render(){
        const {navigate} = this.props.navigation;

        return (
            <View style={styles.container}>
                <View style={styles.boxSearch}>
                    <View style={styles.boxIcon}>
                        <TouchableHighlight onPress={() => navigate('ContentListScreen', {category: 'search', keyword: this.state.search})} style={styles.clickSearch} underlayColor="rgba(0,0,0,0.1)">
                            <Icon name="search" size={20} color={themes.colors.red} />
                        </TouchableHighlight>
                    </View>
                    <TextInput
                        style={styles.search}
                        value={this.state.search}
                        placeholder="Cari"
                        onChangeText={(text) => this.setState({search: text})}
                        underlineColorAndroid='transparent'
                    />
                </View>
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
        flex: 1,
        backgroundColor: themes.colors.dark3
    },
    box: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    },
    boxSearch: {
        backgroundColor: themes.colors.dark,
        padding: 10,
        flexDirection: 'row'
    },
    search: {
        backgroundColor: '#fff',
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
        flex: 1,
        fontSize: themes.font.small
    },
    boxIcon: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4,
        width: 50
    },
    clickSearch: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
}

export default ContentScreen;