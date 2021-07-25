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
import imperatorPic from '../images/imperator.png';

const Imperator = () => {
  const imperatorText = `Imperator is an internal tool used by Aurelius Labs. It allows the administrators to easily view and access client information in one place. With the different dashboards, the admin may view their customer data and key KPIs per customer, along with the ability to automate internal processes such as extending trials, following up with emails, etc. Imperator was a group project completed remotely in a two-week sprint.  `;

  const classes = useStyles();
  const [chipData] = useState([
    { key: 0, label: 'Typescript/Javascript' },
    { key: 1, label: 'React' },
    { key: 2, label: 'Redux/Redux-Saga' },
    { key: 3, label: 'Passport' },
    { key: 4, label: 'Node.js/Express' },
    { key: 5, label: 'Mongo' },
    { key: 6, label: 'Jest' },
    { key: 7, label: 'Docker' },
  ]);

  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.titleCard}
        title={
          <Typography color='textSecondary' variant='h4' component='h3'>
            Imperator
          </Typography>
        }
        action={
          <Box className={classes.boxLinks}>
            <Link
              className={classes.icons}
              href='https://github.com/jposeyjr/imperator'
              aria-label='github for imperator project'
            >
              <GitHubIcon />
            </Link>
          </Box>
        }
      />
      <CardMedia
        className={classes.media}
        image={imperatorPic}
        alt='classroom application to make learning fun'
        title='Imperator'
      />
      <CardContent>
        <Typography className={classes.margin}>{imperatorText}</Typography>
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

export default Imperator;
