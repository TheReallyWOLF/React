import React from "react";
import {Field, reduxForm} from "redux-form";

const Login = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={"login"} component={"input"}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={"input"}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={"input"}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
   )
}

const LoginReduxForm = reduxForm({
    form: 'login' // уникальносе строковое имя формы
})(Login)

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