import { useState } from 'react'

const Contact = () => {
  const [Username, setUser] =useState('')
  const [Email, SetEmail] = useState('')
  const [Password, SetPassword] = useState('')
  return (
    <div className='contact'>
      <form>
        <input  type="text" value={Username}  onChange={(e) => setUser (e.target.value)} placeholder='Enter Username ...' />
        <input type="email" value={Email}  onChange={(e) => SetEmail (e.target.value)} placeholder='Enter Email ...' />
        <input type="password"value={Password}  onChange={(e) => SetPassword (e.target.value)} placeholder='Enter Password ...' />
        <button type='Submit'>Submit</button>

      </form>
    </div>
  )
}

export default Contact