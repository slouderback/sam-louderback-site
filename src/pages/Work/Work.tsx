import React, { Component } from 'react';

import styles from './Work.module.css';

export const Work: React.FC = (props: any) => {
  return (
    <div>
      <div className={styles.text}>
        <p className={styles.paperDescription}>
          Interned at VidIQ and Channelmeter working with many different tools
          and wearing many different hats. Some roles I have filled have been
          data analyst, back-end engineer, front-end engineer, app developer,
          and friend. I have kicked off enterprise projects starting with only
          basic wireframes and worked on code stacks with over 10 years of
          development.
        </p>
      </div>
    </div>
  );
};

export default Work;
