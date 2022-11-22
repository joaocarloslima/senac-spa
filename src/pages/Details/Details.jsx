import useAxios from 'axios-hooks'
import { useParams } from 'react-router-dom'
import './Details.css'

export default function Details(){
    const { id } = useParams()
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=1e922667481ab207d642450b0efb461e&language=pt-BR`
    const [ {data: filme, loading} ] = useAxios(url)

    if (loading) return <h1>Carregando...</h1>  

    return (
        <>
            <div className="background"></div>
            <img src={`https://www.themoviedb.org/t/p/w200/${filme.poster_path}`} alt="" />
            <div className="content">
                <h2>{filme.title}</h2>
                <p>{filme.overview}</p>
            </div>
        </>
    )
}