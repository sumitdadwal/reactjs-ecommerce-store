import {shrinkLabelStyles, FormInputLabel, Input, Group} from './form-input.styles.jsx'

const FormInput = ({ label, ...otherProps }) => {
    return (
        <Group>
            <FormInputLabel shrink={otherProps.value.length }>{label}</FormInputLabel>
                <Input className="form-input" {...otherProps}/>
        </Group>
    );
};

export default FormInput;