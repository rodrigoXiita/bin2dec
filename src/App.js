import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Input from './components/Input/Input'
import Bin2Dec,{isBinary} from './Utils/Binary2Decimal/Binary2Decimal'

export default class App extends React.Component {
 
    constructor(props){
        super(props);
        this.state = {"value": ""}
        this.typing = this.typing.bind(this)
    }
    

    render(){

        let error = isBinary(this.state.value);

       return <>
            <Header/>
                <div>
                    <Input label={'Binary'} value={this.state.value} onChange={this.typing} error={error? "" : "error"} />
                    <Input label={'Decimal'} disabled="disabled" value={error?Bin2Dec(this.state.value):""}/>
                </div>
            <Footer/>
        </>
    }

    typing(event){
        this.setState({'value':event.target.value})
    }
}