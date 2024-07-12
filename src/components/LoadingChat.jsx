import { MessageCircle } from 'lucide-react';

const LoadingChat = () => {
  return (
    <div className="flex flex-col justify-end items-center max-w-sm mx-auto text-center gap-6 opacity-30 py-24">
      <MessageCircle
        size={100}
        className="stroke-primary fill-primary/20 animate-bounce duration-1000"
      />
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, enim!
      </p>
    </div>
  );
};

export default LoadingChat;
