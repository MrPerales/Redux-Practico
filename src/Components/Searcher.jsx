import { Input } from "antd";

function Searcher(){
    return(
        <>
            <Input.Search placeholder="search" style={{marginBottom:10}}/>
        </>
    )
}

export {Searcher};