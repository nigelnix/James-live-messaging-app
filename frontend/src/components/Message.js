import React, {useState} from 'react'

function Message(props) {
    const {endPoint} = props
    const [message, setMessage] = useState("hi")

    function send (){
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({message})
          }
        fetch(endPoint, options)
        console.log(message);
    }

    function editMessage (event){
        
       setMessage(event.target.value) 
    }
  return (
    <div>
        <input type="text" onChange={editMessage} value={message}/>
        <button onClick={send}>send</button>
    </div>
  )
}

export default Message