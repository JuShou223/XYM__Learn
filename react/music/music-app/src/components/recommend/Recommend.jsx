import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Swiper from 'swiper';
import Loading from '../../common/loading/Loading'
import Lazyload,{forceCheck} from "react-lazyload";
import { getCarousel, getNewAlbum } from '../../api/recommend';
import { createAlbumByItem } from '../../model/album';
import Album from '../../containers/Album'
import Scroll from '../../common/scroll/scroll'
import 'swiper/dist/css/swiper.css';
import './recommend.styl';

class Recommend extends Component {
  state = {
    show: true,
    slideList: [],
    albumList: [],
    refreshScroll: false
  }
  componentDidMount() {
    getCarousel().then(res => {
      this.setState({
        slideList: res.data.slider
      }, () => {
        if (!this.sliderSwiper) {
          this.sliderSwiper = new Swiper('.slider-container', {
            loop: true,
            autoplay: 3000,
            pagination: '.swiper-pagination'
          })
        }
      })
    })
    getNewAlbum().then(res => {
      let albumList = res.albumlib.data.list;
      this.setState({
        albumList,
        show: false
      }, () => {
        // 刷新scroll
        this.setState({
          refreshScroll: true
        })
      })
    })

  }
  handleToAlbumDetail = (url)=>{
    return ()=>{
      this.props.history.push({
        pathname: url
      })
    }
  }
  renderAlbum() {
    const { albumList = [] } = this.state;
    const { match } = this.props
    console.log(this.props)
    return albumList.map(item => {
      // 渲染 album
      const album = createAlbumByItem(item);
      return (
        <div className="album-wrapper" key={album.mId} onClick={this.handleToAlbumDetail(`${match.url}/${album.mId}`)}>
          <div className="left">
            <Lazyload>
              <img src={album.img} width="100%" height="100%" alt="" />
            </Lazyload>
          </div>
          <div className="right">
            <div className="album-name">
              {album.name}
            </div>
            <div className="singer-name">
              {album.singer}
            </div>
            <div className="public-time">
              {album.publicTime}
            </div>
          </div>
        </div>
      )
    })
  }
  renderSwiperItem() {
    const { slideList } = this.state;
    return (
      <>
        {slideList.map((slider) => {
          return (
            <div className="swiper-slide" key={slider.id}>
              <a href={slider.linkUrl} className="slider-nav">
                <img src={slider.picUrl}
                  width="100%" height="100%" alt="" />
              </a>
            </div>
          )
        })}
      </>
    )
  }
  render() {
    const { refreshScroll } = this.state
    const { match } = this.props
    return (
      <div className="music-recommend">
        <Scroll refresh={refreshScroll} onScroll={forceCheck}>
          <div>
            <div className="slider-container">
              {/* slider -> swiper */}
              <div className="swiper-wrapper">
                {this.renderSwiperItem()}
              </div>
              <div className="swiper-pagination"></div>
            </div>
            <div className="album-container">
              <h1 className="title">最新专辑</h1>
              <div className="album-list">
                {this.renderAlbum()}
              </div>
            </div>
          </div>
        </Scroll>
        <Loading title='正在加载...' show={this.state.show}></Loading>
        <Route path={`${match.url}/:id`} component={Album}></Route>
      </div>
    );
  }
}

export default Recommend;