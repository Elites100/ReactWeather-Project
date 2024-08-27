import React from 'react'
import { PacmanLoader } from 'react-spinners'

const override = {
  display: 'block',
  margin: '100px auto',
};

const Spinner = ({loading}) => {
  return (
    <PacmanLoader
      color='#0c74e4'
      loading={loading}
      cssOverride={override}
      size={100}
    />
  )
}

export default Spinner