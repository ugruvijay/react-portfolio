import { Container, Grid } from '@material-ui/core';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Portfolio from './pages/Portfolio/Portfolio';
import Resume from './pages/Resume/Resume';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Container className={'top_60'}>
      <Grid container spacing={8}>
        <Grid item lg={3} md={4} sm={12} xs={12}>
          <Profile />
        </Grid>

        <Grid item xs>
          <Router>
            <Header />
            <div className='main_content container_shadow'>
              <Switch>
                <Route path='/portfolio'>
                  <Portfolio />
                </Route>
                <Route path='/'>
                  <Resume />
                </Route>
              </Switch>
            </div>
            
          </Router>

          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
