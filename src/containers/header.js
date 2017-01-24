import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Title from '../components/title';
import { Link } from 'react-router';

class Header extends React.Component {
    constructor(props) {
      super(props);
      this.state = { open: false };
      this.handleToggle = this.handleToggle.bind(this);
      // this.handleClose = this.handleClose.bind(this);
    }

    handleToggle = (event) => {
      console.log('Drawer Opened');
      this.setState({ open: !this.state.open });
    }

    handleClose = (event) => {
      console.log('Drawer Closed');
      this.setState({ open: false });
    }

    openExternalLink = (url, event) => {
      this.handleClose();
      window.open(url, '_blank');
    }

  render () {
    return (
      <div>
        <Title onLeftIconButtonTouchTap={this.handleToggle}/>
        <Drawer open={this.state.open}>
          <MenuItem
            containerElement={<Link to='/' />}
            primaryText='How to use'
            onTouchTap={this.handleClose}
          />
          <MenuItem
            containerElement={<Link to='/pomo' />}
            primaryText='Pomodoro'
            onTouchTap={this.handleClose}
          />
          <MenuItem
            primaryText='GitHub'
            onTouchTap={this.openExternalLink.bind(this, 'https://github.com/bryantee')}
          />
          <MenuItem
            primaryText='About Me'
            onTouchTap={this.openExternalLink.bind(this, 'http://bryanswagerty.com/')}
          />
        </Drawer>
      </div>
    )
  }
}

export default Header;
