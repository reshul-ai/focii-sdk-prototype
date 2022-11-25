import react from 'react';
import Navbar from '../../common/navbar/Navbar';


const Invalid = () =>{
    return (
        <>

            <div className='container-fluid text-light'>
                <div className='row'><div className='col'><Navbar /></div></div>
                        <div className='row'>
                                <div className='col'>
                                        <h1>This Page does not Exist!!!!!</h1>
                                </div>
                        </div>
            </div>

        </>
    );
}


export default Invalid;