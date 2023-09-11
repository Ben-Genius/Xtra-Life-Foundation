import { Blockquote} from '@mantine/core';


interface CardProps {
  image: string;
  title: string;
  category: string;
}

export function Card({ image,  category, title }: CardProps) {


  return (
<div className='max-w-full rounded-md relative mt-10 sm:max-w-[60rem] mx-auto'>
<div className='bg-blue-400 rounded-sm h-[10rem] hidden sm:block absolute top-[13rem] -left-[4rem] max-w-[40%] mx-auto'>
    <Blockquote className='text-white p-2 leading-relaxed text-sm font-sans' cite={category}>{title}</Blockquote>
    </div>
       <div className='sm:w-[60%] sm:h-[50%] max-w-full mx-auto '>
      <img src={image} alt={category} className='object-cover h-[20rem] grow w-full rounded-t-lg mt-10 sm:ml-10 sm:mt-0 sm:h-[30rem]' />

   
        </div>
        <div className='bg-blue-400 rounded-sm h-[10rem] sm:hidden w-full -pb-2 mb-4'>
    <Blockquote className='text-white leading-relaxed text-sm font-sans' cite={category}>{title}</Blockquote>
    </div>
    </div>
  );
}



