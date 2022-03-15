import './index.css'

const Card = props => {
  const {cardData} = props
  const {title, description, imgUrl, className} = cardData
  return (
    <li className={`card-cls ${className}`}>
      <h1 className="card-head">{title}</h1>
      <p className="card-des">{description}</p>
      <div className="img-container">
        <img className="img-cls" src={imgUrl} alt={title} />
      </div>
    </li>
  )
}
export default Card
