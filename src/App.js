import React from "react";

function App() {

  const [edit,setEdit] = React.useState(false);
  const [name,setName] = React.useState("");
  const [nameEdit,setNameEdit] = React.useState(false);
  const [email,setEmail] = React.useState("");
  const [emailEdit,setEmailEdit] = React.useState(false);
  const [phone,setPhone] = React.useState("");
  const [phoneEdit,setPhoneEdit] = React.useState(false);

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

  return (
    <>
      {/* --------------General Section-------------- */}
      <div>
        <div className="top" onClick={handleClick} style={{backgroundColor:"grey", height:"100px"}}>
          {edit ? <>edit</> : <>no-edit</>}  
        </div>
        <div>
          CV - Mike Lee
        </div>
        <div>
          <p style={{backgroundColor: "yellow"}} onClick={handleNameEdit}>
            Name
          </p>
          <p style={{backgroundColor: "pink"}} onClick={handleEmailEdit}>
            Email
          </p>
          <p style={{backgroundColor: "skyblue"}} onClick={handlePhoneEdit}>
            Phone Number
          </p>
        </div>
        {/* --------------General Display-------------- */}
        <div>                
          {edit && nameEdit ?
            <input type="text" value={name} onChange={(e)=>handleNameChange(e.target.value)}
            onKeyDown={handleNameEditKey}
            />              
            :
            <p onDoubleClick={handleNameEdit}>
              {name}
            </p>
          }   

          {edit && emailEdit ?
            <input type="text" value={email} onChange={(e)=>handleEmailChange(e.target.value)}
            onKeyDown={handleEmailEdit}
            />              
            :
            <p onDoubleClick={handleEmailEdit}>
              {email}
            </p>
          }

          {edit && phoneEdit ?
            <input type="text" value={phone} onChange={(e)=>handlePhoneChange(e.target.value)}
            onKeyDown={handlePhoneEdit}
            />              
            :
            <p onDoubleClick={handlePhoneEdit}>
              {phone}
            </p>
          }
        </div>
      </div>
      
      {/* --------------Education Section-------------- */}
    </>
  );
}

export default App;
