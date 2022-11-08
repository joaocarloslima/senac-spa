import { useState } from 'react'
import './CardFilme.css'
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';

export function CardFilme({filme}){
    const [favorito, setFavorito] = useState(false)
    const poster = "https://image.tmdb.org/t/p/w200/" + filme.poster_path

    function favoritar(){
        setFavorito(!favorito)
    }

    return (
        <div className="card-filme">
            {favorito? 
                <BookmarkBorderOutlinedIcon className="favorite" onClick={favoritar}/> : 
                <BookmarkOutlinedIcon className="favorite" onClick={favoritar}/>
            }
            <img src={poster} alt="" />
            <span>{filme.title}</span>
            <span>{filme.vote_average.toFixed(1)}</span>
            <a className="button" href="#">detalhes</a>
        </div>
    )
}