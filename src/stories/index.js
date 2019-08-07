import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import '../App.scss';

import { Button, Welcome } from '@storybook/react/demo';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Paragraph', module)
  .addDecorator(storyFn => <div style={{ margin: '15px' }}>{storyFn()}</div>)
  .add('with an anchor tag', () => <p>Inicio, <a href="#" onClick={() => action('click handler')}>clique aqui</a></p>)
