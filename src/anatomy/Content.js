/**
 * Created by LeutrimNeziri on 30/03/2019.
 */
import React from 'react'
import classNames from 'classnames'
import withStyles from '@go-prime/ui/withStyles'
import Page from '@go-prime/ui/Page'
import Header from 'anatomy/Header'
import LeftNav from 'anatomy/LeftNav'
import routes from 'Routes'
import { PAGES } from 'Constants'

const styles = ({palette, size, typography}) => ({
  '@global': {
    ol: {
      margin: [size.spacing, 0],
      width: '100%'
    }
  },
  appWrapper: {
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    width: '100%',
    height: '100%',
    maxHeight: '100%',
    overflow: 'hidden'
  },
  root: {
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'flex-start',
    alignContent: 'flex-start'
  },
  content: {
    width: '100%',
    alignItems: 'flex-start',
    flexFlow: 'row wrap',
    display: 'flex',
    alignContent: 'flex-start',
    flex: 1,
    overflowY: 'auto',
    padding: [size.spacing * 2, size.spacing * 4]
  },
  footer: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: [size.spacing, 0],
    fontSize: size.captionFontSize,
    color: palette.disabledColor,
    fontStyle: 'italic'
  }
})

class Content extends React.Component {

  static get defaultProps() {
    return {
      showHeader: true,
      title: ''
    }
  }

  reducer = (children, parents, breadcrumbs, section) => {
    if (!children) {
      return breadcrumbs
    }
    return children.reduce((breadcrumbs, next) => {
      breadcrumbs = this.reducer(next.children, [...parents, next], breadcrumbs, section)
      if (next.id === section) {
        return [...breadcrumbs, ...parents, next]
      }
      return breadcrumbs
    }, breadcrumbs)
  }

  render() {
    const {classes, className: classNameProp, contentRef, children, title, showHeader, ...other} = this.props

    const {match: {params: {id = PAGES.HOME, section = ''} = {}} = {}} = this.props

    const page = routes.filter(which => which.id === id)

    const breadcrumbs = !section ? page : this.reducer(page, [], [], section)
    const className = classNames(classes.root, classNameProp)
    return (
      <Page className={className} {...other}>
        <LeftNav open={true} breadcrumbs={breadcrumbs}/>
        <div className={classes.appWrapper}>
          {showHeader && <Header breadcrumbs={breadcrumbs}/>}
          <div id={'content'} className={classes.content}>
            {children}
          </div>
          <div className={classes.footer}>
            Made by Agon Lohaj and Leutrim Neziri
          </div>
        </div>
      </Page>
    )
  }
}

export default withStyles(styles)(Content)
