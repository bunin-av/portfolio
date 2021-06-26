import styles from './Skills.module.css'
import cont from './../common/styles/Container.module.css'
import {SkillElem} from "./SkillElem/SkillElem";
import {useState} from "react";


export function Skills() {
    const [value, setValue] = useState([
        {
            title: 'React',
            info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam debitis dolore illum minus, officia perspiciatis temporibus voluptatum. At consequatur deserunt illo, molestiae nam pariatur vel. Asperiores at consequuntur vero! Et!',
        },
        {
            title: 'Redux',
            info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam debitis dolore illum minus, officia perspiciatis temporibus voluptatum. At consequatur deserunt illo, molestiae nam pariatur vel. Asperiores at consequuntur vero! Et!',
        },
        {
            title: 'JS/TS',
            info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam debitis dolore illum minus, officia perspiciatis temporibus voluptatum. At consequatur deserunt illo, molestiae nam pariatur vel. Asperiores at consequuntur vero! Et!',
        }
    ])

    return (
      <div className={styles.skills_block}>
          <div className={`${cont.container} ${styles.skills_wrap}`}>
              <h2>Навыки</h2>
              <div className={styles.skill_elem_wrap}>
                  {value.map(el => (
                    <SkillElem title={el.title} info={el.info} key={el.title}/>
                  ))}
              </div>
          </div>
      </div>
    )
}