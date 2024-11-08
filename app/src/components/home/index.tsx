import Phone from '../../assets/phone.png';
import fav from '../../assets/favicon.png'

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="flex flex-col md:flex-row p-10 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg shadow-lg">
      {/* Left Column */}
      <div className="md:w-1/2 p-8 flex flex-col justify-center items-start bg-white rounded-lg shadow-md">
        <h1 className="text-5xl font-extrabold mb-4 text-gray-800">
          Elevate Your <br /> Business with <br /> Mobile App Banao
        </h1>
        <p className="mb-6 text-lg text-gray-700">
          Discover innovative features that will transform your experience.
        </p>
        <div className="flex items-center space-x-4 mb-4">
          <div className="flex space-x-[-20px]">
            <img src={fav} alt="Image 1" className="w-16 h-16 rounded-full border-2 border-white shadow-lg" />
            <img src={fav} alt="Image 2" className="w-16 h-16 rounded-full border-2 border-white shadow-lg" />
            <img src={fav} alt="Image 3" className="w-16 h-16 rounded-full border-2 border-white shadow-lg" />
            <img src={fav} alt="Image 4" className="w-16 h-16 rounded-full border-2 border-white shadow-lg" />
          </div>
          <h6 className="text-lg font-semibold text-gray-800">Join 5000+ Businesses in Launching Their Apps</h6>
        </div>
        <div className="flex space-x-4 mt-4">
          <button className="w-48 h-16 bg-white text-xl text-teal-600 font-bold rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-teal-600">
            Get on App Store
          </button>
          <button className="w-48 h-16 bg-teal-600 text-xl text-white font-bold rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-teal-600">
            Get on Play Store
          </button>
        </div>
      </div>
      {/* Right Column */}
      <div className="md:w-1/2 p-6 flex justify-center items-center relative md:ml-10">
        <img src={Phone} alt="Hero Image" className="w-full h-auto ml-4"/>
      </div>
    </div>
  );
};

export default Home;