import { useContext, useState } from "react";
import { Col, Row } from "react-bootstrap";
import './UserForm.css'
import { BiHide } from "react-icons/bi";
import { languageContext } from "../../../Contexts/language";
// import { useNavigate } from "react-router-dom";

const AddUserFormNative = () => {

    // const navigate = useNavigate();

    // const goToNavigateProducts = ()=>{
    //     navigate('/users');
    // }
    const language = useContext(languageContext)

    const [user, setUser] = useState(
        {
            email: '',
            password: '',
        }
    )
    const [errors, setErrors] = useState(
        {
            emailError: '',
            passwordError: '',
        }
    )
    const handleLanguage = ()=>{
        language.language =='en'? language.setLanguage('ar'): language.setLanguage('en');
        console.log(language);
    }
    const [showPassword, setShowPassword] = useState(true)

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
                    : (ev.target.value.length < 8)
                        ? 'password must be at least 6 characters'
                        : ''
            })
        }
        console.log(user);
        console.log(errors);
        console.log(isValidEmail(ev.target.value));
    }
    const handleShowPassword = () => {
        setShowPassword(!showPassword);
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

    return (<>
        <Col lg={6}>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" value={user.email} className={`form-control ${errors.emailError != '' ? 'border-danger' : ''}`} onChange={(e) => { handleChange(e) }}
                    id="exampleFormControlInput1" placeholder="name@example.com" name="email" />
                <p className="text-danger">{errors.emailError}</p>
            </div>

            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label ">Password</label>
                <div className="input-form">
                    <input type={showPassword ? 'text' : 'password'} value={user.password} className={` form-control ${errors.passwordError != '' ? 'border-danger' : ''} `}
                        onChange={(e) => { handleChange(e) }} id="exampleFormControlInput2" placeholder="Password" name="password" />
                    <button className="btn btn-mar" onClick={() => { handleShowPassword() }}><BiHide /></button>

                </div>
            </div>
            <p className="text-danger">{errors.passwordError}</p>

            <div className="mb-3">
                <input type="submit" className="form-control btn btn-danger w-25" onClick={(e) => { handleLanguage(e) }}
                    id="exampleFormControlInput3" value={'Login'} />
            </div>
        </Col>
    </>)
}

export default AddUserFormNative;