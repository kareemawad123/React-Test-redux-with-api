import './header.css'
import { Col, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useState } from "react"



const Header = ({handleAddTask}) => {
    const [task, setTasks] = useState(
        {
            id: 0,
            taskName: ''
        },
    )
    
    const {  handleSubmit, formState: { errors } } = useForm();
    const handleChange = (evt)=>{
        setTasks({...task, taskName: evt.target.value});
    }
    const onSubmit = data => {
        handleAddTask(task)
        // setTasks({data});
        // console.log("task:"+ register('task').value);
    };

    // console.log(watch("task")); // watch input value by passing the name of it
    // console.log(task); // watch input value by passing the name of it

    return (<>
        <Col className='header text-start' >
            <h1>To Do App!</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <input className='w-50' name='task' value={task.taskName} placeholder='Enter New Task' onChange={(e)=>{handleChange(e)}} />
                <div>
                    <input className='btn btn-success mt-3 mb-5' type="submit" />
                </div>
            </form>
        </Col>
    </>)
}

export default Header;