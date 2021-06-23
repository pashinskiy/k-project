import React, { useState } from "react"
import Card from "@material-ui/core/Card"
import { makeStyles } from "@material-ui/core/styles"
import {
  Button,
  CardContent,
  Grid,
  Typography,
  Divider,
} from "@material-ui/core"
import { Link } from "gatsby"
import CartIcon from "../../../static/svg/cartIcon.svg"
import { GatsbyImage } from "gatsby-plugin-image"
import ButtonAddCart from "../button/addInCartAndFav/buttonAddCart"

const useStyles = makeStyles(theme => ({
    orderTitle: {

  },
  divider:{

  },
}))

export default function OrderProductCard() {
    return(
        <div>
            <GatsbyImage />
            <div>
                <Typography>

                </Typography>
                <Typography>

                </Typography>
            </div>
            <div>
                <Typography>

                </Typography>
            </div>
        </div>
    )
}