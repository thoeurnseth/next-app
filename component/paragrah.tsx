import React from 'react'

interface props{
    title: string;
}
export default function Paragrah({title}: props) {
  return (
    <>
    <p>{title}</p>
    </>
  )
}
