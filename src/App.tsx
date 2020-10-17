import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  Link,
} from 'react-router-dom';

import Paper from '@material-ui/core/Paper';

import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import About from './pages/About/About';
import Work from './pages/Work/Work';
import ContactMe from './pages/ContactMe/ContactMe';

import styles from './App.module.css';

export const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <div className={styles.container}>
          <nav>
            <ul className={styles.navList}>
              <li className={styles.logo}>
                <Link to="/" className={styles.linkItem}>
                  <p>Logo Here</p>
                </Link>
              </li>
              <li>
                <Link to="/projects" className={styles.linkItem}>
                  <p>Projects</p>
                </Link>
              </li>
              <li>
                <Link to="/about" className={styles.linkItem}>
                  <p>About Me</p>
                </Link>
              </li>
              <li>
                <Link to="/work" className={styles.linkItem}>
                  <p>Work Experience</p>
                </Link>
              </li>
              <li>
                <Link to="/contact" className={styles.linkItem}>
                  <p>Contact Me</p>
                </Link>
              </li>
            </ul>
          </nav>
          <div className={styles.content}>
            <Switch>
              <Redirect from="index.html" to="/" />
              <Route exact path="/" component={Home} />
              <Route exact path="/projects" component={Projects} />
              <Route exact path="/about" component={About} />
              <Route exact path="/work" component={Work} />
              <Route exact path="/contact" component={ContactMe} />
              <Redirect from="*" to="/" />
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;
