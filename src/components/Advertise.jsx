import React from 'react'
import styles from "../styles/Advertise.module.css";
import check from '../assets/check.svg'


const Advertise = () => {
  return (
    <div className={styles.box}>
        <h1 className={styles.title}>Join 292K travelers</h1>
        <ul className={styles.ulist}>
            <li className={styles.elt}>
                
                <img className={styles.icon} src={check}alt="" />
                <p>Unlock all filters</p>
            </li>
            <li className={styles.elt}>
                <img className={styles.icon} src={check}alt="" />
                <p>Member-only data</p>
            </li>
            <li className={styles.elt}>
                <img className={styles.icon} src={check}alt="" />
                <p>Ad-free experience</p>
            </li>
            <li className={styles.elt}>
                <img className={styles.icon} src={check}alt="" />
                <p>All new features</p>
            </li>
            <li className={styles.elt}>
                <img className={styles.icon} src={check}alt="" />
                <p> Keep track of travels</p>
            </li>
            <li className={styles.elt}>
                <img className={styles.icon} src={check}alt="" />
                <p> Community chat</p>
            </li>

        </ul>
        <button className={styles.button}>Unlock Travels Super Power</button>
    </div>
  )
}

export default Advertise