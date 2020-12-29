import useStyles from './styles';
import ShareButtons from './ShareButtons';
import { Grid, Typography, Box, Card } from '@material-ui/core';
import { useSelector } from 'react-redux';

const EachPost = () => {
  const classes = useStyles();
  const eachPosts = useSelector((state) => state);
  return eachPosts.map((posts) => (
    <Box key={posts.id} className={classes.wrapper}>
      <div className={classes.blogContentWrapper}>
        <Grid justify='center' container spacing={3}>
          <Grid item xs={12} md={9}>
            <Card className={classes.card}>
              <Box>
                <Typography variant='h4'>
                  <b>{posts.title}</b>
                </Typography>
                <Typography variant='body1'>{posts.date}</Typography>
              </Box>
              <div className={classes.imgWrapper}>
                <img height='400' alt={posts.title} src={posts.blogImg}></img>
              </div>
              <Box color='primary'>
                {posts.content}
                <Box>
                  <Grid spacing={1} container>
                    <Grid item>
                      <ShareButtons postObj={posts} />
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </div>
    </Box>
  ));
};

export default EachPost;
