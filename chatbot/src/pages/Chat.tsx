import ChatComponent from "../components/input/ChatComponent";
import TopBar from "../components/input/TopBar";
import SideBar from "../components/input/SideBar";

import "./ChatGrid.css";

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
    <div className="bg-gray-100 p-4">
      <div className="w-[50%] ml-auto mr-auto ">
        <div className="chat-grid">
          <div className="chat-section">
            <div className="w-full">
              {chatArray.map((chat, index) => {
                const isPrompt = chat.type === "prompt";
                return (
                  <div key={index} className={`p-4 w-full rounded-lg`}>
                    <div
                      className="flex"
                      style={{
                        justifyContent: isPrompt ? "flex-end" : undefined,
                      }}
                    >
                      <div
                        className="p-2 rounded-md"
                        style={{
                          backgroundColor: isPrompt ? "#F0F2F5" : undefined,
                        }}
                      >
                        <div>{chat.message}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="input-section">
            <ChatComponent />
          </div>
        </div>
      </div>
      {/* <div className="overflow-auto h-[100%] p-8 md:p-12 w-[50%] ml-auto mr-auto">
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
      </div>
      <div className="w-full flex justify-center p-4">
        <ChatComponent />
      </div> */}
    </div>
  );
};

export default Chat;
