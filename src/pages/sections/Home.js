/**
 * Created by LeutrimNeziri on 09/04/2019.
 */
import React, { Fragment } from "react"
import withStyles from "@go-prime/ui/withStyles"
import Typography from 'presentations/Typography'
import Divider from 'presentations/Divider'

const styles = ({typography}) => ({
  root: {},
})

class Home extends React.Component {
  render() {
    const {classes} = this.props
    return (
      <Fragment>
        <Typography variant={'heading'}>
          Training Program
          <Typography>Designed and structured by Agon Lohaj</Typography>
          <Divider/>
        </Typography>

        <Typography variant={'subHeading'} lead>Lecture 1</Typography>
        <Typography variant={'p'}>The purpose of the lecture one is to onboard the participants, get them
          acquainted to the trainers and get them familiar with the stakeholders (trainer, assistant and the students),
          with the way of working, the program plan, the tools that they need to setup and the training program
          structure.</Typography>

        <Typography>The lecture 1 will contain these underlying pages:
          <ol>
            <li>Introduction</li>
            <li>Getting Started</li>
            <li>Project Setup</li>
            <li>Project Setup</li>
            <li>Agile Methodology Introduction</li>
            <li>Way of Working</li>
          </ol>
        </Typography>
      </Fragment>
    )
  }
}

export default withStyles(styles)(Home)
