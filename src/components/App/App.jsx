import React, { useState, useEffect } from 'react';
import './App.css';
import { toast, ToastContainer } from 'react-toastify';

import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Spotify from '../../util/Spotify';

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState('');
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const search = (term) => {
    Spotify.search(term).then(setSearchResults);
  };

  const addTrack = (track) => {


    if (playlistTracks.some((savedTrack) => savedTrack.id === track.id)) {
      return;
    }
    setPlaylistTracks((prevTracks) => [...prevTracks, track]);
  };

  const removeTrack = (track) => {
    setPlaylistTracks((prevTracks) =>
      prevTracks.filter((currentTrack) => currentTrack.id !== track.id)
    );
  };

  const updatePlaylistName = (name) => {
  
    setPlaylistName(name);
  };


  const savePlaylist = () => {
    if (!playlistName.trim()) {
      toast.error('Fill in the playlist name');
      return;
    }

    if (playlistTracks.length === 0) {
      toast.error('Add some tracks to your playlist');
      return;
    }

    const trackUris = playlistTracks.map((track) => track.uri);
    Spotify.savePlaylist(playlistName, trackUris)
      .then(() => {
        setPlaylistName('New Playlist');
        setPlaylistTracks([]);
        toast.success('Playlist saved successfully!');
      })
      .catch((error) => {
        toast.error('Error saving playlist');
        console.error('Error saving playlist:', error);
      });
  };

  return (
    <div>
      <ToastContainer autoClose={700} />
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <SearchBar onSearch={search} />
        <div className="App-playlist">
          <SearchResults searchResults={searchResults} onAdd={addTrack} />
          <Playlist
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            updatePlaylistName={updatePlaylistName}
            removeTrack={removeTrack}
            savePlaylist={savePlaylist}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
