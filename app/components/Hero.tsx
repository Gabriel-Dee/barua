// components/Hero.tsx

const Hero: React.FC = () => {
    const backgroundImageUrl = 'https://images.pexels.com/photos/159618/still-life-school-retro-ink-159618.jpeg?auto=compress&cs=tinysrgb&w=1600';

    const heroStyle = {
      backgroundImage: `url(${backgroundImageUrl})`,
    };
    return (
        <header className="bg-center bg-fixed bg-no-repeat bg-center bg-cover h-screen relative" style={heroStyle}>
        <div className="h-screen bg-opacity-50 bg-black flex items-center justify-center" style={{ background: "rgba(0,0,0,0.5)" }}>
          <div className="mx-2 text-center">
            <h1 className="text-gray-100 font-extrabold text-4xl xs:text-5xl md:text-6xl">
              <span className="text-white">Right</span> Place To
            </h1>
            <h2 className="text-gray-200 font-extrabold text-3xl xs:text-4xl md:text-5xl leading-tight">
              Have a <span className="text-white">Better</span> and <span className="text-white">Fast</span> Writing
            </h2>
            <div className="inline-flex">
              <button className="p-2 my-5 mx-2 bg-blue-700 hover:bg-blue-800 font-bold text-white rounded-lg border-2 border-transparent hover:border-blue-800 shadow-md transition duration-500 md:text-xl">Here We Go</button>
              <a href="#about"><button className="p-2 my-5 mx-2 bg-transparent border-2 bg-blue-200 bg-opacity-75 hover:bg-opacity-100 border-blue-700 rounded-lg hover:border-blue-800 font-bold text-blue-800 shadow-md transition duration-500 md:text-lg">Learn More</button></a>
            </div>
          </div>
        </div>
      </header>
    );
  };
  
  export default Hero;
  
