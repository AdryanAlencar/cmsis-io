import React from "react"
import { Logo, WhiteLogo, LangEng, LangFn, LangUs } from "../../assets/img";
import { MenuItem } from "../menuitem";

export function NavBar(){

    const navbar = React.createRef<HTMLDivElement>();
    
    if(process.browser){
        window.addEventListener('scroll', () => {
            var scroll = window.scrollY;
    
            if (scroll >= 1) {
                navbar.current?.classList.remove('no-background');
                navbar.current?.classList.add('navbar-bg');
            } else {
                navbar.current?.classList.add('no-background');
                navbar.current?.classList.remove('navbar-bg');
            }
        })
    }
    

    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top no-background" ref={navbar}>
            <div className="container">
                <a className="navbar-brand" href="index.html">
                    <img src={Logo.src} alt="" className="logo-dark" />
                    <img src={WhiteLogo.src} alt="" className="logo-white" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <MenuItem 
                            href="/"
                            title="Home de teste"                            
                        />
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Home
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown1">
                                <a className="dropdown-item" href="index.html">Home Layout 1</a>
                                <a className="dropdown-item" href="index-2.html">Home Layout 2</a>
                                <a className="dropdown-item" href="index-3.html">Home Layout 3</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="help.html">Support</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Docs
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown2">
                                <a className="dropdown-item" href="layout-general.html">Guides & Tutorials</a>
                                <a className="dropdown-item" href="alerts.html">Components</a>
                                <a className="dropdown-item" href="layout-minimal.html">Minimal Layout</a>
                                <a className="dropdown-item" href="typography.html">Content</a>
                                <a className="dropdown-item" href="blank.html">Blank</a>
                            </div>
                        </li>
                        <li className="nav-item dropdown active">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown3" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Pages <span className="sr-only">(current)</span>
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown3">
                                <a className="dropdown-item" href="about.html">About Us</a>
                                <a className="dropdown-item" href="changelog.html">Change Log</a>
                                <a className="dropdown-item" href="faq.html">F.A.Q</a>
                                <a className="dropdown-item" href="contact.html">Contact</a>
                                <a className="dropdown-item" href="blog.html">Blog Page</a>
                                <a className="dropdown-item" href="blog-details.html">Blog Details</a>
                                <a className="dropdown-item active" href="help.html">Help/Support</a>
                                <a className="dropdown-item" href="login-register.html">Login?/register</a>
                                <a className="dropdown-item" href="404.html">404 Error Page</a>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown link
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown4">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li>
                                    <a className="dropdown-item dropdown-toggle" href="#">Submenu</a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Submenu action</a></li>
                                        <li><a className="dropdown-item" href="#">Another submenu action</a></li>
                                        <li>
                                            <a className="dropdown-item dropdown-toggle" href="#">Subsubmenu</a>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="#">Subsubmenu action aa</a></li>
                                                <li><a className="dropdown-item" href="#">Another subsubmenu action</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a className="dropdown-item dropdown-toggle" href="#">Second subsubmenu</a>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="#">Subsubmenu action bb</a></li>
                                                <li><a className="dropdown-item" href="#">Another subsubmenu action</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a className="dropdown-item dropdown-toggle" href="#">Submenu 2</a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Submenu action 2</a></li>
                                        <li><a className="dropdown-item" href="#">Another submenu action 2</a></li>
                                        <li>
                                            <a className="dropdown-item dropdown-toggle" href="#">Subsubmenu</a>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="#">Subsubmenu action 1 3</a></li>
                                                <li><a className="dropdown-item" href="#">Another subsubmenu action 2 3</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a className="dropdown-item dropdown-toggle" href="#">Second subsubmenu 3</a>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="#">Subsubmenu action 3 </a></li>
                                                <li><a className="dropdown-item" href="#">Another subsubmenu action 3</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul className="navbar-nav navbar-right">
                        <li className="nav-item search"><a href="#" className="nav-link"><i className="ti-search"></i></a></li>
                        <li className="nav-item">
                            <div className="lng_dropdown">
                                <select name="countries" id="lng_select">
                                    <option value="en" data-image={LangEng.src} data-title="English">EN</option>
                                    <option value="fn" data-image={LangFn.src} data-title="France">FN</option>
                                    <option value="us" data-image={LangUs.src} data-title="United States">US</option>
                                </select>
                            </div>
                        </li>
                        <li className="nav-item"><a href="login-register.html" className="nav-link btn-login"><i className="flaticon-sign-in"></i> Log In / Register</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}