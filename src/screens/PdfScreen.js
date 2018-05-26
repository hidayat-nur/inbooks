import React, {Component} from 'react';
import {
    View,
    Text,
    FlatList,
    Dimensions
} from 'react-native';
import assets from '@assets';
import Pdf from 'react-native-pdf';
import Card from '@components/CardBorrow'

class PdfScreen extends Component{
    static navigationOptions = ({navigation}) => ({
        title: `${navigation.getParam('title')}`,
        tabBarLabel: 'Rak buku',
    });

    render(){
        const { navigation } = this.props;
        const url = navigation.getParam('url');
        const source = {uri: url, cache:true};

        return (
            <View style={styles.container}>
                <Pdf
                    source={source}
                    onLoadComplete={(numberOfPages,filePath)=>{
                        console.log(`number of pages: ${numberOfPages}`);
                    }}
                    onPageChanged={(page,numberOfPages)=>{
                        console.log(`current page: ${page}`);
                    }}
                    onError={(error)=>{
                        console.log(error);
                    }}
                    style={styles.pdf}/>
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
    },
    pdf: {
        flex:1,
        width:Dimensions.get('window').width,
    }
}

export default PdfScreen;