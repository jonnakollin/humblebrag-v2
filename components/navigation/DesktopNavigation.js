import React from 'react'
import NavigationItem from './NavigationItem'

const DesktopNavigation = ({ className, links }) => {
    return (
        <nav className={className}>
            {links.map((link, index) => {
                return <NavigationItem key={index} {...link} />
            })}
        </nav>
    )
}

export default DesktopNavigation