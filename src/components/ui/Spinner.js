import React from 'react'
import styled from 'styled-components'
import { moveSpinner } from '../../Styles/Animations'

const SpinnerLoader = styled.div`
  animation: ${moveSpinner} 2s linear infinite;
  border: 10px solid #d5d0d0;
  border-top: 10px solid var(--hot-pink);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin: 0 auto;
`


export const Spinner = () => {
    return (
        <SpinnerLoader></SpinnerLoader>
    )
}

