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
  function contactId(link){
    if (link.includes("vk.com")){
        return "vk"
    }
    if (link.includes("instagram.com")){
      return "inst"
    }
    if (link.includes("facebook.com")){
      return "facebook"
    }
    if (link.includes("t.me")){
      return "telegram"
    }
    if (link.includes("wa.me")){
      return "whatsapp"
    }
  }
  return (
    <a id={contactId(link)} href={`${link}`} target="_blank" rel="noopener noreferrer">
      <img src={icon} alt={alt ?? "icon"} width={36} height={36} />
    </a>
  )
}
