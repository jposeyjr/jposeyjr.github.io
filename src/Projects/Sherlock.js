import React, { useState } from 'react';
import {
  Typography,
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  Chip,
  Link,
} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import useStyles from './styles';
import sherlock from '../images/sherlock.png';

const Sherlock = () => {
  const sherlockText =
    'Sherlock is an application in development for those with vision impairments. You can enter a websites URL and get back an image alt text if it is missing, form labels for forms without them and text from the site in a response area.';

  const classes = useStyles();
  const [chipData] = useState([
    { key: 0, label: 'Javascript' },
    { key: 1, label: 'React' },
    { key: 2, label: 'Redux' },
    { key: 3, label: 'Redux-Saga' },
    { key: 4, label: 'Node.js' },
    { key: 5, label: 'Express' },
    { key: 6, label: 'Puppeter' },
    { key: 7, label: 'Material-UI' },
  ]);

  return (
    <Card className={classes.root}>
      <CardHeader
        title={
          <Typography
            className={classes.margin}
            color='textSecondary'
            variant='h4'
            component='h3'
          >
            Sherlock
          </Typography>
        }
        action={
          <Link
            className={classes.icons}
            href='https://github.com/jposeyjr/sherlock'
            aria-label='github for sherlock project'
          >
            <GitHubIcon />
          </Link>
        }
      />
      <CardMedia
        className={classes.media}
        image={sherlock}
        alt='Moriarty playing sherlock and watson as puppets'
        title='Sherlock a SASS'
      />
      <CardContent>
        <Typography className={classes.margin}>{sherlockText}</Typography>
        <div className={classes.techList}>
          {chipData.map((data) => {
            return (
              <li key={data.key}>
                <Chip label={data.label} className={classes.chip} />
              </li>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default Sherlock;
