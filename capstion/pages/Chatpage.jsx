import React, { useCallback, useEffect, useState } from "react";
import { GiftedChat } from "react-native-gifted-chat";

const ChatComponent = () => {
  const [messages, setMessages] = useState([]);
  return (
    <GiftedChat
      messages={messages}
      onSend={(localMessage) => onSend(localMessage)}
      user={{
        _id: currentUser.uid,
      }}
    />
  );
};


export default ChatComponent;
