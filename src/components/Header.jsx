import React from 'react'
import styles from './Header.module.css';
import Box from '@mui/material/Box';
import { alignProperty } from '@mui/material/styles/cssUtils';

const Header = () => {
  return (
    <div className={styles.head}>
    <Box className={styles.section} sx={{ p: 2}}>
    <h2>Simple,traffic-based pricing</h2>
        <p>Sign-up for our 30-day trial.No credit card required</p>
     </Box>
     </div>
  )
}

export default Header