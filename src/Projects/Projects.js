import Sherlock from './Sherlock';
import PuppyHelper from './PuppyHelper';
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
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Sherlock />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <PuppyHelper />
        </Grid>
      </Grid>
    </>
  );
};

export default Projects;
