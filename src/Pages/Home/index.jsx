import {Div} from "./style"
import Header from "../../components/header"
import Cards from "../../components/cards"
import { useState } from "react"
import api from "../../services/api"

function Home(){
    const [apiDados, setApiDados] = useState([])
    
    function buscarDados(dado){
       api.get(dado)
       .then((response) => setApiDados(...apiDados, response))
       .catch((err) => console.log(err))
    }

    return(
        <Div>
            <Header buscarDados={buscarDados} ></Header>
            <Cards></Cards>
        </Div>
    )
}

export default Home