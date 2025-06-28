import PropTypes from 'prop-types';
import Action from "../../UI/Actions.jsx"; 
import "./ModuleForm.scss";


function ModuleForm({onCancel}) {

    return (
        <div className="moduleForm">

            

            <div className="FormTray">
                <label htmlFor="">Module Name</label>
                <input type ="text" name="ModuleName" value=""/>
            </div>
       

            <Action.Tray>
                <Action.Cancel showText buttonText="Cancel Form" onClick={onCancel}/>
            </Action.Tray>


        </div>
    );

}

ModuleForm.PropTypes = {
    onCancel: PropTypes.func,
};

export default ModuleForm;