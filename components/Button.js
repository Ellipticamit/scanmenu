function Button({ text }) {
  return (
    <div className='bg-primary-500 text-black text-lg p-3 cursor-pointer rounded-lg hover:bg-primary-300'>
      {text}
    </div>
  );
}

export default Button;
