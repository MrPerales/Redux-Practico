import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";

function PokeCard({name,image,types}){
    

    return(
        <>
            <Card 
                title={name}
                cover={<img src={image}/>}
                extra={<StarOutlined/>}
            >
                {types.map(type=><Meta key={type.type.name} description={type.type.name}/>)}
                
            </Card>
            
        </>
    )
}
export {PokeCard};