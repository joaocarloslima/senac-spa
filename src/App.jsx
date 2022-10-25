import './App.css'
import { CardElenco } from './components/CardElenco/CardElenco'
import { CardFilme } from './components/CardFilme/CardFilme'
import { Titulo } from './components/Titulo/Titulo'
import TheatersOutlinedIcon from '@mui/icons-material/TheatersOutlined';

function App() {

  const deadpool = {
    poster: "https://image.tmdb.org/t/p/w200/tdVPICyJLENwgmZHr8RsOgeWoyP.jpg",
    titulo: "Deadpool",
    nota: 8.9
  }

  return (
    <div className="App">
     <header>
      <TheatersOutlinedIcon fontSize='large' />
      <h1>Senac Filmes</h1>
     </header>

     <main>
      <Titulo texto="Filmes em alta" />

        <section className="filmes">
          <CardFilme filme={deadpool} />
          <CardFilme filme={deadpool} />
        </section>


      <Titulo texto="Séries em alta" />

     </main>
    </div>
  )
}

export default App
