import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";

function PokeCard({name,url}){
    return(
        <>
            <Card 
                title={name}
                cover={<img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'/>}
                extra={<StarOutlined/>}
            >
                <Meta description="fire">
                </Meta>
            </Card>
            
        </>
    )
}
export {PokeCard};