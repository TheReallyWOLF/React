import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../Common/FormsControls/FormsControls";
import {requiredField} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {loginThunkCreator} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import FormControlStyles from "../Common/FormsControls/FormControls.module.css"

const Login = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"email"}
                       name={"email"}
                       validate={[requiredField]}
                       component={Input}
                />
            </div>
            <div>
                <Field placeholder={"Password"}
                       name={"password"}
                       type={"password"}
                       validate={[requiredField]}
                       component={Input}
                />
            </div>
            <div>
                <Field type={"checkbox"}
                       name={"rememberMe"}
                       component={Input}/> remember me
            </div>
            {/*общая ошибка формы которая будет появляется при неудачном запросе (библиотека redux-form присылает error который прописан в authReducer)*/}
            {props.error && <div className={ FormControlStyles.formSummaryError }>
                { props.error }
            </div>}
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
        console.log(formData);
        props.loginThunkCreator(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return <div>
        <h1>Login</h1>
       <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {loginThunkCreator})(LoginForm);