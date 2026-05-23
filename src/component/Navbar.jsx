import './Navbar.css'

function NavBar(){
  return(
    <nav className='navbar-css'>
      <a className='nav-brand'>Patrick Neyens Lopez</a>
      <ul className='nav-links'>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Project</a>
        </li>
      </ul>
    </nav>
  )
}
export default NavBar