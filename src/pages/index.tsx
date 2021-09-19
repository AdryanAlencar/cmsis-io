import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { LangEng, LangFn, LangUs, Logo, WhiteLogo } from '../assets/img'
import { NavBar } from '../components/navbar'

const Home: NextPage = () => {
    return (
        <div className="loader">
            <Head>
                <title>CMSIS.IO - Home</title>
            </Head>
            <div className="top-search">
                <div className="input-group">
                    <span className="input-group-addon">
                        <i className="ti-search"></i>
                    </span>
                    <input type="text" className="form-control" placeholder="Search for snippets ......" />
                    <span className="input-group-addon close-search">
                        <i className="ti-close"></i>
                    </span>
                </div>
            </div>
            <NavBar />
            <header className="minimal-header header-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 offset-md-1 col-xl-8 offset-xl-2">
                            <div className="minimal-header-text">
                                <h1>Alguma dúvida? Nós temos a resposta!</h1>
                                <div className="header-serch mt-4">
                                    <div className="form-group has-search">
                                        <span className="ti-search form-control-feedback"></span>
                                        <input type="text" className="form-control" placeholder="Digite pelo que procura..." />
                                    </div>
                                </div>
                                <div className="tips-and-tricks mt-5">
                                    <p>Não sabe por onde começar? <a href="#" target="_blank">Comece a aprender</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="topic-content">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <div className="section-title">
                                <h2>Select a topic</h2>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-lg-4">
                            <div className="box-topic">
                                <div className="icon">
                                    <i className="flaticon-thought"></i>
                                </div>
                                <h3 className="title">Knowledge base</h3>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when. </p>
                                <a href="#" className="read-link">View knowledge base <i className="ti-arrow-right"></i></a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="box-topic">
                                <div className="icon">
                                    <i className="flaticon-credit-card"></i>
                                </div>
                                <h3 className="title">Billing & licensing</h3>
                                <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed.</p>
                                <a href="#" className="read-link">View FAQs <i className="ti-arrow-right"></i></a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="box-topic">
                                <div className="icon">
                                    <i className="flaticon-info"></i>
                                </div>
                                <h3 className="title">General Help</h3>
                                <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model.</p>
                                <a href="#" className="read-link">View Help Center <i className="ti-arrow-right"></i></a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="box-topic">
                                <div className="icon">
                                    <i className="flaticon-account"></i>
                                </div>
                                <h3 className="title">Account</h3>
                                <p>Various versions have evolved over the years, sometimes by accident, sometimes on purpos.</p>
                                <a href="#" className="read-link">View Account <i className="ti-arrow-right"></i></a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="box-topic">
                                <div className="icon">
                                    <i className="flaticon-testimonial"></i>
                                </div>
                                <h3 className="title">Reviews</h3>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                                <a href="#" className="read-link">View Reviews<i className="ti-arrow-right"></i></a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="box-topic">
                                <div className="icon">
                                    <i className="flaticon-world"></i>
                                </div>
                                <h3 className="title">International</h3>
                                <p> If you are going to use a passage of Lorem Ipsum, you need to be sure there isn&apos;t anything embarrassing.</p>
                                <a href="#" className="read-link">View International<i className="ti-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="articles-content2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <div className="section-title">
                                <h3>Featured Articles</h3>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="list-articles">
                                <ul>
                                    <li><a href="#0"><i className="far fa-file-alt"></i><b className="highlight">What is</b> docBanao?</a></li>
                                    <li><a href="#0"><i className="far fa-file-alt"></i><b className="highlight">Working in </b> docBanao</a></li>
                                    <li><a href="#0"><i className="far fa-file-alt"></i><b className="highlight">Etiam</b> fringilla massa sed aliquam <b className="highlight">consequat</b>.</a></li>
                                    <li><a href="#0"><i className="far fa-file-alt"></i>S<b className="highlight">uspendisse</b> id arcu <b className="highlight">vestibulum</b>, tincidunt.</a></li>
                                    <li><a href="#0"><i className="far fa-file-alt"></i><b className="highlight">Cras pharetra</b> nisi eget leo porta.</a></li>
                                    <li><a href="#0"><i className="far fa-file-alt"></i>Etiam <b className="highlight">fringilla</b> massa sed aliquam <b className="highlight">consequat</b>.</a></li>
                                    <li><a href="#0"><i className="far fa-file-alt"></i><b className="highlight">Donec</b> sed nibh facilisis, fringilla ligula.</a></li>
                                    <li><a href="#0"><i className="far fa-file-alt"></i><b className="highlight">Suspendisse</b> placerat lacus in elit.</a></li>
                                    <li><a href="#0"><i className="far fa-file-alt"></i>In porta odio vel tortor <b className="highlight">egestas</b> suscipit.</a></li>
                                    <li><a href="#0"><i className="far fa-file-alt"></i>Integer fermentum nibh <b className="highlight">malesuada</b> <b className="highlight">lobortis</b> blandit.</a></li>
                                    <li><a href="#0"><i className="far fa-file-alt"></i><b className="highlight">Duis varius</b> sem et neque faucibus convallis.</a></li>
                                    <li><a href="#0"><i className="far fa-file-alt"></i>Duis at lacus nec velit finibus <b className="highlight">sollicitudin</b> ac nec turpis.</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="bg-gray border-top">
                <div className="main-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-4 col-lg-3">
                                <div className="footer-about">
                                    <div className="footer-logo">
                                        <img src={Logo.src} alt="" className="img-fluid" />
                                    </div>
                                    <p>Bangladesh Office
                                        98 Green Road, Farmgate, Dhaka- 1215
                                    </p>
                                    <a className="email-link" href="./cdn-cgi/l/email-protection#f3919787928098b3949e929a9fdd909c9e"><span className="__cf_email__" data-cfemail="bfdddbcbdeccd4ffd8d2ded6d391dcd0d2">[email&#160;protected]</span></a>
                                </div>
                            </div>
                            <div className="col-6 col-md-3 col-lg-2">
                                <div className="footer-link">
                                    <h4 className="link-title">Resources</h4>
                                    <a href="#" className="link">Guides</a>
                                    <a href="help.html" className="link">Help Center</a>
                                    <a href="#" className="link">Technical support</a>
                                    <a href="layout-general.html" className="link">Documentation</a>
                                    <a href="#" className="link">App Directory</a>
                                </div>
                            </div>
                            <div className="col-6 col-md-2 d-md-none d-lg-block">
                                <div className="footer-link">
                                    <h4 className="link-title">Company</h4>
                                    <a href="about.html" className="link">About us</a>
                                    <a href="#" className="link">Press Kit</a>
                                    <a href="#" className="link">Careers</a>
                                    <a href="#" className="link">Brand Guidelines</a>
                                    <a href="contact.html" className="link">Contact Support</a>
                                </div>
                            </div>
                            <div className="col-12 col-md-5 col-lg-5">
                                <div className="newslatter">
                                    <h4 className="link-title">Connect with us</h4>
                                    <p>Subscribe to our newsletter!</p>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Enter Your Email" />
                                        <div className="input-group-append">
                                            <button className="btn btn-outline" type="button">Subscribe</button>
                                        </div>
                                    </div>
                                </div>
                                <ul className="social-icon">
                                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                    <li><a href="#"><i className="fab fa-telegram-plane"></i></a></li>
                                    <li><a href="#"><i className="fab fa-whatsapp"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="sub-footer">
                            <div className="row align-items-center ">
                                <div className="col-md-7 order-md-first order-last">
                                    <div className="Copyright-text">
                                        <p className="m-0">Copyright © 2016-2018 <a href="#" target="_blank">bdtask </a>. All rights reserved. </p>
                                        <p className="m-0 d-none d-sm-block">Built with <a href="#" target="_blank">bdtask </a> using a <a href="#" target="_blank">theme</a> provided by <a href="#" target="_blank">docBanao.</a></p>
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <ul className="footer-menu">
                                        <li><a href="">Terms of use </a></li>
                                        <li><a href="changelog.html">Changelog</a></li>
                                        <li><a href="./cdn-cgi/l/email-protection#b2c6dad7c2ddc1c6d1ddd6d7d1ddf2d5dfd3dbde9cd1dddf">Contact us</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Home
