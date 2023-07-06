import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";

function PokeCard({name,image}){
    
   

    return(
        <>
            <Card 
                title={name}
                cover={<img src={image}/>}
                extra={<StarOutlined/>}
            >
                <Meta description="fire">
                </Meta>
            </Card>
            
        </>
    )
}
export {PokeCard};