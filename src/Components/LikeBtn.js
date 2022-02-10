import React, { useState } from "react";

function LikeBtn() {
    let [count, setCount] = useState(0);

    let incrementLikes = () => {
        setCount(count + 1)
    }



    return (
        <button onClick={incrementLikes}>Like: {count}</button>
    )
}

export default LikeBtn;