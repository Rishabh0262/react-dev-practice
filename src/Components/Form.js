import React, { Component } from 'react'

export class Form extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         userName : '',
         comment : "",
         topic : ""
      }
    }

    handleUserNameChange = (event) => {
        this.setState ({
            userName : event.target.value
        })

        
    }

    handleCommentChange = event => {
        this.setState({
            comment : event.target.value
        })
    }
 
    handleTopicChange = event => {
        this.setState({
            topic : event.target.value
        })
    }

    handleSubmit = event => {
        alert(`${this.state.userName} ${this.state.comment} ${this.state.topic}`)
        // alert("submmit")-----

        event.preventDefault()
    }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
            <div>
                <label>User Name </label>
                <input type='text' value={this.state.userName} onChange={this.handleUserNameChange} />
            </div>

            <div>
                <label>Comment </label>
                <textarea value={this.state.comment} onChange={this.handleCommentChange} />

            </div>

            <div>
                <label>Topic </label>
                <select name='topic' value={this.state.topic} onChange={this.handleTopicChange}>
                    <option value="React"   >React</option>
                    <option value="Angular"   >Angular</option>
                    <option value="Vue"   >Vue</option>
                </select>
            </div>

            <button >Submit</button>
        </form>
      </div>
    )
  }
}

export default Form