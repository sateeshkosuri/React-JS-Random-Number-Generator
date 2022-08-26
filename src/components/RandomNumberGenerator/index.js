import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {number: Math.random(0, 100)}
  onClicked = () => {
    const {number} = this.state
    this.setState(() => {
      Math.ceil(number)
    })
  }
  render() {
    const {number} = this.state
    return (
      <div className="container">
        <div className="card-container">
          <div className="card">
            <h1 className="heading">Random Number</h1>
            <p className="description">
              Generate a random number in the range of 0 to 100
            </p>
            <button
              type="button"
              className="btn-style"
              onClick={this.onClicked}
            >
              Generate
            </button>
            <p className="random-number">{number}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
