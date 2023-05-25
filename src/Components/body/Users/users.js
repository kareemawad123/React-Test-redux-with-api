import React from "react";
import { Col } from "react-bootstrap";

export default class Users extends React.Component {

    constructor() {
        super();
        this.state = {
            users: [
                { name: 'John', email: 'john@example.com', isActive: true },
                { name: 'Kareem', email: 'kareem@example.com', isActive: true },
                { name: 'Shahd', email: 'Shahd@example.com', isActive: true },
                { name: 'Lara', email: 'Lara@example.com', isActive: false },
            ],
            isAuthenticated: true,
        }
    }
    handleToggleAuth(){
        this.setState({isAuthenticated: (this.isAuthenticated)? true : false});
    }
    render() {
        return <>
            <Col>
                {/* <button className="btn btn-success" onClick={this.handleToggleAuth}>Toggle</button> */}
                {(this.state.isAuthenticated)
                    ? <ul >
                        {this.state.users.map((user, index) => {
                             if(user.isActive){
                                return <li key={index}>{user.name}</li>
                            }
                            return null;  
                        }
                        )}

                    </ul>
                    : <div><b>You Must Login First</b></div>}
            </Col>


        </>


    }
}