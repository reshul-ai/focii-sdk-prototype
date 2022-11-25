import react,{useState} from 'react';
import Navbar from '../../common/navbar/Navbar';
import { Outlet, Link } from "react-router-dom";

const Login = () =>{

     const [email, setEmail] = useState();
     const [studRedirect, setStudRedirect] = useState(false);

     const Handlesubmit = (e) =>  {
                e.preventDefault();
                if(email.toString().includes("student"))
                        window.location.replace("http://localhost:3000/student/class")
                else window.location.replace("http://localhost:3000/host/class")
     }


     return (
        <>

                <div className='container-fluid text-light'>
                    <div className='row'>
                            <div className='col'>
                                    <Navbar />
                            </div>
                    </div>
                        <div className='row pt-5'>
                                <div className='col'></div>
                                <div className='col'>
                                        <div style={{"border":"1px solid white","padding":"40px","borderRadius":"20px"}}>
                                                <h3 className='pb-2'>Log In</h3>
                                                <form>
                                                    <div class="form-group">
                                                        <label for="exampleInputEmail1">Email address</label>
                                                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e)=>{setEmail(e.target.value)}} />
                                                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                                                    </div>
                                                    <div class="form-group pt-3">
                                                        <label for="exampleInputPassword1">Password</label>
                                                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                                                    </div>
                                                    <div class="form-group form-check pt-3 pb-3">
                                                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                                        <label class="form-check-label" for="exampleCheck1">Stay Logged In</label>
                                                    </div>
                                                    
                                                    <button type="submit" class="btn btn-primary" onClick={Handlesubmit}>Login</button>
                                                   
                                                    
                                                </form>
                                        </div>
                                </div>
                                <div className='col'></div>
                        </div>
                </div>
        
        </>
     );
}



export default Login;