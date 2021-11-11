import {Img, Div} from "./style"


function ItemCard({item}){
    return(
        <Div>
            <Img src={item.organization.avatar_url} alt={item.organization.login} />
            <div>
                <h3>{item.full_name}</h3>
                <p>{item.description}</p>
            </div>
        </Div>
    )
}

export default ItemCard