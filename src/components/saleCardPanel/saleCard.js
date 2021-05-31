import React from "react"
import {
  makeStyles,
  Typography,
  Button,
  Card,
} from "@material-ui/core"
import { GatsbyImage } from "gatsby-plugin-image"

const useStyles = makeStyles(theme => ({
  wrapper: {
    width: "100%",
    height: "100%",
    boxShadow: "none",
    borderRadius: "20px",
    backgroundColor: theme.palette.background.secondary,
    padding: "8px",
    position: "relative",
  },
  stretch: {
    width: "100%",
    height: "100%",
  },
  cardAction: {
    borderRadius: "12px"
  },
  text: {
    width: "100%",
    paddingRight: "12px",
    paddingLeft: "12px",
  },
  mainTitle: {
    fontSize: 20,
    fontWeight: 700,
    color: theme.palette.color.main,
    paddingBottom: "12px"
  },
  previewText: {
    color: theme.palette.color.secondary,
    fontSize: 14,
    paddingBottom: "6.328vw",
    "@media(min-width: 1280px)": {
      paddingBottom: "81px",
    },
    "@media(max-width: 834px)": {
      paddingBottom: "9.336vw",
    },
    "@media(max-width: 414px)": {
      paddingBottom: "17.87vw",
    },
  },

  button: {
    width: "146px",
    height: "46px",
    borderRadius: "12px",
    backgroundColor: "#D2D0E9",
    marginLeft: "12px",
    marginBottom: "12px",
    position:"absolute",
    bottom: 0,
    left: 0,
  },
  wrapperImg: {
    height: "200px",
    borderRadius: "12px",
    marginBottom: "28px",
  },
  link: {
    textDecoration: "none",
  },
  buttonText: {
    fontSize: "14",
    fontWeight: "700",
  },
}))

export default function SaleCard({ sale }) {
  const classes = useStyles()
  return (
    <Card className={classes.wrapper}>
          <GatsbyImage
            image={
              sale.data.previewimage.localFile.childImageSharp.gatsbyImageData
            }
            alt={sale.data.previewimage.alt ?? "sales"}
            className={classes.wrapperImg}
          />
          <Typography className={classes.mainTitle + " " + classes.text}>
            {sale.data.title.text}
          </Typography>
          <Typography className={classes.previewText + " " + classes.text}>
            {sale.data.previewtext.text}
          </Typography>
          <Button href={`/${sale.uid}/`} className={classes.button} >
            <Typography variant="body2" className={classes.buttonText}>
              Перейти
            </Typography>
          </Button>
    </Card>
  )
}
