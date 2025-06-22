import '../App.css';
import { useEffect, useState } from 'react';

function Profile() {
  const [profiles, setProfiles] = useState()

  useEffect(() => {

    fetch("http://localhost:8080/user/list")
      .then((resp) => {
        return resp.json()
      })
      .then((data) => {
        console.log(data)
        setProfiles(data)
      })

  }, [])

  return (
    <div className="App">

    {function(){
      let tags = []

       profiles?.map((profile)=>{
          tags.push(<h1 key={profile._id}>{profile.name}</h1>)
       })

       return tags
    }()}

    </div>
  );
}

export default Profile;
