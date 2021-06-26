import styles from './Main.module.css'
import cont from './../common/styles/Container.module.css'


export function Main() {
    return (
      <div className={styles.main}>
          <div className={`${styles.wrapper} ${cont.container}`}>
              <div className={styles.aboutMe}>
                  <span>Привет</span>
                  <h1>Меня зовут Александр Бунин</h1>
                  <p>Front-end разработчик</p>
              </div>
              <div className={styles.myPhoto}></div>
          </div>
      </div>
    )
}