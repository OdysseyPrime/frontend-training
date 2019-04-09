import { PAGES } from 'Constants'

const routes = [
  {
    display: 'Home',
    id: PAGES.HOME,
  },
  {
    display: 'Lecture 1',
    id: PAGES.LECTURE_1,
    children: [
      {
        display: 'Getting Started',
        children: [
          {
            display: 'GitLab',
          },
          {
            display: 'Source Tree'
          },
          {
            display: 'VS Code'
          },
          {
            display: 'MongoDB'
          },
          {
            display: 'NPM'
          },
        ]
      },
      {
        display: 'Project Setup',
        children: [
          {
            display: 'Running the Application'
          }
        ]
      },
      {
        display: 'Agile Methodology Introduction',
        children: [
          {
            display: 'Scrum'
          }
        ]
      },
      {
        display: 'Way of Working',
        children: [
          {
            display: 'Exercise 1'
          }
        ]
      }
    ]
  },
  {
    display: 'Lecture 2',
    id: PAGES.LECTURE_2,
    children: [
      {
        display: 'JavaScript'
      },
      {
        display: 'ReactJS'
      },
      {
        display: 'Project Structure'
      }
    ]
  },
  {
    display: 'Glossary',
    id: PAGES.GLOSSARY,
  },
  {
    display: 'Resources',
    id: PAGES.RESOURCES,
  }
]

const format = (which) => {
  let children = which.children || []
  return {
    ...which,
    id: !which.id ? which.display.replace(' ', '').toLowerCase() : which.id,
    children: children.map(format)
  }
}

/**
 * Created by LeutrimNeziri on 30/03/2019.
 */
export default routes.map(format)


