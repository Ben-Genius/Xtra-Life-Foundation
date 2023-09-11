import { Grid } from '@mantine/core';
import ProjectCard from '../../components/ProjectCard';
const Project = () => {
    return(
        <Grid >
            <Grid.Col span={3}>  <ProjectCard/> </Grid.Col>
            <Grid.Col  span={3}> <ProjectCard/> </Grid.Col>

            <Grid.Col span={3}> <ProjectCard/> </Grid.Col>
            <Grid.Col span={3}> <ProjectCard/> </Grid.Col>
            <Grid.Col  span={3}> <ProjectCard/> </Grid.Col>

        </Grid>

    )
}
  
export default Project


