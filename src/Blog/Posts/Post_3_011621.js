import React, { Fragment } from 'react';
import { Typography, Link } from '@material-ui/core';
import img from '../../images/pacman.png';

const content = (
  <Fragment>
    <Typography variant='h6' component='h2' paragraph>
      Javascript Game Making
    </Typography>
    <Typography paragraph component='p'>
      Over the weekend I wanted to learn how to make a game in Javascript. I
      took the time to research out different engines and libraries I could use
      and specifically looking for one that would work with React if possible.
      It turns out with the way React works that is a very hard task! I did find
      a couple options and I'll tell you why I choose Three.js
    </Typography>
    <Typography paragraph component='p'>
      When looking to make a game specifically Pacman to pay homage to my
      classes call back waka waka. I found there are a lot of options when it
      comes to making a game in Javascript. You can use anything from the
      default Canvas to load images and perform actions all the way up to full
      fledge engines like Babylon. Of the many options only a couple had the
      ability to easily work with React without a lot of work, one of which was
      Three.js.
    </Typography>
    <Typography paragraph component='p'>
      Three.js overall got chosen as it was the only one to have not only a
      react wrapper package someone made. But the most resources for learning a
      long with very good official documents. Whenever learning something new
      I've always found it best to not only pick the best option you can but
      also one that can has a lot of resources and places to gather information.
      If you know the subject well in general this is less of an issue as you
      have foundational knowledge to build off of. Without that and limited
      resources you can end up in a very tricky spot.
    </Typography>
    <Typography variant='h6' component='h3' paragraph>
      How I Made Pacman (Clone)
    </Typography>
    <Typography component='p' paragraph>
      As a normal disclaimer I don't own the rights the likeness or images used
      to render the game I got them from classicgaming. With that out of the way
      lets go through how I went from knowing nothing about bigger game design
      to a full fledge working(ish) game. Once I knew I wanted to use Three.js I
      started to work on the basics. Never try to run before you can crawl, I
      started with just basic image rendering, different shapes and learning how
      things worked. I used the official documents to get an understanding of
      the core concepts and went to a combination of reddit and youtube to
      deepen my understanding of those core concepts. One big thing I learned a
      long the way is that I LOVE game design and the full process and will be
      looking to expand on that.
    </Typography>
    <Typography component='p' paragraph>
      After finding my love for game design I also found the struggles which I
      both love and hate at times. The challenge that programming brings truly
      gets my brain firing and hyped up. But it also causes me to get annoyed at
      times as I know most of the time my issue is something simple, as I
      generally keep each piece of code in small bites to prevent massive
      mistakes. Game design brings in a lot of fun challenges one of which is
      trying to stay DRY. If your not familiar with the word DRY in software
      context it stands for Do not Repeat Yourself, meaning if your doing the
      same thing over and over in your code there is likely a better way to do
      it. With game design this seemed to be a daunting tasks and one I still
      didn't fully achieve.
      <Link href='https://jposeyjr.github.io/solo-spike/' color='secondary'>
        Pacman Playable Game
      </Link>
    </Typography>
    <Typography component='p' paragraph>
      But I did get close and for the most part have a fully working game. One
      of the neat tricks I learned while doing research and learning about not
      only pacman but game design is the use of Arrays for maps. Game developers
      will use normal text characters in an array to render out full worlds.
      Looping through the array and calling each render method for the respected
      text character it represents. This was an amazingly efficient way to not
      only make the world without calling 100s of methods over and over again
      but also an elegant way to stay DRY. I learned a lot from this project
      over the weekend I spent learning Three.js and designing the game. It is
      still not perfect (restart loop has an issue). But for my first full game
      I'm proud of it and once I have more time I would like to polish it up
      some more. You can use the following link to play the full game!
      <Link href='https://jposeyjr.github.io/solo-spike/' color='secondary'>
        Pacman Playable Game
      </Link>
    </Typography>
  </Fragment>
);

const post_3_Obj = {
  id: 3,
  date: new Date().toDateString(),
  title: 'Making A Game In JS',
  blogImg: img,
  snippet: `When looking to make a game specifically Pacman to pay homage to my
    classes call back waka waka. I found there are a lot of options when it
    comes to making a game in Javascript. You can use anything from the
    default Canvas to load images and perform actions all the way up to full
    fledge engines like Babylon.`,
  content: content,
};

export default post_3_Obj;
