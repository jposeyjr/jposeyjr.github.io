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
import gamified from '../images/gamified.png';

const Gamified = () => {
  const gamifiedText = `Gamified classrooms allow teachers to easily and quickly reward students for participating in the classroom and keep track of all students and activity levels throughout one or many classrooms. The gamified classroom is aimed to be quick, simple, and easy with limited intrusiveness to allow for quick approval by parents and school boards.`;

  const classes = useStyles();
  const [chipData] = useState([
    { key: 0, label: 'Javascript' },
    { key: 1, label: 'React' },
    { key: 2, label: 'Redux' },
    { key: 3, label: 'Redux-Saga' },
    { key: 4, label: 'Node.js' },
    { key: 5, label: 'Express' },
    { key: 6, label: 'Websockets' },
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
            Gamified Classroom
          </Typography>
        }
        action={
          <Link
            className={classes.icons}
            href='https://github.com/jposeyjr/gamifyclassroom'
            aria-label='github for gamified project'
          >
            <GitHubIcon />
          </Link>
        }
        action={
          <Link
            className={classes.icons}
            href='https://gamify-classroom.herokuapp.com/#/home'
            aria-label='github for gamified project'
          >
            Heroku
          </Link>
        }
      />
      <CardMedia
        className={classes.media}
        image={gamified}
        alt='classroom application to make learning fun'
        title='Gamified classroom'
      />
      <CardContent>
        <Typography className={classes.margin}>{gamifiedText}</Typography>
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

export default Gamified;
