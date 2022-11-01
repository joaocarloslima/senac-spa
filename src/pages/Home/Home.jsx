import './Home.css'
import { CardElenco } from '../../components/CardElenco/CardElenco'
import { CardFilme } from '../../components/CardFilme/CardFilme'
import { Titulo } from '../../components/Titulo/Titulo'

import TheatersOutlinedIcon from '@mui/icons-material/TheatersOutlined';

function Home() {

  const deadpool = {
    poster: "https://image.tmdb.org/t/p/w200/gkbGBlmjxQK9ZDQgAXmfG877DM4.jpg",
    titulo: "America Horror Story",
    nota: 8.9
  }

  const ator = {
    foto: "https://www.themoviedb.org/t/p/w138_and_h175_face/4SYTH5FdB0dAORV98Nwg3llgVnY.jpg",
    nome: "Ryan Reynolds",
    personagem: "Dead Pool"
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


      <CardElenco ator={ator} />

     </main>
    </div>
  )
}

export default Home
