import React from 'react';
import styles from './App.css';

const App = () => (
  <div className={styles.app}>
    <h2>Hello, Universe!</h2>
    <div className={styles.circle}></div>
    <div className={styles.isoscelesTriangle}></div>
    <div className={styles.rightIsoscelesTriangle}></div>
    <div className={styles.equilateralTriangle}></div>
  </div>
);

export default App;
