import React, { useState } from 'react'
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function SearchBox() {
  const navigate = useNavigate()
  const [query, setQuery] = useState('')

  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault()
    navigate(query ? `/search?query=${query}` : '/search')
  }
  return (
    <Form className="flex-grow-1 d-flex me-auto  w-[4rem]" onSubmit={submitHandler}>
      <InputGroup >
        <FormControl
          type="text"
          name="q"
          id="q"
          className='rounded-full '
          value={query}
          placeholder="Search Daily mart..."
          aria-label="Search Daily mart..."
          aria-describedby="button-search"
          onChange={(e) => setQuery(e.target.value)}
        ></FormControl>
        <Button  className='py-[10px] bg-green-500 border-green-500 hover:bg-green-600 hover:border-green-600 px-3 rounded-e-full' type="submit" id="button-search">
          <i className="fas fa-search"></i>
        </Button>
      </InputGroup>
    </Form>
  )
}