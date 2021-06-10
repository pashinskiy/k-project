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
    borderRadius: 20,
    backgroundColor: theme.palette.background.secondary,
    padding: 8,
  },
  cardAction: {
    borderRadius: 12,
  },
  text: {
    width: "100%",
    paddingRight: 12,
    paddingLeft: 12,
  },
  mainTitle: {
    fontSize: 20,
    fontWeight: 700,
    color: theme.palette.color.main,
    paddingBottom: 12,
  },
  previewText: {
    color: theme.palette.color.secondary,
    fontSize: 14,
    paddingBottom: 28,

  },
  button: {
    width: 146,
    height: 46,
    borderRadius: 12,
    backgroundColor: "#D2D0E9",
    marginLeft: 12,
    marginBottom: 12,
  },
  wrapperImg: {
    height: 200,
    borderRadius: 12,
    marginBottom: 28,
  },
  link: {
    textDecoration: "none",
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 700,
  },
}))

export default function SaleCard({ sale }) {
  const classes = useStyles()
  return (
    <Card className={classes.wrapper}>
          <GatsbyImage
            image={
              sale.data.previewimage?.localFile?.childImageSharp.gatsbyImageData
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
          <Button href={`/sale/${sale.uid}/`} className={classes.button} >
            <Typography variant="body2" className={classes.buttonText}>
              Перейти
            </Typography>
          </Button>
    </Card>
  )
}
