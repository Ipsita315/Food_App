import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                login: "XYZ",
                public_repos: "ABC"
            }
        }
    }
    render() {
        const { login,public_repos } = this.state.userInfo;
        console.log("Render method");

        return (
            <div className="user-card">
                <h1>Name: {login}</h1>
                <h2>public_repos: {public_repos}</h2>             
            </div>
        )
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/Ipsita315");
        const jsonData = await data.json();

        console.log("api data : ",jsonData);
        console.log("Component did mount");
        this.setState({
            userInfo: jsonData
        })
    }

    componentDidUpdate(){
        console.log("Component did update");
    }

    componentWillUnmount(){
        console.log("Component will unmount");
    }
}

export default UserClass;