import DancingGuy from './assets/8188-cena-jam.gif';

function Card() {
  return (
    <div className="card">
      <img className='card-image' src={DancingGuy} alt="profile picture" />
      <h2 className='card-title'>Dancing card</h2>
      <p className='card-text'>bla bla text</p>
    </div>
  )
}

export default Card;