import './CardElenco.css'

import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { useState } from 'react';

export function CardElenco({ator}){
    const [ likes, setLikes ] = useState(0)

    function like(){
        setLikes(likes + 1)
    }

    return (
        <div className="cardElenco">
            <img src={ator.foto} />
            <span className="ator">{ator.nome}</span>
            <span className="personagem">{ator.personagem}</span>
            <FavoriteBorderOutlinedIcon className="like" onClick={like} /> 
            <span>{likes}</span>
        </div>
    )
}