import ChatComponent from "../components/input/ChatComponent";
import TopBar from "../components/input/TopBar";
import SideBar from "../components/input/SideBar";

const Chat = () => {
  const chatArray = [
    { message: "hello!", time: "tuesday", type: "prompt" },
    { message: "hi!", time: "tuesday", type: "response" },
    { message: "How are you?", time: "wednesday", type: "prompt" },
    { message: "fine", time: "wednesday", type: "response" },
    { message: "why we use react?", time: "thursday", type: "prompt" },
    { message: "to dev client side", time: "thursday", type: "response" },
  ];

  return (
    <>
      <div className="shrink-0">
      <TopBar />
      </div>
      <div className="flex">
        <SideBar />
        <main className="flex flex-col flex-grow">
        <div className="flex-grow overflow-auto p-8 md:p-12">
          <div className="flex flex-col w-full space-y-4 my-6">
            {chatArray.map((chat, index) => (
              <div
                key={index}
                className={`p-4 max-w-[75%] rounded-lg ${
                  chat.type === "prompt"
                    ? "bg-blue-100 self-end text-right"
                    : "bg-gray-200 self-start text-left"
                }`}
              >
                <div>{chat.message}</div>
                <div className="text-sm text-gray-500">{chat.time}</div>
              </div>
            ))}
          </div>
          <div className="w-full flex justify-center p-4">
            <ChatComponent />
          </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Chat;
