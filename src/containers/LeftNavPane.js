/**
 * Created by LeutrimNeziri on 01/03/2019.
 */
import React from 'react'
import classNames from 'classnames'
import withStyles from '@go-prime/ui/withStyles'
import Drawer from '@go-prime/ui/Drawer'
const styles = ({size, palette, typography}) => ({
  root: {
    display: 'flex',
    padding: 0,
    flexFlow: 'column nowrap',
  }
})

class LeftNav extends React.Component {

  static get defaultProps() {
    return {
      active: '',
      open: false
    }
  }

  onClose = event => {
    const {onClose} = this.props
    if (onClose) onClose(event)
  }

  renderPanes = () => {
    const {active} = this.props
    return <div>
      Starting
    </div>
  }

  hideNav = event => {
    this.onClose()
  }

  render() {
    const {className: classNameProp, classes, open, active, onClose, children, ...other} = this.props
    const className = classNames(
      classes.root,
      classNameProp
    )
    return (
      <Drawer className={className} direction={'right'} open={open} onClose={this.onClose}>
        {this.renderPanes()}
      </Drawer>
    )
  }
}

export default withStyles(styles)(LeftNav)
