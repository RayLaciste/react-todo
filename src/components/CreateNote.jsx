import React, {useState} from "react";

export default function CreateNote(props) {
    const [note, setNote] = useState({
        title: "",
        content: "",
    })

    function submitNote(event) {
        // Calling props.onAdd is same as calling onAdd from App.jsx
        // created note is passed back to App.jsx
        props.onAdd(note);
        // Clears the input fields for next entry
        setNote({
          title: "",
          content: ""
        });
        // Prevents page from refreshing
        event.preventDefault();
      }
    
      function handleChange(event) {
        // Destructured  == event.target.name & event.target.value
        const { name, value } = event.target;
    
        // 
        setNote(prevNote => {
          return {
            // spread operator spreads key value pairs in note
            ...prevNote,
            //[name] assigns vairable to actual value isntead of just string
            [name]: value
          };
        });
      }
    
    return (
        <div className="create-note">
            <form>
                <input 
                    name="title"
                    onChange={handleChange}
                    value={note.title}
                    placeholder='t i t l e'/>
                <textarea
                    name="content" 
                    onChange={handleChange}
                    value={note.content}
                    placeholder='e n t r y'/>
                    {/* on click, submitNote is called*/}
                <button onClick={submitNote}> Add </button> 
            </form>
        </div>
    )
}