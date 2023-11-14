// @ts-nocheck
import React from 'react'
import GetRepoDirs from 'src/components/getRepoDirs';
import GetReposDetails from '../../../../components/getRepoDetails';
import '../../../../app/global.css'
import Link from 'next/link';

const ReposPages = ({params: { name }}) => {
  return (
  <div className='card'>
    <Link href="/code/repos" className='btn btn-back'>Back to Repos page</Link>
    <GetReposDetails name={name}/>
    <GetRepoDirs name={name}/>
  </div>)
}

export default ReposPages
