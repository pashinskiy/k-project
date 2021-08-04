import React from "react"

export default function Social({ icon, alt, link }) {
  return (
    <a href={`${link}`} target="_blank" rel="noopener noreferrer">
      <img src={icon} alt={alt ?? "icon"} width={18} height={18} />
    </a>
  )
}
