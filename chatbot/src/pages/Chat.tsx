import ChatComponent from "../components/input/ChatComponent";

import TopBar from "../components/input/TopBar";

const Chat = () => {
  const chatArray = [
    {
      message: "hello!",
      time: "tuesday",
      type: "prompt",
    },
    {
      message: "hi!",
      time: "tuesday",
      type: "response",
    },
    {
      message: "How are you?",
      time: "wednesday",
      type: "prompt",
    },
    {
      message: "fine",
      time: "tuesday",
      type: "response",
    },
    {
      message: "why we use react?",
      time: "thursday",
      type: "prompt",
    },
    {
      message: "to dev client side",
      time: "tuesday",
      type: "response",
    },
  ];

  return (
    <>
      <TopBar />
      <div className="flex my-10 flex-1 items-start p-10 overflow-x-hidden flex-col overflow-y-auto w-full ">
        {chatArray.map((chat) => {
          return (
            <div
              className={`
                m-2 p-4 max-w-[75%] rounded-lg ${
                  chat.type === "prompt"
                    ? "bg-blue-100 self-end text-right"
                    : "bg-gray-200 self-start text-left"
                }`}
            >
              <div className="m-2">{chat.message}</div>
            </div>
          );
        })}
      </div>
      <div className="w-full flex justify-center p-4">
        <ChatComponent />
      </div>
    </>
  );
};

export default Chat;
