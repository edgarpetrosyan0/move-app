export default function FeaturedVideo({ featuredVideo }) {
  return (
    <div>
        <img
          src={featuredVideo.CoverImage}
          alt={featuredVideo.Title}
          className="object-cover"
        />
        <div className="absolute inset-0 p-4 flex flex-col justify-center w-3/12	 left-16">
          {/* <h1 className="text-4xl font-bold">{featuredVideo.Title}</h1> */}
          <p className="mt-1 text-sm opacity-75">
             {featuredVideo.Category} </p>
          <img
          src={featuredVideo.TitleImage}
          className="w-full object-cover"
        />
          <p className="mt-1 text-sm opacity-75">
            {featuredVideo.ReleaseYear} {" "} {featuredVideo.MpaRating} {" "} {featuredVideo.Duration} 
          </p>
          <p className="mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
         
          <br/>
          <div className="flex space-x-4">
            <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-300">
              Play
            </button>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-600">
              More Information
            </button>
          </div>
        </div>
        
      <video
        id="featured-video"
        controls
        className="mt-4 hidden"
        src={featuredVideo.VideoUrl}
      />
    </div>
  );
}
