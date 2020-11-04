import React from 'react';
import Header from './components/Header'
import MemeGenarator from './components/MemeGenarator';

class App extends React.Component {
    constructor(){
        super()
    }
    render(){
        return (
            
            <div>
                <Header />
                <MemeGenarator />
            </div>
        )
    }
}

export default App