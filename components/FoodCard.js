import Image from 'next/image';
import { RoundedButton } from 'components/Button';
function FoodCard({ name, price }) {
  return (
    <div className='shadow-lg rounded-lg mb-2 h-44 overflow-hidden '>
      <div className='w-full h-24 relative'>
        <Image src='/banner_sample1.png' alt='banner' layout='fill' />
        <div className='absolute w-4 h-4 top-3 right-3'>
          <Image src='/heart.png' alt='' layout='fill' />
        </div>
      </div>
      <div className='text-xs px-2 py-1 space-y-2'>
        <h2 className='font-bold'>{name}</h2>
        <div className='flex justify-between items-end'>
          <div>Rs.{price}</div>
          <div className='flex flex-col items-center'>
            <p className='text-st'>Customization</p>
            <div className='w-12'>
              <RoundedButton text='Add' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodCard;
