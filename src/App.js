import React, { Component } from 'react';
import Item from './components/Item/Item'
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);this.state = {
      mySocialArray : [
        {
          owner: "Sputnik News TR",
          ownerShorUrl: "sputnik_TR",
          dateMonth: "Sep",
          dateDay: 10,
          title: "Learning React? Start small.",
          author: <a href='https://twitter.com/dceddia'>dceddia</a>,
          content: {
            logo: "https://i.pravatar.cc/053",
            image: "",
          },
          count: {
            comments: 2,
            reTweet: 47,
            like: 190,
            email: ''
          },
          cardMain: {
            image:"https://cdntr2.img.sputniknews.com/images//104055/23/1040552355.jpg",
            bottomTitle:"Putin’den Ulusal Birlik Günü mesajı:",
            bottomExplanation:" Birlikteyken her türlü tehdide karşı koyabiliriz",
            bottomUrl:"sputniknews.com",
            bottomLongUrl:"https://tr.sputniknews.com/rusya/201911041040552379-putinden-ulusal-birlik-gunu-mesaji-birlikteyken-her-turlu-tehdide-karsi-koyabiliriz/"
          },
          cardicon:{
            comment:"../images/icons/icons8-quote-100.png",
            reTweet:"../images/icons/icons8-retweet-100.png",
            like:"../images/icons/icons8-love-100.png",
            message:"../images/icons/icons8-new-message-100.png",
          },
        },
        {
          owner: "Linus Torvalds",
          ownerShorUrl: "linustorvalds",
          dateMonth: "Sep",
          dateDay: 10,
          title: "Learning React? Start small.",
          author: <a href='https://twitter.com/linus_ltovalds'>@linus_ltovalds</a>,
          content: {
            logo: "https://i.pravatar.cc/051",
            image: "",
          },
          count: {
            comments: 2,
            reTweet: 17,
            like: 101,
            email: ''
          },
          cardMain: {
            image:"https://cdntr1.img.sputniknews.com/images//104056/21/1040562110.jpg",
            bottomTitle:"Learning React? Start Smart",
            bottomExplanation:"Bebeğini kaybeden öğretmen kalp krizi geçirerek hayatını kaybetti",
            bottomUrl:"sputniknews.com",
            bottomLongUrl:"https://tr.sputniknews.com/turkiye/201911051040562135-bebegini-kaybeden-ogretmen-kalp-krizi-gecirerek-hayatini-kaybetti/"
          },
          cardicon:{
            comment:"../images/icons/icons8-quote-100.png",
            reTweet:"../images/icons/icons8-retweet-100.png",
            like:"../images/icons/icons8-love-100.png",
            message:"../images/icons/icons8-new-message-100.png",
          },
        },
        {
          owner: "Oguz Karaoglan",
          ownerShorUrl: "oguzkaraoglan",
          dateMonth: "Sep",
          dateDay: 10,
          title: "Learning React? Start small.",
          author: <a href='https://twitter.com/oguzkaraoglan'>@oguzkaraoglan</a>,
          content: {
            logo: "https://i.pravatar.cc/050",
            image: "",
          },
          count: {
            comments: 12,
            reTweet: 107,
            like: 491,
            email: ''
          },
          cardMain: {
            image:"https://cdntr2.img.sputniknews.com/images//104049/93/1040499343.jpg",
            bottomTitle:"Cüneyt Özdemir'den 'Dilek İmamoğlu' tepkisi:",
            bottomExplanation:"Ömrümüzü bitirdiniz",
            bottomUrl:"sputniknews.com",
            bottomLongUrl:"https://tr.sputniknews.com/turkiye/201911031040543519-cuneyt-ozdemirden-dilek-imamoglu-tepkisi-omrumuzu-bitirdiniz/"
          },
          cardicon:{
            comment:"../images/icons/icons8-quote-100.png",
            reTweet:"../images/icons/icons8-retweet-100.png",
            like:"../images/icons/icons8-love-100.png",
            message:"../images/icons/icons8-new-message-100.png",
          },
        }
      ]
    }
  }

  render() {
    return (
      <div id="wrapper">
        {this.state.mySocialArray.map((item) => (<Item {...item}></Item>))}
      </div>
    )
  }
}
export default App;

