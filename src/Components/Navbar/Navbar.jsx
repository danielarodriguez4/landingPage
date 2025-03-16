import React from 'react'
import Logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <nav>
      <div>

        <div>
            <img src = {Logo}/>
        </div>

        <div>
            <ul>
                <li>ejemplo</li>
                <li>ejemplo</li>
            </ul>
        </div>

        <div>
            <ul>
                <li>redes</li>
                <li>redes</li>
            </ul>
        </div>

      </div>
    </nav>
  )
}

export default Navbar
