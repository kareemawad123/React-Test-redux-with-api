import { useState } from "react";
import { Col } from "react-bootstrap";
import './signup.css'
import { BiHide } from "react-icons/bi";




const SignupForm = () => {

    const [user, setUser] = useState(
        {
            name: '',
            email: '',
            userName: '',
            password: '',
            confirmPassword: '',
        }
    )
    const [errors, setErrors] = useState(
        {
            nameError: '',
            emailError: '',
            userNameError: '',
            passwordError: '',
            confirmPasswordError: ''
        }
    )
    const [showPassword, setShowPassword] = useState(true)
    const [showConfirmPassword, setShowConfirmPassword] = useState(true)

    const handleChange = (ev) => {
        if (ev.target.name === 'email') {
            setUser({ ...user, email: ev.target.value });
            setErrors({
                ...errors, emailError: (ev.target.value === '')
                    ? 'email is requird'
                    : (isValidEmail(ev.target.value) === false)
                        ? 'email not valid : xxxxx@xxxx.xxx'
                        : ''
            })
        } else if (ev.target.name === 'password') {
            setUser({ ...user, password: ev.target.value });
            setErrors({
                ...errors, passwordError: (ev.target.value === '')
                    ? 'password is requird'
                    : (isValidPassword(ev.target.value) === false)
                        ? 'password must be at least 6 characters'
                        : ''
            })
        } else if (ev.target.name === 'confirmPassword') {
            setUser({ ...user, confirmPassword: ev.target.value });
            setErrors({
                ...errors, confirmPasswordError: (ev.target.value === '')
                    ? 'user name is requird'
                    : (user.password != ev.target.value)
                        ? 'passowrd not match confirm password'
                        : ''
            })
        } else if (ev.target.name === 'name') {
            setUser({ ...user, name: ev.target.value });
            setErrors({
                ...errors, nameError: (ev.target.value === '')
                    ? 'name is requird'
                    : ''
            })
        } else if (ev.target.name === 'userName') {
            setUser({ ...user, userName: ev.target.value });
            setErrors({
                ...errors, userNameError: (ev.target.value === '')
                    ? 'user name is requird'
                    : (ev.target.value.trim().includes(' '))
                        ? 'user name must contain no spaces'
                        : ''
            })
        }
        console.log(user.password +"-"+ ev.target.value);
        // console.log(user);
        // console.log(errors);
        // console.log(isValidEmail(ev.target.value));
        console.log(isValidPassword(ev.target.value));
    }
    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }
    const handleShowConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
    }
    const handleSubmit = (ev) => {
        ev.preventDefault();
        console.log(user);
        console.log(errors);
    }
    const isValidEmail = (email) => {
        // return /\S+@\S+\.\S+/.test(email);
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    }
    const isValidPassword = (password) => {
        // return /\S+@\S+\.\S+/.test(email);
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
    }

    return (<>
        <Col lg={6} sm={12} className="design">
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                <input type="text" value={user.name} className={`form-control ${errors.nameError != '' ? 'border-danger' : ''}`} onChange={(e) => { handleChange(e) }}
                    id="exampleFormControlInput1" placeholder="Name" name="name" />
                <p className="text-danger">{errors.nameError}</p>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput2" className="form-label">Email address</label>
                <input type="email" value={user.email} className={`form-control ${errors.emailError != '' ? 'border-danger' : ''}`} onChange={(e) => { handleChange(e) }}
                    id="exampleFormControlInput2" placeholder="name@example.com" name="email" />
                <p className="text-danger">{errors.emailError}</p>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput3" className="form-label">User Name</label>
                <input type="email" value={user.userName} className={`form-control ${errors.userNameError != '' ? 'border-danger' : ''}`} onChange={(e) => { handleChange(e) }}
                    id="exampleFormControlInput3" placeholder="User Name" name="userName" />
                <p className="text-danger">{errors.userNameError}</p>
            </div>

            <div className="mb-3">
                <label htmlFor="exampleFormControlInput4" className="form-label ">Password</label>
                <div className="input-form">
                    <input type={showPassword ? 'text' : 'password'} value={user.password} className={` form-control ${errors.passwordError != '' ? 'border-danger' : ''} `}
                        onChange={(e) => { handleChange(e) }} id="exampleFormControlInput4" placeholder="Password" name="password" />
                    <button className="btn btn-mar" onClick={() => { handleShowPassword() }}><BiHide /></button>

                </div>
                <p className="text-danger">{errors.passwordError}</p>

            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput5" className="form-label ">Confirm Password</label>
                <div className="input-form">
                    <input type={showConfirmPassword ? 'text' : 'password'} value={user.confirmPassword} className={` form-control ${errors.confirmPasswordError != '' ? 'border-danger' : ''} `}
                        onChange={(e) => { handleChange(e) }} id="exampleFormControlInput5" placeholder="Confirm Password" name="confirmPassword" />
                    <button className="btn btn-mar" onClick={() => { handleShowConfirmPassword() }}><BiHide /></button>

                </div>
            </div>
            <p className="text-danger">{errors.confirmPasswordError}</p>

            <div className="mb-3">
                <input type="submit" className="form-control btn btn-danger w-25" onClick={(e) => { handleSubmit(e) }}
                    id="exampleFormControlInput3" value={'Sign Up'} />
            </div>
        </Col>
    </>)

}

export default SignupForm;