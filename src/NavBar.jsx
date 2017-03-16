import React from 'react';

class Navbar extends React.Component {
    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <a href="#" class="brand-logo">Count Down App</a>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;