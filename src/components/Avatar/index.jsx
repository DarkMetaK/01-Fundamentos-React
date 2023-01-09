import styles from './Avatar.module.css';

export function Avatar({src, border=true}) {
  return(
    <img
      src={src}
      className={border? styles.avatarBorder : styles.avatar}
    />    
  )
}