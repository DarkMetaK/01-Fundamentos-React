import { PencilLine } from 'phosphor-react';

import { Avatar } from '../Avatar';

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
        <Avatar src='https://avatars.githubusercontent.com/u/77026784?v=4' />
        <strong>Matheus Porto</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href=""><PencilLine size={20}/>Editar seu Perfil</a>
      </footer>
    </aside>
  )
}