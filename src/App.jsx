import React from 'react';
import './App.css'
import Counter from './Counter';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
        this.state = ({
            currentDate: new Date(),
            dateEnter: '25 December, 2017'
        })
        console.log(this.state.currentDate);
    }

    submit() {
        let userDateEnter = this.refs.dateEnter.value;
        this.setState({
            dateEnter: userDateEnter
        })
        console.log(userDateEnter);
    }

    render() {
        return (
            <div className='App'>
                <p>CountDown to {this.state.dateEnter}</p>
                <Counter date={this.state.dateEnter} currentDate={this.state.currentDate} />
                <div className='row'>
                    <div className='col s6 offset-s3' style={{marginTop:'4vh'}}>
                        <div class="input-field inline">
                            <input type="text" placeholder='new Date' ref='dateEnter' />
                            <button className='waves-effect waves-light btn red' onClick={this.submit}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;