import React from "react";
import FormControlStyles from "./FormControls.module.css"
import {requiredField} from "../../../utils/validators/validators";
import {Field} from "redux-form";


const FormControl = ({input, meta, child, element, ...props}) => {
    let hasError = meta.touched && meta.error;
    return (
        <div className={FormControlStyles.formControl + " " + (hasError ? FormControlStyles.error : "")}>
            <div>
                {props.children}
            </div>
            <div>
                { hasError && <span>{meta.error}</span>}
            </div>
        </div>
    )
};

export const Textarea = (props) => {
    const {input, meta, child, element, ...restProps} = props;
    return <FormControl {...props}><textarea {...props.input} {...restProps}/></FormControl>
};

export const Input = (props) => {
    const {input, meta, child, element, ...restProps} = props;
    return <FormControl {...props}><input {...props.input} {...restProps}/></FormControl>
};

export const createField = (placeholder, name, validators, component, props = {}, text= null) => {
    return (<div><Field placeholder={placeholder} name={name} validate={validators} component={component} {...props}/>{text}</div>)
}