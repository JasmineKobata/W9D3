import { API } from "./util";

export default class InfiniteTweets {
  constructor(rootEl) {
    // Your code here
    this.rootEl = rootEl
    this.button = document.querySelector('button.fetch-tweets-btn')
    this.ultag = document.querySelector('ul.tweets');
    this.handleFetchTweets = this.handleFetchTweets.bind(this)
    this.button.addEventListener('click', this.handleFetchTweets)
  }

  async handleFetchTweets(event) {
    // Your code here
    event.preventDefault();
    console.log(this.rootEl)
    let res = await API.fetchTweets({type: this.rootEl.dataset.type, offset: this.ultag.children.length});
    console.log(res);
    res.forEach(obj => this.appendTweet(obj))
    // Remove fetch tweets button if you've run out of tweets to fetch
    if (res.length < 10 /* REPLACE */) {
      const noMoreTweets = document.createElement("p");
      noMoreTweets.innerText = "No more tweets!";
      // Your code here
    }
  }

  appendTweet(tweetData) {
    const tweetEl = this.createTweet(tweetData);
    // Your code here
    this.ultag.appendChild(tweetEl)
  }

  createTweet(tweetData) {
    const li = document.createElement("li");
    // Your code here
    return li;
  }

  // Helper methods...
}