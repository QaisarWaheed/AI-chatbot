import ChatComponent from "../components/input/ChatComponent";
import TopBar from "../components/input/TopBar";

const Home = () => {
  return (
    <div className=" w-full h-screen flex justify-center align-middle items-center">
      <TopBar />
      <ChatComponent />
    </div>
  );
};

export default Home;
