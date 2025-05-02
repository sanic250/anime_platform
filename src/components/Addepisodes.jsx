import React from 'react'
import Dashboard from './Dashboard'
import styles from './styles/addepisodes.module.css';
import DashNavigation from './DashNavigation';
const Addepisodes = () => {
  return (
    <div className={styles.container}>
      <DashNavigation />
      <div className={styles.addForm}>
          <form className={styles.form}>
            <label className={styles.labels} htmlFor='title'>
            Title
              <input type='text' placeholder='Title..'/>
            </label>
            <label className={styles.labels}>
              Description
              <textarea placeholder='Description' />
            </label>
            <label className={styles.labels}>
            Cover Image
              <input type='file' placeholder='Image...'/>
            </label>
            <label className={styles.labels}>
            Video
              <input type='file' name='video' accept='.mp4, .webm, .mkv' placeholder='Source...' />
            </label>
            <label className={styles.labels}>
            Episode number
              <input type='number' name='number' min='1' required/>
            </label>

            <button type='submit' className={styles.buttonAdd}>Add</button>
          </form>
      </div>
    </div>
  )
}

export default Addepisodes