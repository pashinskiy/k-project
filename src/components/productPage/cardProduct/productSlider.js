import React from "react"
import { Grid, makeStyles, Typography } from "@material-ui/core"
import Arrow from "../../../../static/svg/arrow.svg"

const useStyles = makeStyles(theme => ({
  wrapper: {
    width: "58.59vw",
    height: "49.37vw",
    position: "relative",
    "@media(min-width: 1280px)": {
      width: "750px",
      height: "632px",
    },
    "@media(max-width: 1025px)": {
      width: "93.28vw",
      height: "51.19vw",
      margin: "0 auto",
    },
    "@media(max-width: 414px)": {
      width: "88.4vw",
      height: "103.14vw",
      margin: "0 auto",
    },
  },
  mainPhotoWrapper: {
    height: "79%",
    overflow: "hidden",
    position: "relative",
    cursor: "grab",
  },
  mainPhotoBar: {
    height: "100%",
    position: "absolute",
    transition: "left .3s",

    touchAction: "none",
  },
  count: {
    height: "5%",
    width: "100%",
    fontWeight: 400,
    fontSize: "1.67vw",
    color: "#BCBCBC",
    "@media(min-width: 1025px)": {
      display: "none",
    },
    "@media(max-width: 414px)": {
      fontSize: "3.38vw",
    },
  },
  barWrapper: {
    height: "16%",
    width: "82.93%",
    margin: "0 auto",
    overflow: "hidden",
    position: "relative",
    zIndex: 2,
    "@media(max-width: 1025px)": {
      width: "100vw",
      marginLeft: "-3.35vw",
      paddingLeft: "3.35vw",
    },
    "@media(max-width: 414px)": {
      marginLeft: "-6.76vw",
      paddingLeft: "6.76vw",
    },
  },
  bar: {
    height: "100%",
    width: "auto",
    position: "absolute",
    overflow: "visible",
    transition: "left .3s",

    left: 0,
    "@media(max-width: 1025px)": {
      left: "3.35vw",
    },
    "@media(max-width: 414px)": {
      left: "6.76vw",
    },

    touchAction: "none",
  },
  item: {
    height: "100%",
    background: "transparent",
    cursor: "pointer",
    border: "none",
    outline: "none",
    padding: "0 0.62vw",
    "@media(min-width: 1280px)": {
      padding: "0 8px",
    },
    "@media(max-width: 1025px)": {
      padding: "0 0.6vw",
    },
  },
  nav: {
    position: "absolute",
    bottom: "11.5%",
    right: 0,
    transform: "translate(0, 100%)",
    height: "7%",
    "@media(max-width: 1025px)": {
      display: "none",
    },
    "& button": {
      background: "transparent",
      cursor: "pointer",
      border: "none",
      outline: "none",
      padding: 0,
      height: "100%",
      width: "4.26%",
      "@media(max-width: 1025px)": {
        width: "30%",
      },
    },
  },
  mirror: {
    transform: "scale(-1, 1)",
  },
}))

export default function SliderProduct({ photos }) {
  const classes = useStyles()

  //индекс главного слайдера
  const [indexSlide, setIndexSlide] = React.useState(0)

  const slideBar = React.useRef()

  // готовим данные для слайдера
  const widthMainPhotoBar = photos.length * 100 + "%"
  const leftMainPhotoBar = (0 - indexSlide) * 100 + "%"

  const mainSlides = photos.map((photo, i) => (
    <picture
      style={{
        display: "flex",
        width: 100 / photos.length + "%",
        height: "100%",
      }}
      key={"фото" + i}
    >
      <source
        srcSet={photo?.srcSetWebp}
        type="image/webp"
        sizes={`${49.37 * photo?.aspectRatio * 0.79}vw`}
      />
      <img
        src={photo?.src}
        srcSet={photo?.srcSet}
        sizes={`${49.37 * photo?.aspectRatio * 0.79}vw`}
        alt={"фото" + i}
        width={photo?.aspectRatio}
        height="1"
        style={{
          objectFit: "contain",
          margin: "auto",
          maxWidth: "100%",
          width: "auto",
          height: "100%",
        }}
      />
    </picture>
  ))

  // готовим данные для бара слайдера
  const slides = photos.map((photo, i) => {
    const activeClass = i === indexSlide ? classes.active : ""
    return (
      <button
        className={classes.item}
        onClick={() => goToSlide(i)}
        key={"фото" + i}
      >
        <picture
          style={{
            display: "flex",
            height: "100%",
            borderRadius: "10px",
            overflow: "hidden",
          }}
          className={activeClass}
        >
          <source srcSet={photo?.srcSetWebp} type="image/webp" sizes="15vw" />
          <img
            src={photo?.src}
            srcSet={photo?.srcSet}
            alt={"фото" + i}
            width={photo?.aspectRatio}
            height="1"
            style={{
              maxWidth: "none",
              width: "auto",
              height: "100%",
              touchAction: "none",
            }}
          />
        </picture>
      </button>
    )
  })

  function swipe(e) {
    const bar = e.currentTarget
    bar.style.cursor = "grabbing"
    const transition = bar.style.transition
    bar.style.transition = "none"
    const clientX = e.clientX
    const left =
      bar.style.left.slice(-1) === "%"
        ? (+bar.style.left.slice(0, -1) / 100) * bar.parentElement.offsetWidth
        : +bar.style.left.slice(0, -2)
    const minLeft = bar.parentElement.offsetWidth - bar.offsetWidth
    let nextIndex = null
    //отмена перехвата браузера
    e.currentTarget.ondragstart = () => false

    let eventScroll = null
    const clientY = e.clientY
    const scroll = window.pageYOffset

    document.addEventListener("pointermove", scrollBar)
    document.addEventListener("pointerup", deleteScrollBar)

    function deleteScrollBar() {
      bar.style.cursor = "grab"
      bar.style.transition = transition
      if (nextIndex !== null) goToSlide(nextIndex)
      document.removeEventListener("pointermove", scrollBar)
      document.removeEventListener("pointerup", deleteScrollBar)
    }

    function scrollBar(e) {
      // if (eventScroll === null) {
      //   eventScroll =
      //     Math.abs(e.clientY - clientY) >= Math.abs(e.clientX - clientX)
      // }
      // if (eventScroll) {
      //   window.scrollTo(0, scroll + clientY - e.clientY)
      //   return
      // }

      if (Math.abs(e.clientY - clientY) > 15 && eventScroll === null) {
        eventScroll = true
      }
      if (Math.abs(e.clientX - clientX) > 15 && eventScroll === null) {
        eventScroll = false
        e.preventDefault()
      }
      if (eventScroll === null) return
      if (eventScroll === true) {
        window.scrollTo(0, scroll + clientY - e.clientY)
        return
      }

      let newLeft = left + e.clientX - clientX
      newLeft = newLeft > 0 ? 0 : newLeft
      newLeft = newLeft < minLeft ? minLeft : newLeft
      bar.style.left = newLeft + "px"
      if (newLeft - left > 10) {
        nextIndex = indexSlide === 0 ? null : indexSlide - 1
      } else if (left - newLeft > 10) {
        nextIndex =
          indexSlide === bar.children.length - 1 ? null : indexSlide + 1
      } else nextIndex = null
    }
  }

  function setScrollBar(e) {
    let eventScroll = null
    const clientY = e.clientY
    const scroll = window.pageYOffset

    const bar = slideBar.current
    const transition = bar.style.transition
    bar.style.transition = "none"
    //отмена перехвата браузера
    bar.ondragstart = () => false

    const clientX = e.clientX
    const left = +bar.style.left.slice(0, -2)
    const minLeft =
      bar.parentElement.offsetWidth >= bar.offsetWidth
        ? 0
        : bar.parentElement.offsetWidth - bar.offsetWidth - 1

    if (minLeft === 0) return

    const maxLeft = getComputedStyle(bar.parentElement).paddingLeft.slice(0, -2)
    document.addEventListener("pointermove", scrollBar, true)
    document.addEventListener("pointerup", deleteScrollBar)

    function deleteScrollBar() {
      bar.style.transition = transition
      document.removeEventListener("pointermove", scrollBar, true)
      document.removeEventListener("pointerup", deleteScrollBar)
    }

    function scrollBar(e) {
      if (eventScroll === null) {
        eventScroll = Math.abs(e.clientY - clientY) >= Math.abs(e.clientX - clientX)
      }
      if (eventScroll) {
        window.scrollTo(0, scroll + clientY - e.clientY)
        return
      }

      let newLeft = left + e.clientX - clientX
      newLeft = newLeft > maxLeft ? maxLeft : newLeft
      newLeft = newLeft < minLeft ? minLeft : newLeft
      bar.style.left = newLeft + "px"
    }
  }
  function prevSlide() {
    const nextIndex = indexSlide === 0 ? 0 : indexSlide - 1
    const bar = slideBar.current
    const nextSlide = slideBar.current.children[nextIndex]

    const left = +bar.style.left.slice(0, -2)
    const leftNextSlide = left + nextSlide.offsetLeft
    const widthParent = bar.parentElement.offsetWidth

    if (leftNextSlide <= 0) {
      bar.style.left = left - leftNextSlide + "px"
    } else if (
      nextIndex === slides.length - 1 &&
      widthParent < bar.offsetWidth
    ) {
      bar.style.left = widthParent - bar.offsetWidth + "px"
    }

    setIndexSlide(nextIndex)
  }
  function nextSlide() {
    const nextIndex =
      indexSlide === slides.length - 1 ? slides.length - 1 : indexSlide + 1
    const bar = slideBar.current
    const nextSlide = slideBar.current.children[nextIndex]

    const left = +bar.style.left.slice(0, -2)
    const widthParent = bar.parentElement.offsetWidth
    const widthNextSlide = nextSlide.offsetWidth
    const rightNextSlide = left + (nextSlide.offsetLeft + widthNextSlide)

    if (rightNextSlide >= widthParent) {
      bar.style.left = left - (rightNextSlide - widthParent) - 1 + "px"
    } else if (nextIndex === 0) {
      bar.style.left = "0px"
    }
    setIndexSlide(nextIndex)
  }
  function goToSlide(index) {
    const bar = slideBar.current
    const nextSlide = slideBar.current.children[index]

    const left = +bar.style.left.slice(0, -2)
    const widthParent = bar.parentElement.offsetWidth
    const widthNextSlide = nextSlide.offsetWidth
    const leftNextSlide = left + nextSlide.offsetLeft
    const rightNextSlide = left + (nextSlide.offsetLeft + widthNextSlide)

    if (rightNextSlide >= widthParent) {
      bar.style.left = left - (rightNextSlide - widthParent) - 1 + "px"
    } else if (leftNextSlide <= 0) {
      bar.style.left = left - leftNextSlide + "px"
    }
    setIndexSlide(index)
  }

  return (
    <Grid
      container
      direction="column"
      justify="space-between"
      alignItems="flex-start"
      className={classes.wrapper}
    >
      <Grid container className={classes.mainPhotoWrapper}>
        <Grid
          container
          wrap="nowrap"
          onPointerDown={swipe}
          className={classes.mainPhotoBar}
          style={{ width: widthMainPhotoBar, left: leftMainPhotoBar }}
        >
          {mainSlides}
        </Grid>
      </Grid>
      <Typography align="center" className={classes.count}>
        {indexSlide + 1} из {mainSlides.length}
      </Typography>
      <Grid className={classes.barWrapper}>
        <Grid
          container
          wrap="nowrap"
          ref={slideBar}
          onPointerDown={setScrollBar}
          className={classes.bar}
        >
          {slides}
        </Grid>
      </Grid>
      <Grid container justify="space-between" className={classes.nav}>
        <button onClick={prevSlide}>
          <Arrow className={classes.mirror} />
        </button>
        <button onClick={nextSlide}>
          <Arrow />
        </button>
      </Grid>
    </Grid>
  )
}
