import React from 'react'
import styles from './styles/dashnavigation.module.css'
const DashNavigation = () => {
  return (
    <div className={styles.navigation}>
        <ul>
          <li>
            <a className={styles.navigationLinks} href="/addepisodes">
              Add episodes
            </a>
          </li>
          <li>
            <a className={styles.navigationLinks} href="#">
              Users
            </a>
          </li>
          <li>
            <a className={styles.navigationLinks} href="#">
              Comments
            </a>
          </li>
          <li>
            <a className={styles.navigationLinks} href="#">
              Edit
            </a>
          </li>
          <li>
            <a className={styles.navigationLinks} href="#">
              Subscriptions
            </a>
          </li>
        </ul>
      </div>
  )
}

export default DashNavigation