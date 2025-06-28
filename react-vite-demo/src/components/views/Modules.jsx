import { CardContainer, Card} from "../UI/Card.jsx";
import {useState, useEffect } from "react";
import "./Modules.scss";

function Modules() {
    
    const newModule = {};

    const apiURL = "https://softwarehub.uk/unibase/api";
    const myModuleEndpoint = `${apiURL}/modules`;

    const [ modules, setModules ] = useState(null);

        
    const apiGet = async (endpoint) => {
        const response = await fetch(endpoint);
        const result = await response.json();

        setModules(result)
    }

    useEffect(() => {apiGet(myModuleEndpoint)}, [myModuleEndpoint]);
        
        

    const handleAdd = (module) => {
        module.ModuleID = Math.floor(10000 * Math.random());
        setModules([...modules,newModule]);
    };

        
    return(
        <>
        <h1>Modules</h1>

            {
                !modules
                ? (<p> Loading Recirds . . . </p>)
                :(
                <>

                    <CardContainer>
                        {
                            modules.map((module) => {
                                return(
                                <div className="moduleCard" key={module.ModuleCode}>
                                    <Card>
                                    <p key="Code:{module.ModuleCode}">{module.ModuleCode}</p>
                                    <p key="Name:{module.ModuleName}">{module.ModuleName}</p>
                                    <img src={module.ModuleImageURL} />
                                    </Card>
                                </div>
                                );
                            })
                        }
                    </CardContainer>   
                    
                    <button onClick={() => handleAdd(newModule)}>Add Module</button>
                </>
                )

            }
        </>   
    );
}

export default Modules;