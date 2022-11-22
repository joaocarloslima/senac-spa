import { useEffect, useState } from 'react'
import './CardFilme.css'
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import { Link } from 'react-router-dom';

export function CardFilme({filme}){
    const [favorito, setFavorito] = useState(false)
    const poster = "https://image.tmdb.org/t/p/w200/" + filme.poster_path

    useEffect(() => {
        const favoritos = localStorage.getItem("favoritos")
        if (favoritos) {
            const favoritosArray = JSON.parse(favoritos)
            const favoritoEncontrado = favoritosArray.find(f => f.id === filme.id)
            if(favoritoEncontrado) setFavorito(true)
        }
    }, [filme.id])

    useEffect( () => {
        let favoritos = JSON.parse( localStorage.getItem("favoritos") )
        if (favoritos == null) favoritos = Set()
        favorito ? favoritos.push(filme) : favoritos = favoritos.filter(f => f.id !== filme.id)
        localStorage.setItem("favoritos", JSON.stringify(favoritos))
    }, [favorito])

    function favoritar(){
        setFavorito(!favorito)
    }

    return (
        <div className="card-filme">
            {favorito? 
                <BookmarkOutlinedIcon className="favorite" onClick={favoritar}/> :
                <BookmarkBorderOutlinedIcon className="favorite" onClick={favoritar}/>  
            }
            <img src={poster} alt="" />
            <span>{filme.title}</span>
            <span>{filme.vote_average.toFixed(1)}</span>
            <Link to={`/movie/${filme.id}`} className="button">detalhes</Link>
        </div>
    )
}