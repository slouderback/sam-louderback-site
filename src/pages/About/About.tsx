import React, { Component } from 'react';

import styles from './AboutMe.module.css';


export const DashboardHome: React.FC = (props: any) => {
        return (
            <div>
                <div className={styles.text}>About me!</div>
            </div>
        );
}

export default DashboardHome;