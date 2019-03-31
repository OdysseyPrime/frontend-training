/**
 * Created by LeutrimNeziri on 01/03/2019.
 */
import React, {Fragment} from 'react'
import classNames from 'classnames'
import withStyles from '@go-prime/ui/withStyles'
import NavRowWrapper from 'presentations/rows/NavRowWrapper'
import NavLink from 'presentations/rows/nav/NavLink'
import uuid from 'uuid'

const routes = [
  {
    display: 'Frontend DevelopmentTraining Program',
    id: uuid.v1()
  },
  {
    display: 'Lecture 1',
    id: uuid.v1(),
    children: [
      {
        id: uuid.v1(),
        display: 'Introduction',
        children: [
          {
            id: uuid.v1(),
            display: 'Contact'
          }
        ]
      },
      {
        id: uuid.v1(),
        display: 'Getting Started',
        children: [
          {
            id: uuid.v1(),
            display: 'GitLab'
          },
          {
            id: uuid.v1(),
            display: 'Source Tree'
          },
          {
            id: uuid.v1(),
            display: 'VS Code'
          },
          {
            id: uuid.v1(),
            display: 'MongoDB'
          },
          {
            id: uuid.v1(),
            display: 'NPM'
          },
        ]
      },
      {
        id: uuid.v1(),
        display: 'Project Setup',
        children: [
          {
            id: uuid.v1(),
            display: 'Running the Application'
          }
        ]
      },
      {
        id: uuid.v1(),
        display: 'Agile Methodology Introduction',
        children: [
          {
            id: uuid.v1(),
            display: 'Scrum '
          }
        ]
      },
      {
        id: uuid.v1(),
        display: 'Way of Working',
        children: [
          {
            id: uuid.v1(),
            display: 'Exercise 1'
          }
        ]
      }
    ]
  },
  {
    display: 'Lecture 2',
    id: uuid.v1(),
    children: [
      {
        id: uuid.v1(),
        display: 'JavaScript'
      },
      {
        id: uuid.v1(),
        display: 'ReactJS'
      },
      {
        id: uuid.v1(),
        display: 'Project Structure'
      }
    ]
  },
  {
    display: 'Glossary',
    id: uuid.v1()
  },
  {
    display: 'Resources',
    id: uuid.v1()
  }
]

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
      active: '',
      open: false
    }
  }

  onClose = event => {
    const {onClose} = this.props
    if (onClose) onClose(event)
  }

  renderPanes = (route) => {
    return <NavRowWrapper key={route.id} item={route}/>
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
