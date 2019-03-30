/**
 * Created by LeutrimNeziri on 30/03/2019.
 */
import React from 'react'
import classNames from 'classnames'
import withStyles from '@go-prime/ui/withStyles'
import IconButton from '@go-prime/ui/IconButton'
import LeftNavPane from 'containers/LeftNavPane'
//Icons
import Logo from 'presentations/icons/Logo'

const styles = ({size, zIndex, palette, typography}) => ({
  root: {
    position: 'fixed',
    width: 'auto',
    height: '100%',
    left: 0,
    top: 0,
    display: 'flex',
    zIndex: zIndex.drawer + 1
  },
  leftNav: {
    width: 87,
    height: '100%',
    padding: size.spacing * 2,
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    backgroundColor: palette.navBgColor,
    color: palette.textColorInverse,
    zIndex: zIndex.drawer + 1
  },
  logo: {
    fontSize: size.avatarSize,
    marginBottom: size.spacing * 2
  },
  icon: {
    fontSize: size.headingFontSize,
    color: palette.textColorInverse,
    marginBottom: size.spacing * 2,
    opacity: 0.7,
    '&$iconActive, &:hover': {
      opacity: 1
    }
  },
  iconActive: {}
})

class LeftNav extends React.Component {

  static get defaultProps() {
    return {
      open: false,
      onPaneChange: () => {
      }
    }
  }

  state = {
    active: ''
  }

  onNavClick = (which, event) => {
    event.preventDefault()
    this.setState({
      active: which
    })
  }

  onClose = event => {
    this.setState({active: ''})
  }

  render() {
    const {className: classNameProp, classes, children} = this.props
    const {active} = this.state
    const className = classNames(
      classes.root,
      classNameProp
    )

    const isActive = which => which === active

    return (
      <div className={className}>
        <div className={classes.leftNav}>
          <IconButton
            color="inherit"
            className={classes.logo}
            onClick={event => this.onNavClick('', event)}>
            <Logo fontSize="inherit"/>
          </IconButton>
        </div>
        {/*Left Nav Pane*/}
        <LeftNavPane open={!!active} active={active} onClose={this.onClose}/>
      </div>
    )
  }
}

export default withStyles(styles)(LeftNav)
