import React, { Component } from 'react';
import './Item.css';
import { FaRegHeart,FaRetweet,FaRegEnvelope,FaRegComment } from 'react-icons/fa';

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      changeReTweet: 0,
      changeHeart: 0,
      currentReTweet: this.props.count.reTweet,
      currentLike: this.props.count.like
    }
  }

// reTweet icon fonksiyonu
  showReTweet = () => {
    if(this.state.changeReTweet == 0) {
      this.setState({
        changeReTweet: 1,
        currentReTweet: this.state.currentReTweet + 1
      })
    }else {
      this.setState({
        changeReTweet: 0,
        currentReTweet: this.state.currentReTweet - 1
      })
    }
  }
// reTweet icon fonksiyonu döndür
  renderReTweet() {
    if(this.state.changeReTweet == 1) {
      return (
        <div className="green" onClick = { () => this.showReTweet()}>
          <FaRetweet /> <span>{this.state.currentReTweet}</span>
        </div>
      )
    }else {
      return (
        <div className="black" onClick = { () => this.showReTweet()}>
          <FaRetweet /> {this.state.currentReTweet}
        </div>
      )
    }
  }
// Like icon fonksiyonu
  showHeart() {
    if(this.state.changeHeart == 0) {
      this.setState({
        changeHeart: 1,
        currentLike: this.state.currentLike + 1
      })
    }else {
      this.setState({
        changeHeart: 0,
        currentLike: this.state.currentLike - 1
      })
    }
  }
// like icon fonksiyonu döndür
  renderHeart() {
    if(this.state.changeHeart == 1) {
      return (
        <div className="red" onClick = { () => this.showHeart()}>
          <span className="abc"><FaRegHeart/> </span> <span>{this.state.currentLike}</span>
        </div>
      )
    }else {
      return (
        <div className="black" onClick = { () => this.showHeart()}>
          <span className="abc"><FaRegHeart/></span> <span>{this.state.currentLike}</span>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="item">
          <div className="item-left">
            <div className="logo">
              <img src={this.props.content.logo}/>
            </div>
          </div>
          <div className="item-content">
            <div className="owner">
              {this.props.owner} <span className="ownerUrl">@ {this.props.ownerShorUrl}</span> <span className="itemDate"> - {this.props.dateMonth} {this.props.dateDay}</span>
            </div>
            <div className="title">
              {this.props.title}
            </div>
            <div className="author">
              {'{ author: '} {this.props.author} {'}'}
            </div>
            <div className="urlimage">
              <img src={this.props.cardMain.image}/>
            </div>
            <a href={this.props.cardMain.bottomLongUrl} className="bottomlink" target="_blank">
              <div className="bottomMain">
              <div className="bottomTitle">
              {this.props.cardMain.bottomTitle}
              </div>
              <div className="bottomExp">
                {this.props.cardMain.bottomExplanation}
              </div>
              <div className="bottomUrl">
                {this.props.cardMain.bottomUrl}
              </div>
            </div></a>
            <div className="bottomicons">
              <div>
                <div className="black">
                <FaRegComment/>
              </div>
              </div>
              <div>
                {this.renderReTweet()}
              </div>
              <div>
              {this.renderHeart()}
              </div>
              <div>
                <div className="black">
                <FaRegEnvelope/>
                </div>
              </div>
            </div>
          </div>
          
      </div>
    )
  }
}
export default Item;

