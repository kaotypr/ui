import { create } from 'storybook/theming/create';

export default create({
  base: 'dark',

  // Typography - matches --font-sans and --font-mono from CSS
  fontBase: 'Nunito, ui-sans-serif, sans-serif, system-ui',
  fontCode: 'Inconsolata, ui-monospace, monospace',

  // Brand
  brandTitle: 'Kaotypr UI',
  brandTarget: '_self',

  // Primary/Secondary colors
  // colorPrimary: brand accent (yellow)
  // colorSecondary: used for selected states - using darker shade for text visibility
  colorPrimary: '#919191',
  colorSecondary: '#4F4F4F',

  // UI backgrounds - derived from --background and --card
  appBg: '#1b1c1d',
  appContentBg: '#262838',
  appPreviewBg: '#1b1c1d',
  appBorderColor: '#575757',
  appBorderRadius: 8,

  // Text colors - derived from --foreground and --muted-foreground
  textColor: '#e8e8e8',
  textInverseColor: '#000000',
  textMutedColor: '#ababab',

  // Toolbar - dark bar with light text/icons for visibility
  barTextColor: '#e8e8e8',
  barSelectedColor: '#FFF290',
  barHoverColor: '#FFF290',
  barBg: '#1b1c1d',

  // Form colors - using --card and --border values
  inputBg: '#262829',
  inputBorder: '#575757',
  inputTextColor: '#e8e8e8',
  inputBorderRadius: 4,

  // Additional UI elements
  appHoverBg: '#3d444f',
  booleanBg: '#3d444f',
  booleanSelectedBg: '#24252C',
  buttonBg: '#3d444f',
  buttonBorder: '#575757',
  gridCellSize: 10,
});