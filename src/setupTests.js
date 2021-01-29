//The following imports and configure allow you to access the shallow component that creates a wrapper of an instance of our component that we can interact with (testing event listeners)

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import '@testing-library/jest-dom'