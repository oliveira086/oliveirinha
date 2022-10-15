import { css, createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  :root {
    /* ========== COLORS ========== */

    /* BRAND */
    --color-primary-darkest: #17244C;
    --color-primary-dark: #263C7F;
    --color-primary: #7C3DCC;
    --color-primary-light: #F2F8FA;
    --color-primary-lightest: #8D9699;
    --color-secondary-darkest: #7F6426;
    --color-secondary-dark: #CC9B29;
    --color-secondary: #FBAF00;
    --color-secondary-light: #FFE099;
    --color-secondary-lightest: #FFF0CC;

    /* NEUTRAL */
    --color-neutral-lighest: #FFF;
    --color-neutral-light: #F5F5F5;
    --color-neutral: #DDD;
    --color-neutral-dark: #0C0C0D;
    --color-neutral-darkest: #232526;
    --color-neutral-darkest2: #1a1c1e;

    /* FEEDBACK */
    --color-feedback-success-dark: #00850F;
    --color-feedback-success-light: #D7F6CA;
    --color-feedback-warning-dark: #FF9505;
    --color-feedback-warning-light: #FFEED6;
    --color-feedback-critical-dark: #BF000C;
    --color-feedback-critical-light: #FFD6D9;

    /* FOCUSED */
    --color-focused: #F09905;

    /* SOCIAL */
    --blue-900: #1B1E28;
    --blue-800: #1F212E;
    --blue-700: #232633;
    --blue-200: #3E476F;

    --gray-900: #292B38;
    --gray-700: #313544;
    --gray-500: #4B505E;
    --gray-100: #78798C;

    --white: #D1D1D1;

    --yellow: #ADAE62;

    --pink: #CC2F5E;
    --pink-hovered: #B5224E;

    /* COLOR TOKENS */
    --neutral-01: #FFFFFF;
    --neutral-02: #F2F2F2;
    --neutral-03: #E1E1E8;
    --neutral-04: #CDCDC4;
    --neutral-05: #B9B9BF;
    --neutral-06: #A4A4B2;
    --neutral-07: #8D8D99;
    --neutral-08: #75757F;
    --neutral-09: #5E5E66;
    --neutral-10: #41414C;
    --neutral-11: #292B37;
    --neutral-12: #232733;
    --neutral-13: #1B1D29;
    --neutral-14: #232326;
    --neutral-15: #0C0C0D;

    --blue-01: #F2F5FF;
    --blue-02: #D9E0FF;
    --blue-03: #A3ABCC;
    --blue-04: #B3C2FF;
    --blue-05: #8099FF;
    --blue-06: #5064B3;
    --blue-07: #142566;
    --blue-08: #050E33;
    --blue-09: #2F4ECC;

    --pink-01: #FFF2F6;
    --pink-02: #FFD9E4;
    --pink-03: #CCA3AF;
    --pink-04: #FFB3C9;
    --pink-05: #FF80A6;
    --pink-05: #B3506E;
    --pink-06: #66142D;
    --pink-07: #330513;
    --pink-08: #CC2F5E;

    /* ========== BORDER ========== */

    /* RADIUS */
    --border-radius-xxs: 4px;
    --border-radius-sm: 8px;
    --border-radius-md: 16px;
    --border-radius-lg: 24px;
    --border-radius-pill: 500px;
    --border-radius-circular: 50%;

    /* WIDTH */
    --border-width-none: 0;
    --border-width-hairline: 1px;
    --border-width-thin: 2px;
    --border-width-thick: 4px;
    --border-width-heavy: 8px;

    /* ========== GRID ========== */

    --container: 1366px;
    --container-gutter: 24px;

    /* ========== OPACITY ========== */

    --opacity-level-semiopaque: .8;
    --opacity-level-intense: .64;
    --opacity-level-medium: .32;
    --opacity-level-light: .16;
    --opacity-level-semitransparent: .08;

    /* ========== SHADOWS ========== */

    --shadow-flat: 0 4px 8px rgba(0, 0, 0, .08);
    --shadow-soft: 0 8px 16px rgba(0, 0, 0, .08);
    --shadow-raised: 0 8px 32px rgba(0, 0, 0, .08);
    --shadow-spotlight: 0 16px 48px rgba(0, 0, 0, .08);

    /* ========== SPACINGS ========== */

    --spacing-quarck: .4rem;
    --spacing-nano: .8rem;
    --spacing-xxxs: 1.6rem;
    --spacing-xxs: 2.4rem;
    --spacing-xs: 3.2rem;
    --spacing-sm: 4rem;
    --spacing-md: 4.8rem;
    --spacing-lg: 6.4rem;
    --spacing-xl: 8rem;
    --spacing-xxl: 8.8rem;
    --spacing-xxxl: 9.6rem;
    --spacing-xxxxl: 10.4rem;
    --spacing-huge: 11.2rem;
    --spacing-xhuge: 12rem;

    /* ========== TYPOGRAPHY ========== */

    /* FONT FAMILY */
    --font-family-primary: 'Poppins', sans-serif;

    /* FONT SIZE */
    --font-size-xxxxs: 1.2rem;
    --font-size-xxxs: 1.4rem;
    --font-size-xxs: 1.6rem;
    --font-size-xs: 1.8rem;
    --font-size-sm: 2rem;
    --font-size-md: 2.4rem;
    --font-size-lg: 2.8rem;
    --font-size-xlg: 3.2rem;
    --font-size-xxl: 4rem;
    --font-size-xxxl: 4.8rem;
    --font-size-xxxxl: 6.4rem;
    --font-size-display: 8rem;
    --font-size-giant: 9.6rem;

    /* FONT WEIGHT */
    --font-weight-bold: 700;
    --font-weight-medium: 600;
    --font-weight-regular: 500;
    --font-weight-light: 400;

    /* LINE HEIGHT */
    --line-height-tight: 100%;
    --line-height-md: 120%;
    --line-height-distant: 150%;
    --line-height-super-distant: 200%;
  }

  @media(max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media(max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }
`;

export default GlobalStyle;
