import 'braid-design-system/reset';

import { BraidLoadableProvider } from 'braid-design-system';
import React from 'react';

import Main from './Main';

interface AppProps {
  site: string;
}

export default ({ site }: AppProps) => (
  <BraidLoadableProvider themeName={site}>
    <Main />
  </BraidLoadableProvider>
);
