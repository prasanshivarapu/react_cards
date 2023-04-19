// Write your code here.
import './index.css'

const Bannercard = props => {
  const {item} = props
  const {headerText, description, className} = item
  return (
    <div className={`${className} boxe`}>
      <div>
        <h1>{headerText}</h1>
        <p>{description}</p>

        <button type="button" className="btn">
          view More
        </button>
      </div>
    </div>
  )
}

export default Bannercard
