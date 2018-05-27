import React, {Component} from 'react';
import {
    View,
    FlatList
} from 'react-native';
import assets from '@assets';
import Card from '@components/CardBook'
import themes from '@settings/themes';

class ContentListScreen extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: [
                {
                    img: assets.img.dilan,
                    text: 'Dilan'
                },
                {
                    img: assets.img.billGates,
                    text: 'Bill Gates'
                },
                {
                    img: assets.img.markJuck,
                    text: 'Mark Juckerberg'
                },
                {
                    img: assets.img.dibalikSenja,
                    text: 'Dibalik Senja'
                },
                {
                    img: assets.img.dilan,
                    text: 'Dilan'
                },
                {
                    img: assets.img.billGates,
                    text: 'Bill Gates'
                },
                {
                    img: assets.img.markJuck,
                    text: 'Mark Juckerberg'
                },
                {
                    img: assets.img.dibalikSenja,
                    text: 'Dibalik Senja'
                },
                {
                    img: assets.img.dilan,
                    text: 'Dilan'
                },
                {
                    img: assets.img.billGates,
                    text: 'Bill Gates'
                },
                {
                    img: assets.img.markJuck,
                    text: 'Mark Juckerberg'
                },
                {
                    img: assets.img.dibalikSenja,
                    text: 'Dibalik Senja'
                },
            ]       
        }
    }

    static navigationOptions = ({navigation}) => ({
        title: navigation.getParam('category') == 'search' ? `Hasil: ${navigation.getParam('keyword')}` : `Kategori ${navigation.getParam('category')}`,
        tabBarLabel: 'Koleksi',
    });

    render(){
        return (
            <View style={styles.container}>
                <View style={styles.box}>
                    <FlatList
                        data={this.state.data}
                        keyExtractor={(x, i) => i.toString()}
                        numColumns={2}
                        renderItem={({item, index}) => (
                            <Card
                                img={item.img}
                                text={item.text}
                            />
                        )}
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
        paddingTop: 5
    }
}

export default ContentListScreen;