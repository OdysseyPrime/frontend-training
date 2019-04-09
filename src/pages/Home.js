/**
 * Created by LeutrimNeziri on 30/03/2019.
 */
import React from "react"
import withStyles from "@go-prime/ui/withStyles"
import Content from 'anatomy/Content'
const styles = ({typography}) => ({
    root: {},
})

class Home extends React.Component {
    render() {
        const {classes} = this.props
        return (
            <Content>
                Frontend Development
                Training Program


            </Content>
        )
    }
}

export default withStyles(styles)(Home)
