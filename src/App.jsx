import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import './styles/global.css';
import styles from './App.module.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/77026784?v=4',
      name: 'Matheus Porto',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2023-01-03 20:00:00'),
    comments: [
      {
        id: 1,
        author: {
          avatarUrl: 'https://avatars.githubusercontent.com/u/77026784?v=4',
          name: 'Matheus Porto'
        },
        publishedAt: new Date('2023-01-09 09:35:00'),
        content: 'Muito obrigado pelo apoio pessoal!!',
        applauses: 10
      },
      {
        id: 2,
        author: {
          avatarUrl: 'https://avatars.githubusercontent.com/u/2254731?v=4',
          name: 'Diego Fernandes'
        },
        publishedAt: new Date('2023-01-03 22:10:00'),
        content: 'Ficou fera demais!! Parabénss!!',
        applauses: 23
      }
    ]
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/2254731?v=4',
      name: 'Diego Fernandes',
      role: 'CTO @ RockeSeat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2022-11-24 18:30:00'),
    comments: [
      {
        id: 1,
        author: {
          avatarUrl: 'https://avatars.githubusercontent.com/u/77026784?v=4',
          name: 'Matheus Porto'
        },
        publishedAt: new Date('2022-11-30 10:35:00'),
        content: 'Ficou muito bom!!',
        applauses: 18
      }
    ]
  }
];

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
            <Post 
              author={post.author}
              publishedAt={post.publishedAt}
              content={post.content}
              comments={post.comments}
              key={post.id}
            />
            )
          })}
        </main>
      </div>
    </div>
  )
}

export default App
