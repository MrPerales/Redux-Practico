import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import { StartButton } from "./StartButton";
import { useDispatch } from "react-redux";
import { setFavorite } from "../Slices/DataSlice";

function PokeCard({name,image,types,pokeDexNum,id,favorite}){
    const dispatch=useDispatch();
    const handleOnFavorite=()=>{
        dispatch(setFavorite(id))
    }
    return(
        <>
            <Card 
                title={`#${pokeDexNum} ${name}`}
                cover={<img src={image}/>}
                extra={<StartButton isFavorite={favorite}  onClick={handleOnFavorite}/>}
            >
                {types.map(type=><Meta key={type.type.name} description={type.type.name}/>)}
                
            </Card>
            
        </>
    )
}
export {PokeCard};