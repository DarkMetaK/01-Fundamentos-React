import { Comment } from '../Comment'
import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>

      <header>
        <div className={styles.author}>
          <img
            src="https://avatars.githubusercontent.com/u/77026784?v=4"
            className={styles.avatar}
          />
          <div className={styles.info}>
            <strong>Matheus Porto</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time
          title='08 de Janeiro às 16:05h' dateTime='2023-01-08 16:05:00'
        >
        Públicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p><a href=''>jane.design/doctorcare</a></p>
        <p>
          <a href=''>#novoprojeto</a>{' '}
          <a href=''>#nlw</a>{' '}
          <a href=''>#rocketseat</a>
        </p>
      </div>

      <form className={styles.comment}>
        <label htmlFor="comment">Deixe seu feedback</label>
        <textarea
          name="comment"
          id="comment"
          placeholder='Escreva um comentário...'
        />
        <div className={styles.btnContainer}>
          <button>Publicar</button>
        </div> 
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
      
    </article>
  )
}