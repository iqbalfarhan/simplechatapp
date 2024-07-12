import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LoadingChat from '../components/LoadingChat';

const ChatingPage = () => {
  const { username } = useParams();
  const [chats, setChats] = useState([]);

  const fetchChats = async () => {
    const response = await fetch(
      `https://dummyjson.com/comments?limit=${Math.round(
        Math.random() * 13
      )}&skip=${Math.round(Math.random() * 2)}`
    );
    if (response.ok) {
      const data = await response.json();
      setChats(data.comments);
    }
  };

  useEffect(() => {
    fetchChats();
  }, []);

  useEffect(() => {
    setChats([]);
    fetchChats();
  }, [username]);

  return (
    <>
      {chats.length > 0 ? (
        chats.map((chat) => {
          const isMe = +chat.postId % 2 == 0;
          return (
            <div
              className={`chat ${isMe ? 'chat-start' : 'chat-end'}`}
              key={chat.id}
            >
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img
                    src={`https://robohash.org/${
                      isMe ? username : 'iqbalfarhan'
                    }.jpg`}
                    alt="User"
                  />
                </div>
              </div>
              <div className="chat-bubble">{chat.body}</div>
            </div>
          );
        })
      ) : (
        <LoadingChat />
      )}
    </>
  );
};

export default ChatingPage;
