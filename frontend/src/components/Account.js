import '../App.css';
import { useEffect, useState } from 'react';

function Account() {
  const [accounts, setAccounts] = useState()

  useEffect(() => {

    fetch("http://localhost:8080/account/list")
      .then((resp) => {
        return resp.json()
      })
      .then((data) => {
        console.log(data)
        setAccounts(data)
      })

  }, [])

  return (
    <div className="App">

      {function () {
        let tags = []

        accounts?.map((account) => {
          tags.push(<h1 key={account._id}>{account._id}</h1>)
        })

        return tags
      }()}

    </div>
  );
}

export default Account;
