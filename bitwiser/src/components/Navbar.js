import React from 'react'

const Navbar = ({ items }) => {
    const list = items.map(item => <li key={item}>{item}</li>)
    return (
        <nav>
            <div className="navbar">
                <ul className="nav">
                    {list}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar