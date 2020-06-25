import App from '../client/components/App.jsx';
import Gallery from '../client/components/Gallery.jsx';
import PhotoModal from '../client/components/PhotoModal.jsx';
import Photo from '../client/components/Photo.jsx';

describe('<App />', () => {
    it('should render <Gallery /> when showPhotoModal is false', () => {
        let wrapper = mount(<App />);
        wrapper.setState({showPhotoModal: false});
        expect(wrapper.find(Gallery).exists()).toEqual(true);
    });
    it('should not render <PhotoModal /> when showPhotoModal is false', () => {
        let wrapper = mount(<App />);
        wrapper.setState({showPhotoModal: false});
        expect(wrapper.find(PhotoModal).exists()).toEqual(false);
    });
    it('should render <PhotoModal /> when showPhotoModal is true', () => {
        let wrapper = mount(<App />);
        wrapper.setState({showPhotoModal: true});
        expect(wrapper.find(PhotoModal).exists()).toEqual(true);
    });
    it('should not render <Gallery /> when showPhotoModal is true', () => {
        let wrapper = mount(<App />);
        wrapper.setState({showPhotoModal: true});
        expect(wrapper.find(Gallery).exists()).toEqual(false);
    });
    it('should call componentDidMount', () => {
        const spy = jest.spyOn(App.prototype, 'componentDidMount');
        const wrapper = mount(<App />);
        expect(App.prototype.componentDidMount).toHaveBeenCalledTimes(1);
    });
});