const DEFAULT = '#718093';
const DEFAULT_DARK = '#556170';
const PRIMARY = '#e1d9b3';
const PRIMARY_DARK = '#101932';
const SECONDARY = '#f5f6e4';
// const SECONDARY_DARK = '#990075';
const INFO = '#00a8ff';
const INFO_DARK = '#007dbf';
const SUCCESS = '#4cd137';
const SUCCESS_DARK = '#37a425';
const WARNING = '#fbc531';
const WARNING_DARK = '#f2b304';
const DANGER = '#e84118';
const DANGER_DARK = '#af3011';
const LIGHT = '#f5f6fa';
const LIGHTISH = '#dcdde1';
const DARK = '#2f3640';
const DARKISH = '#353b48';

// Template colors
const NAVBAR = '#898d55';
const NAVBAR_DARK = '#00113D';
const SIDEBAR = '#273c75';
// const FOOTER = 'black'

export const theme = {
  colors: {
    navbar: NAVBAR,
    sidebar: SIDEBAR,
    default: DEFAULT,
    primary: PRIMARY,
    primaryDark: PRIMARY_DARK,
    secondary: SECONDARY,
    // secondaryDark: SECONDARY_DARK,
    info: INFO,
    success: SUCCESS,
    warning: WARNING,
    danger: DANGER,
    light: LIGHT,
    lightish: LIGHTISH,
    dark: DARK,
    darkish: DARKISH,
  },
  font: {
    primary: 'sans-serif',
  },
  buttons: {
    borderRadius: '0px',
    default: `
      background-color: ${DEFAULT};
      color: ${LIGHT};
      :hover:enabled {
        background-color: ${DEFAULT_DARK};
      }
    `,
    primary: `
      background-color: ${PRIMARY};
      color: ${LIGHT};
      :hover:enabled {
        background-color: ${PRIMARY_DARK};
      }
    `,
    info: `
      background-color: ${INFO};
      color: ${LIGHT};
      :hover:enabled {
        background-color: ${INFO_DARK};
      }
    `,
    success: `
      background-color: ${SUCCESS};
      color: ${LIGHT};
      :hover:enabled {
        background-color: ${SUCCESS_DARK};
      }
    `,
    warning: `
      background-color: ${WARNING};
      color: ${LIGHT};
      :hover:enabled {
        background-color: ${WARNING_DARK};
      }
    `,
    danger: `
      background-color: ${DANGER};
      color: ${LIGHT};
      :hover:enabled {
        background-color: ${DANGER_DARK};
      }
    `,
    lightish: `
      background-color: ${LIGHTISH};
      color: ${LIGHT};
      :hover:enabled {
        background-color: ${DARKISH};
      }
    `,
  },
  menu: {
    textColor: 'dodgerblue',
    hoverTextColor: 'yellow',
    background: 'linear-gradient(to left, #243B55, #141E30);',
  },
  navbar: {
    textColor: '#e7e7e7',
    hoverTextColor: 'white',
    background: NAVBAR,
    backgroundSelected: NAVBAR_DARK,
    height: '55px',
  },
  sidebar: {
    background: '#273c75',
    textColor: 'grey',
    collapsedWidth: '55px',
    width: '300px',
  },
};
