import React, {useState} from "react";

export default function CreateNote(props) {
    const [note, setNote] = useState({
        title: "",
        content: "",
    })

    function submitNote(event) {
        props.onAdd(note);
        setNote({
          title: "",
          content: ""
        });
        event.preventDefault();
      }
    
      function handleChange(event) {
        const { name, value } = event.target;
    
        setNote(prevNote => {
          return {
            ...prevNote,
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
                <button onClick={submitNote}> Add </button> 
            </form>
        </div>
    )
}