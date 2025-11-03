// NavBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './NavBar.css';

export default function NavBar() {
  return (
    <AppBar
  position="sticky"
  elevation={2}
  sx={{
    background: "green",
  }}
>

      <Toolbar className="nav-toolbar">
        {/* Website Title */}
        <Typography variant="h6" component="div" className="nav-title">
          Jonadab NeoLife
        </Typography>

        {/* Navigation Links */}
        <div className="nav-links">
          <Button component={Link} to="/" className="nav-btn">
            Products
          </Button>
          <Button component={Link} to="/about-us" className="nav-btn">
            About Us
          </Button>
          <Button component={Link} to="/contact-us" className="nav-btn">
            Contact Us
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}
