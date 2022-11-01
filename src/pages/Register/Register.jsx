import { useState } from 'react'
import './Register.css'

export function Register(){
    const [ nome , setNome ] = useState("João")
    const [ senha, setSenha ] = useState("")
    const [ erro, setErro ] = useState(false)

    function handleSubmit(e){
        e.preventDefault()
        console.log("Cadastrar usuário", nome, senha)
    }

    function handleSenha(e){
        setSenha(e.target.value)
        setErro(senha.length < 8)
    }


    return(
        <>
            <div className="card">
                <h1>Criar Conta</h1>
                <form action="#" onSubmit={handleSubmit}>
                    <label htmlFor="nome">Nome</label>
                    <input 
                        type="text" 
                        id="nome" 
                        name="nome" 
                        placeholder="digite o nome" 
                        value={nome} 
                        onChange={e => setNome(e.target.value) }
                    />

                    <label htmlFor="senha">Senha</label>
                    <input 
                        type="password" 
                        id="senha" 
                        name="senha" 
                        value={senha}
                        onChange={handleSenha}
                    />

                    { erro && <span className='error'>senha muito curta</span> }
                    
                    <button disabled={erro}>Salvar</button>
                </form>
            </div>
        </>
    )
}