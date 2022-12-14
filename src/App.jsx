
import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import './globals.css'
import styles from './App.module.css'

//fake data
const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/lucasrleme.png',
      name: 'Lucas Leme',
      role: 'Web Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa π'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. Γ um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto Γ© DoctorCare π'},
      {type: 'link', content:'πjane.design/doctorcare'},
  
    ],
    publishedAt: new Date ('2022-05-03 20:00:00'),
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'front-end Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa π'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. Γ um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto Γ© DoctorCare π'},
      {type: 'link', content:'πjane.design/doctorcare'},
  
    ],
    publishedAt: new Date ('2022-05-10 20:00:00'),
  },
]

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

