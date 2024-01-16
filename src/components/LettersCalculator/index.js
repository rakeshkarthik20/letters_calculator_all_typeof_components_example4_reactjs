// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  countText = () => {
    const {count} = this.state
    this.setState({count: count + 1})
  }

  render() {
    const {count} = this.state
    console.log(count)
    return (
      <div className="mainContainer">
        <div className="subContainer">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label htmlFor="textPhrase" className="textPhrase">
            Enter the phrase
            <br />
          </label>
          <input
            type="text"
            className="textInput"
            placeholder="Enter the Phrase"
            id="textPhrase"
            onChange={this.countText}
          />
          <p className="countContainer">No.of letters: {count}</p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt=" letters calculator"
          className="calculatorImage"
        />
      </div>
    )
  }
}

export default LettersCalculator
