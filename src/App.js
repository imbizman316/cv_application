import React from "react";
import Education from "./components/Education";

function App() {

  //-------------General---------------------------------//
  const [edit,setEdit] = React.useState(false);
  const [name,setName] = React.useState("Enter your name");
  const [nameEdit,setNameEdit] = React.useState(false);
  const [email,setEmail] = React.useState("Enter your email");
  const [emailEdit,setEmailEdit] = React.useState(false);
  const [phone,setPhone] = React.useState("Enter your phone");
  const [phoneEdit,setPhoneEdit] = React.useState(false);

  //-------------Education---------------------------------//
  const [edu, setEdu] = React.useState([]);
  const [eduCount, setEduCount] = React.useState(0);
  //const [schoolReal, setSchool] = React.useState("");

  const [test, setText] = React.useState([
    {
      id: 100,
      text: ""
    },
    {
      id: 200,
      text: ""
    }
  ])


  function handleClick() {
    setEdit(!edit);
  }

  //----Name hadling----------------//
  function handleNameEdit(e) {
    setNameEdit(!nameEdit);
  }
  function handleNameChange(value) {
    setName(value)
  }
  function handleNameEditKey(e){
    if (e.key === "Enter") {
      setNameEdit(!nameEdit);
    }
  }

  //----Email hadling----------------//
  function handleEmailEdit(e) {
    if (e.key === undefined || e.key === "Enter") {
      setEmailEdit(!emailEdit);  
    }
    
  }
  function handleEmailChange(value) {
    setEmail(value)
  }

  //----Phone hadling----------------//
  function handlePhoneEdit(e) {
    if (e.key === undefined || e.key === "Enter")
    setPhoneEdit(!phoneEdit);
  }
  function handlePhoneChange(value) {
    setPhone(value)
  }

  function setEduCountFunc() {
    const tempCount = eduCount + 1
    setEduCount(tempCount);    
  }

  //---Add education----------------//
  function addEducation() {        

    setEduCountFunc()
    const tempEdu = edu;
    tempEdu.push({
      id: eduCount,
      school: "",
      major: "",
      begin_year: "",
      end_year: "",
      isEdit: true,
    })
    setEdu(tempEdu);    
    
  }

  //---Delete education-------------//
  function deleteEducation(id) {

    let tempEdu = [];
    
    edu.forEach((one) => {
      if (one.id !== id) {
        tempEdu.push(one);
      }
    })

    setEdu(tempEdu);
  }

  //---onChange Education Handler---------//

  const changeEducation = (e) => {

    console.log(e.target.name);
    console.log(e.target.id);
    console.log(e.target.value);

    

    if (e.target.name === "schoolName") {

      let tempEdu = [];
      
      edu.forEach((one) => {
        if (one.id === e.target.id) {
          tempEdu.push({...one, school: e.target.value})
        } else {
          tempEdu.push(one)
        }
      })

      setEdu(tempEdu);

    }

    
    console.log(edu);

  }

  //---Education edit Mode On -------//
  const editModeOn = (id) => {

    let tempEdu = []

    edu.forEach((one) => {
      if (one.id === id) {
        tempEdu.push({...one,isEdit:!one.isEdit})
      } else {
        tempEdu.push(one)
      }
    })

    setEdu(tempEdu);
    
  }

  return (
    <>
      {/* --------------General Section-------------- */}
      <div>
        
        <div className="top" onClick={handleClick} style={{backgroundColor:"grey", height:"100px"}}>
          {edit ? <>edit</> : <>no-edit</>}  
        </div>
        <h1>
          CV - Mike Lee
        </h1>

        {/* //----------Change Test----------// */}
        <input type="text" placeholder="school name" name="schoolName" value={test}/>

        {/* --------------General Display-------------- */}
        <h3>
          General
        </h3>                
        <div style={{border: "1px solid black"}}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC7LPfug8zNYc8fk6hc59Avfe6PZaOmVViFQ&usqp=CAU"/>
          {edit && nameEdit ?
            <div>
              <input type="text" value={name} onChange={(e)=>handleNameChange(e.target.value)}
              onKeyDown={handleNameEditKey}
              />   
            </div>           
            :
            <p onDoubleClick={handleNameEdit}>
              {name}
            </p>
          }   

          {edit && emailEdit ?
            <div>
              <input type="text" value={email} onChange={(e)=>handleEmailChange(e.target.value)}
              onKeyDown={handleEmailEdit}
              />   
            </div>           
            :
            <p onDoubleClick={handleEmailEdit}>
              {email}
            </p>
          }

          {edit && phoneEdit ?
            <div>
              <input type="text" value={phone} onChange={(e)=>handlePhoneChange(e.target.value)}
              onKeyDown={handlePhoneEdit}
              /> 
            </div>             
            :
            <p onDoubleClick={handlePhoneEdit}>
              {phone}
            </p>
          }
        </div>
      </div>
      
      {/* --------------Education Section-------------- */}
      <h3>
        Education
      </h3>
      <div style={{border: "1px solid black"}}>

        <button onClick={

          ()=>{addEducation()}

          }>Add education</button>        
        
        {eduCount}
        {edu.length > 0 && edu[edu.length - 1].id}        
      </div>
      <>
        {edu.map((each) => {
          return (
            <div>                    
              
              <Education

                id = {each.id}
                school = {each.school}
                major = {each.major}
                begin_year = {each.begin_year}
                end_year = {each.end_year}    
                deleteEducation = {deleteEducation}
                isEdit = {each.isEdit}
                editModeOn = {editModeOn}
                changeEducation = {changeEducation}                

               />                
            </div>
              )
            }
          )
        }
        </>
    </>
  );
}

export default App;
