/**
 * Created by LeutrimNeziri on 31/03/2019.
 */
import React from 'react'
import withStyles from '@go-prime/ui/withStyles'
import classNames from 'classnames'
import NavLink from 'presentations/rows/nav/NavLink'
import Collapsible from 'presentations/Collapsible'

import IconButton from '@go-prime/ui/IconButton'
import ArrowDown from 'presentations/icons/ArrowDropDown'
import {darken, lighten, rgba} from 'polished'

const styles = ({palette, size, transitions}) => ({
  root: {
    display: 'flex',
    width: '100%',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    flexFlow: 'column nowrap',
    minHeight: 50,
  },
  navLinkRoot: {
    width: '100%',
    padding: size.spacing * 2,
    backgroundColor: darken(0.02, palette.navBgColor),
    borderTop: `1px solid ${rgba(palette.common.white, 0.1)}`,
    '&:last-child': {
      borderBottom: `1px solid ${rgba(palette.common.white, 0.1)}`,
      '& $content':{
        borderTop: 'none'
      }
    }
  },
  content: {
    display: 'flex',
    width: '100%',
    flexFlow: 'column nowrap',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    padding: [size.spacing * 2, 0],
    overflowY: 'auto',
    flexGrow: 1,
    minHeight: 100,
    backgroundColor: darken(0.03, palette.navBgColor),
    boxShadow: `inset 0px 0px 10px ${rgba(palette.common.black, 0.4)}`,
    borderTop: `1px solid ${rgba(palette.common.white, 0.1)}`,
  },
  icon: {},
  iconExpanded: {},
  collapsibleRoot: {
    width: 'auto',
    marginLeft: size.spacing * 2
  },
  collapsibleContent: {
    flexFlow: 'column nowrap'
  },
  hide: {
    opacity: 0
  }
})

class NavRowWrapper extends React.Component {

  processChildren = (item, index) => {
    const {classes} = this.props
    let children = item.children || []
    let hideIcon = children.length <= 0
    return (
      <Collapsible
        key={item.id}
        classes={{
          root: classes.collapsibleRoot,
          icon: hideIcon && classes.hide,
          content: classes.collapsibleContent
        }}
        title={item.display}>
        {children && children.length > 0 && children.map(this.processChildren)}
      </Collapsible>
    )
  }

  render() {
    const {classes, className: classNameProp, item, item: {children = []}, ...other} = this.props
    const className = classNames(
      classes.root,
      classNameProp
    )
    return (
      <div className={className}>
        <NavLink className={classes.navLinkRoot}>{item.display}</NavLink>
        {children && children.length > 0 && <div className={classes.content}>
          {children.map(this.processChildren)}
        </div>}
      </div>
    )
  }
}

export default withStyles(styles)(NavRowWrapper)
