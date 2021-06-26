import styles from './Contacts.module.css'
import cont from './../common/styles/Container.module.css'


export function Contacts() {
    return (
      <div className={styles.contacts_block}>
          <div className={`${cont.container} ${styles.contacts_wrap}`}>
              <h2>Контакты</h2>
              <form>
                  <input type='text' name='contacts' placeholder='Имя'/>
                  <input type='text' name='contacts' placeholder='E-mail'/>
                  <textarea name='contacts' placeholder='Ваше сообщение'/>
                  <input type='submit' value='Отправить'/>
              </form>
          </div>
      </div>
    )
}