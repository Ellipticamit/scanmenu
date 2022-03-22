import Image from 'next/image';
import Link from 'next/link';
import Button from 'components/Button';
import Input from 'components/Input';
import OfferCard from 'components/OfferCard';
import PaymentOffer from 'elements/PaymentOffer';

function Item() {
  return (
    <div className='h-screen max-w-xl mx-auto'>
      <header className='bg-primary-500 w-full h-1/3 relative z-20'>
        <div className='flex p-5 gap-4 h-full'>
          <div className='w-2/5 flex flex-col'>
            <div className='relative w-10 h-10 mb-5'>
              <Image src='/logo_sample.png' alt='' layout='fill' />
            </div>
            <h2 className='text-2xl leading-7 font-bold'>
              Get Flat 30% off on meals
            </h2>
          </div>
          <div className='w-3/5 relative flex items-center justify-center '>
            <Image src='/burger.png' alt='' layout='fill' />
          </div>
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
          <div className='flex-1 text-4xl font-bold text-gray-10'>
            All Categories
          </div>
          <div className='flex-1'>asdf</div>
        </div>
        <div className='flex items-center space-x-3'>
          <div className='relative  w-16 h-16'>
            <Image src='/logo_sample.png' alt='' layout='fill' />
          </div>
          <h1>McDonalds</h1>
        </div>
        <div className='flex flex-col items-center space-y-3'>
          <div className='w-2/3 text-center'>
            <Link href=''>
              <a>
                <Button text='Dine-In/Take Away' />
              </a>
            </Link>
          </div>

          <div className='w-2/3 text-center'>
            <Link href=''>
              <a>
                <Button text='Delivery' />
              </a>
            </Link>
          </div>
        </div>
        <div className='text-center'>Copyright@xyzcafe.2021</div>
      </main>
    </div>
  );
}

export default Item;
