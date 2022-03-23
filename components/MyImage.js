import Image from 'next/image';

function MyImage({ imgsrc, classes, alt = '' }) {
  return (
    <div className={`relative ${classes}`}>
      <Image src={`/${imgsrc}`} alt={alt} layout='fill' />
    </div>
  );
}

export default MyImage;
