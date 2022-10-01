import React from 'react'
import { useState } from 'react'
import { DivContent } from './style'
import 'animate.css'

export default function Header({products, setFilteredProduct}) {

  const [search, setSearch] = useState('')

  let arraySearch = []

  function handleSearch(event) {
    event.preventDefault()
    products.forEach(item => {
      let searchLower = search.toLowerCase()
      let itemLower = item.name.toLowerCase()
      if(itemLower.includes(searchLower)) {
        arraySearch.push(item)
      }
    })
    setFilteredProduct(arraySearch)
  }

  return (
    <DivContent>
        <img className="animate__animated animate__fadeInLeft" onClick={()=> {
          setFilteredProduct(products)
        }}src="../../burguerKenzie.png" alt="" />
        <div className="animate__animated animate__fadeInRight">
          <form onSubmit={handleSearch}>
            <input type="search" onChange={(event) => setSearch(event.target.value)}placeholder='Digite sua pesquisa'/>
            <button type="submit">Pesquisar</button>
          </form>
        </div>
    </DivContent>
  )
}
