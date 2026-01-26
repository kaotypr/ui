import { create } from 'storybook/theming/create';

/**
 * Kaotypr Dark Theme for Storybook
 * Colors derived from packages/ui/src/assets/css/index.css (.dark theme)
 *
 * OKLCH to Hex conversions:
 * --background: oklch(0.2265 0.0186 266.1546) → #1c1d2e
 * --foreground: oklch(0.9219 0 0) → #e8e8e8
 * --card: oklch(0.3231 0.0102 216.7877) → #3d444f
 * --primary: oklch(0.9613 0.1877 113.3104) → #f3ff52
 * --muted: oklch(0.3867 0 0) → #575757
 * --muted-foreground: oklch(0.7155 0 0) → #ababab
 * --border: oklch(0.3867 0 0) → #575757
 */

export default create({
  base: 'dark',

  // Typography - matches --font-sans and --font-mono from CSS
  fontBase: 'Nunito, ui-sans-serif, sans-serif, system-ui',
  fontCode: 'Inconsolata, ui-monospace, monospace',

  // Brand
  brandTitle: 'Kaotypr UI',
  brandUrl: 'https://github.com/kaotypr/ui',
  brandTarget: '_self',

  // Primary/Secondary colors
  // colorPrimary: brand accent (yellow)
  // colorSecondary: used for selected states - using darker shade for text visibility
  colorPrimary: '#f3ff52',
  colorSecondary: '#c9d400',

  // UI backgrounds - derived from --background and --card
  appBg: '#1c1d2e',
  appContentBg: '#262838',
  appPreviewBg: '#1c1d2e',
  appBorderColor: '#575757',
  appBorderRadius: 8,

  // Text colors - derived from --foreground and --muted-foreground
  textColor: '#e8e8e8',
  textInverseColor: '#000000',
  textMutedColor: '#ababab',

  // Toolbar - dark bar with light text/icons for visibility
  barTextColor: '#e8e8e8',
  barSelectedColor: '#f3ff52',
  barHoverColor: '#f3ff52',
  barBg: '#1c1d2e',

  // Form colors - using --card and --border values
  inputBg: '#3d444f',
  inputBorder: '#575757',
  inputTextColor: '#e8e8e8',
  inputBorderRadius: 4,

  // Additional UI elements
  appHoverBg: '#3d444f',
  booleanBg: '#3d444f',
  booleanSelectedBg: '#f3ff52',
  buttonBg: '#3d444f',
  buttonBorder: '#575757',
  gridCellSize: 10,
});