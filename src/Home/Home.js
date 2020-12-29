import Projects from '../Projects/Projects';
import About from '../About/About';
import { Grow, Grid, Container } from '@material-ui/core';
const Home = () => {
  return (
    <Container maxWidth='lg'>
      <Grow in>
        <Grid container spacing={3} alignItems='stretch'>
          <Grid item xs={12}>
            <About />
          </Grid>
          <Grid item xs={12}>
            <Projects />
          </Grid>
        </Grid>
      </Grow>
    </Container>
  );
};

export default Home;
