import Carousel from 'react-bootstrap/Carousel';
import image1 from '../../assets/Banners/BannerCarrossel1.png';
import image2 from '../../assets/Banners/BannerCarrossel2.png';
import image3 from '../../assets/Banners/BannerCarrossel3.png';


function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
        className="d-block w-100"
        src={image1}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
        className="d-block w-100"
        src={image2}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img 
        className="d-block w-100"
        src={image3}
        alt="" />
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;