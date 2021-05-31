import React from "react";
import Preloader from "../../../Common/Preloader/Preloader";

class ProfileStatus extends React.Component {
// локальый стор
    state = {
        editMode: false
    }

    activateEditMode() {
        console.log(this.state.editMode); //false setState асинхронен
        this.setState({
            editMode: true
        })
        // запустить обноврление перерисовки КОСТЫЛЬ замена setState в крайних случаях
        //this.forceUpdate();
        console.log(this.state.editMode); //false setState асинхронен
    }
    deactivateEditMode(){
        this.setState({
            editMode: false
        })
    }
    render() {
        if (!this.props.status){
            return <Preloader/>
        }
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={this.props.status}/>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;
