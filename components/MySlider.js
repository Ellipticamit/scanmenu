import Slider from 'react-slick';
import { useState } from 'react';
import Image from 'next/image';
import MyModal from './MyModal';
import MyImage from './MyImage';

function MySlider({ data }) {
  let [isOpen, setIsOpen] = useState(false);
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
        <>
          <div
            key={index}
            className='px-2 py-1'
            onClick={() => setIsOpen(true)}>
            <div className='grid grid-cols-2 gap-2 items-center rounded-lg shadow-md py-3 px-4'>
              <div className='flex-1 text-xs font-bold'>{item.name}</div>
              <div className='flex-1 h-6 relative'>
                <Image src={item.imgsrc} alt='' layout='fill' />
              </div>
            </div>
          </div>
          <MyModal isOpen={isOpen} setIsOpen={setIsOpen} title='Offer Details'>
            <div className='mt-2 space-y-3'>
              <div className='grid grid-cols-2 gap-4'>
                <div className='text-lg leading-6'>
                  Get 30% off on using Paytm
                </div>
                <div className='flex items-center justify-center'>
                  <MyImage imgsrc='paytm.png' alt='paytm' classes='w-24 h-8' />
                </div>
              </div>

              <p className='text-sm text-gray-500'>
                Offers Description -Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. See More…
              </p>
              <div className='grid grid-cols-2 gap-4'>
                <div className='font-bold text-2xl border-dashed border-black border text-center p-2 rounded-lg'>
                  PAYTM30
                </div>
                <div className='flex flex-col items-end justify-end -space-y-1'>
                  <div className='text-blue'> $200</div>
                  <div className='text-xs italic'>*Minimum order value</div>
                </div>
              </div>

              <div className='bg-blue text-center text-white font-bold p-3 rounded-lg'>
                Apply
              </div>
            </div>
          </MyModal>
        </>
      ))}
    </Slider>
  );
}

export default MySlider;
