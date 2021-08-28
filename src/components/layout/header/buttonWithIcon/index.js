import React from "react"
import { makeStyles } from "@material-ui/styles"
import { Link } from "gatsby"

const useStyles = makeStyles(theme => ({
  root: {
    textDecoration: "none",
    textAlign: "center",
    color: theme.palette.color.main,
    lineHeight: "100%",
    transition: ".15s ease all",
    "@media (max-width: 1025px)": {
      display: "none",
    },
    "&:hover": {
      color: theme.palette.color.accentSecondary,
      "& .imgWrapper": {
        transform: "translateY(-4px)",
      },
    },
  },
  imgWrapper: {
    position: "relative",
    width: 30,
    height: 30,
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 4,
    transition: ".15s ease all",
    "@media(max-width: 1025px)": {
      width: 24,
    },
  },
  text: {
    "@media(max-width: 1025px)": {
      fontSize: 12,
    },
  },
  count: {
    position: "absolute",
    left: "100%",
    transform: "translate(-50%, -50%)",

    width: "auto",
    padding: "2px 4px",
    background: "#DF3434",
    borderRadius: "1000px",

    fontWeight: 500,
    fontSize: 10,
    lineHeight: "12px",
    color: theme.palette.color.mainContrast,

    "@media(max-width: 1025px)": {
      transform: "translate(-50%, -37%)",
    },
  },
}))

/**
 * Кнопка навигации с иконкой
 * @module src/components/layout/header/buttonWithIcon
 * @param {Object} props - объект свойств компонента React
 * @param {String} props.name - текст кнопки
 * @param {String} props.img - путь до иконки
 * @param {String} props.alt - альтернативный текст
 * @param {String} props.link - ссылка (относительно домена)
 * @param {Number} props.count - число отображаемое в правом углу кнопки
 */
export default function ButtonWithIcon({ name, img, alt, link, count }) {
  const classes = useStyles()
  if (count > 99) count = "99+"

  return (
    <Link to={`${link}`} className={classes.root}>
      <div className={classes.imgWrapper + " imgWrapper"}>
        {count ? <div className={classes.count}>{count}</div> : null}
        <img
          src={img}
          alt={alt ?? "img"}
          width="30"
          height="30"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <span className={classes.text}>{name}</span>
    </Link>
  )
}
