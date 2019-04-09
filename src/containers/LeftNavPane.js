/**
 * Created by LeutrimNeziri on 01/03/2019.
 */
import React, {Fragment} from 'react'
import classNames from 'classnames'
import withStyles from '@go-prime/ui/withStyles'
import NavRowWrapper from 'presentations/rows/NavRowWrapper'
import NavLink from 'presentations/rows/nav/NavLink'
import uuid from 'uuid'
import routes from 'Routes'

const styles = ({size, palette, typography}) => ({
  root: {
    display: 'flex',
    padding: 0,
    flexFlow: 'column nowrap',
    alignContent: 'flex-start',
    alignItems: 'flex-start',
    overflowY: 'hidden',
    width: '100%',
  },
  expandable: {}
})

class LeftNav extends React.Component {

  static get defaultProps() {
    return {
      open: false
    }
  }

  state = {
    active: ''
  }

  onClose = event => {
    const {onClose} = this.props
    if (onClose) onClose(event)
  }

  onCollapse = (event, item) => {
    const {active} = this.state
    console.log(item)
    if (active === item.id) {
      this.setState({active: ''})
      return
    }
    this.setState({
      active: item.id
    })
  }

  renderPanes = (route, index) => {
    return <NavRowWrapper
      defaultOpen={defaultOpen}
      key={route.id}
      onCollapse={this.onCollapse}
      item={route}/>
  }

  render() {
    const {className: classNameProp, classes, open, active, onClose, children, ...other} = this.props
    const className = classNames(
      classes.root,
      classNameProp
    )
    return (
      <div className={className}>
        {routes.map(this.renderPanes)}
      </div>
    )
  }
}

export default withStyles(styles)(LeftNav)
