import styles from './Navbar.module.css'


export function Navbar(){
    return(
      <nav className={styles.nav}>
          <a href="#">Главная</a>
          <a href="#">Навыки</a>
          <a href="#">Проекты</a>
          <a href="#">Контакты</a>
      </nav>
    )
}