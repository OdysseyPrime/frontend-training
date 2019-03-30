/**
 * Created by LeutrimNeziri on 30/03/2019.
 */
import React, {Fragment} from 'react'
import classNames from 'classnames'
import withStyles from '@go-prime/ui/withStyles'
import GoPrimeHeader from '@go-prime/ui/Header'
import IconButton from '@go-prime/ui/IconButton'
import {Link} from 'react-router-dom'
import Logo from 'presentations/icons/Logo'
import ArrowRight from 'presentations/icons/ArrowRight'

const styles = ({palette, size,transitions, typography}) => ({
  root: {
    padding: size.spacing * 2,
    paddingBottom: 0,
    marginBottom: size.spacing * 2,
    alignItems: 'center'
  },
  logo: {
    fontSize: size.avatarSize,
    marginRight: size.spacing * 2
  },
  breadCrumbs: {
    marginLeft: size.spacing * 2,
    display: 'flex',
    alignItems: 'center'
  },
  link: {
    ...typography.header,
    textDecoration: 'none',
    marginRight: size.spacing * 2,
    transition: transitions.common,
    '&:hover': {
      color: palette.leadColor
    }
  },
  activeLink: {
    color: palette.leadColor
  },
  icon: {
    marginRight: size.spacing * 2,
    width: size.spacing * 2,
    height: size.spacing * 2
  }
})

class Header extends React.Component {

  static get defaultProps() {
    return {}
  }

  createBreadCrumbs = (link, index) => {
    const {classes} = this.props
    const to = {
      pathname: link.path,
      state: {
        display: link.display
      }
    }
    return <Fragment key={link.id + index}>
      {index !== 0 && <ArrowRight className={classes.icon}/>}
      <Link className={classes.link} to={to}>{link.display}</Link>
    </Fragment>
  }

  render() {
    const {classes, className: classNameProp, children, title, other} = this.props
    const className = classNames(classes.root, classNameProp)
    const breadCrumbs = [
      {
        id: 'home',
        path: '/',
        display: 'Frontend Development'
      }
    ]
    title && breadCrumbs.push(
      {
        id: title,
        path: `/components/${title.toLowerCase()}`,
        display: title
      }
    )

    return (
      <GoPrimeHeader className={className} {...other}>
        <IconButton className={classes.logo}>
          <Logo fontSize="inherit"/>
        </IconButton>
        <div className={classes.breadCrumbs}>
          {breadCrumbs.map(this.createBreadCrumbs)}
        </div>
      </GoPrimeHeader>
    )
  }
}

export default withStyles(styles)(Header)
