function Button({ text }) {
  return (
    <div className='bg-primary-500 text-black text-lg p-3 cursor-pointer rounded-lg hover:bg-primary-300'>
      {text}
    </div>
  );
}

export function RoundedButton({ text }) {
  return (
    <div className='bg-primary-500 text-black text-t cursor-pointer rounded-full hover:bg-primary-300 px-2 py-1 text-center'>
      {text}
    </div>
  );
}

export default Button;
