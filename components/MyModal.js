import { Fragment } from 'react';
import { XIcon } from '@heroicons/react/outline';
import { Dialog, Transition } from '@headlessui/react';
import MyImage from './MyImage';

function MyModal({ isOpen, setIsOpen, title, children }) {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as='div'
          className='fixed bottom-0 inset-0 z-10 overflow-y-auto'
          onClose={() => setIsOpen(false)}>
          <div className='min-h-screen'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'>
              <Dialog.Overlay className='fixed inset-0' />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'>
              <div className='flex flex-col w-full p-6 my-8 text-left align-middle transition-all transform bg-white drop-shadow-2xl	 fixed -bottom-8 rounded-t-3xl'>
                <Dialog.Title
                  as='h3'
                  className='font-bold leading-6 text-gray-900'>
                  {title}
                  <div
                    className='absolute rounded-full p-1 -top-4 right-10 bg-primary-500'
                    onClose={() => setIsOpen(false)}>
                    <XIcon className='w-5 h-5 font-bold' aria-hidden='true' />
                  </div>
                </Dialog.Title>
                {children}
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default MyModal;
