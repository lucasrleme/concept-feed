
import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import './globals.css'
import styles from './App.module.css'


export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Lucas"
            content="Testing"
          />
          <Post 
            author="João"
            content="Testing 2"
          />
        </main>
      </div>
    </div>
  )
}

