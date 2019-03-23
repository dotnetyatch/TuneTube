import React from 'react'

class Form extends React.Component {

    state = {
        todo: [
            {
                id: 1,
                data: 'Trash React'
            },
            {
                id: 2,
                data: 'Become a JS Ninja'
            }
        ],
        inputValue: ''
    }

    submit = (e) =>{
        e.preventDefault()
        console.log(this.state.inputValue)
    }

    onchange = (e) =>{
        this.setState({
            inputValue: e.target.value
        })
    }


    render(){
        console.log(this.state)
        return(
            <div className="container">
            <div className="row">
            <form className="col s12" onSubmit={this.submit}>
              <div className="row">
                <div className="input-field col s12">
                  <textarea id="textarea1" className="materialize-textarea" ></textarea>
                  <label htmlFor="textarea1" >Add a todo</label>
                  <div className="row">
          <div className="center">
          <button className="btn red darken-3">
          Create Todo
          </button>
            </div>
          </div>
                </div>
              </div>
            </form>
          </div>
          </div>

        )
    }
}

export default Form