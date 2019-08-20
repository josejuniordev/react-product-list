import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Button from "../components/button/Button";
import CompareIcon from "../components/icons/CompareIcon";
import "../main.scss";

storiesOf('Button', module)
  .addDecorator(storyFn => <div style={{ margin: '15px', fontSize: '16px' }}>{storyFn()}</div>)
  .add('without type or icon attributes', () => <Button label='Meu botão' onClick={action('click handler')} />)
  .add('with type "secondary"', () => <Button type='secondary' label='Meu botão' onClick={action('click handler')} />)
  .add('with type "primary"', () => <Button type='primary' label='Meu botão' onClick={action('click handler')} />)
  .add('with an icon', () => <Button type='primary' icon={<CompareIcon />} label='Meu botão' onClick={action('click handler')} />)
  .add('with highlighted text', () => <Button type='primary' highlight icon={<CompareIcon />} label='Meu botão' onClick={action('click handler')} />)
  .add('with block style', () => <Button type='primary' highlight block icon={<CompareIcon />} label='Meu botão' onClick={action('click handler')} />)
  .add('with type "link"', () => <Button type='link' highlight label='Meu botão' onClick={action('click handler')} />)
