import React,{useState} from 'react'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const CreateNote = (props) => {
  const [expand,setExpand] = useState(false);
    const [note,setNote] = useState({
        title:"",
        content:"",
    });
    const Input =  (event) =>{
        // const value = event.target.value;
        // const name = event.target.name;
        const{value,name} = event.target;
        setNote((prevData)=>{
            return{
                ...prevData,
                [name]:value,
            }

        });
        console.log(note);
    }
    const addEvent = () =>{
        props.passNote(note);
        setNote({
          title:"",
        content:"",
        });
    };
    const expandIt =() =>{
      setExpand(true)
    }
    const backtoNormal = () =>{
      setExpand(false);
    }
  return (
    <>
      <div className="main_note"  onDoubleClick={backtoNormal}>
        <form>
        {expand?
            <input type="text"
            name="title"
            value={note.title}
            onChange={Input}
            placeholder="title"
            
             />:null}
            <textarea rows="" columns=""
            name="content"
            value={note.content}
            onChange={Input}
             placeholder="write a note.."
             onClick={expandIt}>
             </textarea>
             {expand?
            <Button onClick={addEvent}>
                <AddIcon className='plus_sign'/>
            </Button> : null}
        </form>
      </div>
    </>
  )
}

export default CreateNote
