import { configure } from 'enzyme';
import { JSDOM } from 'jsdom';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

process.env.NODE_ENV = 'TESTING';

const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
const win = dom.window;
const doc = win.document;

global.document = doc;
global.window = win;

for (let key in window) {
  if (!window.hasOwnProperty(key) || key in global) continue;
  global[key] = window[key];
}
