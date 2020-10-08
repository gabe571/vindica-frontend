import React, { Component } from 'react'

class Form extends React.Component {
state = {
    review: '',
}

handleForm = (e) => {
    e.preventDefault()
    const Name = this.state.name
   this.props.guilds(Name)
}

handleNameChange = (event) => {
    this.setState ({
        review: event.target.value
    })
}
    render() {
        return (
           <div className="form-container">
           <form className="form" onSubmit={this.handleForm}>
               <div>
                   <h3 className=
                   "h3">REVIEW HERE!</h3>
                   <textarea  value={this.state.review} onChange={this.handleNameChange}/>
               </div>
               <button type="submit">Create!</button>
           </form>
           </div>
        )
    }
}

export default Form