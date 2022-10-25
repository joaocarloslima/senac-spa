import './CardElenco.css'

export function CardElenco({ator}){
    return (
        <div className="cardElenco">
            <img src={ator.foto} />
            <span class="ator">{ator.nome}</span>
            <span className="personagem">{ator.personagem}</span>
        </div>
    )
}