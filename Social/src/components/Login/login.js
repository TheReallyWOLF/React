import React from "react";
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../Common/FormsControls/FormsControls";
import {requiredField} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {loginThunkCreator} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import FormControlStyles from "../Common/FormsControls/FormControls.module.css"

const Login = ({ handleSubmit ,error }) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField("email", "email", [requiredField], Input )}
            {createField("Password", "password", [requiredField], Input, {type: "password"} )}
            {createField(null, "rememberMe", [], Input, {type: "checkbox"}, "remember me" )}
            {/*общая ошибка формы которая будет появляется при неудачном запросе (библиотека redux-form присылает error который прописан в authReducer)*/}
            {error && <div className={ FormControlStyles.formSummaryError }>
                { error }
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