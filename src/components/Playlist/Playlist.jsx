import React from 'react';
import './Playlist.css';

import TrackList from '../TrackList/TrackList';

const Playlist = (props) => {
  const handleNameChange = (event) => {
    props.updatePlaylistName(event.target.value);
  };

  const handleSavePlaylist = () => {
    props.savePlaylist(); 
    props.setPlaylistName(''); 
  };

  return (
    <div className="Playlist">
      <input
        onChange={handleNameChange}
        value={props.playlistName}
        placeholder="New Playlist"
      />
      <TrackList
        tracks={props.playlistTracks}
        isRemoval={true}
        onRemove={props.removeTrack}
      />
      <button className="Playlist-save" onClick={handleSavePlaylist}>
        SAVE TO SPOTIFY
      </button>
    </div>
  );
};

export default Playlist;
