import { useState } from 'react'
import './CardFilme.css'
//import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';
//import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';

export function CardFilme({filme}){
    const [favorito, setFavorito] = useState(false)

    function favoritar(){
        setFavorito(!favorito)
    }

    return (
        <div className="card">
            <img src={filme.poster} alt="" />
            <span>{filme.titulo}</span>
            <span>{filme.nota}</span>
            <a className="button" href="#">detalhes</a>
            {favorito ? <span>favoritado</span> : <span></span>}
            <button onClick={favoritar}>favoritar</button>
        </div>
    )
}