import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class Hello extends Component {

    render() {
        return(
            <div>
                <div>hello world</div>
            </div>
        );
    }

}

export default class App extends Component {

    render() {
        return <Hello />
    };

}
const mountPoint = document.getElementById('app');
ReactDOM.render(<App />, mountPoint);