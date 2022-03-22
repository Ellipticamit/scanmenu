import MySlider from 'components/MySlider';

const data = [
  {
    name: 'Get 30% OFF ON',
    imgsrc: '/paytm.png',
  },
  {
    name: 'Get 20% OFF ON',
    imgsrc: '/gpay.png',
  },
  {
    name: 'Get 20% OFF ON',
    imgsrc: '/phonepe.png',
  },
  {
    name: 'Get 10% OFF ON',
    imgsrc: '/amazon.png',
  },
];

function PaymentOffer() {
  return (
    <div>
      <MySlider data={data} />
    </div>
  );
}

export default PaymentOffer;
