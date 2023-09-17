import { Button, Center} from '@mantine/core';
import ProjectCard from '../../components/ProjectCard';
import { Link } from 'react-router-dom';
const Project = () => {
    return (
        <div className='mt-20 mb-20'>
            <ProjectCard />
            <Center className='mt-16'>        
            <Button component={Link} to='/' className='bg-blue-400 rounded-full px-6 text-md h-[3rem] cursor-pointer'>View All Projects </Button>
            </Center>
        </div>
    )
}

export default Project


