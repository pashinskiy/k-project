import React from "react"

/**
 * Ссылка на социальную сеть
 * @module src/components/layout/footer/social
 * @param {Object} props - объект свойств компонента React
 * @param {String} props.icon - путь к иконке
 * @param {String} props.alt - альтернативный текст
 * @param {String} props.link - ссылка
 */
export default function Social({ icon, alt, link }) {
  return (
    <a href={`${link}`} target="_blank" rel="noopener noreferrer">
      <img src={icon} alt={alt ?? "icon"} width={36} height={36} />
    </a>
  )
}
