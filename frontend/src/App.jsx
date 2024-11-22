import { useState } from "react";


function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:3000/api/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        email : email, 
        password : password, 
        name : name
      }),
    })

    const data = await response.json();
    console.log(data);
  }

  return (
    <>
      <h1>User Registration form</h1>
        <form>

          <input 
          type="email" 
          name = "email" 
          id = "email"
          value={email}
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}/>

          <br/> <br/>

          <input 
          type="password" 
          name = "password" 
          id = "password"
          value={password}
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}/>
          
          <br/> <br/>

          <input 
          type="text" 
          name = "name" 
          id = "name"
          value={name}
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}/>

          <br/> <br/>

          <button 
          type="submit"
          onClick={handleSubmit}>
            Register
          </button>

        </form>
    </>
  )
}

export default App
