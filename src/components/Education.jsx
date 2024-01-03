import React from "react"

export default function Education({id, school, major, begin_year, end_year, deleteEducation, isEdit, editModeOn, changeEducation, }) {  

  return (
    <div>
      {id}
      {isEdit ? 
        <>
          <input id={id} type="text" placeholder="school name" value={school} name="schoolName" onChange={changeEducation}></input>

          <input id={id} type="text" placeholder="major" value={major} name="major" onChange={changeEducation}></input>

          <input id={id} type="text" placeholder="start-year" value={begin_year} name="start-year" onChange={changeEducation}></input>

          <input id={id} type="text" placeholder="end-year" value={end_year} name="end-year" onChange={changeEducation}></input>
        </>
       : 
        <>
          <h5>School: {school}</h5> 
          <h5>Major: {major}</h5> 
          <h5>Started: {begin_year}</h5> 
          <h5>Finished: {end_year}</h5> 
        </>
      }      
      <button onClick={()=>editModeOn(id)}>Edit</button>
      <button onClick={()=>deleteEducation(id)}>Delete</button>       
      <p>-------------------------------------------------------</p>
    </div>
  )
}