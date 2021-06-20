import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../Common/FormsControls/FormsControls";
import {requiredField} from "../../utils/validators/validators";

const Login = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"}
                       name={"login"}
                       validate={[requiredField]}
                       component={Input}
                />
            </div>
            <div>
                <Field placeholder={"Password"}
                       name={"password"}
                       validate={[requiredField]}
                       component={Input}
                />
            </div>
            <div>
                <Field type={"checkbox"}
                       name={"rememberMe"}
                       component={Input}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
   )
}
// оборачиваем в специальный объект для валидации (библиотека redux-form)
const LoginReduxForm = reduxForm({
    form: 'login' // уникальное строковое имя формы
})(Login);

const LoginForm = (props) => {
    const onSubmit = (formData) => {
        // formData приходят все поля и значения
        console.log(formData)
    }
    return <div>
        <h1>Login</h1>
       <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

export default LoginForm;