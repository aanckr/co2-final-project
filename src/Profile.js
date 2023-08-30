import "./Profile.css";
import Header from './Header';
import Footer from './Footer';
import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

function Profile() {
    let {user_name} = useParams();

    const [user, setUser] = React.useState([]);

    const [bachelor, setBachelor] = useState(false);
    const [master, setMaster] = useState(false);
    
    const [name, setName]= React.useState('');
    const [email, setEmail]= React.useState('');
    const [height, setHeight]=  React.useState('');
    const [weight, setWeight]= React.useState('');
    const [sex, setSex]= React.useState('');
    const [semester, setSemester]= React.useState('');
    const [degree, setDegree]= React.useState('');
    const [course, setCourse]= React.useState('');

    const token = localStorage.getItem('token');

    useEffect(() => {
        if (!token) {
          window.location.href = 'http://localhost:3000/LogIn';
        } else {
          const [tokenUserName] = token.split(':');
          
          if (tokenUserName !== user_name) {
            window.location.href = 'http://localhost:3000/LogIn';
          }
        }
      }, [token, user_name]);

    useEffect(() => {
        if (user.degree === 'Bachelor') {
            setBachelor(true);
        } else if (user.degree === 'Master'){
            setMaster(true);
        }
    }, [user.degree]);
    

    const handleBachelorClick = () => {
        setBachelor(true);
        setMaster(false);
    };

    const handleMasterClick = () => {
        setBachelor(false);
        setMaster(true);
    };

    useEffect(() => {
        const dataFetch = async () => {
          const response = await fetch(`http://localhost:3001/user/${user_name}`);
          const data = await response.json();
          setUser(data[0]);
        
          setName(data[0].user_name);
          setEmail(data[0].e_mail);
          setHeight(data[0].height);
          setWeight(data[0].weight);
          setSex(data[0].sex);
          setSemester(data[0].semester);
          setDegree(data[0].degree);
          setCourse(data[0].course_of_study);
        };
        dataFetch();
    },[user_name]);

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const finalHeight = height ? height : null;
        const finalWeight = weight ? weight : null;
        const finalSex = sex ? sex : null;
        const finalDegree = degree ? degree : null;
        const finalSemester = semester ? semester : null;
        const finalCourse = course ? course : null;

        if (!name) {
            setName(user.user_name);
        };

        if (!email) {
            setEmail(user.e_mail);
        };



        const requestOptions = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({name: name, email: email, height: finalHeight, weight: finalWeight, sex: finalSex, semester: finalSemester, degree: finalDegree, course: finalCourse})
        };
        
        const dataFetch = async () => {
            const response = await fetch(`http://localhost:3001/user/${user_name}`,requestOptions)
            const data = response.json();

        }
        dataFetch();

        window.location.href = `http://localhost:3000/Profile/${user_name}`
    };

  return (
  <div className="color">
    <Header/>

    <h1>Your Personal Data</h1>

    <form onSubmit={handleSubmit}>

        <label className="labeling">
            Name
            <input placeholder={user.name} className="field" type="text"  onChange={(e) => setName(e.target.value)}/> <br />
        </label>

        <label className="labeling">
            Email
            <input placeholder={user.e_mail} className="field" type="email" onChange={(e) => setEmail(e.target.value)}/> <br />
        </label>

        <label className="labeling">
            Date of Birth
            <input placeholder={user.birthdate} id="field" type="text" label="Date of Birth" /> <br />
        </label>

        <label className="labeling">
            Height
            <input placeholder={user.height} className="field" type="number" onChange={(e) => setHeight(e.target.value)}/> <br />
        </label>

        <label className="labeling">
            Weight
            <input placeholder={user.weight} className="field" type="number" onChange={(e) => setWeight(e.target.value)}/> <br />
        </label>

        <label className="labeling">
            Sex
            <input placeholder={user.sex} className="field" list="sex" name="sex" onChange={(e) => setSex(e.target.value)}/>
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
                    <input placeholder={user.semester} className="field" type="number" min="1" max="6" onChange={(e) => setSemester(e.target.value)}/> <br /> 
                </label>

                <label className="labeling">
                    Bachelor Study Program
                    <div id="bachelor-list">
                        <input placeholder={user.course_of_study} className="field" list="study-program-bachelor" name="study-program-bachelor" onChange={(e) => setCourse(e.target.value)}/>
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
                    <input placeholder={user.semester} className="field" type="number" min="1" max="4" onChange={(e) => setSemester(e.target.value)}/> <br /> 
                </label>

                <label className="labeling">
                    Master Study Program
                    <div id="master-list">
                        <input placeholder={user.course_of_study} className="field" list="study-program-master" name="study-program-master" onChange={(e) => setCourse(e.target.value)}/>
                        <datalist id="study-program-master" >
                            <option value="Digital Transformation Management" />
                            <option value="Data Science" />
                        </datalist>
                    </div>
                </label>
            </div>
        }

        <button type='submit' className='save-button'>Save</button> 

        <a id="log-out" onClick={() => window.location.href = `http://localhost:3000`}>Log Out</a>
    </form>

    <Footer/>

  </div>
  )
}

export default Profile;
