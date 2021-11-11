import ItemCard from "../itemCard"
import {DivCard} from "./style"

function Cards({apiDados}){
    console.log(apiDados)
    return(
        <DivCard>
            {
                apiDados.map((item) => (
                    <ItemCard key={item.id} item={item}></ItemCard>
                ))
            }
        </DivCard>
    )
}

export default Cards