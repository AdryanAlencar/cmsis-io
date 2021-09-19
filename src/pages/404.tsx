import React from "react";
import Link from 'next/link'

export default function Custom404() {
    return (
        <>
            <div className="error-content">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 ">
                            <div className="error-text">
                                <h1 className="error">404</h1>
                                <div className="sheep">
                                    <div className="top">
                                        <div className="body"></div>
                                        <div className="head">
                                            <div className="eye one"></div>
                                            <div className="eye two"></div>
                                            <div className="ear one"></div>
                                            <div className="ear two"></div>
                                        </div>
                                    </div>
                                    <div className="legs">
                                        <div className="leg"></div>
                                        <div className="leg"></div>
                                        <div className="leg"></div>
                                        <div className="leg"></div>
                                    </div>
                                </div>
                                <h4>Oops! Essa página não existe!</h4>
                                <p>Desculpe, mas a página que você está procurando não existe, foi removida ou o nome mudou.</p>
                                <Link href="/">
                                    <a className="btn btn-primary btn-round">Voltar ao Inicio</a>
                                </Link>                                    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
  