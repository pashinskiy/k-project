import React from "react"
import { makeStyles, Typography } from "@material-ui/core"
import ScrollBar from "../../scrollBar"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    "& h3": {
      fontSize: 60,
      fontWeight: 700,
      lineHeight: "130%",
      "@media (max-width: 1025px)": {
        fontSize: "6vw",
      },
      "@media (max-width: 767px)": {
        fontSize: "9vw",
      },
      "& span": {
        color: theme.palette.color.accentSecondary,
      },
    },
  },
  brand: {
    width: 140,
    height: 165,
    marginRight: 12,
    overflow: "hidden",
  },
  title: {
    width: "100%",
    marginBottom: 20,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  card: {
    width: 160,
    height: 260,
    textDecoration: "none",
    color: theme.palette.color.main,
    borderRadius: 20,
    background: theme.palette.background.secondary,
    marginRight: 12,
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    "&:last-child": {
      marginRight: 0,
    },
    "& h4": {
      fontSize: 17,
      fontWeight: 700,
      padding: 20,
      "& span": {
        color: theme.palette.color.accentSecondary,
      },
    },
  },
  subtitle: {
    marginBottom: 40,
    "& p": {
      fontSize: 17,
      color: theme.palette.color.secondary,
    },
  },
  icon: {
    flex: 1,
    width: "100%",
    background: theme.palette.color.accent,
    borderRadius: "120px 0px 0px 0px",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    "& img": {
      width: 120,
      height: 120,
    },
  },
}))

/**
 * Слайдер социальные сети
 * @module src/components/mainPage/social
 * @param {Object} props - объект свойств компонента React
 * @param {Object} props.data - объект данных полученый из prismic
 */
export default function SocialNetworks(props) {
  
  function socialId(link){
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

  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <Typography variant="h3">
          Подписывайтесь
          <br />
          на наши <span>социальные сети</span>
        </Typography>
      </div>
      <div className={classes.subtitle}>
        <Typography variant="body1">
          Оставайтесь в курсе новых акций и выхода устройств!
        </Typography>
      </div>
      <div className={classes.brands}>
        <ScrollBar buttonNext fullScreen>
          {props.data.allPrismicFooterBody2Social.edges.map((social, i) => (
            <a
              id={socialId(social.node.primary.link.url)}
              href={social.node.primary.link.url}
              target="_blank"
              rel="noopener noreferrer"
              key={`social_card ${i}`}
              className={classes.card}
            >
              <Typography
                variant="h4"
                dangerouslySetInnerHTML={{
                  __html: social.node.primary.social_name.raw[0].text,
                }}
              />
              <div className={classes.icon}>
                <img
                  src={
                    social.node.primary.social_img_white.localFile?.publicURL
                  }
                  alt={social.node.primary.social_img_white.alt ?? "social"}
                />
              </div>
            </a>
          ))}
        </ScrollBar>
      </div>
    </div>
  )
}
