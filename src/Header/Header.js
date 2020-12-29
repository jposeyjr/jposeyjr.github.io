import React, { useState, useEffect } from 'react';
import { Tab, Tabs } from '@material-ui/core';
import { loadCSS } from 'fg-loadcss';
import useStyles from './styles';
import { Link, useLocation } from 'react-router-dom';
import './follow.css';
const Header = () => {
  const [value, setValue] = useState(0);
  const classes = useStyles();

  const { pathname } = useLocation();
  useEffect(() => {
    //adjusting current active tab even with reload and accounting for dynamic blog posts
    switch (pathname) {
      case '/':
        setValue(0);
        break;
      case '/blog':
        setValue(1);
        break;
      case '/contact':
        setValue(2);
        break;
      default:
        setValue(1);
        break;
    }

    //font awesome icons grabbing and settings
    const node = loadCSS(
      'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
      document.querySelector('#font-awesome-css')
    );

    return () => {
      node.parentNode.removeChild(node);
    };
  }, [pathname]);

  return (
    <Tabs
      variant={'fullWidth'}
      className={classes.tabStyles}
      aria-label='navigation bar with home, blog and contact'
      value={value}
      onChange={(e, value) => setValue(value)}
    >
      <Tab
        className={classes.tabItemStyles}
        label={'Home'}
        to='/'
        component={Link}
      />
      <Tab
        className={classes.tabItemStyles}
        label={'Blog'}
        to='/blog'
        component={Link}
      />
      <Tab
        className={classes.tabItemStyles}
        label={'Contact'}
        to='/contact'
        component={Link}
      />
    </Tabs>
  );
};

export default Header;
