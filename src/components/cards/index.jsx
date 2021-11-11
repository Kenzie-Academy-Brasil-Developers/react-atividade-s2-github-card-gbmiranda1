import ItemCard from "../itemCard"


function Cards({apiDados}){
    console.log(apiDados)
    return(
        <div>
            {
                apiDados.map((item) => (
                    <ItemCard key={item.id} item={item}></ItemCard>
                ))
            }
        </div>
    )
}

export default Cards