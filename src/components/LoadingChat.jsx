import { Loader } from 'lucide-react';

const LoadingChat = () => {
  return (
    <div className="flex flex-col justify-end items-center max-w-sm mx-auto text-center gap-6 opacity-30 py-24">
      <Loader
        size={100}
        className="stroke-primary fill-primary/20 animate-spin duration-100"
      />
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, enim!
      </p>
    </div>
  );
};

export default LoadingChat;
