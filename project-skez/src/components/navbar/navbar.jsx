import './navbar.css'

const Navbar = () => {
  return (
    <div className='nav'>
      <div className="nav-logo">Academialib</div>
      <div className="nav">MSU Spartan Study Buddy (SSB) </div>
      <ul className="nav-menu">
        <li>Home</li>
        <li>Groups</li>
        <li>Reserve</li>
      </ul>
    </div>
  )
}

export default Navbar
