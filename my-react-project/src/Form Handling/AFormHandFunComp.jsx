import React, { useState } from 'react'

const AFormHandFunComp = () => {

    const[form, setForm] = useState({
        userName :'',
        password : '',
        email : '',
        gender :'',
        color : '',
        file : '',
        number : '',
        date :'',
  }
)
const handleChange = (e) =>{
    const{name, value} = e.target;
    console.log(`Name : ${name} Value : ${value}`)

    setForm((preState)=>({
        ...preState, [name] : value
    }))
    
}

const handleSubmit=(e)=>{
    //Save data to DB or sent to some third party api

    console.log('Inside submit button')
    
    e.preventDefault()

    
}

  return (
    <>
      
<form onSubmit={handleSubmit}>

 <h1>Form handling using Functional comp.</h1>
    <br />

    <div>
        User Name : <input type='text' name='userName' value={form.userName}  onChange={handleChange} />
    </div> <br/>

    <div>
        Password : <input type='password' name='password' value={form.password} onChange={handleChange} />
    </div>
    <br />

    <div>
    Email - ID : <input type='email' name='email' value={form.email} onChange={handleChange} />
    </div>
    <br />
    
 <div>
   Number :  <input type="number" name="number" value={form.number} onChange={handleChange} />
</div>
<br />

    <div>  Gender   :
<select  id="genderb" name="gender" value={form.gender} onChange={handleChange}  >
            <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
</div>
    <br />

 <div>
  
   Date :  <input type="date" name="date" value={form.date} onChange={handleChange} />

</div>



<br/>
    
    <div class="colorBUt">
    Color  :  <input type="color" name="color" value={form.color} onChange={handleChange} />
</div>
  
<br />

<div>
       Choose-File: <input type="file" name="file" value={form.file} onChange={handleChange} />
</div>
    <br />

<button id="subbut" type='submit'>Submit</button>
</form>

    </>
  )
}

export default AFormHandFunComp;

