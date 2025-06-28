import { CardContainer, Card} from "../UI/Card.jsx";
import {useState, useEffect } from "react";
import "./Modules.scss";

function Modules() {
    
    // Initialisation --------------------------
    const loggedInUserGroup = 820;
    const apiURL = "https://softwarehub.uk/unibase/api";
    const myModuleEndpoint = `${apiURL}/modules/leader/${loggedInUserGroup}`;

    // State -------------------------------------------
    const [ modules, setModules ] = useState(null);
        
    const apiGet = async (endpoint) => {
        const response = await fetch(endpoint);
        const result = await response.json();

        setModules(result);
    }

    useEffect(() => {
        apiGet(myModuleEndpoint);
    }, [myModuleEndpoint]);
        
        

    // Handlers ----------------------------------------------


    // View -----------------------------------------
        
    return(
        <>
        <h1>Modules</h1>

            {!modules ? (
                <p> Loading Recirds . . . </p>
            ):  modules.length === 0 ? (
                <p>No records found</p>
            ) :(     
                <CardContainer>
                    {modules.map((module) => (
                        <div className="moduleCard" key={module.ModuleCode}>
                            <Card>
                                <p key="Code:{module.ModuleCode}">{module.ModuleCode}</p>
                                <p key="Name:{module.ModuleName}">{module.ModuleName}</p>
                                <img src={module.ModuleImageURL} />
                            </Card>
                        </div>
                     
                    ))}
                </CardContainer>   
                    
            )}
            <button> Add Module</button>
        </>   
    );
}

export default Modules;