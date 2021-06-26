import styles from './MyWorks.module.css'
import cont from './../common/styles/Container.module.css'
import {Project} from "./Project/Project";
import {useState} from "react";


export function MyWorks() {
    const [projects, setProjects] = useState([
        {
            title: 'Социальная сеть',
            description: 'Lorem s ds ds d s',
            img: 'balabla'
        },
        {
            title: 'Todo list',
            description: 'Lorem s ds ds d s',
            img: 'balabla'
        },
        {
            title: 'Поиковик книг',
            description: 'Lorem s ds ds d s',
            img: 'balabla'
        },
        {
            title: 'Квиз',
            description: 'Lorem s ds ds d s',
            img: 'balabla'
        },
    ])

    return (
      <div className={styles.myworks_block}>
          <div className={`${cont.container} ${styles.myworks_wrap}`}>
              <h2>Мои проекты</h2>
              <div className={styles.project_elem_wrap}>
              {projects.map(el => <Project
                title={el.title}
                description={el.description}
                img={el.img}
                key={el.title}
              />)}
              </div>
              </div>
      </div>
    )
}