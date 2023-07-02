import React from 'react'
import styles from "../styles/Advertise.module.css";


const Advertise = () => {
  return (
    <div className={styles.box}>
        <h1>Join 292K travelers</h1>
        <ul>
            <li>
                <p>icon</p>
                <p>Unlock all filters</p>
            </li>
            <li>
                <p>icon</p>
                <p>Member-only data</p>
            </li>
            <li>
                <p>icon</p>
                <p>Ad-free experience</p>
            </li>
            <li>
                <p>icon</p>
                <p>All new features</p>
            </li>
            <li>
                <p>icon</p>
                <p> Keep track of travels</p>
            </li>
            <li>
                <p>icon</p>
                <p> Community chat</p>
            </li>

        </ul>
        <button>Unlock Travels Super Power</button>
    </div>
  )
}

export default Advertise