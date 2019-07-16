import { configure, addParameters } from '@storybook/react';
import { setConsoleOptions } from '@storybook/addon-console';

setConsoleOptions({
  panelExclude: [],
});

configure(() => require('./stories'), module);