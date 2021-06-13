import React, { useState }  from 'react'
//import { ValidateEmail } from '../../utils/helpers'

function ContactForm() {
    const [formState, setFormState] = useState({name:'', email:'', message: ''});
    const { name, email, message } = formState;

    function handleChange(e) {
        // below code sets state for all three properties name, email, message
        setFormState({...formState,  [e.target.name]: e.target.value})
    }
    //console.log(formState) 

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }
       //JSX
    return (
        <section>
            <h1>Contact Me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text"  name="name" defaultValue={name} onChange={handleChange}/>
                    </div>
                   
                    <div>
                   <label htmlFor="email">Email:</label>
                   <input type="email"  name="email" defaultValue={email} onChange={handleChange} />
                    </div>
                  
                    <div>
                   <label htmlFor="message">Message:</label>
                    <textarea name="message" defaultValue={message} onChange={handleChange} rows="5"/>                   
                     </div>
                     
                         <div>
                             <p className="error-text"></p>
                         </div>
                    
                <button type="submit" >Submit</button>
                </form>
            </section>
    )
}

export default ContactForm;