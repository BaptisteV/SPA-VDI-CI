import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {configure, shallow} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import Contact from './Contact';
import PageTopImage from './parts/PageTopImage';
import Presentation from './Presentation';
import Specialite from './Specialites';
configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("contains an image at the top of each page", () => {
  const pages = [shallow(<Contact />), shallow(<Presentation />), shallow(<Specialite />)]
  pages.forEach((page) => {
    expect(page.find(PageTopImage)).toHaveLength(1);
  })
})