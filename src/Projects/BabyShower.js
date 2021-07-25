import React, { useState } from 'react';
import {
  Typography,
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  Chip,
  Box,
  Link,
} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import useStyles from './styles';
import babyshowerPic from '../images/baby_shower.png';

const BabyShower = () => {
  const babyshowerText = `BabyShower is an application to create a virtual baby shower for my wife. Looking at current applications available it was either pay a monthly fee for a year or hack together multiple different sites to maybe have some type of baby shower with games. So I made this instead and with some more work I'm sure it could compete with the only solution on the market. It includes a word scramble game, price is right game, don't say baby and guess the baby game.`;

  const classes = useStyles();
  const [chipData] = useState([
    { key: 0, label: 'Javascript' },
    { key: 1, label: 'React' },
    { key: 2, label: 'Redux' },
    { key: 3, label: 'Node/Express' },
    { key: 4, label: 'Passport' },
    { key: 5, label: 'Mongo' },
    { key: 6, label: 'Websockets' },
    { key: 7, label: 'Styled-components' },
  ]);

  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.titleCard}
        title={
          <Typography color='textSecondary' variant='h4' component='h3'>
            Baby Shower
          </Typography>
        }
        action={
          <Box className={classes.boxLinks}>
            <Link
              className={classes.icons}
              href='https://github.com/jposeyjr/katarina'
              aria-label='github for baby shower project'
            >
              <GitHubIcon />
            </Link>
            <Link
              className={classes.icons}
              href='https://hnjbabyshower.herokuapp.com/'
              aria-label='heroku for baby shower project'
            >
              Heroku
            </Link>
          </Box>
        }
      />
      <CardMedia
        className={classes.media}
        image={babyshowerPic}
        alt='virtual baby shower application'
        title='Baby Shower picture'
      />
      <CardContent>
        <Typography className={classes.margin}>{babyshowerText}</Typography>
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

export default BabyShower;
