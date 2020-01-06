import React, {useState} from "react";

const LikeButton = () => {
    const [like, setLike] = useState(0)
    return (
        <>
            <p>you clicked {like} times</p>
            <button onClick={() => setLike(like + 1)}>click me</button>
        </>
    )
}

export default LikeButton
