import React, { useState } from "react"
import { makeStyles, Grid, Button, Typography, Card } from "@material-ui/core"
import SaleCard from "../saleCardPanel/saleCard"
import Arrow from "../../../static/svg/arrowWhite.svg"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100vw",
    height: "20vw",
    position: "absolute",
    left: 0,
  },
  dummy: {
    position: "none",
    width: "100%",
    height: "20vw",
  },
  wrapper: {
    // padding: "1rem",
    // position: "absolute",
    // left: 0,
    background: "lightblue",
    // width: "100%",
    width: "100vw",
    maxWidth: "1280px",
    display: "grid",
    // marginLeft: "-28px",
    
    // gridTemplateColumns: "repeat(10, 90.625%)",
    // gridColumnGap : "12px",
    
    // gridTemplateRows: "1fr",
    // gridRowGap: "1rem",
    // overflow: "scroll",
    // scrollbarWidth: "none",
    
    height: "20vw",
    // height: "auto",

  //   scrollSnapType: "both mandatory",
  //   // scrollPadding: "1rem",
  //   flexShrink: 0,
  //   "&::-webkit-scrollbar": {
  //     display: "none",
  //   },
  //   "-webkit-transition": ".5s all ease-out",
  // "-moz-transition": ".5s all ease-out",
  // "transition": ".5s all ease-out",
  },

  wrapperTrack: {
    gridTemplateColumns: "repeat(10, 90.625%)",
    gridColumnGap : "12px",
    gridRow: "1",
    overflow: "scroll",
    scrollbarWidth: "none",
    "-ms-overflow-style": "none",
    "&::-webkit-scrollbar": {
      display: "none",
    },

    "& *": {
      flexShrink: 0,
    },
  },

  unselect: {
    "& *": {
      "-webkit-touch-callout": "none" /* iOS Safari */,
      "-webkit-user-select": "none" /* Chrome/Safari/Opera */,
      "-khtml-user-select": "none" /* Konqueror */,
      "-moz-user-select": "none" /* Firefox */,
      "-ms-user-select": "none" /* Internet Explorer/Edge */,
      "user-select": "none",
    },
  },
item:{
  // scrollSnapAlign: "center",
	// display: "inline-block",
  // alignSelf: "center",
	// borderRadius: "3px",
  // height: "90%",
  // opacity: .5,
  // "-webkit-transition": ".5s all ease-out",
  // "-moz-transition": ".5s all ease-out",
  // "transition": ".5s all ease-out",
  width: "auto",
  touchAction: "none",
  transition: "1s transform",
  position: "relative",
  boxSizing: "border-box",
},
itemActive: {
  height: "100%",
  opacity: 1,
},
}))

export default function MainPageSlider({ sales }) {
  const classes = useStyles()
  const [salesArray, setSalesArray] = useState(sales)
  const [saleWidth, setSaleWidth] = useState()
  const [activeSale, setActiveSale] = useState()
  const [cardPanel, setCardPanel] = React.useState(null)
  // const [isDown, setIsDown] = useState(false)

  const testArray = [1,2,3,4,5,6,7,8,9,10]
  
  const setRef = React.useCallback(node => {
    if (node !== null) {
      setCardPanel(node)
      // setChildWidth(node.children)
      let childrenCount = node.children.length
      let activeChild = childrenCount / 2
      let childWidth = node.children[0].offsetWidth
      setActiveSale(activeChild)
      setSaleWidth(childWidth)
      // node.style.transform = `translate(-1000px)`
      console.log(node.style.transform)

      // console.log(node.children[activeChild].offsetLeft)


      //add Class
      // node.children[activeChild].className += " " + classes.itemActive
      // console.log(node.children[activeChild].className)

      //remove Class
      // node.children[activeChild].className = node.children[activeChild].className.replace(classes.itemActive, "")
      // console.log(node.children[activeChild].className)


    }
  }, [])

  const scrollBar = document.getElementById("scrollBar")
  // const totalCountChildren = scrollBar.childElementCount

  // console.log(scrollBar.scrollLeft)
  // scrollBar.scrollLeft += 1000
  // scrollBar.children[]  .className += classes.itemActive
  // scrollBar.childElementCount
  // scrollBar.children[0].className += " " + classes.itemActive
  // console.log(scrollBar.children[0].className)
  
  
  function handlePointerDown(e) {
    // console.log(cardPanel.scrollLeft)
    console.log(document.querySelector("#item2").getBoundingClientRect().left)
    console.log(cardPanel.children[2].getBoundingClientRect().left)
    console.log(cardPanel.scrollLeft)
    // console.log(cardPanel.children[8].offsetLeft)
    // console.log(cardPanel.scrollLeft)
    let isDown = true
    let pos = {
      left: cardPanel.scrollLeft,
      top: cardPanel.scrollTop,
      x: e.clientX,
      y: e.clientY,
    }

    // document.addEventListener("pointermove", handlePointerMove)
    // document.addEventListener("pointerup", cleanEvents)

    document.addEventListener("mousemove", handlePointerMove)
    document.addEventListener("mouseup", cleanEvents)

    function cleanEvents(e) {
      // console.log(Math.round(cardPanel.scrollLeft / saleWidth))
      // console.log("smth: " + cardPanel.scrollLeft)
      console.log('ends')
      isDown = false

      // cardPanel.children.map(child => {
      //   if(Math.abs(cardPanel.scrollLeft - child.getBoundingClientRect().left) > saleWidth){
      //     console.log(child)
      //   }
      // })

      // cardPanel.children[activeSale].style.opacity = "0.5"
      // cardPanel.children[activeSale].style.height = "90%"
      // let newActiveSale = cardPanel.scrollLeft / saleWidth
      // cardPanel.children[newActiveSale].style.opacity = "1"
      // cardPanel.children[newActiveSale].style.height = "100%"
      // setActiveSale(newActiveSale)
      // console.log(cardPanel)

      document.removeEventListener("pointermove", handlePointerMove)
      document.removeEventListener("pointerup", cleanEvents)

      // document.removeEventListener("mousemove", handlePointerMove)
      // document.removeEventListener("mouseup", cleanEvents)

      // setTimeout(() => document.removeEventListener("click", noGoLink), 0)
    }

    function handlePointerMove(e) {
      // console.log("dragin'")
      // document.addEventListener("click", noGoLink)
      if (!isDown) return
      e.preventDefault()
      
      //working
      const deltaX = e.clientX - pos.x
      const deltaY = e.clientY - pos.y

      cardPanel.scrollLeft = pos.left - deltaX
      cardPanel.scrollTop = pos.top - deltaY

      // const x = e.clientX - cardPanel.offsetLeft;
      // const walk = (x - pos.x) * 1; //scroll-fast
      // cardPanel.scrollLeft = pos.left - walk;
      // console.log(walk);



      // if(Math.abs(cardPanel.scrollLeft - cardPanel.children[activeSale].getBoundingClientRect().left) > saleWidth){
      //   cardPanel.children[activeSale].className = cardPanel.children[activeSale].className.replace(classes.itemActive, "")
      // } 
      // if(Math.abs(cardPanel.scrollLeft - cardPanel.children[activeSale].getBoundingClientRect().left) < saleWidth)


      
    }

    function noGoLink(e) {
      e.preventDefault()
    }
  }
  function handleButtonClickLeft(e) {
    if(activeSale > 0){
      cardPanel.scrollLeft -= saleWidth
      cardPanel.children[activeSale - 1].className += " " + classes.itemActive
      cardPanel.children[activeSale].className = cardPanel.children[activeSale].className.replace(classes.itemActive, "")
      setActiveSale(activeSale - 1)
    } else if (activeSale === 0){
      cardPanel.scrollLeft = saleWidth*(cardPanel.children.length-1)
      cardPanel.children[cardPanel.children.length-1].className += " " + classes.itemActive
      cardPanel.children[activeSale].className = cardPanel.children[activeSale].className.replace(classes.itemActive, "")
      setActiveSale(cardPanel.children.length-1)
    }
  }
  function handleButtonClickRigth(e) {
    if(cardPanel.children.length - 1 > activeSale){
      cardPanel.scrollLeft += saleWidth
      cardPanel.children[activeSale + 1].className += " " + classes.itemActive
      cardPanel.children[activeSale].className = cardPanel.children[activeSale].className.replace(classes.itemActive, "")
      setActiveSale(activeSale + 1)
    } else if (cardPanel.children.length - 1 === activeSale){
      cardPanel.scrollLeft = 0
      cardPanel.children[0].className += " " + classes.itemActive
      cardPanel.children[activeSale].className = cardPanel.children[activeSale].className.replace(classes.itemActive, "")
      setActiveSale(0)
    }
  }
  // function handleScrollEnd(e){
  //   console.log("ends")
  // }

  return (
/* <Grid container className={classes.root}>
  <div className={classes.dummy} /> */
<div>
    <Grid container className={classes.wrapper}>

    <Grid id="scrollBar" container className={classes.wrapperTrack + " " + classes.unselect} ref={setRef}
    // onPointerDown={handlePointerDown}
    // onMouseDown={handlePointerDown}
    >
{/* {salesArray.map((sale, i) => (
  <Grid item className={classes.item} key={sale.uid + "_" + i}>
  <SaleCard sale={sale} key={sale.uid} mainPage />
  </Grid>
))} */}
    {/* </Grid> */}
{testArray.map((test, i) => (    <Card id={"item" + i} style={{background: "gray"}} className={classes.item} ><Typography>BlahBlah</Typography></Card>))}

  </Grid>
</Grid>
  <button onClick={handleButtonClickLeft}>
    left
  </button>
  <button onClick={handleButtonClickRigth}>
    right
  </button>
</div>
  )
}
