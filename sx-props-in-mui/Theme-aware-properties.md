## What does Theme-aware properties mean ?

**Theme-aware properties** refer to properties in a design or styling system that automatically adapt to the defined theme of an application. This concept is commonly used in frameworks like Material-UI, Tailwind CSS, and other design systems that support theming. These properties allow you to define styles that adjust based on the current theme, making it easier to create consistent and maintainable designs.

## Example with Material-UI (MUI)

Material-UI (MUI) provides a powerful theming system that you can leverage using the `sx` prop. Theme-aware properties in MUI allow you to use values defined in your theme, such as colors, spacing, typography, etc., directly in your components.
**1. Defining a Theme:**
First, you need to define a theme using the `createTheme` function from MUI:

```jsx
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
  spacing: 8, // default spacing unit
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <YourComponent />
    </ThemeProvider>
  );
}
```

**2. Using Theme-Aware Properties:**
In your components, you can use the `sx` prop to apply styles that reference the theme:

```jsx
import { Button } from "@mui/material";

const YourComponent = () => {
  return (
    <Button
      variant="contained"
      sx={{
        bgcolor: "primary.main", // refers to theme.palette.primary.main
        color: "secondary.main", // refers to theme.palette.secondary.main
        m: 2, // refers to theme.spacing(2)
      }}
    >
      Themed Button
    </Button>
  );
};
```

## Example with Tailwind CSS

Tailwind CSS is a utility-first CSS framework that allows you to configure your design system via a configuration file. You can define a theme with custom colors, spacing, and other utilities.
**1. Defining a Theme:**
In `tailwind.config.js`, define your theme:

```jsx
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "#1976d2",
        secondary: "#dc004e",
      },
      spacing: {
        2: "0.5rem",
        4: "1rem",
      },
    },
  },
};
```
