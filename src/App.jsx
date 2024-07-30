import * as React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ProductDetails from './pages/ProductDetails';
import Testimonials from './pages/Testimonials';
import FAQ from './pages/FAQ';
import Checkout from './pages/Checkout';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Divider from '@mui/material/Divider';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import image from "./assets/bg.jpeg"

const drawerWidth = 240;
const navItems = [
  { name: 'Product Details', path: '/' },
  { name: 'Testimonials', path: '/testimonials' },
  { name: 'FAQs', path: '/faqs' },
  { name: 'Checkout', path: '/checkout' },
];

function App(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        The Secret
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton
              component={Link}
              to={item.path}
              sx={{ textAlign: 'center' }}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Router>
      <Box sx={{ 
  display: 'flex', 
  flexDirection: 'column', 
  minHeight: '100vh', 
  backgroundImage: "white", 
  backgroundSize: 'cover', 
  backgroundPosition: 'center' 
}}>

        <AppBar component="nav" sx={{ backgroundColor: '#333' }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              The Secret
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  component={Link}
                  to={item.path}
                  sx={{ color: '#fff' }}
                >
                  {item.name}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
        <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'center' }}>
          <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          >
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: { xs: 'block', sm: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
              }}
            >
              {drawer}
            </Drawer>
          </Box>
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 3,
              maxWidth: 'lg', // Center content by setting maxWidth
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Toolbar />
            <Routes>
              <Route path="/" element={<ProductDetails />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/faqs" element={<FAQ />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </Box>
        </Box>
        <Box
          component="footer"
          sx={{
            p: 3,
            backgroundColor: 'black',
            textAlign: 'center',
            marginTop: '90px',
            display: 'flex',
            
            flexDirection: 'column',
          }}
        >
          <Container maxWidth="lg">
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                alignItems: 'center',
              }}
            >
              <Box>
                <Typography variant="h6" component="div" sx={{color: "white"}}>
                  The Secret
                </Typography>
                <Typography variant="body1"sx={{color: "white"}}>
                  Address: abc, near school, delhi, India.
                </Typography>
                <Typography variant="body1"sx={{color: "white"}}>
                  Phone Number: 1234567890
                </Typography>
                <Typography variant="body1"sx={{color: "white"}}>
                  <strong>E-mail: </strong> abc@gmail.com
                </Typography>
              </Box>
              <Box sx={{ textAlign: 'center', flex: 1 }}>
                <Typography variant="h5" component="div"sx={{color: "white"}}>
                  Subscribe to our Newsletter
                </Typography>
                <TextField
                  fullWidth
                  label="Enter your email"
                  variant="outlined"
                  sx={{
                    mb: 2,
                    mt: 1,
                    ml: 5, // Added margin top
                    backgroundColor: "white"
                  }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  endIcon={<SendIcon />}
                >
                  Subscribe
                </Button>
              </Box>
              
              
            </Box>
            <Divider sx={{ my: 3 }} />
            <Typography variant="body2" color="textSecondary">
              &copy; {new Date().getFullYear()} The Secret. All rights reserved.
            </Typography>
          </Container>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
