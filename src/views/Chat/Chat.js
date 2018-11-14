import React from 'react';
import './Chat.css';

const Chat = (props) => {
  let height = window.innerHeight - 87 > 800 ? window.innerHeight - 137 : window.innerHeight - 90;
  let width = window.innerWidth - 6 > 600 ? 600 : window.innerWidth-6;
  return(
    <div className="chat">
      <iframe src="https://cl2.widgetbot.io/channels/512149626128957450/512149626128957454" title="Predicto Chat" height={height} width={width}></iframe>
    </div>
  );
}

export default Chat;