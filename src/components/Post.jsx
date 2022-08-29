import styles from './Post.module.css'

export function Post(){
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img 
            src="https://github.com/lucasrleme.png" 
            alt="" 
            className={styles.avatar}
          />
          <div className={styles.authorInfo}>
            <strong>
              Lucas Leme
            </strong>
            <span>
              Web Developer
            </span>
          </div>
        </div>

        <time title='11 de Maio às 8:00' dateTime='2022-05-11 08:00:45'>
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>👉{' '} <a href='#'>jane.design/doctorcare</a></p>
        <p>
          <a href='#'>#novoprojeto</a> {' '}
          <a href="#">#nlw</a> {' '}
          <a href="#">#Rocketseat</a></p>
      </div>
    </article>
  )
}