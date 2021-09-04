import React, {Component} from "react"

/**
 * Challenge: Wire up the partially-finished travel form so that it works!
 * Remember to use the concept of controlled forms
 * https://reactjs.org/docs/forms.html
 * 
 * All information should be populating the text below the form in real-time
 * as you're filling it out
 * 
 * This exercise is adapted from the V School curriculum on vanilla JS forms:
 * https://coursework.vschool.io/travel-form/
 * 
 * All of our challenges and learning resources are open for the public
 * to play around with and learn from at https://coursework.vschool.io
 */

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: 0,
            gender: "",
            destination: "",
            vegetarian: false,
            kosher: false
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
        const {name, value, type, checked} = event.target
        this.setState({
            [name]: value
        })
    }
    render() {
        return (
            <main>
                <form>
                    <input 
                    placeholder="First Name" 
                    name="firstName" 
                    onChange={this.handleChange}/>
                    <br />
                    <input 
                    placeholder="Last Name" 
                    name="lastName"
                    onChange={this.handleChange}/>
                    <br />
                    <input 
                    placeholder="Age" 
                    name="age"
                    onChange={this.handleChange}/>
                    <br />
                    <br />
    
                    {/* Create radio buttons for gender here */}
                    <label>
                    <input 
                        type="radio" 
                        name="gender"
                        value="Male"
                        checked={this.state.gender === "Male"}
                        onChange={this.handleChange}
                    /> Male
                    <br />  
                    <input 
                        type="radio" 
                        name="gender"
                        value="Female"
                        checked={this.state.gender === "Female"}
                        onChange={this.handleChange}
                    /> Female
                    </label>
                    <br />
                    <br />
                    
                    {/* Create select box for location here */}
                    <p>Where are you going?</p>
                    <select 
                    value={this.state.destination} 
                    onChange={this.handleChange} 
                    name="destination">
                        <option value="">Select your option</option>
                        <option value="London">London</option>
                        <option value="Paris">Paris</option>
                        <option value="New York">New York</option>
                    </select>
                    <br />
                    
                    <p>Dietary restrictions?</p>
                        <label>
                            <input 
                            type='checkbox' 
                            value='Vegetarian' 
                            name='vegetarian' 
                            onChange={this.handleChange}
                            checked={this.state.vegetarian}
                            /> Vegetarian
                        </label><br />
                        <label>
                            <input 
                            type='checkbox' 
                            value='Kosher' 
                            name='kosher'
                            onChange={this.handleChange}
                            checked={this.state.kosher} 
                            /> Kosher
                        </label><br />
                    <br />
                    
                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {this.state.firstName} {this.state.lastName}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.destination}</p>
                <p>Your dietary restrictions:</p>
                <p>Vegetarian: {this.state.vegetarian ? "Yes" : "No" }</p>
                <p>Kosher: {this.state.kosher ? "Yes" : "No" }</p>
            </main>
        )
    }
}

export default App
