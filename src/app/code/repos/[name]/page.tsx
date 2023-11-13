// @ts-nocheck
import React from 'react'
import GetReposDetails from '../../../../components/getRepoDetails';

const ReposPages = ({params: { name }}) => {
  return (
  <>
    <GetReposDetails name={name}/>
  </>)
}

export default ReposPages
