import React from 'react'
import Burger from './Burger'
import MobileMenu from './MobileMenu'

const MobileNavigation = ({ className, links }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <nav className={className}>
      <Burger open={open} setOpen={setOpen} />
      <MobileMenu open={open} setOpen={setOpen} links={links} />
    </nav>
  )
}

export default MobileNavigation;