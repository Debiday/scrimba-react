import React, {useState, useEffect} from 'react'
import randomColor from "randomcolor"

function App() {
  const[inputData, setInputData] = useState({firstName: '', lastName: '', birthday: ''})
  const[contactsData, setContactsData] = useState([])
  const[color, setColor] = useState("")

  function handleChange(event) {
    const {name, value} = event.target
    setInputData(prevInputData => ({...prevInputData, [name]:value}))
  }

  function handleSubmit(event) {
    event.preventDefault()
    setContactsData(prevContacts => [...prevContacts, inputData])
  }

  useEffect(() => {
    setColor(randomColor())
  }, [contactsData])

  const contacts = contactsData.map(contact => <h2 key={contact.firstName + contact.lastName + contact.birthday}>{contact.firstName} {contact.lastName}, born on {contact.birthday}.</h2>)

  const datePickerMax = new Date().toISOString().split("T")[0]

  return (
    <>
      <form onSubmit={handleSubmit}>
          <input 
              style={{marginRight:"20px", marginBottom:"15px"}}
              placeholder='First Name'
              name='firstName'
              value={inputData.firstName}
              onChange={handleChange}
          />
          <input 
              placeholder='Last Name'
              name='lastName'
              value={inputData.lastName}
              onChange={handleChange}
          />
          <br />
          <label>My birthday 🎂</label>
          <br />
          <input
              style={{marginBottom:"15px"}} 
              type="date" 
              id="start" 
              name="birthday"
              value={inputData.birthday}
              min="2018-01-01" max={datePickerMax}
              onChange={handleChange}
                    
          />
          <br />
          <button style={{backgroundColor: color}}>Add contact</button>
      </form>
      {contacts}
    </>
  )
}

export default App