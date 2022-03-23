import { Fragment } from 'react';
import { XIcon } from '@heroicons/react/outline';
import { Popover, Transition } from '@headlessui/react';
import MyImage from 'components/MyImage';

const menuItem = [
  'Burger',
  'Pizza',
  'Cheese Burger',
  'French Fries',
  'Coke',
  'Happy Meal',
  'Sandwiches',
  'Wraps',
];

function MenuButton() {
  return (
    <Popover>
      <>
        <Popover.Button>
          <div className='fixed bottom-20 right-4 bg-primary-500 rounded-full w-16 h-16 text-black border-2 border-white flex flex-col items-center justify-center'>
            <MyImage imgsrc='hamburger.png' alt='' classes='w-8 h-8' />
            <div className='font-bold text-xs -mt-2'>Menu</div>
          </div>
        </Popover.Button>

        <Transition
          as={Fragment}
          enter='duration-200 ease-out'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='duration-100 ease-in'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'>
          <Popover.Panel
            focus
            className='fixed bottom-0 inset-x-0 p-0 transition transform origin-top-right z-50'>
            <div className='bg-white w-full h-fit relative p-5 pt-8 px-12 rounded-t-3xl border-2 shadow-2xl'>
              <Popover.Button className='inline-flex items-center justify-center text-black hover:bg-gray-100 focus:outline-none  absolute right-4 top-4'>
                <span className='sr-only'>Close menu</span>
                <XIcon className='w-7 h-7' aria-hidden='true' />
              </Popover.Button>
              <div className='flex flex-col space-y-2 h-60 overflow-x-auto'>
                {menuItem.map((item) => (
                  <div
                    key={item}
                    className='border-b border-b-gray-10 pb-2 px-2'>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </>
    </Popover>
  );
}

export default MenuButton;
