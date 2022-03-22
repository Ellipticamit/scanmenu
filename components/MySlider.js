import Slider from 'react-slick';
import Image from 'next/image';

function MySlider({ data }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Slider {...settings}>
      {data.map((item, index) => (
        <div key={index} className='p-1'>
          <div className='flex items-center shadow-md p-3'>
            <div className='flex-1 text-xs font-bold'>{item.name}</div>
            <div className='flex-1 h-6 relative'>
              <Image src={item.imgsrc} alt='' layout='fill' />
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}

export default MySlider;
