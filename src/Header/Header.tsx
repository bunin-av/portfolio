import styles from './Header.module.css'
import {Navbar} from "./Navbar/Navbar";
import cont from './../common/styles/Container.module.css'

export function Header() {
    return (
      <header className={styles.header}>
          <div className={`${cont.container} ${styles.wrap}`}>
              <Navbar/>
          </div>
      </header>
    )
}