import React from 'react';
import ChatList from "./ChatList";
import MessageArea from "./MessageArea";

const ChatContainer = () => {
    return (
        <div className="flex flex-grow h-screen">
            <ChatList/>
            <MessageArea/>
        </div>
    );
};

export default ChatContainer;