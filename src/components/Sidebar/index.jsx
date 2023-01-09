import { PencilLine } from 'phosphor-react';

import styles from './Sidebar.module.css';
import cover from '../../assets/cover-template.png';

export function Sidebar() {
  return (
    <aside className={styles.card}>
      <img
        src={cover}
        className={styles.cover}
      />

      <div className={styles.profile}>
        <img
          src="https://avatars.githubusercontent.com/u/77026784?v=4"
          className={styles.avatar}
        />
        <strong>Matheus Porto</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href=""><PencilLine size={20}/>Editar seu Perfil</a>
      </footer>
    </aside>
  )
}