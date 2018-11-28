import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import SideDrawer from './SideDrawer';

class Header extends Component {
  
    state = {
        drawerOpen : false,
        headerShow : false
    }

    componentDidMount() {
        window.addEventListener('scroll',this.handleScroll);
    }

    handleScroll = () => {
        if (window.scrollY > 0)
        {
            this.setState({
                headerShow : true
            })
        }
        else {
            this.setState({
                headerShow : false
            })

        }
    }

    toggleDrawer = (value) => {
        this.setState({
            drawerOpen : value
        })
    }
  
    render() {
    
    const { headerShow,drawerOpen } =  this.state; 

    return (
      <AppBar position='fixed' style={
          { backgroundColor: headerShow ? '#2f2f2f' : 'transparent',
            boxShadow:'none',
            padding:'10px 0px'
        }}>

            <Toolbar>
                <div className='header_logo' style={{color : headerShow ? '#ffffff' : '#677077'}}>
                    <div className="font_righteous header_logo_venue">
                        Unfinished Business
                    </div>
                    <div className="header_logo_title">
                        Do the right thing!
                    </div>    
                </div>

             <IconButton aria-label="Menu" color={headerShow ? 'primary' : "secondary"} onClick={() => this.toggleDrawer(true)}>
                <MenuIcon />
             </IconButton>
            </Toolbar>

            <SideDrawer open={drawerOpen} onClose={(val) => this.toggleDrawer(val) }/>


      </AppBar>
    )
  }
}

export default Header;
