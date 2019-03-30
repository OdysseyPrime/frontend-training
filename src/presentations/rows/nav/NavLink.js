/**
 * Created by LeutrimNeziri on 01/03/2019.
 */
import React from 'react'
import withStyles from '@go-prime/ui/withStyles'
import classNames from 'classnames'
import Link from '@go-prime/ui/Link'

const styles = ({palette, size, transitions}) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexFlow: 'row nowrap',
    height: size.spacing * 9,
    padding: [0, size.spacing * 3],
    color: palette.textColor,
    fontSize: size.titleFontSize,
    textDecoration: 'none',
    borderBottom: `1px solid ${palette.borderColor}`,
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