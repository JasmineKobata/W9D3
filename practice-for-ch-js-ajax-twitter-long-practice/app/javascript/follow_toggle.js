import { API, broadcast } from "./util";
import { followUser } from "./util/api";
import { unfollowUser } from "./util/api";

export default class FollowToggle {
  constructor(toggleButton) {
    // Your code here
    this.toggleButton = toggleButton;
    this.handleClick = this.handleClick.bind(this);
    this.toggleButton.addEventListener('click', this.handleClick);
  }
  

  async handleClick(event) {
    // Your code here
    event.preventDefault();
    console.log(this.followState);
    this.followState === 'followed' ? this.unfollow(): this.follow() ;
  }

  async follow() {
    // Your code here
    this.followState = 'following'
    await followUser(this.toggleButton.dataset.userId);
    this.followState = 'followed'
    console.log(this.followState)
  }

  async unfollow() {
    // Your code here
    this.followState = 'unfollowing'
    await unfollowUser(this.toggleButton.dataset.userId);
    this.followState = 'unfollowed';
    console.log(this.followState)
  }

  render() {
    switch (this.followState) {
      // Your code here
      case 'followed':
        this.toggleButton.dataset.disabled = 'false'
        this.toggleButton.innerText = "Unfollow!"
        break
      case 'unfollowed':
        this.toggleButton.dataset.disabled = 'false'
        this.toggleButton.innerText = 'Follow!'
        break
      case 'following':
        this.toggleButton.dataset.disabled = 'true'
        this.toggleButton.innerText ='Following...'
        break
      case 'unfollowing':
        this.toggleButton.dataset.disabled = 'true'
        this.toggleButton.innerText = 'Unfollowing...'
    }
  }

  get followState() {
    return this.toggleButton.dataset.followState;
  }

  set followState(newState) {
    this.toggleButton.dataset.followState = newState;
    this.render();
  }
}