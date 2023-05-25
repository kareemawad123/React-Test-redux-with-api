/* eslint-disable no-unused-vars */
import { Col } from "react-bootstrap"
import { useState, useEffect } from "react"

const UsersFunction = () => {

    const [users, setUsers] = useState([
        { name: 'John', email: 'john@example.com', isActive: true },
        { name: 'Kareem', email: 'kareem@example.com', isActive: true },
        { name: 'Shahd', email: 'Shahd@example.com', isActive: true },
        { name: 'Lara', email: 'Lara@example.com', isActive: false },
    ]);
    const [isAuth, setAuth] = useState(true);

    const Toggle = () => {
        setAuth(!isAuth);
    }
    //Mounting
    useEffect(() => {
        console.log('DidMount toggle');
    }, [])
    //Update Mounting
    useEffect(() => {
        console.log('Auth toggle');
    }, [isAuth])

    useEffect(() => {
        console.log('Users toggle');
    }, [users])
    //UnMounting
    useEffect(() => {
        return ()=>{
            console.log('Unmounting toggle');
        }
    }, [])

    return (
        <>
            <Col>
                <button className="btn btn-success" onClick={() => { Toggle() }}>{(isAuth) ? 'Logout' : 'Login'}</button>

                {(isAuth) ? users.map((user, index) => {
                    if (user.isActive) {
                        return <li key={index}>{user.name}</li>
                    }
                    return null
                }) : <div>You Must Login First</div>}
            </Col>
        </>

    )
}

export default UsersFunction;