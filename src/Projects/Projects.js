import Gamified from './GamifiedClass';
import BabyShower from './BabyShower';
import Imperator from './Imperator';
import Pacman from './Pacman';
import { Typography, Grid } from '@material-ui/core';
import useStyles from './styles';

const Projects = () => {
  const classes = useStyles();
  return (
    <>
      <Typography className={classes.margin} variant='h3'>
        Projects
      </Typography>
      <Grid className={classes.container} container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Gamified />
        </Grid>
        <Grid item xs={12} sm={4}>
          <BabyShower />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Imperator />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Pacman />
        </Grid>
      </Grid>
    </>
  );
};

export default Projects;
