import { useState } from "react";
import { signInWithGooglePopup, signInWithGoogleRedirect } from "../../utils/firebase/firebase.utils";

import { createUserDocumentFromAuth, signInUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import './sign-in-form.styles.scss'

const defaultFields = {
    email: '',
    password: '',
};

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFields);
    const { email, password } = formFields;

    const signInWithGoogle = async () => {
        const response = await signInWithGooglePopup();
        await createUserDocumentFromAuth(response.user)
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({...formFields, [name]: value});
    };

    const resetFormFields = () => {
        setFormFields(defaultFields)
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await signInUserWithEmailAndPassword(email, password);

            resetFormFields();
        } catch(error) {
            if(error.code === "auth/wrong-password"){
                alert('incorrect password for email');
            } else if(error.code === "auth/user-not-found"){
                alert('User does not exist');
            };
        };
    };

    return (
        <div className='sign-in-container'>
            <h2>Already have an account?</h2>
            <span>Sign in with email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput 
                    label={'Email'}
                    type={'email'}
                    required
                    onChange={handleChange}
                    name={'email'}
                    value={email}
                />

                <FormInput 
                    label={'Password'}
                    type={'password'}
                    required
                    onChange={handleChange}
                    name={'password'}
                    value={password}
                />
                <div className="buttons-container">
                    <Button type='submit' children={'Sign In'} />
                    <Button type='button' buttonType={'google'} onClick={signInWithGoogle} children={'Google Sign In'} />
                </div>
            </form>
        </div>
    );
};

export default SignInForm;
