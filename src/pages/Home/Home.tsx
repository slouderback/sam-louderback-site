import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Paper from '@material-ui/core/Paper';

import styles from './Home.module.css';

export const Home: React.FC = (props: any) => {
  return (
    <div className={styles.container}>
      <div className={styles.profilePictureContainer}>
        <img
          src={require('../../ImageResources/leafPictureResized.jpg')}
          className={styles.profilePicture}
        />
      </div>
      <div className={styles.homeText}>
        <h1>Sam Louderback</h1>
        <p className={styles.description}>
          I'm a third year Computer Science student at UC Davis.
        </p>
        <p className={styles.description}>
          Im interested in full stack web devlopment. Currently i'm not actively
          looking for any work but feel free to reach out if you want!
        </p>
      </div>
      <div className={styles.cards}>
        <Link to="/work" className={styles.linkItem}>
          <Paper
            elevation={6}
            className={styles.paper}
            style={{ backgroundColor: '#6D7B9C' }}
          >
            <p className={styles.paperTitle}>Experience</p>
            <p className={styles.paperDescription}>
              <p className={styles.bulletPoint}>
                Internships at VidIQ and Channelmeter
              </p>
              <p className={styles.bulletPoint}>
                Data analyst, back-end engineer, front-end engineer, app
                developer, and friend
              </p>
              <p className={styles.bulletPoint}>
                Click here to learn more about it!
              </p>
            </p>
          </Paper>
        </Link>
        <Link to="/projects" className={styles.linkItem}>
          <Paper
            elevation={6}
            className={styles.paper}
            style={{ backgroundColor: '#5B6886' }}
          >
            <p className={styles.paperTitle}>Projects</p>
            <p className={styles.paperDescription}>
              <p className={styles.bulletPoint}>
                Full stack React sites (MERN), algorithim visualization, game
                creation
              </p>
              <p className={styles.bulletPoint}>
                C++, Golang, Python, HTML/CSS/JS, React, Node.js
              </p>
              <p className={styles.bulletPoint}>
                Click here to learn more about them!
              </p>
            </p>
          </Paper>
        </Link>

        <Link to="/about" className={styles.linkItem}>
          <Paper
            elevation={6}
            className={styles.paper}
            style={{ backgroundColor: '#49536E' }}
          >
            <p className={styles.paperTitle}>About Me</p>
            <p className={styles.paperDescription}>
              <p className={styles.bulletPoint}>
                Hey my name is Sam Louderback!
              </p>
              <p className={styles.bulletPoint}>
                Im interested in web dev, electric skateboarding, and
                photography.
              </p>
              <p className={styles.bulletPoint}>
                One of my long term goals in life is to learn how to fly a
                plane!
              </p>
              <p className={styles.bulletPoint}>
                Click here to learn more about me!
              </p>
            </p>
          </Paper>
        </Link>
      </div>

      {/* <div className={styles.text}>Home</div> */}
    </div>
  );
};

export default Home;
