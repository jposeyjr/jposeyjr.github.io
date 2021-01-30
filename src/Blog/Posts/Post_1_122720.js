import React, { Fragment } from 'react';
import { Typography } from '@material-ui/core';
import img from '../../images/coding-924920_1920.jpg';

const content = (
  <Fragment>
    <Typography variant='h6' component='h2' paragraph>
      Find My Lost Love
    </Typography>
    <Typography paragraph component='p'>
      If you ask any of my friends about me and my potential career paths most
      will chuckle as it has often changed. I have always had the ability to
      quickly pick up and learn just about anything I have ever wanted. Making
      it very hard to narrow down what I wanted to do, as I could do anything.
      From joining the military, volunteering and other jobs I did learn quickly
      that I enjoyed helping others the most. With that being said that didn’t
      help me much as you can help others in so many different ways.
    </Typography>
    <Typography paragraph component='p'>
      So I started to study and try different careers out by shadowing, talking
      with others, volunteering, etc. I was able to find some that I did like
      and some I didn’t but none of them just made me lose track of time or
      eager to start doing it every day outside regardless of what the previous
      frustrations of the day might have held.
    </Typography>
    <Typography paragraph component='p'>
      Then we have coding which I have always dabbled in programming here and
      there for different little projects mainly to help make my gaming
      experience easier. For example I made a program that would accept an item
      name and price and then it would type out a string with those variables to
      runescape over and over. But I never took it past that point, I would
      learn the information I needed to make the simple program I needed,
      enjoyed it and then moved on. The price tag and price of college prevented
      me from ever truly pursuing it as a career as it seemed that was a needed
      item.
    </Typography>
    <Typography variant='h6' component='h3' paragraph>
      The Journey Begins
    </Typography>
    <Typography component='p' paragraph>
      Fast forward to this year and I kept looking at schools for computer
      sciences, bootcamps, tech-school and more. I started researching people
      getting into the field, how they did it, what was needed, etc. I saw that
      you could enter the field without a degree though not as easy or quickly
      as it was possible and that made it at least something I felt like I could
      strive for. My wife helped push me to go to a school and get it started
      and luckily I was able to use the vet-tech program to pay for it so I was
      able to take my chance.
    </Typography>
    <Typography component='p' paragraph>
      I started my classes in Oct with very little knowledge. I had a very basic
      understanding of programming as a whole. Some knowledge of HTML, CSS, and
      Python but my first site looked like something from the 1990s. At this
      point only a few months later my current skill set includes the follow:
      HTML5, CSS3, JAVASCRIPT, PYTHON, EXPRESS, NODE, REACT, MATERIAL-UI,
      REACT-SAGAS, POSTGRESQL, MONGODB, AND PUPPETEER.
    </Typography>
    <Typography component='p' paragraph>
      I wake up every morning excited to learn something new, code some project
      ideal I have and just digging into programming as a whole. I spend each
      day looking up one new thing, using it one of my projects. It feels
      amazing to know I'm able to create something from nothing that can help
      others in so many different ways. The depths of applications that you can
      apply your programming knowledge too is amazing and far reaching. Meaning
      the amount of people that you can help is equally far reaching and I love
      it!
    </Typography>
  </Fragment>
);

const post_1_Obj = {
  id: 1,
  date: new Date(2019, 11, 27).toDateString(),
  title: 'Finding True Love #Coding',
  blogImg: img,
  snippet:
    'I almost gave up hope I would ever find my passion or calling in life. I thought I was stuck being a generalist / jack of all type of person. Then I dove into coding seriously... ',
  content: content,
};

export default post_1_Obj;
