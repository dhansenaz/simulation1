import React, {Component} from 'react'
import './form.css'

class Form extends Component{
    constructor(){
    super()
this.state = {
image: "",
product: "",
price: 0

}
this.handleImageSubmit = this.handleImageSubmit.bind(this)
this.handleProductSubmit = this.handleProductSubmit.bind(this)
this.handlePriceSubmit = this.handlePriceSubmit.bind(this)

    }

    handleImageSubmit(){


    }
    handleProductSubmit(){


    }
    handlePriceSubmit(){


    }
    handleCancel(){
        this.setState({})
    }
render(){
    return(
        <div>
            <form>
                <div>
                    <input className="one"  onChange={(e) =>this.setState({image:e.target.value})} 
                    handleImageSubmit = {this.handleImageSubmit}></input>
                        <div>
                        <input className="two"  onChange={(e) =>this.setState({product:e.target.value})}
                        ></input>
                        {console.log(this.state.product)}
                        </div>
                    
                    <input className="three"  onChange={(e) =>this.setState({price:e.target.value})}
                     handlePriceSubmit = {this.handlePriceSubmit}></input>
                        <div>
                            <button className="cancel" onClick={this.handleCancel}>Cancel</button>
                            <button className="addinventory">Add to Inventory</button>
                        </div>
                </div>
                
            </form>
        </div>
    )
}

}
export default Form