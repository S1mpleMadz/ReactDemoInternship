import PropTypes from 'prop-types';
import Action from "../../UI/Actions.jsx"; 
import "./ModuleForm.scss";


function ModuleForm({onCancel}) {

    return (
        <div className="moduleForm"> 
            <p>This is the form</p>
       

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