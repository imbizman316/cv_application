import React from "react";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Coverletter from "./components/Coverletter";

function App() {

  //-------------Image------------------------------------//
  const [imageEdit, setImageEdit] = React.useState(false);
  const [imageURL, setImageURL] = React.useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC7LPfug8zNYc8fk6hc59Avfe6PZaOmVViFQ&usqp=CAU");
  const [imageURLconfirm, setImageURLConfirm] = React.useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC7LPfug8zNYc8fk6hc59Avfe6PZaOmVViFQ&usqp=CAU")

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

  //-------------Experience---------------------------------//
  const [experience, setExperience] = React.useState([]);
  const [expCount, setExpCount] = React.useState(0);

  //-------------Coverletter---------------------------------//
  const [coverletter, setCoverletter] = React.useState("");
  const [coverletterEdit, setCoverLetterEdit] = React.useState(true);

  function handleClick() {
    setEdit(!edit);
  }

  //----Image hadling----------------//
  function imageEditHandle() {
    setImageEdit(!imageEdit);
  }

  function imageURLSubmit(e) {
     e.preventDefault();

     setImageURLConfirm(imageURL);
     setImageEdit(!imageEdit);
  }

  function urlChangeHandle(e) {

    setImageURL(e.target.value);

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
    setEduCount(eduCount + 1);    
  }

  //---Add education----------------//
  function addEducation() {        

    setEduCountFunc()
    const tempEdu = edu;
    tempEdu.push({
      key: eduCount,
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

    let tempEdu = []

    edu.forEach((each) => {
      
      if (parseInt(each.id) === parseInt(e.target.id)) {

        if (e.target.name === "schoolName"){
          tempEdu.push({...each, school: e.target.value})
        } 

        else if (e.target.name === "major"){
          tempEdu.push({...each, major: e.target.value})
        } 

        else if (e.target.name === "start-year"){
          tempEdu.push({...each, begin_year: e.target.value})
        } 

        else if (e.target.name === "end-year"){
          tempEdu.push({...each, end_year: e.target.value})
        } 
        
      } 

      else
        {
          tempEdu.push(each)
        }
    })    
    
      setEdu(tempEdu)

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

  //-------------------Experience Section-----------------------//
  const increaseExperience = () => {
    setExpCount(expCount + 1);
  }

  //-------------------Add Experience-----------------------//
  
  const addExperience = () => {
    increaseExperience();
    
    let tempList = experience;

    tempList.push({
      key: expCount,
      id: expCount,
      company: "",
      position: "",
      main_tasks: "",
      started: "",
      finished: "",
      isEdit: true,
    })

    setExperience(tempList);
  }

  //-------------------Delete Experience-----------------------//
  const deleteExperience = (e) => {    

    let tempList = [];

    experience.forEach((each) => {

      if (parseInt(each.id) !== parseInt(e.target.id)) {
        tempList.push(each)
      }

    })

    setExperience(tempList);

  }

  //-------------------Switch Edit On-----------------------//
  const switchEditOn = (e) => {

    let tempList = [];

    experience.forEach((each) => {
      if (parseInt(each.id) === parseInt(e.target.id)){
        tempList.push({...each, isEdit: !each.isEdit})
      } 
      else {
        tempList.push(each);
      }
    })

    setExperience(tempList);

  }

  //-----------Handle Experience Change-----------------------//
  const handleExperienceChange = (e) => {
    
    let tempList = [];

    experience.forEach((each) => {
      if (parseInt(each.id) === parseInt(e.target.id)) {
        if (e.target.name === "company") {
          tempList.push({...each, company: e.target.value})
        }
        else if (e.target.name === "position"){
          tempList.push({...each, position: e.target.value})
        }
        else if (e.target.name === "main-tasks"){
          tempList.push({...each, main_tasks: e.target.value})
        }
        else if (e.target.name === "start-date"){
          tempList.push({...each, started: e.target.value})
        }
        else if (e.target.name === "finish-date"){
          tempList.push({...each, finished: e.target.value})
        }

      }
      else {
        tempList.push(each);
      }
    })

    setExperience(tempList);

  }

  //-----------Handle coverletter-----------------------//
  const coverletterEditOn = () => {

    setCoverLetterEdit(!coverletterEdit)

  }

  const handleCoverLetterChange = (e) => {

    setCoverletter(e.target.value);

  }


  return (
    <>
      {/* --------------General Section-------------- */}
      <div>
        
        <div style={{backgroundColor: "black", height: "10px"}}></div>
        {/* <div className="top" onClick={handleClick} style={{backgroundColor:"grey", height:"100px"}}>
          {edit ? <>edit</> : <>no-edit</>}  
        </div> */}
        <h1>
          CV Coverletter          
        </h1>        
        <img src={imageURLconfirm} style={{width: "200px"}}/>
        {!imageEdit && <button onClick={imageEditHandle}>Change</button>}
        
        {imageEdit && 
          <form  onSubmit={imageURLSubmit}>
            <input type="text" value={imageURL} onChange={urlChangeHandle}></input>
            <button type="submit">Confirm</button>
          </form>
        }        

        {/* --------------General Display-------------- */}
        <h3>
          General
        </h3>          

        <button onClick={handleClick}>{edit ? "Edit" : "Confirm"}</button>      

        <div style={{border: "1px solid black"}}>          
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
        
        
      </div>
      <>
        {edu.map((each) => {
          return (
            <div>                    
              
              <Education
                key= {each.key}
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
      <h3>Experience</h3>
      <button onClick={addExperience}>Add experience</button>
      {
        experience.map((each) => {
          return (
            <Experience 
              deleteExperience={deleteExperience}
              key={each.key}
              id={each.id}
              company={each.company}
              position={each.position}
              main_tasks={each.main_tasks}
              started={each.started}
              finished={each.finished}
              isEdit={each.isEdit}
              switchEditOn={switchEditOn}
              handleExperienceChange={handleExperienceChange}
            />
          )
        })
      }

      <h3>Coverletter</h3>

      <Coverletter 
        coverletter={coverletter}
        coverletterEdit={coverletterEdit}
        coverletterEditOn={coverletterEditOn} 
        handleCoverLetterChange={handleCoverLetterChange}
      />

      <div style={{backgroundColor: "black", height: "10px"}}></div>
    </>
  );
}

export default App;
