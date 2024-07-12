import { Smile } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { Paperclip } from 'lucide-react';
import { useParams } from 'react-router-dom';

const SendMessage = () => {
  const { username } = useParams();
  if (!username) {
    return <></>;
  }

  return (
    <div className="navbar bg-base-300 gap-2">
      <div className="flex-none">
        <button className="btn btn-circle">
          <Paperclip size={20} />
        </button>
      </div>
      <div className="flex-none">
        <button className="btn btn-circle">
          <Smile size={20} />
        </button>
      </div>
      <div className="flex-1">
        <input placeholder="Tulis pesan" />
      </div>
      <div className="flex-none">
        <button className="btn btn-circle">
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default SendMessage;
