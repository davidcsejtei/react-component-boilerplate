import React from 'react';
import { storiesOf, setAddon } from '@storybook/react';

import ExampleComponent from '../../src/index';

storiesOf("", module).add("simple", () => <ExampleComponent />);