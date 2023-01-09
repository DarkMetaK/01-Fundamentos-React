import { ThumbsUp, Trash } from 'phosphor-react';

import { Avatar } from '../Avatar'

import styles from './Comment.module.css';

export function Comment(){
  return(
    <div className={styles.comment}>
      <Avatar 
        border={false}
        src='https://avatars.githubusercontent.com/u/77026784?v=4'
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>

          <header>
            <div className={styles.authorAndTime}>
              <strong>Matheus Porto <span className={styles.you}>(você)</span></strong>
              <time
              title='08 de Janeiro às 14:05h' dateTime='2023-01-08 14:05:00'
              >
              Cerca de 2h atrás
              </time>
            </div>
            <button title='Deletar comentário'>
              <Trash size={24}/>
            </button>
          </header>

          <p>Muito bom Devon, parabénss!!</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>23</span>
          </button>
        </footer>
      </div>
    </div>
  )
}