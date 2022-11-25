import react from 'react';
import Navbar from '../../common/navbar/Navbar';


const Studentview = () =>{
     return (
        <>
                <div className='container-fluid'>
                        <div className='row'>
                                    <div className='col'><Navbar /></div>
                        </div>
                        <div className='row text-center pb-2 pt-5'>
                            <div className='col'>
                                    <video width="620" height="340" controls />
                            </div>
                        </div>
                        <div className='row text-center pt-2'>
                            <div className='col'></div>
                            <div className='col'>
                                    <button className='btn btn-success' style={{"width":"250px"}}>Join</button>
                            </div>
                            <div className='col'>
                                    <button className='btn btn-danger' style={{"width":"250px"}}>End</button>
                            </div>
                            <div className='col'></div>
                        </div>
                </div>
        
        </>
     );
}


export default Studentview;