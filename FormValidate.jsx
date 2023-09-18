import { useState } from 'react'

function FormValidate() {
  const [firstName, setFirstName] = useState('') // useState to store First Name
  const [lastName, setLastName] = useState('') // useState to store Last Name
  const [mobile, setMobile] = useState('') // useState to store Mobile Number
  const [age, setAge] = useState('') // useState to store Age
  const [email, setEmail] = useState('') // useState to store Email address of the user
  const [password, setPassword] = useState('') // useState to store Password

  return (
    <div className="main">
      <hr />  <center><h1>Form Validation</h1></center>
      <hr /><form>
        FirstName:<input onChange={(e) => setFirstName(e.target.value)}  /><br /><hr />
       LastName: <input onChange={(e) => setLastName(e.target.value)} /> <br /><hr />
       <hr />Mobile: <input onChange={(e) => setMobile(e.target.value)} /> <br />
       <hr />Age: <input  onChange={(e) => setAge(e.target.value)} /> <br />
       <hr />Email: <input onChange={(e) => setEmail(e.target.value)} /> <br />
       <hr />Password:<input onChange={(e) => setPassword(e.target.value)}/> <br />
       <hr /><button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default FormValidate;
