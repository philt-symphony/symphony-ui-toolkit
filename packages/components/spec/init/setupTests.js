import '@testing-library/jest-dom';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { jest } from '@jest/globals';

global.jest = jest;

Enzyme.configure({ adapter: new Adapter() });
