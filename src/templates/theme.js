import { createMuiTheme } from "@material-ui/core/styles"

const theme = createMuiTheme({
  palette: {
    color: {
      main: "#131313",
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
  },
})

export default theme
