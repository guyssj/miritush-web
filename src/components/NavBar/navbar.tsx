import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  IconButton,
  Drawer,
  Link,
  MenuItem,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { useState, useEffect } from "react";
import './navbar.css';
import { Link as RouterLink } from "react-router-dom";
import Logo from '../../assets/img/LOGO.png';


const headersData = [
  {
    label: "דף הבית",
    href: "/listings",
    side: "right",
    key: "home"
  },
  {
    label: "שינוי תור",
    href: "/setbook",
    side: "right",
    key: "changeBook"
  },
  {
    label: "גלריה",
    href: "/account",
    side: "left",
    key: "gallery"
  },
  {
    label: "מועדון",
    href: "/logout",
    side: "left",
    key: "club"
  },
];
const divStyle = {
  display: 'inline'
};
const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "white",
    position: "sticky",
    color: "rgba(0,0,0,.5)",
    direction: 'rtl',
    paddingRight: "79px",
    paddingLeft: "118px",
    "@media (max-width: 900px)": {
      paddingLeft: 0,
    },
  },
  logo: {
    width: 150,
    textAlign: "center",
  },
  toolbar: {
    position: "sticky",
    justifyContent: "space-between",
  },
  drawerContainer: {
    padding: "20px 30px",
  },
  drawerPaper: {
    width: 240
  }
}));

export default function Navbar() {
  const { header, logo, toolbar, drawerContainer, drawerPaper } = useStyles();

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 1000
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };
    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        {getMenuButtons2()}
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
        <IconButton
          {...{
            edge: "end",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          open={drawerOpen}
          onClose={handleDrawerClose}
          anchor='right'
          variant="temporary"
          classes={{
            paper: drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          <div className={drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>

        <div>{femmecubatorLogo}</div>
      </Toolbar >
    );
  };

  const getDrawerChoices = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Link
          {...{
            component: RouterLink,
            dir: "rtl",
            to: href,
            color: "inherit",
            style: { textDecoration: "none" },
            key: label,
          }}
        >
          <MenuItem>{label}</MenuItem>
        </Link>
      );
    });
  };

  const femmecubatorLogo = (
    <Typography variant="h6" component="h1" className={logo}>
      <div className="logo">
        <img src={Logo} alt="Logo" title="Logo" />
      </div>
    </Typography>
  );

  const getMenuButtons2 = () => {
    return (
      <nav className="navigation transparent-navbar sticky">
        <ul className="navBarRight">
          {getRightMenu()}
        </ul>
        {femmecubatorLogo}
        <ul className="navBarLeft" >
          {getLeftMenu()}
        </ul>
      </nav >
    );
  };

  const getRightMenu = () => {
    return headersData.map(({ label, href, side, key }) => {
      return (
        <div key={key} style={side === 'right' ? divStyle : { display: 'none' }}>
          {side === "right" &&
            <li key={key} className="nav-item" ><RouterLink key={key} to={href} className="nav-link">{label}</RouterLink></li>
          }
        </div>
      );
    });
  }
  const getLeftMenu = () => {
    return headersData.map(({ label, href, side, key }) => {
      return (
        <div key={key} style={side === 'left' ? divStyle : { display: 'none' }}>
          <li key={key} className="nav-item"><RouterLink key={key} to={href} className="nav-link">{label}</RouterLink></li>
        </div>
      );
    });
  }
  return (
    <AppBar className={header}>
      {mobileView ? displayMobile() : displayDesktop()}
    </AppBar>
  );
}