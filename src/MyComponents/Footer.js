import React from 'react'

export const Footer = () => {

    // let footerStyle = {
    //     position: "relative",
    //     top: "70vh",
    //     width: "100%"
    // }

    let footerStyle = {
        
        top: "70vh",
        width: "100%"
    }

    return (
        // <footer className= "bg-dark text-light my-5 py-2" style = {footerStyle}>
        <footer className= "bg-dark text-light my-5 py-2 " style = {footerStyle}>
            <p className="text-center">
            Copyright &copy; {new Date().getFullYear()} My TodoList.com
            </p>
        </footer>
    )
}
