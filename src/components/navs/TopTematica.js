import React from 'react'
import {Navbar } from 'react-bootstrap'

export const TopTematica = ({params}) => {
    return (
        <Navbar className="NavTematica text-uppercase">
            <ul className="list-inline">
                {params.Componentes.map(info => (
                    <li key={info.Titulo} className="list-inline-item">
                        <a href={"#"+info.id} >{info.Titulo}</a>
                    </li>
                ))}
            </ul>
        </Navbar>
    )
}
