import {Div, Span} from "./style"
import Header from "../../components/header"
import Cards from "../../components/cards"
import { useState } from "react"
import api from "../../services/api"

function Home(){
    const [apiDados, setApiDados] = useState([])
    const [error, setError] = useState("")
    const [erroRepo, setErroRepo] = useState("")
    
    function buscarDados(dado){
        setError("")    
       api.get(dado)
       .then((response) => {
            if(apiDados.filter((item)=>item.id === response.data.id).length === 0){
                setApiDados([...apiDados, response.data]) 
            }else {
                setError("Repositório já listado")
                setErroRepo("Repositório já listado")
            }
           
        })
       .catch((err) => {
           if(dado === ""){
                setError(err)
                setErroRepo("Campo de busca em branco")
            
           }else{
                setError(err)
                setErroRepo("Repositório não encontrado")
           }
          
        })
    }

    return(
        <Div>
            <Header buscarDados={buscarDados}></Header>
            <Span>{!!error && erroRepo}</Span>
            <Cards apiDados={apiDados}></Cards>
            
        </Div>
    )
}

export default Home