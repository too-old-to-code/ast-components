const DEFAULT = '#718093';
const PRIMARY = '#7f8fa6';
const INFO = '#00a8ff';
const SUCCESS = '#4cd137';
const WARNING = '#fbc531';
const DANGER = '#e84118';
const LIGHT = '#f5f6fa';
const LIGHTISH = '#dcdde1';
const DARK = '#2f3640';
const DARKISH = '#353b48';

export const theme = {
  colors: {
    default: DEFAULT,
    primary: PRIMARY,
    info: INFO,
    success: SUCCESS,
    warning: WARNING,
    danger: DANGER,
    light: LIGHT,
    lightish: LIGHTISH,
    dark: DARK,
    darkish: DARKISH,
  },
  buttons: {
    borderRadius: '0px',
    default: `
      background-color: ${DEFAULT};
      color: ${LIGHT};
      :hover {
        background-color: ${DARK};
      }
    `,
    primary: `
      background-color: ${PRIMARY};
      color: ${LIGHT};
      :hover {
        background-color: ${DARK};
      }
    `,
    info: `
      background-color: ${INFO};
      color: ${LIGHT};
      :hover {
        background-color: ${DARK};
      }
    `,
    success: `
      background-color: ${SUCCESS};
      color: ${LIGHT};
      :hover {
        background-color: ${DARK};
      }
    `,
    warning: `
      background-color: ${WARNING};
      color: ${LIGHT};
      :hover {
        background-color: ${DARK};
      }
    `,
    danger: `
      background-color: ${DANGER};
      color: ${LIGHTISH};
      :hover {
        background-color: ${WARNING};
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
    background: '#192a56',
    backgroundSelected: '#2dbeff',
    height: '55px',
  },
  sidebar: {
    background: '#273c75',
    textColor: 'grey',
    collapsedWidth: '55px',
    width: '300px',
  },
};
