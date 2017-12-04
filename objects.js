var playlist = {artistNames: "song title"};

function updatePlaylist({playlist}, {artistNames: songTitle}){
  playlist[artistNames] = songTitle
  return playlist
}