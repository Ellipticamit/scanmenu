function Input({ name, placeholder }) {
  return (
    <input
      type='text'
      placeholder={placeholder}
      name={name}
      className=' rounded-md w-full p-4 outline-none placeholder:text-placeholder drop-shadow-md text-lg'
    />
  );
}

export default Input;
