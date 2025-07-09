import { useState } from "react";
import PropTypes from 'prop-types';
import Action from "../../UI/Actions.jsx"; 
import "./ModuleForm.scss";


const initialModule = {
    ModuleName: null,
    ModuleCode:null,
    ModuleLevel:0,
    ModuleYearID: null,
    ModuleLeaderID: null,
    ModuleImageURL: ""
}

function ModuleForm({onCancel}) {


    const [module,setModule] = useState(initialModule);

    return (
        <div className="moduleForm">

            

            <div className="FormTray">
                <label>
                    Module Name
                    <input type ="text" name="ModuleName" value={module.ModuleName} />
                </label>

                <label>
                    Module Code
                    <input type ="text" name="ModuleCode" value={module.ModuleCode} />
                </label>
    
                <label>Module Level
                    <select name="ModuleLevel" value={module.ModuleLevel}>
                        <option value="0" disabled>
                            None Selected
                        </option>
                        {[3,4,5,6,7].map((level) => (
                            <option key = {level}>{level}</option>
                        ))}
                    </select>
                </label>
                    
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