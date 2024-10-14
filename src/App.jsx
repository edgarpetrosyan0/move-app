import {useState } from "react";
import FeaturedVideo from "./components/FeaturedVideo";
import MainMenu from "./components/MainMenu";
import TrendingNow from "./components/TrendingNow";
import data from "../src/data/data.json";

export default function App() {
  const [featuredVideo, setFeaturedVideo] = useState(data.Featured);
  const [trendingVideos, setTrendingVideos] = useState(data.TendingNow);


  return (
    <div className="min-h-screen bg-black text-white flex">
      <MainMenu />
      <div className="flex-grow flex flex-col items-end justify-center space-y-8">
      <FeaturedVideo featuredVideo={featuredVideo}/>
      <TrendingNow trendingVideos={trendingVideos}/>
      </div>
    </div>
  );
}
