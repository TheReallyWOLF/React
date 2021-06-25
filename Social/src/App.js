import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route} from "react-router-dom";

import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginForm from "./components/Login/login";
import {connect} from "react-redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./components/Common/Preloader/Preloader";
import {withSuspense} from "./hoc/withSuspense";
// import ProfileContainer from "./components/Profile/ProfileContainer";
//import DialogsContainer from "./components/Dialogs/DialogsContainer";
// реализация ленивой загрузки
const DialogsContainer = React.lazy(() => {
    return import('./components/Dialogs/DialogsContainer');
});
const ProfileContainer = React.lazy(() => {
    return import('./components/Profile/ProfileContainer');
});


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        let DialogsRender = withSuspense(DialogsContainer);
        let ProfileRender = withSuspense(ProfileContainer);
        let UsersRender = () => <UsersContainer/>;
        let LoginPage = () => <LoginForm/>;

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={DialogsRender}/>
                    <Route path='/profile/:userId?' render={ProfileRender}/>
                    <Route path='/users' render={UsersRender}/>
                    <Route path='/login' render={LoginPage}/>

                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    };
};

export default connect(mapStateToProps, {initializeApp})(App);
