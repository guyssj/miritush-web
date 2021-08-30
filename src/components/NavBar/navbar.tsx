import React, { useEffect } from 'react';
import './navbar.css';
import Logo from '../../logo.svg';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Button, createStyles, makeStyles, Theme } from '@material-ui/core';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    toolbar: {
      color:'white',
      backgroundColor:'#000000'
    },
  }),
);

const Navbar = () => {
  const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();
  const [scrolled, setScrolled] = React.useState(false);
  const classes = useStyles();
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
    <AppBar position="static">
  <Toolbar className={classes.toolbar}>
    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
      <MenuIcon />
    </IconButton>
    <Typography variant="h6">
    <Link href="#" onClick={preventDefault} color="inherit">
    {'color="inherit"'}
  </Link>
    </Typography>
  </Toolbar>
</AppBar>
    // <header className={x.join(" ")} dir="rtl">
    //   <nav className="navigation transparent-navbar sticky">
    //     <ul className="navBarRight">
    //       <li className="nav-item" ><a className="nav-link" href="#post1">דף הבית</a></li>
    //       <li className="nav-item"><a  className="nav-link"href="#post2">שינוי תור</a></li>
    //     </ul>
    //     <div className="logo">
    //       <img src={Logo} alt="Logo" title="Logo" />
    //     </div>
    //     <ul className="navBarLeft">
    //     <li className="nav-item">
    //       <a className="nav-link" href="#post1">גלריה</a>
    //       </li>
    //       <li className="nav-item"><a className="nav-link" href="#post2">מועדון</a></li>
    //     </ul>
    //   </nav>

    // </header>
    
  )
};

export default Navbar;