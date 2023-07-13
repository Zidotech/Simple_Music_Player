// import { useState, useEffect } from "react";
// import musicList from "./music-list";

// function App() {
//   const [musicIndex, setMusicIndex] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(true);
//   const [progress, setProgress] = useState(0);

//   const currentMusic = musicList[musicIndex];

//   useEffect(() => {
//     const audio = document.getElementById("main-audio");
//     if (isPlaying) {
//       audio.play();
//     } else {
//       audio.pause();
//     }
//   }, [isPlaying]);

//   // const togglePlayPause = () => {
//   //   setIsPlaying(!isPlaying);
//   //   if (!isPlaying) {
//   //     if (audioRef.current) {
//   //       // Check if audioRef.current is not null
//   //       audioRef.current.play();
//   //     }
//   //   } else {
//   //     if (audioRef.current) {
//   //       // Check if audioRef.current is not null
//   //       audioRef.current.pause();
//   //     }
//   //   }
//   // };

//   const togglePlayPause = () => {
//     const audio = document.getElementById("main-audio");
//     if (audio.paused) {
//       audio.play();
//       setIsPlaying(true);
//     } else {
//       audio.pause();
//       setIsPlaying(false);
//     }
//   };

//   const prevMusic = () => {
//     setMusicIndex((prevIndex) =>
//       prevIndex === 0 ? musicList.length - 1 : prevIndex - 1
//     );
//     setProgress(0);
//     setIsPlaying(true);
//   };

//   const nextMusic = () => {
//     setMusicIndex((prevIndex) =>
//       prevIndex === musicList.length - 1 ? 0 : prevIndex + 1
//     );
//     setProgress(0);
//     setIsPlaying(true);
//   };

//   const handleTimeUpdate = (e) => {
//     const audio = e.target;
//     const currentTime = audio.currentTime;
//     const duration = audio.duration;
//     const progressPercentage = (currentTime / duration) * 100;
//     setProgress(progressPercentage);
//   };

//   const handleProgressBarClick = (e) => {
//     const progressBar = e.currentTarget;
//     const boundingRect = progressBar.getBoundingClientRect();
//     const clickPosition = e.clientX - boundingRect.left;
//     const progressBarWidth = boundingRect.width;
//     const progressPercentage = (clickPosition / progressBarWidth) * 100;
//     const currentTime = (currentMusic.duration * progressPercentage) / 100;
//     const audio = document.getElementById("main-audio");
//     audio.currentTime = currentTime;
//     setProgress(progressPercentage);
//   };

//   return (
//     <div className="wrapper">
//       <div className="top-bar">
//         <i className="material-icons">expand_more</i>
//         <span>Now Playing</span>
//         <i className="material-icons">more_horiz</i>
//       </div>

//       <div className="img-area">
//         <img src={currentMusic.img} alt="" />
//       </div>

//       <div className="song-details">
//         <p className="name">{currentMusic.name}</p>
//         <p className="artist">{currentMusic.artist}</p>
//       </div>

//       <div className="progress-area" onClick={handleProgressBarClick}>
//         <div className="progress-bar" style={{ width: `${progress}%` }}>
//           <audio
//             id="main-audio"
//             src={currentMusic.src}
//             onTimeUpdate={handleTimeUpdate}
//           ></audio>
//         </div>
//         <div className="song-timer">
//           <span className="current-time">0:00</span>
//           <span className="max-duration">{currentMusic.duration}</span>
//         </div>
//       </div>

//       <div className="controls">
//         <i id="prev" className="material-icons" onClick={prevMusic}>
//           skip_previous
//         </i>
//         <div className="play-pause" onClick={togglePlayPause}>
//           <i className="material-icons play">
//             {isPlaying ? "pause" : "play_arrow"}
//           </i>
//         </div>
//         <i id="next" className="material-icons" onClick={nextMusic}>
//           skip_next
//         </i>
//         <i id="more-music" className="material-icons">
//           queue_music
//         </i>
//       </div>

//       <div className="music-list">
//         <div className="header">
//           <div className="row">
//             <i className="list material-icons">queue_music</i>
//             <span>Music list</span>
//           </div>
//           <i id="close" className="material-icons">
//             close
//           </i>
//         </div>
//         <ul>
//           {musicList.map((music, index) => (
//             <li
//               key={index}
//               className={musicIndex === index ? "playing" : ""}
//               onClick={() => setMusicIndex(index)}
//             >
//               <div className="row">
//                 <span>{music.name}</span>
//                 <p>{music.artist}</p>
//               </div>
//               <span className="audio-duration">{music.duration}</span>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default App;

import { useState, useEffect } from "react";
import musicList from "./music-list";

function App() {
  const [musicIndex, setMusicIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showMusicList, setShowMusicList] = useState(false); // State to control music list visibility

  const currentMusic = musicList[musicIndex];

  useEffect(() => {
    const audio = document.getElementById("main-audio");
    if (audio) {
      if (isPlaying) {
        audio.play();
      } else {
        audio.pause();
      }
    }
  }, [isPlaying, musicIndex]);

  const togglePlayPause = () => {
    setIsPlaying((prevState) => !prevState);
  };

  const prevMusic = () => {
    setMusicIndex((prevIndex) =>
      prevIndex === 0 ? musicList.length - 1 : prevIndex - 1
    );
    setProgress(0);
    setIsPlaying(true);
  };

  const nextMusic = () => {
    setMusicIndex((prevIndex) =>
      prevIndex === musicList.length - 1 ? 0 : prevIndex + 1
    );
    setProgress(0);
    setIsPlaying(true);
  };

  const handleTimeUpdate = (e) => {
    const audio = e.target;
    const currentTime = audio.currentTime;
    const duration = audio.duration;
    const progressPercentage = (currentTime / duration) * 100;
    setProgress(progressPercentage);
  };

  const handleProgressBarClick = (e) => {
    const progressBar = e.currentTarget;
    const boundingRect = progressBar.getBoundingClientRect();
    const clickPosition = e.clientX - boundingRect.left;
    const progressBarWidth = boundingRect.width;
    const progressPercentage = (clickPosition / progressBarWidth) * 100;
    const currentTime = (currentMusic.duration * progressPercentage) / 100;
    const audio = document.getElementById("main-audio");
    audio.currentTime = currentTime;
    setProgress(progressPercentage);
  };

  const toggleMusicList = () => {
    setShowMusicList((prevState) => !prevState);
  };

  const handleCloseClick = () => {
    setShowMusicList(false);
  };

  const handleMusicItemClick = (index) => {
    setMusicIndex(index);
    setIsPlaying(true);
    setShowMusicList(false);
  };

  return (
    <div className="wrapper">
      <div className="top-bar">
        <i className="material-icons">chevron_left</i>
        <span>Now Playing</span>
        <i className="material-icons">more_horiz</i>
      </div>

      <div className="img-area">
        <img src={currentMusic.img} alt="" />
      </div>

      <div className="song-details">
        <p className="artist">{currentMusic.artist}</p>

        <div className="song">
          <i className="material-icons">music_note</i>
          <p className="name">{currentMusic.name}</p>
        </div>
      </div>

      <div className="progress-area" onClick={handleProgressBarClick}>
        <div className="progress-bar" style={{ width: `${progress}%` }}>
          <audio
            id="main-audio"
            src={currentMusic.src}
            onTimeUpdate={handleTimeUpdate}
          ></audio>
        </div>
        <div className="song-timer">
          <span className="current-time">0:00</span>
          <span className="max-duration">{currentMusic.duration}</span>
        </div>
      </div>

      <div className="controls">
        <i id="prev" className="material-icons" onClick={prevMusic}>
          skip_previous
        </i>
        <div className="play-pause" onClick={togglePlayPause}>
          <i className="material-icons play">
            {isPlaying ? "pause" : "play_arrow"}
          </i>
        </div>
        <i id="next" className="material-icons" onClick={nextMusic}>
          skip_next
        </i>
        <i className="material-icons" onClick={toggleMusicList}>
          queue_music
        </i>
      </div>

      {showMusicList && (
        <div className="music-list">
          <div className="header">
            <div className="row">
              <i className="list material-icons">queue_music</i>
              <span>Music list</span>
            </div>
            <i className="material-icons" onClick={handleCloseClick}>
              close
            </i>
          </div>
          <ul>
            {musicList.map((music, index) => (
              <li
                key={index}
                className={musicIndex === index ? "playing" : ""}
                onClick={() => handleMusicItemClick(index)}
              >
                <div className="row">
                  <span>{music.name}</span>
                  <p>{music.artist}</p>
                </div>
                <span className="audio-duration">{music.duration}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
