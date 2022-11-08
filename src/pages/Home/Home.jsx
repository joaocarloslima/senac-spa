import './Home.css'
import { CardElenco } from '../../components/CardElenco/CardElenco'
import { CardFilme } from '../../components/CardFilme/CardFilme'
import { Titulo } from '../../components/Titulo/Titulo'
import { CircularProgress } from '@mui/material';
import useAxios from 'axios-hooks'

import TheatersOutlinedIcon from '@mui/icons-material/TheatersOutlined';

function Home() {
  const url = "https://api.themoviedb.org/3/trending/movie/week?api_key=1e922667481ab207d642450b0efb461e"
  const [ {data, loading, error}] = useAxios(url);

  if(loading){
    return (
      <>
        <CircularProgress />
        <p>carregando...</p>
      </>
    )
  }

  if(error) return (<p>Um erro aconteceu - {error.message}</p>)

  const filmes = data.results

  return (
    <div className="App">
     <header>
      <TheatersOutlinedIcon fontSize='large' />
      <h1>Senac Filmes</h1>
     </header>

     <main>
      <Titulo texto="Filmes em alta" />

        <section className="filmes">
          { filmes.map(filme => <CardFilme filme={filme} />) }
        </section>


      <Titulo texto="Séries em alta" />


     

     </main>
    </div>
  )
}

export default Home
