import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Phone from '../../assets/phone.png'
import './Product.css'; // Import the new CSS file

type Props = {}

const Product = (props: Props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };

  return (
    <div className="product-container bg-red-50 p-8 mx-4">
      <h1 className="product-heading text-red-600 text-3xl font-bold text-center mb-4">Our Product</h1>
      <p className="text-center text-gray-700 mb-6">Discover our amazing products that enhance your life.</p>
      <Slider {...settings}>
        <div className="product-item flex justify-center">
          <img src={Phone} alt="Product 1" className="w-3/4 rounded-lg shadow-lg" />
        </div>
        <div className="product-item flex justify-center">
          <img src={Phone} alt="Product 2" className="w-3/4 rounded-lg shadow-lg" />
        </div>
        <div className="product-item flex justify-center">
          <img src={Phone} alt="Product 3" className="w-3/4 rounded-lg shadow-lg" />
        </div>
        <div className="product-item flex justify-center">
          <img src={Phone} alt="Product 4" className="w-3/4 rounded-lg shadow-lg" />
        </div>
        <div className="product-item flex justify-center">
          <img src={Phone} alt="Product 5" className="w-3/4 rounded-lg shadow-lg" />
        </div>
        <div className="product-item flex justify-center">
          <img src={Phone} alt="Product 6" className="w-3/4 rounded-lg shadow-lg" />
        </div>
      </Slider>
    </div>
  )
}

export default Product