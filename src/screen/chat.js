import React, {useState, useCallback, useEffect, useContext} from 'react';
import {GiftedChat, Bubble} from 'react-native-gifted-chat';
import Header from '../components/header';
import {StatusBar, TouchableOpacity, Image, Platform} from 'react-native';
import {icons, theme} from '../constants';
import {RFValue} from 'react-native-responsive-fontsize';
import {set} from 'react-native-reanimated';
import {AppContext} from '../Context/AppProvider';

function Chat({navigation}) {
  const [messages, setMessages] = useState([]);
  const {isOnline, setisOnline} = useContext(AppContext);
  const [text, settext] = useState('');

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const renderSend = (sendProps) => {
    return (
      <TouchableOpacity onPress={() => onSend(sendProps)}>
        <Image source={icons.send} style={{width: 40, height: 40}} />
      </TouchableOpacity>
    );
  };

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages),
    );
    settext('');
  }, []);

  const renderBubble = (props) => {
    console.warn(messages);
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: theme.COLORS.primary,
            alignItems: 'center',
            justifyContent: 'center',
          },
          left: {
            backgroundColor: theme.COLORS.white,
          },
        }}

        // wrapperStyle={{
        //   right: {borderTopRightRadius: 15},
        //   left: {borderTopLeftRadius: 15},
        // }}
        // containerToPreviousStyle={{
        //   right: {borderTopRightRadius: 15},
        //   left: {borderTopLeftRadius: 15},
        // }}
        // containerToNextStyle={{
        //   right: {borderTopRightRadius: 15},
        //   left: {borderTopLeftRadius: 15},
        // }}
        // containerStyle={{
        //   right: {borderTopRightRadius: 15},
        //   left: {borderTopLeftRadius: 15},
        // }}
      />
    );
  };

  return (
    <>
      <StatusBar backgroundColor={theme.COLORS.primary} />
      <Header
        name="Gregory Smith"
        navigation={navigation}
        isOnline={isOnline}
        setisOnline={setisOnline}
      />
      <GiftedChat
        // textInputProps={{
        //   autoCorrect:
        //     Platform.OS === 'ios' || this.state.androidAutoCorrectFix,
        // }}
        // value={text}
        text={text}
        onInputTextChanged={(e) => settext(e)}
        messages={messages}
        renderSend={(props) => renderSend(props)}
        renderBubble={renderBubble}
        // onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    </>
  );
}
export default Chat;
