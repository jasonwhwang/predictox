import React from 'react';
import './Chat.css';
import WidgetBot from '@widgetbot/react-embed';

class Chat extends React.Component {
  render() {
    let height = window.innerWidth > 600 ? window.innerHeight - 50 : window.innerHeight - 50;
    let width = window.innerWidth > 600 ? window.innerWidth*4/10 : window.innerWidth;
    return (
      <div className="chat">
        <WidgetBot
          server="512149626128957450"
          channel="512149626128957454"
          shard="https://cl2.widgetbot.io"
          height={height}
          width={width}
          onAPI={(api) => {
            api.on('signIn', user => {
              // console.log(`Guest signed in as ${user.name}`, user);
              // api.emit('sendMessage', 'Hello world');
            })
          }}
        />
      </div>
    );
  }
}

export default Chat;