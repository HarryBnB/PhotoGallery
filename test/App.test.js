import App from '../client/components/App.jsx';
import Gallery from '../client/components/Gallery.jsx';
import PhotoModal from '../client/components/PhotoModal.jsx';

describe('<App /> rendering', () => {
    it('should render one <div>', () => {
        let wrapper = shallow(<App />);
        expect(wrapper.children('div')).toHaveLength(1);
    });
});

describe('<App />', () => {
  it('should include <Gallery />', () => {
      let wrapper = shallow(<App />);
      expect(wrapper.find(Gallery).exists()).toEqual(true);
  });
});