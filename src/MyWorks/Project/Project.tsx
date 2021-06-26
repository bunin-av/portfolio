import styles from "./Project.module.css"

export function Project(props: { title: string, description: string, img:string }) {
    return (
      <div className={styles.project_wrap}>
          <img src={props.img} alt='project_pic'/>
          <button>Смотреть</button>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
      </div>
    )
}