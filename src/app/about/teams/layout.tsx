import React from 'react'
import { Metadata } from 'next'
import { Tourney } from 'next/font/google'


const roboto = Tourney({
    weight:['100', '600'],
    subsets: ["latin"]
})

export const metadata: Metadata = {
    title: 'NextJS - About'
}

const TeamsLayout = ({children}) => {
  return (
    <div className={roboto.className}>
      <h2>Teams Page Custom Layout</h2>
      {children}
    </div>
  )
}

export default TeamsLayout