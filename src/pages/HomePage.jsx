import { MessageCircleCode } from 'lucide-react';

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col justify-end items-center max-w-sm mx-auto text-center gap-6 opacity-30 py-24">
        <MessageCircleCode
          size={100}
          className="stroke-primary fill-primary/20"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, enim!
        </p>
      </div>
    </>
  );
};

export default HomePage;
