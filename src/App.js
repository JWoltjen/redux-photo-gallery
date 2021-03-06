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
  console.log(photos)

  return (
    <div className="App">
        <h1>Photo Gallery</h1>
        <p>This is a simple photo gallery made using redux toolkit and redux thunk.</p>
        <hr />
        <div className='Gallery'>
          {photos.map(photo => 
            <img 
              key={photo.id}
              src={photo.download_url}
              width='400'
              height='400'
            />
          )}
        </div>
            <button>View More</button>
    </div>
  );
}

export default App;
