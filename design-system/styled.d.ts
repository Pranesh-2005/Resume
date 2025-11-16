import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    mode: "light" | "dark";

    primary: {
      background: string;
      text: string;
      [key: string]: any;
    };

    gray: {
      dark: string;
      light: string;
      lightest: string;
      [key: string]: any;
    };

    colors: any;
    gradients: any;
    boxShadow: any;

    borderRadius: string;

    zIndex: {
      highestPriority: number;
      navigation: number;
      modal: number;
      lowPriority: number;
      [key: string]: number;
    };

    fontSize: {
      large: string;
      medium: string;
      small: string;
      [key: string]: string;
    };

    fontWeight: {
      light: number;
      normal: number;
      medium: number;
      semibold: number;
      bold: number;
      extrabold: number;
      black: number;
      [key: string]: number;
    };

    space: {
      none: string;
      xxxs: string;
      xxs: string;
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
      [key: string]: string;
    };

    media: {
      phone: string;
      tablet: string;
      desktop: string;
      [key: string]: string;
    };

    portfolio: {
      bgColor: string;
      secondaryBg: {
        purple: string;
      };
      primaryColor: {
        dark: string;
        light: string;
      };
      text: {
        light: string;
        dark: string;
      };
      resumeColors: {
        accentColor: string;
        darkText: string;
        bgColor: string;
        lightText: string;
      };
    };
  }
}
