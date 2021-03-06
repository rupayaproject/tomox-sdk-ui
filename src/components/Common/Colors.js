// @flow
import { Colors } from '@blueprintjs/core'
import { rgba } from 'polished'

export const INTENTS = {
  PT_INTENT_PRIMARY: Colors.BLUE3,
  PT_INTENT_SUCCESS: Colors.GREEN3,
  PT_INTENT_WARNING: Colors.ORANGE3,
  PT_INTENT_DANGET: Colors.RED3,
}

export const TextColors = {
  PT_TEXT_COLOR: Colors.DARK_GRAY1,
  PT_TEXT_COLOR_MUTED: Colors.GRAY1,
  PT_TEXT_COLOR_DISABLED: rgba(Colors.GRAY1, 0.5),
  PT_HEADING_COLOR: Colors.DARK_GRAY1,
  PT_LINK_COLOR: Colors.BLUE2,
  PT_DARK_TEXT_COLOR: Colors.LIGHT_GRAY5,
  PT_DARK_TEXT_COLOR_MUTED: Colors.GRAY5,
  PT_DARK_TEXT_COLOR_DISABLED: rgba(Colors.GRAY5, 0.5),
  PT_DARK_HEADING_COLOR: Colors.LIGHT_GRAY5,
  PT_DARK_LINK_COLOR: Colors.BLUE5,
  PT_TEXT_SELECTION_COLOR: rgba(125, 188, 255, 0.6),
}

export const IconColors = {
  PT_ICON_COLOR: TextColors.PT_TEXT_COLOR_MUTED,
  PT_ICON_COLOR_HOVER: TextColors.PT_TEXT_COLOR,
  PT_ICON_COLOR_DISABLED: INTENTS.PT_INTENT_PRIMARY,

  PT_DARK_ICON_COLOR: TextColors.PT_DARK_TEXT_COLOR_MUTED,
  PT_DARK_ICON_COLOR_HOVER: TextColors.PT_DARK_TEXT_COLOR,
  PT_DARK_ICON_COLOR_DISABLED: TextColors.PT_DARK_TEXT_COLOR_DISABLED,
  PT_DARK_ICON_COLOR_SELECTED: INTENTS.PT_INTENT_PRIMARY,
}

export const DividerColors = {
  PT_DIVIDER_BLACK: rgba(Colors.BLACK, 0.15),
  PT_DARK_DIVIDER_BLACK: rgba(Colors.BLACK, 0.15),
  PT_DARK_DIVIDER_WHITE: rgba(Colors.WHITE, 0.15),
}

export const CodeColors = {
  PT_CODE_TEXT_COLOR: TextColors.PT_TEXT_COLOR_MUTED,
  PT_DARK_CODE_TEXT_COLOR: TextColors.PT_DARK_TEXT_COLOR_MUTED,
  PT_CODE_BACKGROUND_COLOR: rgba(Colors.WHITE, 0.7),
  PT_DARK_CODE_BACKGROUND_COLOR: rgba(Colors.BLACK, 0.3),
}

export const BackgroundColors = {
  PT_APP_BACKGROUND_COLOR: Colors.LIGHT_GRAY5,
  PT_DARK_APP_BACKGROUND_COLOR: Colors.LIGHT_GRAY3,
}

export default {
  BLACK: Colors.BLACK,

  BLUE1: Colors.BLUE1,
  BLUE2: Colors.BLUE2,
  BLUE3: Colors.BLUE3,
  BLUE4: Colors.BLUE4,
  BLUE5: Colors.BLUE5,

  COBALT1: Colors.COBALT1,
  COBALT2: Colors.COBALT2,
  COBALT3: Colors.COBALT3,
  COBALT4: Colors.COBALT4,
  COBALT5: Colors.COBALT5,

  DARK_GRAY1: Colors.DARK_GRAY1,
  DARK_GRAY2: Colors.DARK_GRAY2,
  DARK_GRAY3: Colors.DARK_GRAY3,
  DARK_GRAY4: Colors.DARK_GRAY4,
  DARK_GRAY5: Colors.DARK_GRAY5,

  FOREST1: Colors.FOREST1,
  FOREST2: Colors.FOREST2,
  FOREST3: Colors.FOREST3,
  FOREST4: Colors.FOREST4,
  FOREST5: Colors.FOREST5,

  GOLD1: Colors.GOLD1,
  GOLD2: Colors.GOLD2,
  GOLD3: Colors.GOLD3,
  GOLD4: Colors.GOLD4,
  GOLD5: Colors.GOLD5,

  GRAY1: Colors.GRAY1,
  GRAY2: Colors.GRAY2,
  GRAY3: Colors.GRAY3,
  GRAY4: Colors.GRAY4,
  GRAY5: Colors.GRAY5,

  GREEN1: Colors.GREEN1,
  GREEN2: Colors.GREEN2,
  GREEN3: Colors.GREEN3,
  GREEN4: Colors.GREEN4,
  GREEN5: Colors.GREEN5,

  INDIGO1: Colors.INDIGO1,
  INDIGO2: Colors.INDIGO2,
  INDIGO3: Colors.INDIGO3,
  INDIGO4: Colors.INDIGO4,
  INDIGO5: Colors.INDIGO5,

  LIGHT_GRAY1: Colors.LIGHT_GRAY1,
  LIGHT_GRAY2: Colors.LIGHT_GRAY2,
  LIGHT_GRAY3: Colors.LIGHT_GRAY3,
  LIGHT_GRAY4: Colors.LIGHT_GRAY4,
  LIGHT_GRAY5: Colors.LIGHT_GRAY5,

  LIME1: Colors.LIME1,
  LIME2: Colors.LIME2,
  LIME3: Colors.LIME3,
  LIME4: Colors.LIME4,
  LIME5: Colors.LIME5,

  ORANGE1: Colors.ORANGE1,
  ORANGE2: Colors.ORANGE2,
  ORANGE3: Colors.ORANGE3,
  ORANGE4: Colors.ORANGE4,
  ORANGE5: Colors.ORANGE5,

  RED1: Colors.RED1,
  RED2: Colors.RED2,
  RED3: Colors.RED3,
  RED4: Colors.RED4,
  RED5: Colors.RED5,

  ROSE1: Colors.ROSE1,
  ROSE2: Colors.ROSE2,
  ROSE3: Colors.ROSE3,
  ROSE4: Colors.ROSE4,
  ROSE5: Colors.ROSE5,

  SEPIA1: Colors.SEPIA1,
  SEPIA2: Colors.SEPIA2,
  SEPIA3: Colors.SEPIA3,
  SEPIA4: Colors.SEPIA4,
  SEPIA5: Colors.SEPIA5,

  TURQUOISE1: Colors.TURQUOISE1,
  TURQUOISE2: Colors.TURQUOISE2,
  TURQUOISE3: Colors.TURQUOISE3,
  TURQUOISE4: Colors.TURQUOISE4,
  TURQUOISE5: Colors.TURQUOISE5,

  VERMILION1: Colors.VERMILION1,
  VERMILION2: Colors.VERMILION2,
  VERMILION3: Colors.VERMILION3,
  VERMILION4: Colors.VERMILION4,
  VERMILION5: Colors.VERMILION5,

  VIOLET1: Colors.VIOLET1,
  VIOLET2: Colors.VIOLET2,
  VIOLET3: Colors.VIOLET3,
  VIOLET4: Colors.VIOLET4,
  VIOLET5: Colors.VIOLET5,
  WHITE: Colors.WHITE,

  PRIMARY: Colors.BLUE3,
  SUCCESS: Colors.GREEN3,
  WARNING: Colors.ORANGE3,
  DANGER: Colors.RED3,

  primary: Colors.BLUE3,
  valid: Colors.GREEN3,
  success: Colors.GREEN3,
  warning: Colors.ORANGE3,
  danger: Colors.RED3,

  OUTLINE: rgba(Colors.BLUE3, 0.6),

  LIGHT_APP_BACKGROUND: Colors.LIGHT_GRAY5,
  LIGHT_TEXT: Colors.DARK_GRAY5,
  LIGHT_TEXT_MUTED: Colors.GRAY1,
  LIGHT_TEXT_DISABLED: rgba(Colors.GRAY1, 0.5),
  LIGHT_HEADING: Colors.DARK_GRAY5,
  LIGHT_LINK: Colors.BLUE2,

  APP_BACKGROUND: Colors.DARK_GRAY5,
  TEXT: Colors.LIGHT_GRAY5,
  TEXT_MUTED: Colors.GRAY5,
  TEXT_DISABLED: rgba(Colors.GRAY5, 0.5),
  HEADING: Colors.LIGHT_GRAY5,
  LINK: Colors.BLUE5,

  BUY: Colors.GREEN5,
  SELL: Colors.RED4,

  SELL_MUTED: rgba('#F55656', 0.1),
  BUY_MUTED: rgba('#15B371', 0.1),
  BLUE_MUTED: rgba('#137CBD', 0.3),
}

export const Icons = {
  ICONS16_FAMILY: 'Icons16',
  ICONS20_FAMILY: 'Icons20',

  PT_ICON_SIZE_STANDARD: '16px',
  PT_ICON_SIZE_LARGE: '20Ppx',
}

export const Grids = {
  PT_GRID_SIZE: 10,
}

export const Fonts = {
  PT_FONT_FAMILY:
    '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue',
  PT_FONT_FAMILY_MONOSPACE: 'monospace',

  PT_FONT_SIZE: Grids.PT_GRID_SIZE * 1.4,
  PT_FONT_SIZE_LARGE: Grids.PT_GRID_SIZE * 1.6,
  PT_FONT_SIZE_SMALL: Grids.PT_GRID_SIZE * 1.2,
}

export const Line = {
  PT_LINE_HEIGHT: (Grids.PT_GRID_SIZE * 1.8) / Fonts.PT_FONT_SIZE + 0.0001,
}

export const Buttons = {
  PT_BUTTON_HEIGHT: Grids.PT_GRID_SIZE * 3,
  PT_BUTTON_HEIGHT_SMALL: Grids.PT_GRID_SIZE * 2.4,
  PT_BUTTON_HEIGHT_LARGE: Grids.PT_GRID_SIZE * 4,
}

export const Inputs = {
  PT_INPUT_HEIGHT: Grids.PT_GRID_SIZE * 3,
  PT_INPUT_HEIGHT_LARGE: Grids.PT_GRID_SIZE * 4,
}

export const NavBar = {
  PT_NAVBAR_HEIGHT: Grids.PT_GRID_SIZE * 5,
}

export const TmColors = {
  BLACK: '#1f2538',
  DARK_BLUE: '#252C40',
  BLUE: '#2d3650',
  LIGHT_BLUE: '#394362',
  GRAY: '#6e7793',
  LIGHT_GRAY: '#9ca4ba',
  WHITE: '#fff',
  ORANGE: '#ff9a4d',
  DARK_ORANGE: '#ec8536',
  GREEN: '#00c38c',
  LIGHT_GREEN: '#8bc34a',
  RED: '#f94d5c',
}

export const DarkMode = {
  mode: 'dark',
  mainBg: '#252C40',
  subBg: '#1f2538',
  secondSubBg: '#394362',
  menuBg: '#394362',
  menuBgHover: '#2d3650',
  menuColor: '#9ca4ba',
  menuColorHover: '#ff9a4d',
  border: '#394362',
  menuBorder: '#2d3650',
  active: '#ff9a4d',
  link: '#9ca4ba',
  activeLink: '#fff',
  textSmallChart: '#fff',
  textTable: '#fff',
  icon: '#6e7892',
  iconHover: '#fff',
  labelTokensDropdown: '#9ca4ba',
  labelTokensDropdownHover: '#fff',
  orderbookHover: '#394362',
  orderbookLatestPrice: '#1f2538',
  orderTableTabActive: '#fff',
  tokenSearcherBg: '#1f2538',
  tokenSearcherSearchBg: '#394362',
  tokenSearcherSearchColor: '#9ca4ba',
  tokenSearcherSearchResultBg: '#2d3650',
  tokenSearcherSearchResultItemHover: '#394362',
  notificationUnreadBg: '#6e7793',
  linkText: '#fff',
  inputBackground: '#fff',
  inputColor: '#9ca4ba',
  modalColor: '#6e7793',
  mainColor: '#6e7793',
  mainColorHover: '#5c6583',
}

export const LightMode = {
  mode: 'light',
  mainBg: '#fff',
  subBg: '#f4f6f8',
  secondSubBg: '#dedede',
  menuBg: '#fff',
  menuBgHover: '#f7f7f7',
  menuColor: '#040404',
  menuColorHover: '#ff9a4d',
  border: '#ccc',
  menuBorder: '#ccc',
  active: '#ff9a4d',
  link: '#666',
  activeLink: '#040404',
  textSmallChart: '#3e3e3e',
  textTable: '#303030',
  icon: '#4c4c4c',
  iconHover: '#6e7892',
  labelTokensDropdown: '#3e3e3e',
  labelTokensDropdownHover: '#6e7892',
  orderbookHover: '#f4f6f8',
  orderbookLatestPrice: '#f4f6f8',
  orderTableTabActive: '#ff9a4d',
  tokenSearcherBg: '#f4f6f8',
  tokenSearcherSearchBg: '#fff',
  tokenSearcherSearchColor: '#303030',
  tokenSearcherSearchResultBg: '#f4f6f8',
  tokenSearcherSearchResultItemHover: '#fff',
  notificationUnreadBg: '#6e7793',
  linkText: '#303030',
  inputBackground: '#f4f6f8',
  inputColor: '#1f2538',
  modalColor: '#1f2538',
  mainColor: '#1f2538',
  mainColorHover: '#3f4a6f',
}

export const Theme = {
  HEADER_HEIGHT_LG: '80px',
  HEADER_HEIGHT_MD: '50px',
  ROW_HEIGHT_LG: '60px',
  ROW_HEIGHT_MD: '50px',
  BREAK_POINT_MD: '1280px',
  FONT_SIZE_LG: '16px',
  FONT_SIZE_MD: '14px',
  FONT_SIZE_SM: '12px',
  FONT_SIZE_XS: '10px',
  FONT_SIZE_H4: '18px',
}
