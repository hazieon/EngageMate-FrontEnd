import React, { useEffect, useState } from "react";
import request from "request";
import SpotifyButton from "../../components/button/spotifyButton";
import { config } from "../../config";
import style from "./spotify.module.css";
import { animate } from "../../animations";

function Spotify() {
  const id = config.spotifyID;
  const secret = config.spotifySecret;

  const [playlist, setPlaylist] = useState({});
  const [url, setUrl] = useState("");
  const [playlistIndex, setPlaylistIndex] = useState(
    Math.floor(Math.random() * 50)
  );
  const [genre, setGenre] = useState("workout");
  const [station, setStation] = useState("Squat FM");

  function newGenre(genre, station) {
    setGenre(genre);
    setStation(station);
    handleClick();
  }
  console.log(genre);
  function handleClick() {
    setPlaylistIndex(Math.floor(Math.random() * 50));
    console.log(playlistIndex);
  }

  useEffect(() => {
    async function getTunes() {
      const authOptions = {
        url: "https://accounts.spotify.com/api/token",
        headers: {
          Authorization:
            "Basic " + Buffer.from(id + ":" + secret).toString("base64"),
        },
        form: {
          grant_type: "client_credentials",
        },
        json: true,
      };

      request.post(authOptions, async function(error, response, body) {
        if (!error && response.statusCode === 200) {
          // use the access token to access the Spotify Web API
          const token = body.access_token;
          const options = {
            //url: `https://api.spotify.com/v1/search?q=artist%3Amichael%20jackson&type=album`,
            url: `https://api.spotify.com/v1/browse/categories/${genre}/playlists?country=US&limit=50`,
            headers: {
              Authorization: "Bearer " + token,
            },
            json: true,
          };
          request.get(options, async function(error, response, body) {
            console.log(body);

            //const playlist = body.playlists.items[playlistIndex];

            // const newPlaylist = {
            //   description: playlist.description,
            //   name: playlist.name,
            //   images: playlist.images[0].url,
            //   tracks: playlist.tracks.href,
            //   uri: playlist.uri.slice(17),
            // };

            // setPlaylist(newPlaylist);
            // playlist.uri &&
            //   setUrl(
            //     `https://open.spotify.com/embed/playlist/${newPlaylist.uri}`
            //   );
            setUrl(
              `https://open.spotify.com/embed/playlist/37i9dQZF1DWUPafHP1BJw1`
            );
          });
        }
      });
    }
    getTunes();
  }, [playlistIndex, genre, id, secret]);

  return (
    <main className={`${style.container} ${animate.fadeIn} `}>
      <div className={style.players}>
        {url ? (
          <iframe
            title="playlist"
            src={url}
            // https://open.spotify.com/embed/playlist/spotify:playlist:37i9dQZF1DX76Wlfdnj7AP
            width="300"
            height="540"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
        ) : (
          <h1>Loading</h1>
        )}
        {/* <SpotifyButton
          myClass={style.myPlaylistBtn}
          handleClick={handleClick}
          station={"New Playlist"}
        />{" "} */}
      </div>
    </main>
  );
}

export default Spotify;
