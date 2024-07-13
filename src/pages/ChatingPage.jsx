import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LoadingChat from '../components/LoadingChat';
import socket from '../services/socket';
import useAuth from '../hooks/useAuth';

const ChatingPage = () => {
  const { username } = useParams();
  const { user } = useAuth();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    console.log('Effect triggered'); // Tambahkan ini untuk memeriksa apakah useEffect dipanggil
    socket.on('message', (message) => {
      console.log('Message received:', message); // Tambahkan ini untuk memeriksa pesan yang diterima dari server
      try {
        setMessages((prevMessages) => [...prevMessages, message]);
      } catch (error) {
        console.error('Error parsing message:', error);
      }
    });

    return () => {
      socket.off('message');
    };
  }, []);

  if (messages.length === 0) {
    return (
      <div className="flex flex-col p-6 h-full justify-center max-w-4xl mx-auto">
        <LoadingChat />
      </div>
    );
  }

  return (
    <div className="flex flex-col p-6 h-full justify-end max-w-4xl mx-auto">
      {messages.map((chat, index) => {
        const isMe = chat.username == user;
        return (
          <div
            className={`chat ${isMe ? 'chat-end' : 'chat-start'}`}
            key={index}
          >
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img
                  src={`https://robohash.org/${isMe ? user : username}.jpg`}
                  alt="User"
                />
              </div>
            </div>
            <div className="chat-bubble">{chat.message}</div>
          </div>
        );
      })}
    </div>
  );
};

export default ChatingPage;
