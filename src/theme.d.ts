import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    cores: {
      branco: string;
      preto: string;
      primaria: string;
      secundaria: string;
      terciario: string;
    };
    espacamentos: {
      xxs: string;
      xs: string;
      s: string;
      m: string;
      l: string;
      xl: string;
      xxl: string;
    };
    fontFamily: string;
  }
}
