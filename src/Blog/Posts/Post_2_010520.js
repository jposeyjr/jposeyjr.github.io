import React, { Fragment } from 'react';
import { Typography } from '@material-ui/core';
import img from '../../images/pihole.png';

const content = (
  <Fragment>
    <Typography variant='h6' component='h2' paragraph>
      Build You Own Ad Blocker
    </Typography>
    <Typography paragraph component='p'>
      It has been busy with my final week of school and completing our group
      client project. It came together amazingly and if you want to look at the
      result check out the project section on the main page. Doing the whole
      project remotely in a team was a great experience and the client loved the
      final results! After I finished and graduated I wanted to combine my
      software knowledge with hardware. I got a raspberry pi as I've read it is
      one of the best all in one system to start with.
    </Typography>
    <Typography paragraph component='p'>
      While I was waiting for my PI to come in the mail I started looking up
      what projects I wanted to make and things that I could do with it. I found
      a lot of options and also that I would want some more things! I went ahead
      and ordered an Arduino board and some parts to make an invention I had in
      mind. As I was looking at PI projects I knew I wanted to use PI-Hole.
    </Typography>
    <Typography paragraph component='p'>
      PI-Hole runs on your network and blocks ads for all your devices that are
      connected be it a phone with mobile games, laptop, or desktop it will
      block the ads! Super amazing and helps not only prevent annoying ads it
      also helps prevent viruses as many of them come from ads embedded in
      sites.
    </Typography>
    <Typography variant='h6' component='h3' paragraph>
      The Set Up
    </Typography>
    <Typography component='p' paragraph>
      So if you don't have one you will need a raspberry pi, sd card and I would
      get the cana kit as they are a great deal and come with everything you
      need. Once you have that if you got the kit with noobs (the OS for the PI)
      you can just start it up and should see a desktop. If it didn't come with
      noobs installed or you want a different OS you can follow guides that walk
      you through installing it for your OS of choice and get it booted up.
    </Typography>
    <Typography component='p' paragraph>
      Once you got it booted up and going you can now install PI-Hole using I
      recommend going to their site and you can walk through their how to
      install. I don't want to get into the specifics of the install or setup of
      PI-Hole as that can vary greatly on your network setup. Just know there
      are tons of guides and youtube videos for every type of setup out there. I
      had some issues with the need to set it up as a DHCP server instead of the
      normal route and was quickly able to google the answer to my problem.
    </Typography>
    <Typography component='p' paragraph>
      Once you have it installed and set up, you can go to the admin board which
      is the image above. It will show you all the stats for things it has
      blocked and this number will quickly go up each day as you start to browse
      more. It is truly amazing and scary to see the number of block queries and
      dominions each day. You will still get some ads and for that, I have the
      normal adblocker extension installed to prevent any that happen to get
      through but it is very rare.
    </Typography>
  </Fragment>
);

const post_2_Obj = {
  id: 2,
  date: new Date(2020, 0, 5).toDateString(),
  title: 'RaspberryPi Hole',
  blogImg: img,
  snippet: `It has been busy with my final week of school and completing our group client project. It came together amazingly and if you want to look at the
    result check out the project section on the main page.`,
  content: content,
};

export default post_2_Obj;
