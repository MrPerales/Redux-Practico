import { Button } from "antd";
import { StarFilled, StarOutlined } from "@ant-design/icons";

function StartButton({isFavorite,onClick}) {
    const Icon = isFavorite ? <StarFilled /> : <StarOutlined />

    return (
        <>
            <Button icon={Icon} onClick={onClick}/>


        </>
    )
}

export { StartButton };