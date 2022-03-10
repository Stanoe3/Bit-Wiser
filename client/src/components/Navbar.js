import React from 'react';
import Navitem from "./Navitem";

const Navbar = ({ items }) => {
    let list = []
    for (let i = 0; i < items.length; i++) {
        list.push(<Navitem key={i} item={items[i]}/>)
    }
    return (
        <div className="navbar">
            <nav>
                <ul>
                    { list }
                </ul>
            </nav>
            
        </div>
    )
}

export default Navbar