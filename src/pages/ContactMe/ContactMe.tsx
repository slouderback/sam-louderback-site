import React, { Component } from 'react';

import styles from './ContactMe.module.css';

export const ContactMe: React.FC = (props: any) => {
  return (
    <div>
      <div className={styles.text}>Contact me!</div>
    </div>
  );
};

export default ContactMe;
