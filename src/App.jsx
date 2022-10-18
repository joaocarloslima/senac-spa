import './App.css'
import { Titulo } from './Titulo'

function App() {

  return (
    <div className="App">
     <h1>Senac Filmes</h1>

     <main>
      <Titulo texto="Filmes em alta" />

      <div className="card">
        <img src="https://image.tmdb.org/t/p/w200/zduyzcjyahZtP4fGZE6789h04IM.jpg" alt="" />
        <span>Rogai por nós</span>
        <span>8.9</span>
        <a className="button" href="#">detalhes</a>
      </div>

      <Titulo texto="Séries em alta" />

     </main>
    </div>
  )
}

export default App
