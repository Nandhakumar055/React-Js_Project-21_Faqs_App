import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {
    isActive: false,
  }

  onClickIconToggle = () => {
    this.setState(prevState => ({isActive: !prevState.isActive}))
  }

  render() {
    const {isActive} = this.state

    const iconImgUrl = isActive
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

    const iconImgAlt = isActive ? 'minus' : 'plus'

    console.log(isActive)

    const {faqDetails} = this.props
    const {questionText, answerText} = faqDetails
    return (
      <li className="faqs-list-items">
        <div className="question-container">
          <h1 className="question-text">{questionText}</h1>
          <button
            className="button"
            type="button"
            onClick={this.onClickIconToggle}
          >
            <img className="icon-image" src={iconImgUrl} alt={iconImgAlt} />
          </button>
        </div>
        {isActive && <p className="answer-text">{answerText}</p>}
      </li>
    )
  }
}
export default FaqItem
