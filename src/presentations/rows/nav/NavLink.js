/**
 * Created by LeutrimNeziri on 01/03/2019.
 */
import React from 'react'
import withStyles from '@go-prime/ui/withStyles'
import classNames from 'classnames'
import {Link} from 'react-router-dom'

const styles = ({palette, size, transitions}) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexFlow: 'row nowrap',
    padding: [size.spacing, 0],
    color: palette.textColorInverse,
    fontSize: size.titleFontSize,
    textDecoration: 'none',
    transition: transitions.common,
    '&:hover': {
      color: palette.leadColor
    }
  }
})

const NavLink = props => {
  const {classes, children, className: classNameProp, to, other} = props
  const className = classNames(
    classes.root,
    classNameProp
  )

  return (
    <Link className={className} {...other} to={to}>
      {children}
    </Link>
  )
}

export default withStyles(styles)(NavLink)
