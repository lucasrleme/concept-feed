import styles from './Avatar.module.css'

export function Avatar({ hasBorder = true, src }){ //desestruturação js, especificando quais props eu quero manipular
  return (
    <img 
      src={src}
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
    />
  );
}