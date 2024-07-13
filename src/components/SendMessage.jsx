import { Smile } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { Paperclip } from 'lucide-react';
import { useParams } from 'react-router-dom';
import useSocket from '../hooks/useSocket';
import { useState } from 'react';
import useAuth from '../hooks/useAuth';
import { Plus } from 'lucide-react';

const SendMessage = () => {
  const { username } = useParams();
  const { user } = useAuth();
  const socket = useSocket();
  const [input, setInput] = useState('');

  const sendMessage = (e) => {
    e.preventDefault();
    if (input.trim() !== '') {
      socket.emit('message', {
        username: user,
        message: input,
      });
      setInput('');
    }
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
    socket.emit('typing', true);
  };

  const handleInputBlur = () => {
    socket.emit('stop typing');
  };

  if (!username) {
    return (
      <div className="toast">
        <button className="btn btn-primary">
          <Plus size={20} />
          <span>Mulai chat baru</span>
        </button>
      </div>
    );
  }

  return (
    <form className="navbar bg-base-300 gap-2" onSubmit={sendMessage}>
      <div className="flex-none">
        <button className="btn btn-circle" type="button">
          <Paperclip size={20} />
        </button>
      </div>
      <div className="flex-none">
        <button className="btn btn-circle">
          <Smile size={20} />
        </button>
      </div>
      <div className="flex-1">
        <input
          placeholder="Tulis pesan"
          value={input}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
        />
      </div>
      <div className="flex-none">
        <button className="btn btn-circle">
          <ArrowRight size={20} />
        </button>
      </div>
    </form>
  );
};

export default SendMessage;
