import React, { useEffect, useState } from 'react';
import swal from 'sweetalert2';
 
import './reactsweetalert.scss'
 
const Toast = swal.mixin({
    toast: true,
    position: 'bottom-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', swal.stopTimer)
      toast.addEventListener('mouseleave', swal.resumeTimer)
    }
  })
  

const CReactCompareSlider = () => {

    const [show, setShow] = useState(false);

    useEffect(() => {
        if(show){


            //Alert2
            //! alttaki swal alert ler üsttekileri override eder

            swal.fire({
                template: '#my-template'
              })



            //Alert1
            Toast.fire({
                icon: 'info',
                title: 'Signed in successfully'
            })

        }

    }, [show])

    const changeShow = () => {
        setShow(!show)


        setTimeout(() => {
            setShow(false)
        }, 3000);
        
    }


    return (
        <div className='reactsweetalert_wrapper'>
            <button onClick={() => changeShow()}>Alert</button>

            {/* <template id="my-template">

                Selam
                <swal-title>
                    Save changes to "Untitled 1" before closing?
                </swal-title>
                <swal-icon type="warning" color="red"></swal-icon>
                <swal-button type="confirm">
                    Save As
                </swal-button>
                <swal-button type="cancel">
                    Cancel
                </swal-button>
                <swal-button type="deny">
                    Close without Saving
                </swal-button>
                <swal-param name="allowEscapeKey" value="false" />
                <swal-param
                    name="customClass"
                    value='{ "popup": "my-popup" }' />
            </template> */}

        </div>

    );
}     


export default CReactCompareSlider;
