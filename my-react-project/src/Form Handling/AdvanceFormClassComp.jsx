// import React, { Component } from 'react';
// class AdvanceFormClassComp extends Component { constructor(props) 
//     { super(props);
//          this.state = { name: '', email: '', message: '', gender: '' }; } 
//     handleInputChange = (event) =>
//          { const { name, value } = event.target; 
//     this.setState({ [name]: value }); }; 
//     handleSubmit = (event) => { event.preventDefault(); 
//         const { name, email, message, gender } = this.state; // Handle form submission logic here, such as sending data to a server console.log('Submitted Values:', { name, email, message, gender }); // Clear form inputs after submission 
//         this.setState({ name: '', email: '', message: '', gender: '' }); };
//          render() 
//          { 
//             return (

//              <div> <form onSubmit={this.handleSubmit}> 
//                  <h1>Advance Form handling using Class comp.</h1>

//          <label>Name:</label> <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange} /> 
//          <br />              <br />

//          <label>Email:</label> <input type="email" name="email" value={this.state.email} onChange={this.handleInputChange} />
//          <br />
//          <br />

//           <label>Message:</label> <textarea name="message" value={this.state.message} onChange={this.handleInputChange} /> 
//           <br />
//           <br />

//           <label>Gender:</label> <select name="gender" value={this.state.gender} onChange={this.handleInputChange} >
//             <br />
//             <br />

//              <option value="">Select</option> 
//              <option value="male">Male</option> 
//              <option value="female">Female</option>
//               <option value="other">Other</option> </select> 
//               <br />
//               <br />
//               <button type="submit">Submit</button> </form> </div>
//                );
//              }
//             }
//             export default AdvanceFormClassComp;
import React, { Component } from 'react';

class AdvanceFormClassComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: '',
      email : '',
      color : '',
      file : '',
      gender: ''
     //  number : '',
     //  date :'',

      
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name, password,email,color,gender,file,number,date} = this.state;

    console.log('name:', name);
    console.log('Password:', password);
    console.log('email:', email);
    console.log('color:', color);
    console.log('gender',gender);
    console.log('file:', file);

//     console.log('number:', number);
//     console.log('date:', date);


    this.setState({ username: '', password: '', email : '', gender: '',color : '', file : ''});
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>

      <h2>Form Handaling using Class Component</h2>

<div>
    Username: <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
</div>
    <br/>

<div>
    Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
</div>
    
   <br/>

<div>

   Email: <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
    
</div>

  
    <br />
<div>
    color:<input type="color" name="color" value={this.state.color} onChange={this.handleChange} />
</div>
  
<br />

<div>
       Choose File: <input type="file" name="file" value={this.state.file} onChange={this.handleChange} />
</div>
    <br />

<label>Gender:</label> <select name="gender" value={this.state.gender} onChange={this.handleInputChange} >


             <option value="">Select</option> 
             <option value="male">Male</option> 
             <option value="female">Female</option>
              <option value="other">Other</option> </select> 
              <br />
              <br />
{/* <div>
   number :  <input type="number" name="number" value={this.state.number} onChange={this.handleChange} />
</div>
<br/>


<div>
   Date : <input type="date" name="date" value={this.state.date} onChange={this.handleChange} />
</div> */}
<br/> 


<button type="submit">Submit</button>
      </form>
    );
  }
}
export default AdvanceFormClassComp;
