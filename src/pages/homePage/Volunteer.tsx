import volunt from '../../assets/volunteeer.jpg';
import { Button } from '@mantine/core';
import {BsWhatsapp,BsFacebook,BsYoutube,BsLinkedin} from 'react-icons/bs';
import {FaTwitter} from 'react-icons/fa';
 import { Link } from 'react-router-dom';

const Volunteer = () => {
    return (
        <div className=' bg-no-repeat  bg-cover bg-origin-padding sm:flex w-[97%]  sm:w-[99%] sm:pl-4 sm:px-0 px-3 mx-auto flex-col items-start justify-center h-[40rem] sm:h-[70rem]' style={{backgroundImage:`url(${volunt})`}}>
            <div className='text-white sm:justify-between gap-20 w-full sm:items-center flex flex-col sm:flex-row items-start justify-center'>
                <div className='w-full mt-[2.5rem] sm:mt-0 py-7'>
                    <b className=' text-lg'>Help People In <em className='font-bold text-blue-600'>Need</em></b>
                    <h1 className='font-bold text-4xl max-w-sm sm:max-w-full mt-10'> Become a Volunteer Now </h1>
                    <Button className='bg-blue-400 cursor-pointer rounded-3xl mt-10 w-[70%] sm:px-10 sm:w-auto font-semibold h-12 text-lg'>Register Now</Button>
                </div>
                <div className='bg-white text-black rounded-l-md  w-full sm:flex p-3 items-center sm:m-0 volunteer'>
                    <div className='w-full p-2 '>
                        <b> 
                             <h1 className='sm:max-w-[14rem]'>Follow XTF Ghana</h1>
</b>
                        <p className='max-w-sm'>on all social media platforms or WhatsApp Us for further inquiries</p>
                    </div>
                    <span className='flex justify-around items-center w-full flex-wrap text-4xl'>
                        <Link to='/' className='cursor-pointer'>                    < FaTwitter className='text-blue-600'/>
</Link>
                        <BsWhatsapp  className='text-green-600'/>
                        <BsFacebook className='text-blue-600'/>
                        <BsYoutube className='text-red-600'/>
                       < BsLinkedin className='text-blue-500'/>
                    </span>
                </div>
            </div>
        </div>
    )
}


export default Volunteer;