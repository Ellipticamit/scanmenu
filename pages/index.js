import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Button from 'components/Button';

export default function Home() {
  return (
    <>
      <Head>
        <title>Scan Menu App</title>
        <meta name='description' content='Scan Menu APp' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='h-screen max-w-xl mx-auto'>
        <header className='bg-black w-full h-1/3 relative'>
          <Image src='/banner_sample1.png' alt='banner' layout='fill' />
          <div className='absolute top-6 left-6 w-10 h-10'>
            <Image src='/logo_sample.png' alt='' layout='fill' />
          </div>
          <div className='absolute bottom-10 right-10 text-white'>
            <div className='text-4xl font-bold flex flex-col items-end'>
              <h1>Scan.</h1>
              <h1>Order.</h1>
              <h1>Repeat.</h1>
            </div>
          </div>
        </header>
        <main className='flex flex-col h-2/3 justify-between px-8 py-6'>
          <div className='flex items-center space-x-3'>
            <div className='relative  w-16 h-16'>
              <Image src='/logo_sample.png' alt='' layout='fill' />
            </div>
            <h1>McDonalds</h1>
          </div>
          <div className='flex flex-col items-center space-y-3'>
            <div className='w-2/3 text-center'>
              <Link href='/item'>
                <a>
                  <Button text='Dine-In/Take Away' />
                </a>
              </Link>
            </div>

            <div className='w-2/3 text-center'>
              <Link href='/item'>
                <a>
                  <Button text='Delivery' />
                </a>
              </Link>
            </div>
          </div>
          <div className='text-center'>Copyright@xyzcafe.2021</div>
        </main>
      </div>
    </>
  );
}
