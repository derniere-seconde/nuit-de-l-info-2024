import HeartCount from "../components/HeartCount";

const Home = () => {
  return (
    <div>
      <h1 className="font-bold text-red-800">Home</h1>
      <HeartCount count={5.5} />
    </div>
  );
};

export default Home;
