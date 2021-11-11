import {Div} from "./style"
import Header from "../../components/header"
import Cards from "../../components/cards"
import { useState } from "react"
import api from "../../services/api"

function Home(){
    const [apiDados, setApiDados] = useState([])
    
    function buscarDados(dado){
       api.get(dado)
       .then((response) => setApiDados([...apiDados, response.data]))
       .catch((err) => console.log(err))
    }

    return(
        <Div>
            <Header buscarDados={buscarDados} ></Header>
            <Cards apiDados={apiDados}></Cards>
            
        </Div>
    )
}

export default Home