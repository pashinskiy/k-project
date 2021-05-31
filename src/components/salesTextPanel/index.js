import React from "react"
import {
  makeStyles,
  Typography,
  Button,
  Card,
  Grid,
  useMediaQuery,
} from "@material-ui/core"
import Social from "../layout/footer/social"
import SimilarProduct from "../productPage/similarProduct"
import CardSimilarProduct from "../productPage/similarProduct/cardProduct"

const useStyles = makeStyles(theme => ({
  wrapper: {},
  socialsItems: {
    padding: "0.9375vw",
    "@media(min-width: 1280px)": {
      padding: "12px",
    },
    "@media(max-width: 834px)": {
      padding: "1.438vw",
    },
    "@media(max-width: 414px)": {
      padding: "2.898vw",
      paddingTop: 0,
      paddingBottom: "9.661vw"
    },
  },

  socialContainerOther: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  socialContainerMobile: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },

  textWrapper: {
      width: "53.125vw",
      paddingBottom: "5.3125vw",
    "& p": {
      fontSize: "1.328vw",
    },
    "& strong": {
      fontSize: "1.875vw",
    },
    "@media(min-width: 1280px)": {
      width: "680px",
      paddingBottom: "68px",
      "& p": {
        fontSize: 17,
      },
      "& strong": {
        fontSize: 24,
      },
    },
    "@media(max-width: 834px)": {
      width: "49.4vw",
      paddingBottom: "8.153vw",
      "& p": {
        fontSize: "2.038vw",
      },
      "& strong": {
        fontSize: "2.877vw",
      },
    },
    "@media(max-width: 414px)": {
      width: "100%",
      paddingBottom: "9.661vw",
      "& p": {
        fontSize: "4.1vw",
      },
      "& strong": {
        fontSize: "5.797vw",
      },
    },
    "& p:nth-of-type(1)": {
      marginBlockStart: 0,
    },
    "& img": {
      width: "100%",
    },
  },
  productItem:{
      paddingBottom: "3.125vw",
      "@media(min-width: 1280px)": {
        paddingBottom: "40px",
      },
      "@media(max-width: 834px)": {
        paddingBottom: "4.796vw",
      },
      "&:nth-last-of-type(1)":{
         paddingBottom: 0, 
      },
  },
  productItemMobile: {
    paddingBottom: "16.425vw",
  },
}))

export default function SalesTextPanel({ sale, socials, products }) {
  const classes = useStyles()
  console.log(products)
  const mobile = useMediaQuery("(max-width: 414px)")
  return (
    <Grid container justify="space-between">
      <Grid
        item
        className={
          mobile ? classes.socialContainerMobile : classes.socialContainerOther
        }
      >
        {socials.map(icon => (
          <div className={classes.socialsItems}>
            <Social
              icon={icon.primary.social_img.localFile.publicURL}
              alt={icon.primary.social_img.alt}
              link={icon.primary.link.url}
              key={icon.id}
            />
          </div>
        ))}
      </Grid>
      <Grid item className={classes.textWrapper}>
        <div
          dangerouslySetInnerHTML={{ __html: sale.data.salestext.html }}
        ></div>
      </Grid>
      <Grid item>
        {mobile ? (
            <div className={classes.productItemMobile}>

          <SimilarProduct products={products} withoutHeader={true} />
            </div>
        ) : 
          products.map(function(mapProduct, i) {
              if(i < 3){
                  console.log(i)
                  return (<div className={classes.productItem}><CardSimilarProduct product={mapProduct} /></div>)
              }
          })
        }
      </Grid>
    </Grid>
  )
}
