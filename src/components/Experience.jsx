export default function Experience({deleteExperience, id, company, position, main_tasks, started, finished, isEdit, switchEditOn, handleExperienceChange}) { 

  return (
    <div>      
      {isEdit ? 
        <>
          <div>
            <label htmlFor="Company">Company: </label>
            <input type='text' name='company' id={id} onChange={handleExperienceChange} value={company}></input>
          </div>
          <div>
            <label htmlFor="start-date">Position: </label>
            <input type='text' name='position' id={id} onChange={handleExperienceChange} value={position}></input>
          </div>
          <div>
            <label htmlFor="start-date">Main Tasks: </label>
            <input type='text' name='main-tasks' id={id} onChange={handleExperienceChange} value={main_tasks}></input>
          </div>
          <div>
            <label htmlFor="start-date">Started: </label>
            <input type='text' name="start-date" id={id} onChange={handleExperienceChange} value={started}></input>
          </div>
          <div>
            <label htmlFor="finish-date">Finished: </label>
            <input type='text' name='finish-date' id={id} onChange={handleExperienceChange} value={finished}></input>
          </div>
        </>      
      : 

        <>
          <h5>Company: {company}</h5>
          <h5>Position: {position}</h5>
          <h5>Main Tasks: {main_tasks}</h5>
          <h5>Date Started: {started}</h5>
          <h5>Date Ended: {finished}</h5>
        </>
      
    }        
      
      <button onClick={switchEditOn} id={id}>Edit</button>
      <button onClick={deleteExperience} id={id}>Delete</button>
      <p>------------------------------------------</p>
    </div>
  )
}