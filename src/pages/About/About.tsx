import React, { Component } from 'react';

import styles from './AboutMe.module.css';

export const DashboardHome: React.FC = (props: any) => {
  return (
    <div>
      <div className={styles.text}>
        <p className={styles.paperDescription}>
          Hey my name is Sam Louderback! I grew up watching my dad play games
          while on his shoulders so my whole life Ive always been into games.
          Intially I got into programming for games but now im more interested
          in web dev. Outside of tech im really into electric skateboarding. Ive
          been riding my boosted board for a couple of years now and I love it.
          One of my long term goals in life is to learn how to fly a plane!
        </p>
      </div>
    </div>
  );
};

export default DashboardHome;
