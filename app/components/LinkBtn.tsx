import { Link } from '@chakra-ui/react'
import React from 'react'

export default function LinkBtn({ msg, link, isActive, setActiveLink, index }: { msg: string, link: string, isActive?: boolean, setActiveLink: any, index: number }) {
  return (
    <Link fontWeight="600" href={link} color={isActive ? "#FF621A" : "black"} onClick={() => setActiveLink(index)} hrefLang={link}>{msg}</Link>
  )
}
