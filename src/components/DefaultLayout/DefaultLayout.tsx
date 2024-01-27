import { ReactNode } from 'react'

import { MainHeader } from '../MainHeader/MainHeader'
import { MainFooter } from '../MainFooter/MainFooter'
import './DefaultLayout.css'

interface DefaultLayoutProps {
  children: ReactNode
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <div className="page-wrapper">
      <MainHeader />
      <main className="container">{children}</main>
      <MainFooter />
    </div>
  )
}
