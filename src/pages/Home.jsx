import { useLoaderData } from "react-router";
import CarouselSlider from "../components/CarouselSlider";

const Home = () => {
  const movies = useLoaderData();
  return (
    <div>
      <CarouselSlider movies={movies}></CarouselSlider>
    </div>
  );
};

export default Home;
