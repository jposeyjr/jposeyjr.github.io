import React, { Fragment } from 'react';
import { Typography, Link } from '@material-ui/core';
import img from '../../images/coffee-2691_640.jpg';

const content = (
  <Fragment>
    <Typography variant='h6' component='h2' paragraph>
      Learning Java 2021
    </Typography>
    <Typography paragraph component='p'>
      Java the old language that seems to never die yet is always said to be
      dying. But why Java? Because when doing research into the next language I
      wanted to learn I had a couple of requirements. One I wanted it to have a
      lot of job posting. Two it had to be able to be used for backend as I
      wanted another tool in my belt. Three it had to do something that
      Javascript didn't do or do well.That leads me to a couple languages and
      Java checked the most boxes. Go was a close runner up and if it had more
      job listings I would of hands down chosen it. Once in a role, I will learn
      it next, as it is amazing.
    </Typography>
    <Typography paragraph component='p'>
      I will say I was shocked when looking for resources to learn Java and
      found it rather sparse. You other had very out-dated tutorials though
      solid and useable had some syntax that was no longer best practice. Then
      you had books or videos both being paid if you wanted anything quality
      which is fine but odd for such an old language. Lastly, you had tutorials
      that were of good quality but didn't go deep into the language and only
      covered very basic syntax that didn't offer much to someone that knew one
      language.
    </Typography>
    <Typography paragraph component='p'>
      I found a Udemy course as that best option and paid the $10 to get started
      and have a solid road map to follow to limit wasting time piecing together
      resources. So far I'm loving everything about it especially Intellij it is
      such a mature IDE gear to make coding in Java so much quicker and easier.
      A lot of what I didn't like about Java when I first say it is partially
      fixed by Intellij, instead of typing out System.out.println("blah blah
      blah") simply typing sout and it is done. Similarly for generating
      constructors, getters, setters, etc. All can be done with a short line of
      code or a shortcut! Version control flow seems to be the only shortcoming
      and that might be my inexperience with it. I did try Vscode and did like
      it but felt it still needs some time and work.
    </Typography>
    <Typography variant='h6' component='h3' paragraph>
      Fixing The Issue
    </Typography>
    <Typography component='p' paragraph>
      Needless to say, it has been a very fun start but a little rocky. One of
      my old bosses used to say you can always come to me with problems BUT you
      better have at least one solution before you talk to me. Which I always
      thought was a great approach and mindset to have. With my Java learning
      journey, I found it very clear there is a need for newer refreshed
      tutorials that are FREE for beginner and intermitted programmers. Even
      though Java might be dying (i.e 2nd most job positions in the US) I think
      it is 100% worth making new content for.
    </Typography>
    <Typography component='p' paragraph>
      With that being said I started a youtube channel to help others learn Java
      with me for free. I will teach the fundamentals of Java with job
      interviews in mind and lead all the way up to backend server usage of Java
      with modern technologies and legacy usage. You can find that here at
      <Link
        href='https://www.youtube.com/channel/UCnPT8iGT-4fnmsiR8CwQH8Q'
        color='secondary'
      >
        {' '}
        Java Lesson One
      </Link>
      . Please like and subscribe to the channel to stay up to date on my latest
      videos!
    </Typography>
  </Fragment>
);

const post_2_Obj = {
  id: 2,
  date: new Date(2020, 0, 5).toDateString(),
  title: 'Learning Java 2021',
  blogImg: img,
  snippet:
    "Java the old language that seems to never die yet is always said to be dying. But why Java? Because when doing research into the next language I wanted to learn I had a couple of requirements. One I wanted it to have a lot of job posting. Two it had to be able to be used for backend as I wanted another tool in my belt. Three it had to do something that Javascript didn't do or do well.",
  content: content,
};

export default post_2_Obj;
