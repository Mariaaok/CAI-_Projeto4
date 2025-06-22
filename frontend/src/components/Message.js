import '../App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Message() {
  const [messages, setMessages] = useState()
  const [message, setMessage] = useState()
  const [notice, setNotice] = useState()
  const [reload, setReload] = useState(false)
  const navigate = useNavigate()

  let handleChange = (e) => {
    setMessage(e.target.value)
  }

  let handleSend = async () => {
    let response = await axios.post('http://localhost:8080/message/create', { message: message }, 
      {
          withCredentials: true,
          headers: {
            'Authorization': sessionStorage.getItem("token")
          }
        }
    );
    setReload(true)
  }


  useEffect(() => {

    let load = async () => {
      const response = await axios.get('http://localhost:8080/message/list',
        {
          withCredentials: true,
          headers: {
            'Authorization': sessionStorage.getItem("token")
          }
        }
      );
      setMessages(response.data)
    }
    
    if(sessionStorage.getItem("token")=='undefined') {
      
      setNotice('Você será redirecionado!')

      setTimeout(()=>{        
        navigate('/login')
      }, 2000)
            
    } else {
      
      load()

    }

  }, [reload])

  return (
    <div className="App">

      <h1>{notice}</h1>

      <label>Nova Mensagem: </label>
      <input onChange={handleChange}></input>
      <button onClick={handleSend}>OK</button>

      {function () {
        let tags = []

        messages?.map((msn) => {
          tags.push(<h1 key={msn._id}>{msn.content}</h1>)
        })

        return tags
      }()}

    </div>
  );
}

export default Message;
