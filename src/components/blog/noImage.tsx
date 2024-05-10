import Image from 'next/image';

const imageList = [
  '/noImage_1.jpg',
  '/noImage_2.jpg',
  '/noImage_3.jpg',
  '/noImage_4.jpg',
];

export default function NoImage() {
  const randomIndex = Math.floor(Math.random() * imageList.length);
  const randomImage = imageList[randomIndex];
  return (
    <Image fill src={randomImage} alt="noImage" className="object-cover" />
  );
}
