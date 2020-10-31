import React, { Component } from 'react';

import styles from './Projects.module.css';

export const Projects: React.FC = (props: any) => {
  return (
    <div>
      <div className={styles.text}>
        <p className={styles.paperDescription}>
          Currently I am designing a React website for my mother's art to help
          her sell her paintings. If you want a sneak peak check out the rest of
          my projects! In the past ive worked on projects centered around
          algorithim visualization, game creation, and web devlopment. Currently
          my projects are created in C++, Golang, Python, and React.
        </p>
      </div>
    </div>
  );
};

export default Projects;
