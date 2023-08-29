import "./Profile.css";
import Header from './Header';
import Footer from './Footer';
import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

function Profile() {

    //Handle bachelor and master buttons
    const [bachelor, setBachelor] = useState(false);
    const [master, setMaster] = useState(false);

    const handleBachelorClick = () => {
        setBachelor(true);
        setMaster(false);
    };

    const handleMasterClick = () => {
        setBachelor(false);
        setMaster(true);
    };


    //Show user data
    let {user_name} = useParams();

    const [user, setUser] = React.useState([]);

    useEffect(() => {
        const dataFetch = async () => {
          const response = await fetch(`http://localhost:3001/user/${user_name}`);
          const data = await response.json();
          setUser(data[0]);
          console.log(data)
        };
        dataFetch();
    },[user_name]);

  return (
  <div className="color">
    <Header/>

    <h1>Your Personal Data</h1>

    <form>

        <label className="labeling">
            Name
            <input placeholder={user.name} className="field" type="text"  /> <br />
        </label>

        <label className="labeling">
            Email
            <input placeholder={user.e_mail} className="field" type="email" /> <br />
        </label>

        <label className="labeling">
            Date of Birth
            <input placeholder={user.birthdate} id="field" type="text" label="Date of Birth" /> <br />
        </label>

        <label className="labeling">
            Height
            <input placeholder={user.height} className="field" type="number"/> <br />
        </label>

        <label className="labeling">
            Weight
            <input placeholder={user.weight} className="field" type="number" /> <br />
        </label>

        <label className="labeling">
            Sex
            <input placeholder={user.sex} className="field" list="sex" name="sex" />
            <datalist id="sex" >
                <option value="Female" />
                <option value="Male" />
                <option value="Diverse" />
                <option value="No comment" />
            </datalist> <br />
        </label>


        <h2>Tell us something about your study life...</h2>

        <h4>Where you at?</h4>

        <label> 
            <input type="radio" id="bachelor" name="study" value="bachelor" onClick={handleBachelorClick} /> 
            Bachelor
        </label> <br />

        <label>
            <input type="radio" id="master" name="study" value="master" onClick={handleMasterClick} /> 
            Master
        </label> <br />


        {bachelor &&
            <div>
                <label className="labeling">
                    Semester
                    <input className="field" type="number" min="1" max="6" /> <br /> 
                </label>

                <label className="labeling">
                    Bachelor Study Program
                    <div id="bachelor-list">
                        <input className="field" list="study-program-bachelor" name="study-program-bachelor" />
                        <datalist id="study-program-bachelor" >
                            <option value="Coding and Software Engineering" />
                            <option value="Data Science" />
                            <option value="Digital Business" />
                            <option value="Digital Marketing and Social Media" />
                        </datalist>
                    </div>
                </label>
            </div>
        }

        {master &&

            <div>
                <label className="labeling">
                    Semester
                    <input className="field" type="number" min="1" max="4" /> <br /> 
                </label>

                <label className="labeling">
                    Master Study Program
                    <div id="master-list">
                        <input className="field" list="study-program-master" name="study-program-master" />
                        <datalist id="study-program-master" >
                            <option value="Digital Transformation Management" />
                            <option value="Data Science" />
                        </datalist>
                    </div>
                </label>
            </div>
        }
        <button className='save-button'>Save</button> 

       

    </form>

    <Footer/>

  </div>
  )
}

export default Profile;
