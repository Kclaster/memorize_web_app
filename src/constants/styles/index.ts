export type Colors =
  'black'
  | 'error'
  | 'brand'
  | 'grey'
  | 'lightGrey'
  | 'success'
  | 'warning'
  | 'white';

const colors: Record<Colors, any> = {
  black: '#101010',
  brand: {
    light: '#57A9EA',
    dark: '#2B6A9E'
  },
  error: '#b20000',
  grey: '#696969',
  lightGrey: '#B8B8B8',
  success: '#008000',
  warning: '#eaea44 ',
  white: '#f1f1f1',
};

const Styles = {
  colors,
};

export default Styles;