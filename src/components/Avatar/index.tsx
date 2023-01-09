import styles from './Avatar.module.css';
import { IAvatarProps } from './types';

export function Avatar({src, border=true, ...props}: IAvatarProps) {
  return(
    <img
      src={src}
      className={border? styles.avatarBorder : styles.avatar}
      {...props}
    />    
  )
}