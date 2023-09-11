import { Group } from '@mantine/core';
import WelCard from '../../assets/welCard.jpeg';
const welcome = () => {
  return (
    <Group className='sm:container mx-auto mt-6 '>
       
              <div className=' bg-red-300 sm:h-[28rem] pb-2  '>
       <center className='text-3xl font-bold py-3'>Welcome To The Foundation of Ghanaian Youth</center>
        <p className='md:p-4 text-sm leading-loose sm:pb-0'> 
            Fugiat veniam pariatur irure consectetur aliquip esse ipsum ipsum nisi aliqua.
            Ut enim ipsum dolor cillum qui tempor et aute.Cupidatat magna sint dolore do aliquip amet sit non magna veniam occaecat veniam.
            Est ipsum excepteur consectetur esse veniam dolor cillum exercitation ipsum.
            Veniam sit pariatur Lorem id reprehenderit laboris culpa aliquip in velit ipsum mollit.
            Laboris consectetur amet reprehenderit magna nulla velit adipisicing sint commodo proident aliqua ullamco sunt proident.

            Veniam ullamco tempor nisi non cupidatat mollit magna eiusmod qui.
            Eu mollit fugiat sunt tempor minim dolore laboris ullamco.
        </p>

       </div>
<div className='w-full sm:h-[26rem]'>
    <img src={WelCard} alt="Card Image" className='sm:h-[27rem] h-[28rem] object-cover w-full'/>
</div>
        </Group>
  )
}

export default welcome