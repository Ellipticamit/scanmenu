import Image from 'next/image';
import Link from 'next/link';
import Button from 'components/Button';
import Input from 'components/Input';
import OfferCard from 'components/OfferCard';
import MySwitch from 'components/MySwtich';
import PaymentOffer from 'elements/PaymentOffer';
import { foodArray } from 'utils/const';
import FoodCard from 'components/FoodCard';
import MyImage from 'components/MyImage';
import MenuButton from 'elements/MenuButton';
import MyModal from 'components/MyModal';

function Item() {
  return (
    <div className='h-screen max-w-xl mx-auto relative mb-20'>
      <header className='bg-primary-500 w-full h-1/3 relative z-20'>
        <div className='flex p-5 gap-4 h-full'>
          <div className='w-2/5 flex flex-col'>
            <MyImage
              imgsrc='logo_sample.png'
              alt='logo'
              classes='w-10 h-10 mb-5'
            />

            <h2 className='text-2xl leading-7 font-bold'>
              Get Flat 30% off on meals
            </h2>
          </div>
          <MyImage imgsrc='burger.png' alt='burger' classes='w-3/5' />
        </div>
      </header>
      <main className='flex flex-col h-2/3 p-6 space-y-4'>
        <div className='-mt-12 relative z-30'>
          <Input placeholder='Search your food' name='search' />
        </div>
        <div className=''>
          <h6 className='text-sm'>Payment Offers</h6>
          <PaymentOffer />
        </div>

        <div className='flex justify-between gap-3'>
          <div className='flex-1 text-2xl font-bold text-gray-10'>
            All Categories
          </div>
          <div className='flex-1 flex justify-end'>
            <MySwitch />
          </div>
        </div>
        <div className='grid grid-cols-2 gap-4 justify-between'>
          {foodArray.map((item, index) => (
            <FoodCard name={item.name} price={item.price} key={index} />
          ))}
        </div>
      </main>
      <footer className='fixed bottom-0 w-full max-w-xl  bg-primary-500 p-3 flex justify-between items-center'>
        <MyImage imgsrc='cart.png' alt='cart' classes='w-7 h-7' />
        <div className='bg-white py-2 px-4 rounded-md text-base font-bold flex items-center cursor-pointer'>
          <div>Proceed to Cart</div>
          <MyImage imgsrc='proceed.png' alt='cart' classes='w-7 h-7 ml-2' />
        </div>
      </footer>
      <MenuButton />
    </div>
  );
}

export default Item;
