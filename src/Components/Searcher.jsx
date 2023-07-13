import { Input } from "antd";
import { useDispatch } from "react-redux";
import { setSearchPoke } from "../Slices/DataSlice";

function Searcher() {

    const dispatch = useDispatch();

    const onSearchPoke = (event) => {

        console.log(event.target.value);
        dispatch(setSearchPoke(event.target.value))
    }


    return (
        <>
            <Input.Search
                // value={search}
                onChange={onSearchPoke}
                placeholder="search"
                style={{ marginBottom: 10 }}
            />
        </>
    )
}

export { Searcher };