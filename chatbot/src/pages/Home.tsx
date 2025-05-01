import ChatComponent from "../components/input/ChatComponent";
import TopBar from "../components/input/TopBar";

const Home = () => {
  return (
    <>
      <TopBar />
      <div className="h-screen flex justify-center items-center">
        <ChatComponent />
      </div>
    </>
  );
};

export default Home;
