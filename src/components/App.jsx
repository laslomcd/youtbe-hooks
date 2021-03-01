import React, { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./SearchBar/SearchBar";
import VideoList from "./VideoList/VideoList";
import VideoDetail from "./VideoDetail/VideoDetail";
import youtube from "../api/youtube";

const App = ({ onSearchSubmit, onVideoSelect }) => {
	const [videos, setVideos] = useState([]);
	const [selectedVideo, setSelectedVideo] = useState(null);

	useEffect(() => {
		onSearchSubmit("dungeons and dragons");
	}, [onSearchSubmit]);

	onSearchSubmit = async (term) => {
		const response = await youtube.get("/search", {
			params: { q: term },
		});
		setVideos(response.data.items);
		setSelectedVideo(response.data.items[0]);
	};

	return (
		<div className="ui container" style={{ marginTop: "10px" }}>
			<SearchBar onSubmit={onSearchSubmit} />
			<div className="ui grid">
				<div className="ui row">
					<div className="eleven wide column">
						<VideoDetail video={selectedVideo} />
					</div>
					<div className="five wide column">
						<VideoList videos={videos} onVideoSelect={setSelectedVideo} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
