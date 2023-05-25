import './body.css'
import { Col, Row } from 'react-bootstrap';
// import { useForm } from "react-hook-form";
// import { useState, useEffect } from "react"



const BodyToDo = (props) => {
    let tasks = props.tasks;

    const handleDelete = (index) => {
        console.log("splice");
        console.log(index);
        tasks.splice(index, 1);
        props.setTasks([...props.tasks])
    }
    const handleComplete = (task) => {
        task.complete = !task.complete;
        console.log(task.complete);
        props.setTasks([...props.tasks])
    }
    return (<>
        <Col className='body text-start' >
            <h1>Your Tasks</h1>
            {tasks.map((task, index) => {
                return <Row className='task' key={index}>
                    <label htmlFor="text" className={`task-name col text-dashed ${task.complete ? 'text-decoration-line-through' : ''}`}>
                        <h5>{task.taskName}</h5>
                    </label>
                    <button className='btn btn-success no-m col-md-2' onClick={() => { handleDelete(index) }}>Delete</button>
                    <button className='btn btn-danger no-m col-md-2' onClick={() => { handleComplete(task) }}>Complete</button>
                </Row>
            })}

        </Col>
    </>)
}

export default BodyToDo;