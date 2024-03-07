import { useState } from "react";

const User = (props) => {
    const {name} = props;
    const [count,setCount] = useState(0);
    const [count2,setCount2]= useState(2);

    return (
        <div class="user-card">
            <h1>{name}</h1>
            <h2>Location: Jamshedpur</h2>
            <h3>Contact : 86971XXXXX</h3>
            <h3>Count: {count}</h3>
            <h3>Count2: {count2}</h3>
        </div>
    )
}

export default User;