import React, { useEffect } from 'react';
import './navbar.css';
import Logo from '../../logo.svg';

const Navbar = () => {
  const [scrolled, setScrolled] = React.useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    }
    else {
      setScrolled(false);
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  })

  let x = ['navbar'];
  if (scrolled) {
    x.push('scrolled');
  }
  return (
    <header className={x.join(" ")} dir="rtl">
      <nav className="navigation">
        <ul>
          <li className="nav-item" ><a className="nav-link" href="#post1">דף הבית</a></li>
          <li className="nav-item"><a  className="nav-link"href="#post2">Home</a></li>
        </ul>
        <div className="logo">
          <img src={Logo} alt="Logo" title="Logo" />
        </div>
        <ul>
        <li className="nav-item">
          <a className="nav-link" href="#post1">Home</a>
          </li>
          <li className="nav-item"><a className="nav-link" href="#post2">Home</a></li>
        </ul>
      </nav>

    </header>
  )
};

export default Navbar;