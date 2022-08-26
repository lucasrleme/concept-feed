
import { Header } from './components/Header'
import { Post } from './components/Post'

export function App() {

  return (
    <div>
      <Header />

      <Post 
        author="Lucas"
        content="Testing"
      />
      <Post 
        author="João"
        content="Testing 2"
      />
    </div>
  )
}

