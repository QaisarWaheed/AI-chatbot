const SideBar = () => {
  const chatHistory = [
    {
      chat: "HEll",
      time: new Date(),
    },
    {
      chat: "second",
      time: new Date(),
    },
    {
      chat: "Third",
      time: new Date(),
    },
    {
      chat: "Fourth",
      time: new Date(),
    },
  ];
  return (
    <>
      <div>
        {chatHistory.map((chat) => {
          return (
            <div className={`h-screen w-36 bg-custom-text`}>
              {chat.chat + " " + chat.time.toLocaleTimeString()}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SideBar;
