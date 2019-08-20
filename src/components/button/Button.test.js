import React from 'react';
import {mount, shallow} from 'enzyme';
import Button from './Button';
import CompareIcon from '../icons/CompareIcon';

describe('Button component', () => {

  describe('default button', () => {
    test('should render correctly the default button', () => {
      const rendered = mount(<Button label='Clique em mim' />);
      expect(rendered).toMatchSnapshot();
    });

    test('should render correctly the default button with an icon', () => {
      const rendered = mount(<Button icon={<CompareIcon />} label='Clique em mim' />);
      expect(rendered).toMatchSnapshot();
    });

    test('should render correctly the default button highlighted', () => {
      const rendered = mount(<Button highlight label='Clique em mim' />);
      expect(rendered).toMatchSnapshot();
    });

    test('should render correctly the default button blocked', () => {
      const rendered = mount(<Button block label='Clique em mim' />);
      expect(rendered).toMatchSnapshot();
    });

    test('should render correctly the default small button', () => {
      const rendered = mount(<Button size='small' label='Clique em mim' />);
      expect(rendered).toMatchSnapshot();
    });

    test('should render correctly the default large button', () => {
      const rendered = mount(<Button size='large' label='Clique em mim' />);
      expect(rendered).toMatchSnapshot();
    });

    test('should render correctly the default small button with all options', () => {
      const rendered = mount(<Button size='small' highlight block label='Clique em mim' />);
      expect(rendered).toMatchSnapshot();
    });

    test('should render correctly the default medium button with all options', () => {
      const rendered = mount(<Button size='medium' highlight block label='Clique em mim' />);
      expect(rendered).toMatchSnapshot();
    });

    test('should render correctly the default large button with all options', () => {
      const rendered = mount(<Button size='large' highlight block label='Clique em mim' />);
      expect(rendered).toMatchSnapshot();
    });
  });

  describe('primary button', () => {
    test('should render correctly the primary button', () => {
      const rendered = mount(<Button type='primary' label='Clique em mim' />);
      expect(rendered).toMatchSnapshot();
    });

    test('should render correctly the primary button with an icon', () => {
      const rendered = mount(<Button type='primary' icon={<CompareIcon />} label='Clique em mim' />);
      expect(rendered).toMatchSnapshot();
    });

    test('should render correctly the primary button highlighted', () => {
      const rendered = mount(<Button type='primary' highlight label='Clique em mim' />);
      expect(rendered).toMatchSnapshot();
    });

    test('should render correctly the primary button blocked', () => {
      const rendered = mount(<Button type='primary' block label='Clique em mim' />);
      expect(rendered).toMatchSnapshot();
    });

    test('should render correctly the primary small button', () => {
      const rendered = mount(<Button type='primary' size='small' label='Clique em mim' />);
      expect(rendered).toMatchSnapshot();
    });

    test('should render correctly the primary large button', () => {
      const rendered = mount(<Button type='primary' size='large' label='Clique em mim' />);
      expect(rendered).toMatchSnapshot();
    });

    test('should render correctly the primary small button with all options', () => {
      const rendered = mount(<Button type='primary' size='small' highlight block label='Clique em mim' />);
      expect(rendered).toMatchSnapshot();
    });

    test('should render correctly the primary medium button with all options', () => {
      const rendered = mount(<Button type='primary' size='medium' highlight block label='Clique em mim' />);
      expect(rendered).toMatchSnapshot();
    });

    test('should render correctly the primary large button with all options', () => {
      const rendered = mount(<Button type='primary' size='large' highlight block label='Clique em mim' />);
      expect(rendered).toMatchSnapshot();
    });
  });

  describe('secondary button', () => {
    test('should render correctly the secondary button', () => {
      const rendered = mount(<Button type='secondary' label='Clique em mim' />);
      expect(rendered).toMatchSnapshot();
    });

    test('should render correctly the secondary button with an icon', () => {
      const rendered = mount(<Button type='secondary' icon={<CompareIcon />} label='Clique em mim' />);
      expect(rendered).toMatchSnapshot();
    });

    test('should render correctly the secondary button highlighted', () => {
      const rendered = mount(<Button type='secondary' highlight label='Clique em mim' />);
      expect(rendered).toMatchSnapshot();
    });

    test('should render correctly the secondary button blocked', () => {
      const rendered = mount(<Button type='secondary' block label='Clique em mim' />);
      expect(rendered).toMatchSnapshot();
    });

    test('should render correctly the secondary small button', () => {
      const rendered = mount(<Button type='secondary' size='small' label='Clique em mim' />);
      expect(rendered).toMatchSnapshot();
    });

    test('should render correctly the secondary large button', () => {
      const rendered = mount(<Button type='secondary' size='large' label='Clique em mim' />);
      expect(rendered).toMatchSnapshot();
    });

    test('should render correctly the secondary small button with all options', () => {
      const rendered = mount(<Button type='secondary' size='small' highlight block label='Clique em mim' />);
      expect(rendered).toMatchSnapshot();
    });

    test('should render correctly the secondary medium button with all options', () => {
      const rendered = mount(<Button type='secondary' size='medium' highlight block label='Clique em mim' />);
      expect(rendered).toMatchSnapshot();
    });

    test('should render correctly the secondary large button with all options', () => {
      const rendered = mount(<Button type='secondary' size='large' highlight block label='Clique em mim' />);
      expect(rendered).toMatchSnapshot();
    });
  });

  describe('link button', () => {
    test('should render correctly the link button', () => {
      const rendered = mount(<Button type='link' label='Clique em mim' />);
      expect(rendered).toMatchSnapshot();
    });

    test('should render correctly the link button with an icon', () => {
      const rendered = mount(<Button type='link' icon={<CompareIcon />} label='Clique em mim' />);
      expect(rendered).toMatchSnapshot();
    });

    test('should render correctly the link button highlighted', () => {
      const rendered = mount(<Button type='link' highlight label='Clique em mim' />);
      expect(rendered).toMatchSnapshot();
    });

    test('should render correctly the link button blocked', () => {
      const rendered = mount(<Button type='link' block label='Clique em mim' />);
      expect(rendered).toMatchSnapshot();
    });

    test('should render correctly the link small button', () => {
      const rendered = mount(<Button type='link' size='small' label='Clique em mim' />);
      expect(rendered).toMatchSnapshot();
    });

    test('should render correctly the link large button', () => {
      const rendered = mount(<Button type='link' size='large' label='Clique em mim' />);
      expect(rendered).toMatchSnapshot();
    });

    test('should render correctly the link small button with all options', () => {
      const rendered = mount(<Button type='link' size='small' highlight block label='Clique em mim' />);
      expect(rendered).toMatchSnapshot();
    });

    test('should render correctly the link medium button with all options', () => {
      const rendered = mount(<Button type='link' size='medium' highlight block label='Clique em mim' />);
      expect(rendered).toMatchSnapshot();
    });

    test('should render correctly the link large button with all options', () => {
      const rendered = mount(<Button type='link' size='large' highlight block label='Clique em mim' />);
      expect(rendered).toMatchSnapshot();
    });
  });
});
