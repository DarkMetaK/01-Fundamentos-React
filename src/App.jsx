import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import './styles/global.css';
import styles from './App.module.css'

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
          author="Matheus Porto"
          content="Lorem ipsum"
          />
          <Post
            author="Diego Fernandes"
            content="Hello World"
          />
        </main>
      </div>
    </div>
  )
}

export default App
