import React, { Component } from 'react';
class AdvanceFormClassComp extends Component { constructor(props) 
    { super(props);
         this.state = { name: '', email: '', message: '', gender: '' }; } 
    handleInputChange = (event) =>
         { const { name, value } = event.target; 
    this.setState({ [name]: value }); }; 
    handleSubmit = (event) => { event.preventDefault(); 
        const { name, email, message, gender } = this.state; // Handle form submission logic here, such as sending data to a server console.log('Submitted Values:', { name, email, message, gender }); // Clear form inputs after submission 
        this.setState({ name: '', email: '', message: '', gender: '' }); };
         render() 
         { 
            return (

             <div> <form onSubmit={this.handleSubmit}> 
                 <h1>Advance Form handling using Class comp.</h1>

         <label>Name:</label> <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange} /> 
         <br />              <br />

         <label>Email:</label> <input type="email" name="email" value={this.state.email} onChange={this.handleInputChange} />
         <br />
         <br />

          <label>Message:</label> <textarea name="message" value={this.state.message} onChange={this.handleInputChange} /> 
          <br />
          <br />

          <label>Gender:</label> <select name="gender" value={this.state.gender} onChange={this.handleInputChange} >
            <br />
            <br />

             <option value="">Select</option> 
             <option value="male">Male</option> 
             <option value="female">Female</option>
              <option value="other">Other</option> </select> 
              <br />
              <br />
              <button type="submit">Submit</button> </form> </div>
               );
             }
            }
            export default AdvanceFormClassComp;