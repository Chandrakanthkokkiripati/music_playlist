import {AiOutlineDelete} from 'react-icons/ai'

import './index.css'

const MusicItem = props => {
  const {songDetails, deleteSongItem} = props
  const {id, imageUrl, name, genre, duration} = songDetails

  const deleteSong = () => {
    deleteSongItem(id)
  }

  return (
    <li className="list-item">
      <div className="image-name-container">
        <img className="song-poster" src={imageUrl} alt="track" />
        <div>
          <p className="song-name">{name}</p>
          <p className="song-genre">{genre}</p>
        </div>
      </div>
      <div className="duration-container">
        <p className="duration">{duration}</p>
        <button
          data-testid="delete"
          onClick={deleteSong}
          className="delete-button"
          type="button"
        >
          <AiOutlineDelete />
        </button>
      </div>
    </li>
  )
}

export default MusicItem
