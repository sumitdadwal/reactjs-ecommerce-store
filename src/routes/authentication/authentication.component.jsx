import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.components";
import {AuthenticationContainer} from './authentication.styles.jsx'

const Authentication = () => {
    return ( 
        <AuthenticationContainer>
            <SignInForm />
            <SignUpForm />  
        
        </AuthenticationContainer>
    );
};

export default Authentication;
