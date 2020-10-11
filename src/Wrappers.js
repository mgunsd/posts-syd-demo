import React from 'react';
import Navigator from 'navigation/Navigator';
import LoadFonts from 'styles/LoadFonts';
import { ThemeProvider } from 'context';

const Wrappers = () => {
  return (
    <LoadFonts>
      <ThemeProvider>
        <Navigator />
      </ThemeProvider>
    </LoadFonts>
  )
}
export default Wrappers;