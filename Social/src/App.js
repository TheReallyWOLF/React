import React from 'react'; // подключение модуля
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";
import {addPost} from "./redux/state";


const App = (props) => { // App вставляется в index.js
    let DialogsRender = () =>  <Dialogs dialogsData = { props.state.dialogsPage.dialogsData } messagesData={ props.state.dialogsPage.messagesData }/>;
    let ProfileRender = () =>  <Profile profilePage={ props.state.profilePage } addPost = { props.addPost }  updateNewPostText = { props.updateNewPostText }/>;
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    {/*<Route path='/dialogs' component={Dialogs}/>
                    <Route path='/profile' component={Profile}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>*/
                    // что бы прокинуть пропсы надо писать по другому =>
                    }
                    <Route path='/dialogs' render={ DialogsRender }/>
                    <Route path='/profile' render={ ProfileRender }/>
                    <Route path='/news' render={ () => <News /> }/>
                    <Route path='/music' render={ () => <Music /> }/>
                    <Route path='/settings' render={ () => <Settings /> }/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
