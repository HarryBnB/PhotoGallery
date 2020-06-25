import App from '../client/components/App.jsx';
import Gallery from '../client/components/Gallery.jsx';
import PhotoModal from '../client/components/PhotoModal.jsx';
import Photo from '../client/components/Photo.jsx';

describe('<Gallery />', () => {
  it('should render <Photo />', () => {
    let wrapper = mount(<Gallery photos={[{}]}/>);
    expect(wrapper.find(Photo).exists()).toEqual(true);
  });
  it('should render <Photo /> 5 times', () => {
    let wrapper = mount(<Gallery photos={[{},{},{},{},{}]}/>);
    expect(wrapper.find(Photo)).toHaveLength(5);
  });
});