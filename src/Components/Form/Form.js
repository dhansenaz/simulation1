import React, {Component} from 'react'
import './form.css'

class Form extends Component{
    constructor(){
    super()

    }
render(){
    return(
        <div>
            <form>
                <div>
                    <input className="one"></input>
                   
                        <div>
                        <input className="two"></input>
                        </div>
                    
                    <input className="three"></input>
                        <div>
                            <button className="cancel">Cancel</button>
                            <button className="addinventory">Add to Inventory</button>
                        </div>
                </div>
                
            </form>
        </div>
    )
}

}
export default Form