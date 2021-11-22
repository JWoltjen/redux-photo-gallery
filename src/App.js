import './App.css';
import {useEffect} from 'react' 
import {useDispatch, useSelector} from 'react-redux'
import {getPhotos} from './galleryState'; 


function App() {
  const dispatch = useDispatch(); 
  const photos = useSelector(state => state.gallery.photos)

  useEffect(() => {
    dispatch(getPhotos()); 
  }, [dispatch]); 
  
  return (
    <div className="App">
    
    </div>
  );
}

export default App;
