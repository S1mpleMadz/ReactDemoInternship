import {useState, useEffect } from "react";
import { CardContainer, Card} from "../UI/Card.jsx";
import "./Student.scss";


function Student() {
    
    const newStudent = {

        /*
        Test
        */
                
        UserFirstname: "Nathan",
        UserLastname: "Olsson",
        UserEmail: "K999999@kingston.ac.uk",
        UserRegistered: 0,
        UserLevel: 4,
        UserYearID: 1,
        UserUserTypeID: 2,
        UserImageURL: "https://images.generated.photos/vnopGiDivHG6UKp3AgGkY44U3nOfR3lLsWNKdA-KEyQ/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjAzMjQyLmpwZw.jpg",
        UserUsertypeName: "Student",
        UserYearName: "2022-23",

    };

    const loggedInUserGroup = 1;
    const apiURL = "https://softwarehub.uk/unibase/api";
    const myGroupEndpoint = `${apiURL}/Users/groups/${loggedInUserGroup}`;

    const [ students, setStudents ] = useState(null);

    
    const apiGet = async (endpoint) => {
        const response = await fetch(endpoint);
        const result = await response.json();

        setStudents(result)
    }

    useEffect(() => {apiGet(myGroupEndpoint)}, [myGroupEndpoint]);
    
    

    const handleAdd = (student) => {

        student.UserID = Math.floor(10000 * Math.random());
        setStudents([...students,newStudent]);
        console.log(`Length of Students : ${students.length}`);
    };

    return(
        <>
            <h1>Students</h1>
           

            {
                !students
                ? (<p> Loading Records . . . </p>)
                :(
                <>
                    <CardContainer>
                        {
                            students.map((student) => {
                            return(
                                <div className="studentCard" key = {student.UserEmail}>
                                <Card>
                                    <p key="KNumber:{student.UserEmail}">{student.UserEmail.substring(0,8)}</p>
                                    <p key="Name:{student.UserFirstname}">{`${student.UserFirstname} ${student.UserLastname}`}</p>
                                    <img src={student.UserImageURL} />
                                </Card>
                                </div>
                            );
                            })
                        }
                    </CardContainer>
                    
                    
                    <button onClick={() => handleAdd(newStudent)}>Add Student</button>
                </>
                )
            }
        </>
    );
}

export default Student;