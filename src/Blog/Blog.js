import { Grid, Container, Typography, Box } from '@material-ui/core';
import useStyles from './styles';
import React from 'react';
import Articles from './Articles/Articles';

const Blog = () => {
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <Box className={classes.hero}>
        <Box>Blog</Box>
      </Box>
      <Container maxWidth='lg' className={classes.blogsContainer}>
        <Typography variant='h4' className={classes.blogTitle}>
          Articles
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Articles />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Blog;
