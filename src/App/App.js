import React, { useEffect } from 'react';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Blog from '../Blog/Blog';
import Posts from '../Blog/Posts/Posts';
import Contact from '../Contact/Contact';
import EachPost from '../Blog/EachPost/EachPost';
//styles
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
//utilities
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: 'SET_POSTS', payload: Posts });
  }, [dispatch]);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header />
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/contact'>
          <Contact />
        </Route>
        <Route exact path='/blog'>
          <Blog />
        </Route>
        {Posts.map((posts) => (
          <Route key={posts.id} exact path={'/blog/' + posts.id}>
            <EachPost key={posts.id} />
          </Route>
        ))}
      </Router>
    </ThemeProvider>
  );
};

export default App;
