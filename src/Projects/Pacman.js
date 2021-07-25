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
import pacman from '../images/pacman.png';

const Pacman = () => {
  const pacmanText = `A clone of the classic Pacman game made on a weekend spike which turned into only Sunday due to a family emergency! I taught myself Three.js from scratch AND built this game in less than 14 hours. I did this 
  to learn graphics for my larger gamified classroom project which is going to a client that is a middle school teacher in VA.`;

  const classes = useStyles();
  const [chipData] = useState([
    { key: 0, label: 'Javascript' },
    { key: 1, label: 'Three.js' },
  ]);

  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.titleCard}
        title={
          <Typography color='textSecondary' variant='h4' component='h3'>
            Pacman
          </Typography>
        }
        action={
          <Box className={classes.boxLinks}>
            <Link
              className={classes.icons}
              href='https://github.com/jposeyjr/solo-spike'
              aria-label='github for pacman project'
            >
              <GitHubIcon />
            </Link>
            <Link
              className={classes.icons}
              href='https://jposeyjr.github.io/solo-spike/'
              aria-label='demo for pacman game'
            >
              Play It!
            </Link>
          </Box>
        }
      />
      <CardMedia
        className={classes.media}
        image={pacman}
        alt='pacman game'
        title='pacman'
      />
      <CardContent>
        <Typography className={classes.margin}>{pacmanText}</Typography>
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

export default Pacman;
