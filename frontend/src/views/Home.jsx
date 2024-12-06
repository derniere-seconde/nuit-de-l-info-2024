import HeartCount from "../components/HeartCount";
import VideoPlayer from "../components/VideoPlayer";

const Home = () => {
  return (
    <div>
      <HeartCount count={5.5} />

      <VideoPlayer
        title="podcast 1"
        link="https://www.youtube.com/watch?v=B9synWjqBn8"
      ></VideoPlayer>
      <VideoPlayer title="podcast 2"></VideoPlayer>
    </div>
  );
};

export default Home;
