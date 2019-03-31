/**
 * Created by LeutrimNeziri on 30/03/2019.
 */
import React from 'react'
import classNames from 'classnames'
import withStyles from '@go-prime/ui/withStyles'
import Page from '@go-prime/ui/Page'
import Header from 'anatomy/Header'
import LeftNav from 'anatomy/LeftNav'

const styles = ({palette, size, typography}) => ({
  appWrapper: {
    display: 'flex',
    width: '100%',
    height: '100%',
    overflow: 'hidden'
  },
  root: {
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'flex-start',
    alignContent: 'flex-start'
  },
  content: {
    width: '100%',
    flex: 1,
    overflowY: 'auto',
    padding: [size.spacing * 2, size.spacing * 4]
  }
})

class Content extends React.Component {

  static get defaultProps() {
    return {
      showHeader: true,
      title: ''
    }
  }

  render() {
    const {classes, className: classNameProp, children, title, showHeader, showLeftNav, showRightNav, other} = this.props
    const className = classNames(classes.root, classNameProp)
    return (
      <div className={classes.appWrapper}>
       <LeftNav open={true}/>
        <Page className={className} {...other}>
          {showHeader && <Header title={title}/>}
          <div className={classes.content}>
            {children}
          </div>
        </Page>
      </div>
    )
  }
}

export default withStyles(styles)(Content)
