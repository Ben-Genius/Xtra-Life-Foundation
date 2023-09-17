import { Button } from '@mantine/core';
import project from '../assets/project1.jpg';
import proj2 from '../assets/project2.jpeg';
import proj3 from '../assets/project3.webp';
const ProjectCard = () => {
  return (
    <>
       <div className='md:flex w-[90%] mx-auto items-center justify-center gap-16'> 
      <div>
        <img alt='Project card image' src={project} className='md:h-[45rem] w-[35rem] object-cover md:mx-auto px-2 ' />
      </div>
      <div className='p-2'>
        <center><b>  <h1 className='font-serif text-red-400'> The Xtra-Life Community Project </h1>
        </b></center>
        <p className='max-w-xl p-3 mx-auto'>Laborum eiusmod excepteur mollit consectetur laboris consequat ullamco.Magna Lorem id voluptate laboris do sunt Lorem veniam.
          Ex occaecat nulla quis do deserunt magna qui laborum ipsum.Quis ullamco aliquip Lorem nulla deserunt aliquip laboris in adipisicing elit adipisicing aliquip esse.
          Ipsum duis veniam labore anim Lorem velit sunt pariatur non.Aute aliquip nisi dolore incididunt eiusmod cillum fugiat irure non tempor reprehenderit excepteur.
        </p>
        <Button className='bg-blue-400 w-[8.5rem] align-center text-center mt-4 h-[2.8rem] rounded-ss-full rounded-ee-full p-4 ml-2'>Read More</Button>
      </div>
    </div>


    <div className='md:flex w-[90%] mx-auto items-center justify-center gap-16 mt-14'> 
    
      <div className='p-2'>
        <center><b>  <h1 className='font-serif text-red-400 max-w-xl'> Entity Training & Academic Project </h1>
        </b></center>
        <p className='max-w-xl p-3 mx-auto'>Laborum eiusmod excepteur mollit consectetur laboris consequat ullamco.Magna Lorem id voluptate laboris do sunt Lorem veniam.
          Ex occaecat nulla quis do deserunt magna qui laborum ipsum.Quis ullamco aliquip Lorem nulla deserunt aliquip laboris in adipisicing elit adipisicing aliquip esse.
          Ipsum duis veniam labore anim Lorem velit sunt pariatur non.Aute aliquip nisi dolore incididunt eiusmod cillum fugiat irure non tempor reprehenderit excepteur.
        </p>
        <Button className='bg-blue-400 w-[8.5rem] align-center text-center mt-4 h-[2.8rem] rounded-ss-full rounded-ee-full p-4 ml-2'>Read More</Button>
      </div>
      <div>
        <img alt='Project card image' src={proj2} className='md:h-[45rem] w-[35rem] object-cover md:mx-auto px-2 mt-5' />
      </div>
    </div>

    <div className='md:flex w-[90%] mx-auto items-center justify-center gap-16 mt-14'> 
      <div>
        <img alt='Project card image' src={proj3} className='md:h-[45rem] w-[40rem] object-cover md:mx-auto px-2 ' />
      </div>
      <div className='p-2'>
        <center><b>  <h1 className='font-serif text-red-400'> PerfectStart Initiative</h1>
        </b></center>
        <p className='max-w-xl p-3 mx-auto'>Laborum eiusmod excepteur mollit consectetur laboris consequat ullamco.Magna Lorem id voluptate laboris do sunt Lorem veniam.
          Ex occaecat nulla quis do deserunt magna qui laborum ipsum.Quis ullamco aliquip Lorem nulla deserunt aliquip laboris in adipisicing elit adipisicing aliquip esse.
          Ipsum duis veniam labore anim Lorem velit sunt pariatur non.Aute aliquip nisi dolore incididunt eiusmod cillum fugiat irure non tempor reprehenderit excepteur.
        </p>
        <Button className='bg-blue-400 w-[8.5rem] align-center text-center mt-4 h-[2.8rem] rounded-ss-full rounded-ee-full p-4 ml-2'>Read More</Button>
      </div>
    </div>
    </>
  );
}

export default ProjectCard


