/**
 * Created by LeutrimNeziri on 30/03/2019.
 */
import React from "react"
import withStyles from "@go-prime/ui/withStyles"
import Content from 'anatomy/Content'
import Home from 'pages/sections/Home'
import { PAGES } from 'Constants'
import Lecture1 from 'pages/sections/Lecture1'

const styles = ({typography}) => ({
  root: {}
})

class Lecture extends React.Component {

  constructor (props) {
    super(props)

    this.contentRef = React.createRef();
  }
  componentDidMount () {
    this.scrollToDiv()
  }

  componentDidUpdate (prevProps, prevState) {

    const {match: {params: {id = '', section = ''} = {}} = {}} = this.props
    const {match: {params: {id: nextId = '', section: nextSection = ''} = {}} = {}} = prevProps

    if (id !== nextId || section !== nextSection) {
      this.scrollToDiv()
    }
  }

  scrollToDiv() {
    const {match: {params: { section = ''} = {}} = {}} = this.props
    const element = document.getElementById(section)
    const content = document.getElementById('content')
    if (!element || !content) {
      return
    }
    content.scrollTo(0, element.offsetTop)
  }

  renderSections = () => {
    const {match: {params: {id = ''} = {}} = {}} = this.props
    switch (id) {
      case PAGES.LECTURE_1:
        return <Lecture1/>
      default:
        return <Home/>
    }
  }


  render() {
    const {classes, ...other} = this.props
    return (
      <Content {...other}>
        {this.renderSections()}
      </Content>
    )
  }
}

export default withStyles(styles)(Lecture)
