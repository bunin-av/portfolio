import styles from './SkillElem.module.css'


export function SkillElem(props:{title:string, info:string}) {
    return (
      <div className={styles.skill_wrap}>
          <div className={styles.skill_icon}>
              <img src='#' alt='icon'/>
          </div>
          <h3>{props.title}</h3>
          <span className={styles.skill_info}>{props.info}</span>
      </div>
    )
}