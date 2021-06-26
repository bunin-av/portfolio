import styles from './Footer.module.css'
import cont from './../common/styles/Container.module.css'

export function Footer() {
    return (
      <footer className={styles.footer}>
          <div className={`${cont.container} ${styles.wrap}`}>
             <span>Александр Бунин</span>
              <div className={styles.icons}>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
              </div>
              <span>© 2021 Все права защищены</span>
          </div>
      </footer>
    )
}