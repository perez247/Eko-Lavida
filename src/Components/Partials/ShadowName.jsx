import React from 'react'

import classes from './ShadowName.module.css';

const ShadowName = props => {
  return <p className={`${classes.appShadow} whitespace-nowrap ${props.className}`}>{props.name}</p>

}

export default ShadowName
