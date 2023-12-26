import FaqItem from '../FaqItem'
import './index.css'

const Faqs = props => {
  const {faqsList} = props
  return (
    <div className="faqs-app-container">
      <h1 className="faqs-heading">FAQs</h1>
      <ul className="faqs-items-container">
        {faqsList.map(eachItem => (
          <FaqItem key={eachItem.id} faqDetails={eachItem} />
        ))}
      </ul>
    </div>
  )
}

export default Faqs
