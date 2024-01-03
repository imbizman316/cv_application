export default function Coverletter({coverletterEdit, coverletterEditOn, handleCoverLetterChange,coverletter}) {  

  let contents = []
  let tempText = "";  
    
  for (let i=0; i < coverletter.length; i++) {    

    if (coverletter[i] === `\n`) {
      contents.push(tempText)
      tempText = "";
    } 
    else {
      tempText += coverletter[i];
    }

  } 

  return (
    <div>
      <button onClick={coverletterEditOn}>Edit</button>
      
      {coverletterEdit ? 
        <>
          <textarea id="coverletter" name="coverletter" rows="10" cols="100" onChange={handleCoverLetterChange} value={coverletter}></textarea>  
        </> 
        
      : 
      
        <>
          {contents.map((each) => {
            return (
              <p>{each}</p>
            )
            
          })}
        </>
      }
    </div>
  )
}