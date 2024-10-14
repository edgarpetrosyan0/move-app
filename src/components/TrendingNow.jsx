import { useState,useRef } from "react";

export default function TrendingNow({ trendingVideos }) {
  const carouselTrack = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 5;

  const handleNext = () => {
    if (currentIndex < trendingVideos.length - itemsPerView) {
      setCurrentIndex(currentIndex + 1);
      carouselTrack.current.style.transform = `translateX(-${
        currentIndex + 1
      }00%)`;
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      carouselTrack.current.style.transform = `translateX(-${
        currentIndex - 1
      }00%)`;
    }
  };

  return (
    <div className="relative w-full overflow-hidden">
       <h2 className="text-3xl font-semibold mb-4">Trending Now</h2>
      <div
        ref={carouselTrack}
        className="flex transition-transform duration-300 ease-in-out"
      >
        {trendingVideos.map((video, index) => (
          <div key={index} onClick={() => onVideoClick(video)} className="min-w-[200px] pl-2">
            <img src={video.CoverImage} alt={video.Title} />
          </div>
        ))}
      </div>
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2"
        onClick={handlePrev}
      >
        Prev
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2"
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
}
