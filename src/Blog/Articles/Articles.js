import {
  Card,
  CardActionArea,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
  Box,
  Avatar,
  Link,
} from '@material-ui/core';
import useStyles from '../styles';
import TwitterIcon from '@material-ui/icons/Twitter';
import avatarImg from '../../images/headshot.jpg';
import { useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';

const Articles = () => {
  const artPosts = useSelector((state) => state);
  const classes = useStyles();
  return artPosts.map((posts) => (
    <div key={posts.id}>
      <Card className={classes.card}>
        <CardActionArea component={RouterLink} to={`/blog/${posts.id}`}>
          <CardMedia
            className={classes.media}
            image={posts.blogImg}
            title={posts.title}
            aria-label={posts.title}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant='h5'
              color='textSecondary'
              component='h2'
            >
              {posts.title}
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              {posts.snippet}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.cardActions}>
          <Box className={classes.author}>
            <Avatar src={avatarImg} alt='headshot of james posey' />
            <Box ml={2}>
              <Typography
                variant='subtitle2'
                color='textSecondary'
                component='p'
              >
                James Posey
              </Typography>
              <Typography
                variant='subtitle2'
                color='textSecondary'
                component='p'
              >
                {posts.date}
              </Typography>
            </Box>
          </Box>
          <Box>
            <Link
              className={classes.link}
              href='https://twitter.com/share?ref_src=twsrc%5Etfw'
              aria-label='twitter share'
            >
              <TwitterIcon />
            </Link>
          </Box>
        </CardActions>
      </Card>
    </div>
  ));
};

export default Articles;
