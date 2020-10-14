import React, { Component } from 'react'

class Form extends React.Component {
state = {
    content: this.props.reviews,
}

handleForm = (e) => {
    e.preventDefault()
    const Content = this.state.content
    this.props.reviews(Content)
}

handleNameChange = (event) => {
    this.setState ({
        content: event.target.value
    })
}
    render() {
        
        return (
           <div className="form-container">
           <form className="form" onSubmit={this.handleForm}>
               <div>
                   <h3 className=
                   "h3">REVIEW HERE!</h3>
                   <input type="text"  value={this.state.content} onChange={this.handleNameChange}/>
               </div>
               <button type="submit">Create!</button>
           </form>
           </div>
        )
    }
}

export default Form