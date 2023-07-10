import React from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe";
import CustomForm from './CustomForm';

const postUrl = `https://gmail.us14.list-manage.com/subscribe/post?u=2d7f55a36f78b8ed7b2fae7ee&id=de98a79c75`;


const MailchimpFormContainer = props => {
    return (
        <div className="mc__form-container">
            <MailchimpSubscribe
                url={postUrl}
                render={({ subscribe, status, message }) => (
                    <CustomForm 
                        status={status} 
                        message={message}
                        onValidated={formData => subscribe(formData)}
                    />
                )}
            />
        </div>
    );
};

export default MailchimpFormContainer;