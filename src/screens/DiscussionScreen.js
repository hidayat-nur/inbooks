import React, {Component} from 'react';
import {
    View
} from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat'
import assets from '@assets';
import themes from '@settings/themes';
import Icon from 'react-native-vector-icons/FontAwesome';

class DiscussionScreen extends Component{
    static navigationOptions = () => ({
        title: `Ruang Diskusi`,
        tabBarLabel: 'Diskusi',
    });

    constructor(props){
        super(props);
        this.state = {
            messages: []
        }
    }

    componentWillMount() {
        this.setState({
          messages: [
            {
              _id: 1,
              text: 'Hello mahasiswa UNNES',
              createdAt: new Date(),
              user: {
                _id: 2,
                name: 'React Native',
                avatar: 'https://placeimg.com/140/140/any',
              },
            },
          ],
        })
    }

    onSend(messages = []) {
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, messages),
        }))
    }

    render(){
        const {navigate} = this.props.navigation;

        return (
            <GiftedChat
                messages={this.state.messages}
                onSend={messages => this.onSend(messages)}
                user={{
                  _id: 1,
                }}
                placeholder="Tulis pesan..."
            />
        )
    }
}

const styles = {
}

export default DiscussionScreen;