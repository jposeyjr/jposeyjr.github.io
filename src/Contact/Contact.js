import { Grid, TextField, Button, Paper, Typography } from '@material-ui/core';
import useStyles from './styles';
import React, { useState } from 'react';

const Contact = () => {
  const [status, setStatus] = useState('');
  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    //from formspree.io
    const form = e.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus({ status: 'SUCCESS' });
      } else {
        setStatus({ status: 'ERROR' });
      }
    };
    xhr.send(data);
  };

  return (
    <Grid container direction='column' justify='center' alignItems='center'>
      <Typography variant='h2' component='h1'>
        Contact Me
      </Typography>
      <Grid item>
        <Paper className={classes.paper}>
          <form
            autoComplete='off'
            noValidate
            className={`${classes.root} ${classes.form}`}
            onSubmit={handleSubmit}
            action='https://formspree.io/f/mqkggwbv'
            method='POST'
          >
            <TextField
              name='name'
              required
              variant='outlined'
              helperText='your name'
              label='Name:'
            />
            <TextField
              name='email'
              required
              variant='outlined'
              helperText='your email'
              label='Email:'
            />
            <TextField
              name='company'
              required
              variant='outlined'
              helperText='your companies name'
              label='Company:'
            />
            <TextField
              name='message'
              required
              variant='outlined'
              helperText='your message to me'
              label='Message:'
              multiline
              rows={5}
            />
            {status === 'SUCCESS' ? (
              <Typography variant='h4' component='p'>
                Thank you!
              </Typography>
            ) : (
              <Button
                variant='contained'
                color='secondary'
                size='large'
                type='submit'
              >
                Submit
              </Button>
            )}
            {status === 'ERROR' && (
              <Typography variant='h4' component='p'>
                Sorry! There was an error!
              </Typography>
            )}
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Contact;
