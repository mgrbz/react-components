import React, { useState } from 'react';
import { withSwalInstance } from 'sweetalert2-react';
import swal from 'sweetalert2';
 
import './reactsweetalert.scss'
const SweetAlert = withSwalInstance(swal);
 


const CReactCompareSlider = () => {

    const [show, setShow] = useState(false);

    return (
        <div className='reactsweetalert_wrapper'>
            <button onClick={() => setShow(true)}>Alert</button>
            <SweetAlert
                show={show}
                title="Demo"
                text="SweetAlert in React"
                onConfirm={() => setShow(false)}
            />
        </div>

    );
}     


export default CReactCompareSlider;
