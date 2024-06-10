import React from 'react';

class DailyRoutine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activity: 'Spending time with kids',
    };
    console.log('Constructor: Getting ready for the day');
  }

  componentDidMount() {
    console.log('componentDidMount: Starting the day’s activities');
    // Simulate a state change
    this.setState({ activity: 'Waking Up' });
  
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.activity !== this.state.activity) {
      console.log(`componentDidUpdate: Activity changed from ${prevState.activity} to ${this.state.activity}`);
      
    }
  }

  componentWillUnmount() {
    console.log('componentWillUnmount: Ending the day, going to sleep');
    // Clean up operations if needed
  }

  changeActivity = (newActivity) => {
    this.setState({ activity: newActivity });
  };

  render() {
    return (
      <div>
        <h2>Daily Routine : </h2>
        <h2> Activity : {this.state.activity}</h2>
        {/* <button  class="btn btn-danger" onClick={() => this.changeActivity('Waking up')}>Update State</button> */}
        <button class="btn btn-danger"  onClick={() => this.changeActivity('Spending time with kids')}>Update State</button>
        
      </div>
    );
  }
}

export default DailyRoutine;
