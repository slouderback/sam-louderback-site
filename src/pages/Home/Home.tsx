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
          <Paper elevation={6} className={styles.paper} style={{ backgroundColor: '#6D7B9C' }}>
            <p className={styles.paperTitle}>Experience</p>
            <p className={styles.paperDescription}>
              Interned at VidIQ and Channelmeter working with many different
              tools and wearing many different hats. Some roles I have filled
              have been data analyst, back-end engineer, front-end engineer, app
              developer, and friend. I have kicked off enterprise projects
              starting with only basic wireframes and worked on code stacks with
              over 10 years of development.
              <p>Click here to learn more about it!</p>
            </p>
          </Paper>
        </Link>
        <Link to="/projects" className={styles.linkItem}>
          <Paper elevation={6} className={styles.paper} style={{ backgroundColor: '#5B6886' }}>
            <p className={styles.paperTitle}>Projects</p>
            <p className={styles.paperDescription}>
              Currently I am designing a React website for my mother's art to
              help her sell her paintings. If you want a sneak peak check out
              the rest of my projects! In the past ive worked on projects
              centered around algorithim visualization, game creation, and web
              devlopment. Currently my projects are created in C++,
              Golang, Python, and React.
              <p>Click here to learn more about them!</p>
            </p>
          </Paper>
        </Link>

        <Link to="/about" className={styles.linkItem}>
          <Paper elevation={6} className={styles.paper} style={{ backgroundColor: '#49536E' }}>
            <p className={styles.paperTitle}>About Me</p>
            <p className={styles.paperDescription}>
              Hey my name is Sam Louderback! I grew up watching my dad play
              games while on his shoulders so my whole life Ive always been into
              games. Intially I got into programming for games but now im more
              interested in web dev. Outside of tech im really into electric
              skateboarding. Ive been riding my boosted board for a couple of
              years now and I love it. One of my long term goals in life is to
              learn how to fly a plane!
              <p>Click here to learn more about me!</p>
            </p>
          </Paper>
        </Link>
      </div>

      {/* <div className={styles.text}>Home</div> */}
    </div>
  );
};

export default Home;
