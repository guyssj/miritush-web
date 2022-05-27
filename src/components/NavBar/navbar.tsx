import { useState, useEffect } from "react";
import './navbar.css';
import { Link as RouterLink } from "react-router-dom";
import Logo from '../../assets/img/LOGO.png';
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import Link from "@mui/material/Link";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles'


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

const HeaderStyled = styled(AppBar)(({ theme }) => ({
  backgroundColor: "white",
  position: "sticky",
  color: "rgba(0,0,0,.5)",
  direction: 'rtl',
  paddingRight: "79px",
  paddingLeft: "118px",
  "@media (max-width: 900px)": {
    paddingLeft: 0,
  }
}));

const LogoStyled = styled(Typography)(({ theme }) => ({
  width: 150,
  textAlign: "center",
})) as typeof Typography;

const ToolBarStyled = styled(Toolbar)(({ theme }) => ({
  position: "sticky",
  justifyContent: "space-between",
}));

const DrawerContainer = styled('div')(({ theme }) => ({
  padding: "20px 30px"
}))
const drawerWidth = 240;

export default function Navbar() {
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
      <ToolBarStyled>
        {getMenuButtons2()}
      </ToolBarStyled>
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
          variant="temporary"
          sx={{
            width: drawerWidth,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
            }
          }}
          ModalProps={{
            keepMounted: true,
            dir: "rtl" // Better open performance on mobile.
          }}
        >
          <DrawerContainer>{getDrawerChoices()}</DrawerContainer>
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
    <LogoStyled component="h1" variant="h6">
      <div className="logo">
        <img src={Logo} alt="Logo" title="Logo" />
      </div>
    </LogoStyled>
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
    <HeaderStyled>
      {mobileView ? displayMobile() : displayDesktop()}
    </HeaderStyled>
  );
}