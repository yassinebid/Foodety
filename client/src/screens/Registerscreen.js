import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../actions/userActions'
import Error from '../components/Error'
import Loading from '../components/Loading'
import Success from '../components/Success'
import { Icon } from 'react-icons-kit'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'
import {eye} from 'react-icons-kit/feather/eye'

export default function Registerscreen() {
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [cpassword, setcpassword] = useState('')
    const registerstate = useSelector(state => state.registerUserReducer)
    const { error, loading, success } = registerstate
    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(eyeOff);

    const handleToggle=()=>{
        if(type === 'password'){
            setIcon (eye);
            setType('text');
        }
        else{
            setIcon (eyeOff);
            setType('password');
        }
    }

    const dispatch = useDispatch()

    function register() {
        if (password !== cpassword) {
            alert("passwords not matched")
        }
        else {
            const user = {
                name,
                email,
                password
            }
            console.log(user);
            dispatch(registerUser(user))
        }
    }

    return (
        <div>
            <div className='row justify-content-center'>
                <div className="col-md-5 mt-5 ">
                    {loading && (<Loading />)}
                    {success && (<Success success='User Registered Successfully' />)}
                    {error && (<Error error='Email already registred' />)}

                    <h2 className='text-center m-2' style={{ fontSize: "30px " }}>Register</h2>
                    <div>
                        <input required type="text" placeholder="name" className="from-control m-2"
                            value={name} onChange={(e) => { setname(e.target.value) }} />
                        <br />

                        <input required type="email" placeholder="email" className="from-control m-2"
                            value={email} onChange={(e) => { setemail(e.target.value) }} />
                        <br />

                        <input required type={type} placeholder="password" className="from-control m-2"
                            value={password} onChange={(e) => { setpassword(e.target.value) }} />
                            <span onClick={handleToggle}><Icon icon={icon} /></span>
                        <br/>

                        <input required type={type} placeholder="confirm password" className="from-control m-2"
                            value={cpassword} onChange={(e) => { setcpassword(e.target.value) }} />
                            <span onClick={handleToggle}><Icon icon={icon} /></span>
                        <br />

                        <button onClick={register} className='btn mt-3'>REGISTER</button><hr />
                        <a style={{ color: 'black' }} href='/login' className=" m-2">You Already Have Account</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
