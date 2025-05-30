import { Navigate, useNavigate } from "react-router";

const SideBar = () => {
  const navigate = useNavigate();
  const chatHistory = [
    { chat: "Hello", time: new Date() },
    { chat: "Second", time: new Date() },
    { chat: "Third", time: new Date() },
    { chat: "Fourth", time: new Date() },
  ];

  return (
    <div className=" p-4 overflow-auto bg-gray">
      <button
        onClick={(e) => {
          navigate("/chat");
        }}
      >
        NEW CHAT
      </button>
      {chatHistory.map((chat, index) => (
        <aside key={index} className="mb-4">
          <div>{chat.chat}</div>
          <div className="text-sm">{chat.time.toLocaleTimeString()}</div>
        </aside>
      ))}
    </div>
  );
};

export default SideBar;
