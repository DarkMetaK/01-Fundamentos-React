import { formatDistanceToNow } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';
import { ThumbsUp, Trash } from 'phosphor-react';

import { Avatar } from '../Avatar'

import styles from './Comment.module.css';

export function Comment({id, author, publishedAt, content, applauses, onDeleteComment}){

  const publishDate = publishedAt.toLocaleString('default', {
    year: 'numeric',
    month: 'long',
    day: '2-digit'
  });

  const howLongAgo = formatDistanceToNow(publishedAt, {
    locale: ptBr,
    addSuffix: true
  });

  function handleDeleteComment() {
    onDeleteComment(id);
  }

  return(
    <div className={styles.comment}>
      <Avatar 
        border={false}
        src={author.avatarUrl}
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>

          <header>
            <div className={styles.authorAndTime}>
              <strong>{author.name}
                {author.name === 'Matheus Porto' && <span className={styles.you}> (você)</span>}
              </strong>
              <time
                title={`${publishDate} às ${publishedAt.toLocaleTimeString('default', {
                  hour: '2-digit', 
                  minute:'2-digit'
                })}h`}
                dateTime={publishedAt.toLocaleString()}
              >
              {howLongAgo}
              </time>
            </div>
            {author.name === 'Matheus Porto' && (
              <button
                onClick={handleDeleteComment}
                title='Deletar comentário'
              >
                <Trash size={24}/>
              </button> 
            )}
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>{applauses}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}