import {useState, useEffect } from "react";
import Action from "../UI/Actions.jsx"; 
import ModuleForm from "../entity/module/ModuleForm.jsx";
import { CardContainer} from "../UI/Card.jsx";
import ModuleCard from "../entity/module/ModuleCard.jsx";
import "../entity/module/ModuleForm.scss";


function Modules() {
    
    // Initialisation --------------------------
    const loggedInUserGroup = 820;
    const apiURL = "https://softwarehub.uk/unibase/api";
    const myModuleEndpoint = `${apiURL}/modules/leader/${loggedInUserGroup}`;

    // State -------------------------------------------
    const [ modules, setModules ] = useState(null);
    const [showForm, setShowForm] = useState (false);
        
    const apiGet = async (endpoint) => {
        const response = await fetch(endpoint);
        const result = await response.json();

        setModules(result);
    }

    useEffect(() => {
        apiGet(myModuleEndpoint);
    }, [myModuleEndpoint]);
        
        

    // Handlers ----------------------------------------------
    const handleAdd = () => setShowForm(true);
    const handleCancel = () => setShowForm(false);

    // View -----------------------------------------
        
    return(
        <>
        <h1>Modules</h1>

            <Action.Tray>
                {!showForm && <Action.Add showText buttonText="Add New Module" onClick={handleAdd}/>}
            </Action.Tray>

            {showForm && <ModuleForm onCancel={handleCancel}/>}

            {!modules ? (
                <p> Loading Recirds . . . </p>
            ):  modules.length === 0 ? (
                <p>No records found</p>
            ) :(     
                <CardContainer>
                    {modules.map((module) => <ModuleCard module={module} key={module.ModuleCode}/>)}
                </CardContainer>                     
            )}
      
        </>   
    );
}

export default Modules;