/**
 * Created by LeutrimNeziri on 30/03/2019.
 */
import React from "react"
import PropTypes from "prop-types"
import withStyles from "@go-prime/ui/withStyles"
import classNames from 'classnames'

const variants = {
  heading: 'heading',
  subHeading: 'subHeading',
  p: 'p',
}

const styles = ({palette, size, typography}) => ({
  root: {
    color: palette.textColor,
    width: '100%',
    display: 'flex',
    flexFlow: 'row wrap',
    '&$lead': {
      color: palette.leadColor,
    }
  },
  lead: {},
  inverted: {
    color: palette.textColorInverse,
  },
  heading: {
    fontSize: size.displayFontSize,
    fontWeight: typography.weight.bold,
    margin: [0, 0, size.spacing * 3, 0],
    color: 'inherit'
  },
  subHeading: {
    fontSize: size.headerFontSize + size.spacing,
    margin: [0, 0, size.spacing * 2, 0],
    fontWeight: typography.weight.regular,
    color: 'inherit'
  },
  p: {
    fontSize: size.titleFontSize,
    margin:[size.spacing, 0],
    lineHeight: 1.7,
    fontWeight: typography.weight.regular,
    color: 'inherit'
  }
})

const Typography = ({classes, variant, inverted, component: ComponentProp, lead, className: classNameProp, children, ...other}) => {

  const className = classNames(
    classes.root,
    variant === variants.heading && classes.heading,
    variant === variants.subHeading && classes.subHeading,
    variant === variants.p && classes.p,
    lead && classes.lead,
    inverted && classes.inverted,
    classNameProp
  )


  return (
    <ComponentProp className={className} {...other}>
      {children}
    </ComponentProp>
  )
}

Typography.defaultProps = ({
  component: 'p',
  lead: false,
  inverted: false,
  variant: variants.p
})


Typography.propTypes = ({
  lead: PropTypes.bool,
  inverted: PropTypes.bool,
  component: PropTypes.any,
  variant: PropTypes.oneOf(Object.keys(variants))
})

export default withStyles(styles)(Typography)
