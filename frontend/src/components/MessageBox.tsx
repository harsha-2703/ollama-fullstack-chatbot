interface UserMessageProps {
  text: string;
  sender: string;
}

const UserMessage = ({ text, sender }: UserMessageProps) => {
  return (
    <>

        <div className={`${(sender === "user") ? "bg-cyan-300" : "bg-gray-300"} mx-auto p-4 rounded-xl mt-2 max-w-sm`}>
            <h1 className="text-lg">{text}</h1>
        </div>
    </>
  );
};

export default UserMessage;