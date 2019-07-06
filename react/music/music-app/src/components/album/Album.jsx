import React, { Component } from 'react';
import { CSSTransition } from "react-transition-group";
import Scroll from '../../common/scroll/scroll';
import { getAlbumInfo } from '../../api/recommend'
import Header from '../../common/header/Header'
import * as AlbumModel from '../../model/album'
import * as songModel from '../../model/song'
import Loading from '../../common/loading/Loading'
import {getSongVKey} from '../../api/song'
// import Lazyload,{forceCheck} from "react-lazyload";
import './album.styl'
class Album extends Component {
	state = {
		show: false,
		songs: [],
		loading: true,
		album: [],
		refreshScroll: false
	}
	getSongUrl = (song, mId) => {
		// 请求 
		getSongVKey(mId).then(res=>{
			if(res.data.items){
				let item = res.data.items[0];
				song.url = `http://dl.stream.qqmusic.qq.com/${item.filename}?vkey=${item.vkey}&guid=3655047200&fromtag=66`
			}
			console.log(song)
		})
	}
	componentDidMount() {
		const id = this.props.match.params.id
		getAlbumInfo(id).then(res => {
			let album = AlbumModel.createAlbumByDetail(res.data)
			album.desc = res.data.desc;
			let songList = res.data.list;
			let songs = [];
			songList.forEach(item => {
				let song = songModel.createSong(item);
				this.getSongUrl(song, item.songmid)
				songs.push(song)
			})
			this.setState({
				loading: false,
				album,
				songs,
				refreshScroll: true
			})
		})
		this.setState({
			show: true
		})
	}
	selectSong = (song) => {
		return () => {
			this.props.changeCurrentSong(song)
		}
	}
	render() {
		const { album, refreshScroll } = this.state
		const songsNode = this.state.songs.map((song) => {
			return (
				<div className="song" key={song.id} onClick={this.selectSong(song)}>
					<div className="song-name">
						{song.name}
					</div>
					<div className="song-singer">
						{song.singer}
					</div>
				</div>
			)
		})
		return (
			<CSSTransition in={this.state.show} timeout={300}
				classNames="translate">
				<div className="music-album">
					<Header title={album.name} ref="header"></Header>
					<div style={{ position: 'relative' }}>
						<div ref="albumBg" className="album-img" style={{ backgroundImage: `url(${album.img})` }}>
							<div className="filter"></div>
						</div>
						<div ref="albumFixedBg" className="album-img fixed">
							<div className="filter"></div>
						</div>
						<div className="play-wrapper" ref="playButtonWrapper">
							<div className="play-button">
								<i className="icon-play"></i>
								<span>播放全部</span>
							</div>
						</div>
					</div>
					<div className="album-container">
						<div className="album-scroll">
							<Scroll refresh={refreshScroll} onScroll={() => { }}>
								<div className="album-wrapper">
									<div className="song-count">
										专辑 共 {songsNode.length} 首
                        </div>
									<div className="song-list">
										{songsNode}
									</div>
									<div className="album-info" style={album.desc ? {} : { display: "none" }}>
										<h1 className="album-title">专辑简介</h1>
										<div className="album-desc">
											{album.desc}
										</div>
									</div>
								</div>
							</Scroll>
							<Loading title='正在加载...' show={this.state.loading}></Loading>
						</div>
					</div>
				</div>
			</CSSTransition>
		);
	}
}
export default Album;
