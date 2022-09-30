import React from 'react'
import { DivContent } from './style'

export default function Header() {
  return (
    <DivContent>
        <img src="../../burguerKenzie.png" alt="" />
        <div>
            <input type="search" placeholder='Digite sua pesquisa'/>
            <button type="submit">Pesquisar</button>
        </div>
    </DivContent>
  )
}
