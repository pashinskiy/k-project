import { createMuiTheme } from "@material-ui/core/styles"

const theme = createMuiTheme({
  palette: {
    color: {
      main: "#131313",
      mainContrast: "#ffffff",
      accent: "linear-gradient(180deg, #291AD5 0%, #681DE1 100%)", // Акцентный цвет
      accentSecondary: "#5A1CDE", // Акцентный цвет для браузеров не поддерживающих -webkit-background-clip
      secondary: "#5A5A5A",
      secondaryLight: "#BDBDC6",
    },
    background: {
      main: "#ffffff",
      accent: "linear-gradient(180deg, #291AD5 0%, #681DE1 100%)", // Акцентный цвет
      accentSecondary: "#291AD5",
      secondary: "#EFEFF2",
      secondaryDark: "#E3E3EA",
      secondaryLight: "#BDBDC6",
      brandLight: "#D2D0E9",
    },
    width: {
      limit: "1280px",
    },
  },
  typography: {
    fontFamily: ["Inter"].join(","),
    body2: {
      // текст градиентом
      background: "linear-gradient(180deg, #291AD5 0%, #681DE1 100%)",
      "-webkit-background-clip": "text",
      backgroundClip: "text",
      "-webkit-text-fill-color": "transparent",
      color: "#681DE1",
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          margin: 0,
          background: "#ffffff",
          "-webkit-background-clip": "border-box",
          backgroundClip: "border-box",
          "-webkit-text-fill-color": "none",
          backgroundColor: "#ffffff",
          color: "#131313",
        },
      },
    },
    MuiButton: {
      root: {
        "&:hover": {
          backgroundColor: "none",
        },
      },
      text: {
        textTransform: "none",
      },
    },
  },
  props: {
    MuiButton: {
      disableRipple: true,
    },
  },
})

export default theme
