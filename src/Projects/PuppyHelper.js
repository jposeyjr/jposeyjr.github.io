import React, { useState } from 'react';
import {
  Typography,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Link,
  Chip,
} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import useStyles from './styles';
import puppyHelper from '../images/screenshot.png';

const PuppyHelper = () => {
  const puppyText =
    'Puppy-Helper is an app that is designed to help raise your new puppy! I found that with babies you could find a lot of applications to help you track almost anything. But this was not the case for puppies and I wanted to change that. With Puppy-Helper you are able to add multiple dogs and track how long it is between them doing different activities and going potty.';
  const classes = useStyles();
  const [chipData] = useState([
    { key: 0, label: 'Javascript' },
    { key: 1, label: 'React' },
    { key: 2, label: 'Redux' },
    { key: 3, label: 'Redux-Thunk' },
    { key: 4, label: 'Node.js' },
    { key: 5, label: 'Express' },
    { key: 6, label: 'MongoDB' },
    { key: 7, label: 'Mongoose' },
    { key: 8, label: 'Material-UI' },
  ]);

  return (
    <Card className={classes.root}>
      <CardHeader
        action={
          <Link
            className={classes.icons}
            href='https://github.com/jposeyjr/puppy-helper'
            aria-label='github repo to the puppy helper project'
          >
            <GitHubIcon />
          </Link>
        }
        title={
          <Typography gutterBottom variant='h4' component='h3'>
            Puppy Helper
          </Typography>
        }
      />
      <CardMedia
        className={classes.media}
        image={puppyHelper}
        title='Puppy potty tracker'
      />
      <CardContent>
        <Typography variant='body2' component='p'>
          {puppyText}
        </Typography>
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

export default PuppyHelper;
