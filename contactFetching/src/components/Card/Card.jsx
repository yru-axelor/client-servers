import React from 'react'
import styles from './Card.module.css'
import profile from './../../assets/profile.png'
export const Card = ({ user }) => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <img className={styles.img} src={profile} alt="profile" />
      </div>
      <div className={styles.right}>{user.firstName} {user.lastName}</div>
    </div>
  )
}
