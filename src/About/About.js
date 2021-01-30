import { Typography, Container, Box, Grid } from '@material-ui/core/';
import useStyles from './styles.js';

const About = () => {
  const classes = useStyles();
  const aboutText = `Welcome to my website, used as a platform to show off my work including the site, and to help you get to know me more. I'm a full-stack software engineer with knowledge in Javascript, Python, Java, Express, React, Redux, Node, Postgresql, MongoDB, Passport, Heroku, Pair Programming, Git, and Github. One personal note about me is I love Japanese culture as a whole I'm working on learning Japanese.`;
  return (
    <Container maxWidth='lg' className={classes.about}>
      <Box className={classes.hero}>
        <img
          src='https://i.imgur.com/mEAxCc5.png'
          alt='headshot of james posey'
          height='350'
        ></img>
      </Box>
      <Grid container spacing={3}>
        <Grid item>
          <Typography variant='h2' align='center' component='h1'>
            James Posey
          </Typography>
          <Typography variant='h6' align='center' component='p'>
            Software Engineer
          </Typography>
          <Typography variant='body1' component='p' className={classes.margin}>
            {aboutText}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
