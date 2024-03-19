import { useBoolean } from 'usehooks-ts';

import { Reset } from 'styled-reset';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/GlobalStyle';

import Switch from './components/Switch';
import Test from './components/Test';
import defaultTheme from './styles/defaultTheme';
import darkTheme from './styles/darkTheme';

export default function App() {
  const { value: active, toggle } = useBoolean(false);
  const theme = !active ? defaultTheme : darkTheme;

  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <GlobalStyle />
      <Test />
      <Switch active={active} toggle={toggle} />
    </ThemeProvider>
  );
}
