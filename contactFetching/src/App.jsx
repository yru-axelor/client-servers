import { useState } from 'react'
import axios from "axios";
import { Card } from "./components/Card/Card"
import './App.css'

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFetchData = async () => {
    try {
      setLoading(true)
      const res = await fetch("http://localhost:5000/api/contacts");
      const data = await res.json();
      setUsers(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  const handleFetchAxios = () => {
    setLoading(true);
    axios.get("http://localhost:5000/api/contacts").then((response) => {
      setUsers(response.data);
    }).catch((error) => setError(error.message)).finally(() => {
      setLoading(false);
    })
  };

  const clearData = () => {
    setUsers([]);
  };
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <button onClick={handleFetchData}>Fetch Call Data</button>
      <button onClick={handleFetchAxios}>Axios Call Data</button>
      <button onClick={clearData}>Clear</button>
      <ol>
        <div className="container">
          {users.map((user) => (
            <Card key={user.id} user={user} />
          ))}
        </div>
      </ol>
    </>
  );
}

export default App;
