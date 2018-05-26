import React, {Component} from 'react';
import {
    View,
    Text,
    FlatList,
    Dimensions
} from 'react-native';
import assets from '@assets';
import Card from '@components/CardBorrow'

class BorrowScreen extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: [
                {
                    img: assets.img.bookLaskarPelangi,
                    url: 'http://uc.blogdetik.com/238/23819/files/2009/10/novel-laskar-pelangi-full-bab-1-34-only-16-mb.pdf',
                    text: 'Laskar pelangi'
                },
                {
                    img: assets.img.bookTuntunanShalat,
                    url: 'https://sulteng.kemenag.go.id/files/sulteng/file/Pdf/panduan_shalat-1.pdf',
                    text: 'Tuntunan shalat'
                },
                {
                    img: assets.img.bookRasulullah,
                    url: 'https://d1.islamhouse.com/data/id/ih_books/single/id_the_brief_of_biography_of_the_messenger.pdf',
                    text: 'Sejarah rasulullah'
                }
            ]       
        }
    }

    static navigationOptions = () => ({
        title: 'Rak buku',
        tabBarLabel: 'Rak buku',
    });

    render(){
        const {navigate} = this.props.navigation;

        return (
            <View style={styles.container}>
                <View style={styles.box}>
                    <FlatList
                        data={this.state.data}
                        keyExtractor={(x, i) => i.toString()}
                        renderItem={({item, index}) => (
                            <Card
                                img={item.img}
                                text={item.text}
                                onPress={() => navigate('PdfScreen', {title: item.text, url: item.url})}
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
        flex: 1
    },
    box: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingTop: 5
    }
}

export default BorrowScreen;