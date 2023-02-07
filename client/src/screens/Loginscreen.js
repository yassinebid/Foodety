import React , {useState , useEffect}from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../actions/userActions'
import Error from '../components/Error'
import Loading from '../components/Loading'
import { Icon } from 'react-icons-kit'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'
import {eye} from 'react-icons-kit/feather/eye'

export default function Loginscreen() {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const dispatch = useDispatch()
    const loginstate = useSelector(state =>state.loginUserReducer)
    const {error ,loading } = loginstate
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

    useEffect(() => {
        if(localStorage.getItem('currentUser'))
        {
            window.location.href='/'
        }
    }, [])

    function login(){
            const user={email,password}
            
            dispatch(loginUser(user))   
    }

    return (
        <div>
            <div className='row justify-content-center'>
                <div className="col-md-5 mt-5 ">
                    <h2 className='text-center m-2' style={{ fontSize: "30px " }}>Login</h2>
                    {loading && (<Loading/>)}
                    {error && (<Error error='Invalid Credentials'/>)}
                    <div>
                        <input required type="email" placeholder="email" className="from-control m-2" 
                        value={email} onChange={(e) => { setemail(e.target.value) }}/>
                        
                        <br/>

                        <input required type={type} placeholder="password" className="from-control m-2" 
                        value={password} onChange={(e) => { setpassword(e.target.value) }}/>
                        <span onClick={handleToggle}><Icon icon={icon} /></span>
                        <br/>

                        <button onClick={login} className='btn mt-3'>LOGIN</button>
                        <hr/>

                        <a style={{color:'black'}} href='/register' className = 'm-2'>You Dont Have Account</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
