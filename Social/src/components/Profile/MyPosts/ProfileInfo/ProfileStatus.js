import React from "react";
import Preloader from "../../../Common/Preloader/Preloader";

class ProfileStatus extends React.Component {
// локальный стейт
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode() {
        console.log(this.state.editMode); //false => setState асинхронен
        this.setState({
            editMode: true
        })
        // запустить обноврление перерисовки КОСТЫЛЬ замена setState в крайних случаях если мы меняем стейт напрямую => this.state.editMode = trueopol
        //this.forceUpdate();
        console.log(this.state.editMode); //false => setState асинхронен
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    }
    // prevProps - прошлый пропс до DidUpdate prevState - прошлый стейт до DidUpdate
    componentDidUpdate(prevProps, prevState, snapshot) {
        // синхронизация стейта если какото из запросов выполнился раньше
        if (prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
       /* if (!this.props.status){
            return <Preloader/>
        }*/
        return (
            <div>
                {!this.state.editMode &&
                    /*старый подход bind(this)*/
                    <div>
                        <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status || "No status"}</span>
                    </div>
                }
                {this.state.editMode &&
                    /*современный подход со стрелочными функциями и без bind(this)*/
                    <div>
                        <input autoFocus={true} onChange={this.onStatusChange} onBlur={this.deactivateEditMode} value={this.state.status}/>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;
