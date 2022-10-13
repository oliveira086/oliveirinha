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

    --pink: #CC2E5E;
    --pink-hovered: #B5224E;

    /* FIGMA */
    --neutral-13: '#1B1D29';

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
