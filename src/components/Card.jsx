import React from 'react'
import styles from '../styles/Card.css'

const Card = (props) => {
  return (
    <div>
      <article className={ styles.card } >
      <div className= { styles.card-image } >
        <img alt="" src={`${props.imageUrl}`} />
      </div>

      <div className="card-content">
        <h2>{props.title}</h2>
        <p>{props.body}</p>
      </div>
    </article>
    </div>
  )
}

export default Card
