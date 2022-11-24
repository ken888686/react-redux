// Reducer
const songsReducer = () => [
  {
    title: "Song A",
    duration: "00:10",
  },
  {
    title: "Song B",
    duration: "00:20",
  },
  {
    title: "Song C",
    duration: "00:30",
  },
  {
    title: "Song D",
    duration: "00:40",
  },
];

// Reducer
const selectedSongReducer = (action, selectedSong = null) => {
  if (action?.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};
