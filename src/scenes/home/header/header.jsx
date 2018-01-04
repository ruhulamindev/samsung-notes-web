import React from 'react';
import './style/header.css';


class Header extends React.Component {
    render() {
        let name = this.props.name === "star" ? "Favourites" : this.props.name;

        return (
            <header className="o-app-header" >
                <section className="o-app-menu-title">
                    <i onClick={this.toggleNav} className="material-icons js-app-menu">menu</i>

                    <div role="heading" className="c-samsung-title">
                        {
                            this.props.name ? <h1>{name}</h1> :
                                [<h1 key="1">Samgsung Note</h1>,
                                <sup key="2" className="c-super-like">Web</sup>]
                        }
                    </div>
                </section>
            </header>
        )
    }

    toggleNav = () => {
        const body = document.body.classList;
        return body.toggle("hide__main__nav", !body.contains("hide__main__nav"));
    }

}

export default Header;
