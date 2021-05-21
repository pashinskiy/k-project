import React from "react"
import { Grid, makeStyles, Input, Slider } from "@material-ui/core"
import Wrapper from "./wrapper"

const useStyles = makeStyles(theme => ({
  input: {
    width: "48%",
    boxSizing: "box-sizing",
    background: theme.palette.background.main,
    border: "solid",
    borderColor: theme.palette.color.accentSecondary,
    fontWeight: 400,
    lineHeight: 1.21,
    position: "relative",

    height: "3.75vw",
    padding: "0.93vw",
    paddingLeft: "2.5vw",
    borderWidth: "0.07vw",
    borderRadius: "0.46vw",
    fontSize: "1.09vw",
    "@media(min-width: 1280px)": {
      height: "48px",
      padding: "12px",
      paddingLeft: "32px",
      borderWidth: "1px",
      borderRadius: "6px",
      fontSize: "14px",
    },
    "@media(max-width: 834px)": {
      height: "5.75vw",
      padding: "1.43vw",
      paddingLeft: "3.83vw",
      borderWidth: "0.11vw",
      borderRadius: "0.71vw",
      fontSize: "1.67vw",
    },
    "@media(max-width: 414px)": {
      height: "11.59vw",
      padding: "2.89vw",
      paddingLeft: "7.72vw",
      borderWidth: "0.24vw",
      borderRadius: "1.44vw",
      fontSize: "3.38vw",
    },
    "&:before": {
      display: "block",
      content: "'от'",
      color: "#838383",
      position: "absolute",
      top: "50%",
      left: 0,
      transform: "translate(0, -53%)",
      marginLeft: "0.93vw",
      "@media(min-width: 1280px)": {
        marginLeft: "12px",
      },
      "@media(max-width: 834px)": {
        marginLeft: "1.43vw",
      },
      "@media(max-width: 414px)": {
        marginLeft: "2.89vw",
      },
    },
  },
  root: {
    padding: "0 !important",
    color: theme.palette.color.accentSecondary,
    alignSelf: "center",

    height: "0.31vw",
    marginTop: "2.18vw",
    width: "calc(100% - 1.56vw)",
    "@media(min-width: 1280px)": {
      height: "4px",
      marginTop: "28px",
      width: "calc(100% - 20px)",
    },
    "@media(max-width: 834px)": {
      height: "0.47vw",
      marginTop: "3.35vw",
      width: "calc(100% - 2.39vw)",
    },
    "@media(max-width: 414px)": {
      height: "0.96vw",
      marginTop: "6.76vw",
      width: "calc(100% - 4.83vw)",
    },
  },
  track: {
    height: "100%",
    background: theme.palette.background.accent,
  },
  rail: {
    height: "100%",
    background: theme.palette.background.accent,
  },
  thumb: {
    background: theme.palette.background.main,
    borderColor: theme.palette.primary.accent,
    borderStyle: "solid",
    boxShadow: "0px 4px 12px 0px #00000040",

    width: "1.56vw",
    height: "1.56vw",
    marginTop: "-0.745vw",
    marginLeft: "-0.78vw",
    borderWidth: "0.07vw",
    borderRadius: "0.46vw",
    "@media(min-width: 1280px)": {
      width: "20px",
      height: "20px",
      marginTop: "-8px",
      marginLeft: "-10px",
      borderRadius: "6px",
      borderWidth: "1px",
    },
    "@media(max-width: 834px)": {
      width: "2.39vw",
      height: "2.39vw",
      marginTop: "-1.14vw",
      marginLeft: "-1.195vw",
      borderWidth: "0.11vw",
      borderRadius: "0.71vw",
    },
    "@media(max-width: 414px)": {
      width: "4.83vw",
      height: "4.83vw",
      marginTop: "-2.295vw",
      marginLeft: "-2.415vw",
      borderWidth: "0.24vw",
      borderRadius: "1.44vw",
    },
  },
}))

export default function BlockFromTo({
  title,
  set,
  span,
  setSpan,
  slider,
  ...other
}) {
  const classes = useStyles()

  const sortSet = set.map(el => +el).sort((a, b) => a - b)
  const valueMax = sortSet[sortSet.length - 1]
  const valueMin = sortSet[0]

  const [value, setValue] = React.useState([valueMin, valueMax])

  React.useEffect(() => {
    if (!span) setValueFilter()

    const wrapper = document.querySelector(`#${title}`)
    if (wrapper) {
      wrapper.children[0].children[0].addEventListener("blur", setValueFilter)
      wrapper.children[1].children[0].addEventListener("blur", setValueFilter)
      return () => {
        wrapper.children[0].children[0].removeEventListener(
          "blur",
          setValueFilter
        )
        wrapper.children[1].children[0].removeEventListener(
          "blur",
          setValueFilter
        )
      }
    }
  })

  function setValueFilter() {
    const result = value
      .sort((a, b) => a - b)
      .map(el => {
        if (el < valueMin) return valueMin
        if (el > valueMax) return valueMax
        return el
      })
    setSpan(title, result)
    setValue([...result])
  }

  function changeValue(e) {
    const result = value
    if (e.target.id === `${title} from` && !isNaN(+e.target.value))
      result[0] = +e.target.value
    if (e.target.id === `${title} to` && !isNaN(+e.target.value))
      result[1] = +e.target.value
    setValue([...result])
  }
  return valueMax !== valueMin ? (
    <Wrapper title={title} {...other}>
      <Grid container justify="space-between" id={title}>
        <Input
          value={value[0]}
          id={`${title} from`}
          onChange={changeValue}
          disableUnderline
          className={classes.input}
          aria-label="цена от"
        />
        <Input
          value={value[1]}
          id={`${title} to`}
          onChange={changeValue}
          disableUnderline
          className={classes.input}
          aria-label="цена до"
        />
      </Grid>

      {slider ? (
        <Slider
          value={value}
          onChange={(e, newValue) => {
            setSpan(title, newValue)
            setValue(newValue)
          }}
          max={valueMax}
          min={valueMin}
          scale={x => `${x}руб.`}
          valueLabelDisplay="off"
          orientation="horizontal"
          getAriaLabel={index => (index ? `max` : `min`)}
          classes={{
            root: classes.root,
            track: classes.track,
            rail: classes.rail,
            thumb: classes.thumb,
            active: classes.thumb,
          }}
        />
      ) : null}
    </Wrapper>
  ) : null
}
