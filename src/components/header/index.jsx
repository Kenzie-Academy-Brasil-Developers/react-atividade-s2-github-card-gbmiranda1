import {DivHeader, Input, Button} from "./style"
import { useState } from "react"


function Header({buscarDados, error}){
    const [input, setInput] = useState("")

    return(
        <DivHeader>
            <Input 
                value={input}
                onChange={(event) => setInput(event.target.value)}
                type="text"
                name="text" 
                placeholder="Digite o nome do repositório" />
            <Button onClick={() => buscarDados(input)}>Pesquisar</Button>
        </DivHeader>
    )
}

export default Header