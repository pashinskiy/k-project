import { createMuiTheme } from "@material-ui/core/styles"

const theme = createMuiTheme({
  palette: {
    color: {
      main: "#000000",
      mainContrast: "#ffffff",
      accent: "linear-gradient(180deg, #291AD5 0%, #681DE1 100%)", // Акцентный цвет
      accentSecondary: "#681DE1", // Акцентный цвет для браузеров не поддерживающих -webkit-background-clip
      secondary: "#5A5A5A",
      secondaryLight: "#BDBDC6",
    },
    background: {
      main: "#ffffff",
      accent: "linear-gradient(180deg, #291AD5 0%, #681DE1 100%)", // Акцентный цвет
      secondary: "#EFEFF2",
    },
    width: {
      limit: "1280px",
    },
  },
  typography: {
    fontFamily: ["Inter"].join(","),
  },
})

export default theme
