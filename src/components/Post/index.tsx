import { ChangeEventHandler, FormEvent, useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';

import { Avatar } from '../Avatar'
import { Comment } from '../Comment'

import styles from './Post.module.css'
import { IPostProps } from './types';
import { ICommentProps } from '../Comment/types';

export function Post({ author, publishedAt, content, comments }: IPostProps) {

  const [existingComments, setExistingComments] = useState<Array<ICommentProps>>(comments);
  const [newCommentText, setNewCommentText] = useState<string>('');

  const publishDate = publishedAt.toLocaleString('default', {
    year: 'numeric',
    month: 'long',
    day: '2-digit'
  });

  const howLongAgo = formatDistanceToNow(publishedAt, {
    locale: ptBr,
    addSuffix: true
  });

  function handleNewCommentChange(event: any) {
    setNewCommentText(event.target.value);
  }

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();
    setExistingComments([...existingComments, {
        id: existingComments.length + 1,
        author: {
          avatarUrl: 'https://avatars.githubusercontent.com/u/77026784?v=4',
          name: 'Matheus Porto'
        },
        publishedAt: new Date(),
        content: newCommentText,
        applauses: 0
    }]);
    setNewCommentText('');
  }

  function deleteComment(commentToDeleteId: Number) {
    const commentsWithoutDeletedOne = existingComments.filter((item) => {
      return item.id !== commentToDeleteId
    })
    setExistingComments(commentsWithoutDeletedOne);
  }
  
  return (
    <article className={styles.post}>

      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.info}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time
          title={`${publishDate} às ${publishedAt.toLocaleTimeString('default', {
            hour: '2-digit', 
            minute:'2-digit'
          })}h`}
          dateTime={publishedAt.toLocaleString()}
        >
        {`Publicado ${howLongAgo}`}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((item) => {
          return(
            <p key={item.content}>
              {item.type === 'link' ? <a href=''>{item.content}</a> : item.content}
            </p>
          )
        })}
        <p>
          <a href=''>#novoprojeto</a>{' '}
          <a href=''>#nlw</a>{' '}
          <a href=''>#rocketseat</a>
        </p>
      </div>

      <form className={styles.comment} onSubmit={handleCreateNewComment}>
        <label htmlFor="comment">Deixe seu feedback</label>
        <textarea
          name="comment"
          id="comment"
          placeholder='Escreva um comentário...'
          onChange={handleNewCommentChange}
          value={newCommentText}
          required
        />
        <div className={styles.btnContainer}>
          <button disabled={!newCommentText}>Publicar</button>
        </div> 
      </form>

      <div className={styles.commentList}>
        {existingComments.map((item) => {
          return(
            <Comment 
              key={item.id}
              id={item.id}
              author={item.author}
              publishedAt={item.publishedAt}
              content={item.content}
              applauses={item.applauses}
              onDeleteComment={deleteComment}
            />  
          )
        })}
      </div>
      
    </article>
  )
}