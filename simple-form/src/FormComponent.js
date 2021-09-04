import React from 'react'

function FormComponent(props) {
        return (
            <main>
                <form>
                    <input 
                    placeholder="First Name" 
                    name="firstName" 
                    onChange={props.handleChange}/>
                    <br />
                    <input 
                    placeholder="Last Name" 
                    name="lastName"
                    onChange={props.handleChange}/>
                    <br />
                    <input 
                    placeholder="Age" 
                    name="age"
                    onChange={props.handleChange}/>
                    <br />
                    <br />
    
                    {/* Create radio buttons for gender here */}
                    <label>
                    <input 
                        type="radio" 
                        name="gender"
                        value="Male"
                        checked={props.data.gender === "Male"}
                        onChange={props.handleChange}
                    /> Male
                    <br />  
                    <input 
                        type="radio" 
                        name="gender"
                        value="Female"
                        checked={props.data.gender === "Female"}
                        onChange={props.handleChange}
                    /> Female
                    </label>
                    <br />
                    <br />
                    
                    {/* Create select box for location here */}
                    <p>Where are you going?</p>
                    <select 
                    value={props.data.destination} 
                    onChange={props.handleChange} 
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
                            onChange={props.handleChange}
                            checked={props.data.vegetarian}
                            /> Vegetarian
                        </label><br />
                        <label>
                            <input 
                            type='checkbox' 
                            value='Kosher' 
                            name='kosher'
                            onChange={props.handleChange}
                            checked={props.data.kosher} 
                            /> Kosher
                        </label><br />
                    <br />
                    
                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {props.data.firstName} {props.data.lastName}</p>
                <p>Your age: {props.data.age}</p>
                <p>Your gender: {props.data.gender}</p>
                <p>Your destination: {props.data.destination}</p>
                <p>Your dietary restrictions:</p>
                <p>Vegetarian: {props.data.vegetarian ? "Yes" : "No" }</p>
                <p>Kosher: {props.data.kosher ? "Yes" : "No" }</p>
            </main>
        )
    }

export default FormComponent