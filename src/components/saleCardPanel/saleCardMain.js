import React from "react"
import {
  makeStyles,
  Typography,
  Button,
  Card,
  useMediaQuery,
} from "@material-ui/core"
import { GatsbyImage } from "gatsby-plugin-image"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    height: "100%",
    boxShadow: "none",
    borderRadius: "20px",
    backgroundColor: theme.palette.background.secondary,
    padding: "8px",
    position: "relative",
  },

  wrapperImg: {
    height: "400px",
    borderRadius: "12px",
    marginBottom: "28px",
  },
  text: {
    width: "100%",
    paddingRight: "28px",
    paddingLeft: "28px",
  },

  mainTitle: {
    fontWeight: 700,
    fontSize: 36,
    marginBottom: "12px",
    color: theme.palette.color.main,
  },

  dateWrapper: {
    paddingRight: "28px",
    paddingLeft: "28px",
    marginBottom: "28px",
    display: "flex",
  },
  saleCreationDate: {
      marginRight: "80px",
      color: theme.palette.color.secondary,
  },
}))

export default function SaleCardMain({ sale }) {
  const classes = useStyles()
  console.log(sale)
  const mobile = useMediaQuery("(max-width: 414px)")
  return (
    <Card className={classes.root}>
      <GatsbyImage
        image={sale.data.previewimage.localFile.childImageSharp.gatsbyImageData}
        alt={sale.data.previewimage.alt ?? "sales"}
        className={classes.wrapperImg}
      />
      <Typography className={classes.mainTitle + " " + classes.text}>
        {sale.data.title.text}
      </Typography>
      <div className={classes.dateWrapper}>
        {mobile ? (
          null
        ) : <Typography className={classes.saleCreationDate}>asd</Typography>}

        <Typography>Сроки проведения</Typography>
        <Typography>asdfgawga</Typography>
      </div>
    </Card>
  )
}
