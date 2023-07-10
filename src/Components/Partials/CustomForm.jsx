import React, { useEffect, useState } from 'react';

import { Input, Button, Spinner  } from "@material-tailwind/react";

const CustomForm = props => {
    const [email, setEmail] = useState('');
    const [showMessage, setShowMessage] = useState(false);
    const [messageCount, setMessageCount] = useState(1);

    const updateEmail = (event) => {
        setEmail(event.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessageCount(0);
        email &&
        email.indexOf("@") > -1 &&
        props.onValidated({
            MERGE0: email,
        });
    }

    useEffect(() => {

        if (props.status && props.status !== 'sending' && messageCount === 0) {
            setEmail('');
            setMessageCount(1);
            setShowMessage(true);
            setTimeout(() => {
                setShowMessage(false);
            }, 5000);
        }

    }, [props.status, messageCount])


    return (
        <form
            onSubmit={(e) => handleSubmit(e)}
        >
            <Input 
                onChange={updateEmail}
                value={email}
                required type='email' variant="Email" size='lg' color='green' className='bg-white' label="Email Address" name="MERGE0" id="MERGE0" />
            <Button 
                disabled={props.status === 'sending' || email.indexOf("@") === -1}
                type='submit' formv fullWidth color='green' size='lg' className='bg-tetiary mt-4 flex justify-center items-center'>
                    Subscribe
                    {props.status === 'sending' && <Spinner className='ml-2' />}
                </Button>

            {showMessage && <h3 className=' text-green-500 py-2'>Thanks for subscribing</h3>}

        </form>
    );
};

export default CustomForm;