"use strict";
document.querySelectorAll(".emoji").forEach(function (el) {
  el.addEventListener("click", function () {
    document.
    querySelectorAll(".emoji.active").
    forEach(function (active) {return active.classList.remove("active");});
    requestAnimationFrame(function () {return el.classList.add("active");});
  });
});


//Nav


// inspiration: https://dribbble.com/shots/3003823-Notification-Dropdown

const {
    Component } =
  React;
  const {
    Motion,
    StaggeredMotion,
    spring,
    presets } =
  ReactMotion;
  
  class Media extends Component {
    render() {
      const cls = "nav__notifications__list__item" + (this.props.new ? " nav__notifications__list__item--new" : "");
      return (
        React.createElement("li", { style: this.props.style, className: cls },
        React.createElement("div", { className: "nav__notifications__list__item__display" },
        React.createElement(Motion, { defaultStyle: { x: 0.6 }, style: { x: spring(this.props.open ? 1 : 0.6, presets.wobbly) } },
        interp => React.createElement("img", { src: this.props.imageURL, className: "nav__notifications__list__item__photo", style: { transform: `scale(${interp.x})` } }))),
  
  
  
        React.createElement("div", { className: "nav__notifications__list__item__desc" },
        React.createElement(Motion, { defaultStyle: { x: 0 }, style: { x: spring(this.props.open ? 0 : 1, presets.wobbly) } },
  
        interp => React.createElement("div", { style: { transform: `translateZ(0) translateY(${-15 * interp.x}px)`, opacity: 1 - interp.x } },
        React.createElement("em", null, this.props.name), " ", this.props.action, " ", React.createElement("em", null, " ", this.props.content), ".")))));
  
  
  
  
  
  
    }}
  
  
  class NotificationsBar extends Component {
    constructor(props) {
      super(props);
      this.state = {
        media: [{ imgURL: 'https://randomuser.me/api/portraits/men/74.jpg',
          name: 'Gerlald Thompson',
          action: 'approved your request to',
          content: 'become friends',
          new: true },
        { imgURL: 'https://randomuser.me/api/portraits/women/32.jpg',
          name: 'Dana Newman',
          action: 'liked',
          content: 'your photo',
          new: true },
        { imgURL: 'https://randomuser.me/api/portraits/men/93.jpg',
          name: 'Dan Ingrid',
          action: 'also commented on',
          content: 'your status',
          new: true },
        { imgURL: 'https://randomuser.me/api/portraits/women/16.jpg',
          name: 'Lena Direlson',
          action: 'checked in at',
          content: 'Greenstreet Pub',
          new: false },
        { imgURL: 'https://randomuser.me/api/portraits/men/78.jpg',
          name: 'Dan Witherson',
          action: 'also commented on',
          content: 'your status',
          new: false }] };
  
    }
    render() {
      const { media } = this.state;
      const motionParams = media.map(_ => Object.assign({}, { h: 0 }));
  
      return (
        React.createElement(Motion, { defaultStyle: { opacity: 0 }, style: { opacity: spring(this.props.open ? 1 : 0, presets.stiff) } },
        (interpOuter) =>
        React.createElement("div", { style: interpOuter, className: "nav__notification_bar" },
        React.createElement(Motion, { defaultStyle: { x: 0 }, style: { x: spring(this.props.open ? 0 : -5, presets.stiff) } },
        interp => React.createElement("h3", { style: { transform: `translateY(${interp.x}px)` } }, "Notifications")),
  
  
        React.createElement(StaggeredMotion, { defaultStyles: motionParams, styles: prevInterpolatedStyles => prevInterpolatedStyles.map((_, i) => {
            return i === 0 ?
            { h: spring(this.props.open ? 100 : 0, presets.wobbly) } :
            { h: spring(prevInterpolatedStyles[i - 1].h) };
          }) },
        (interps) =>
        React.createElement("ul", { className: "nav__notifications__list" },
        interps.map((style, i) => React.createElement(Media, { key: i, style: { height: style.h }, imageURL: media[i].imgURL, name: media[i].name, action: media[i].action, content: media[i].content, open: this.props.open, new: media[i].new })))))));
  
  
  
  
  
  
  
    }}
  
  
  class Notifications extends Component {
    constructor(props) {
      super(props);
      this.toggleNotificationBar = this.toggleNotificationBar.bind(this);
      this.count = 0;
    }
  
    toggleNotificationBar() {
      this.props.toggleNotificationsBar();
    }
  
    render() {
      return (
        React.createElement("div", { className: "nav__notification" },
        React.createElement("span", { className: "nav__notification__icon", onClick: this.toggleNotificationBar }),
        React.createElement(Motion, { defaultStyle: { x: 0 }, style: { x: spring(this.props.open ? 0 : 1, presets.stiff) } },
        interp => React.createElement("span", { className: "nav__notification__num", style: { transform: `translateZ(0) scale(${interp.x}`, opacity: interp.x } }, "3")),
  
  
  
        React.createElement(NotificationsBar, { open: this.props.open })));
  
  
    }}
  
  
  class NavBar extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isNotificationsOpen: false };
  
      this.toggleNotificationsBar = this.toggleNotificationsBar.bind(this);
      this.closeNotificationsBar = this.closeNotificationsBar.bind(this);
    }
    toggleNotificationsBar() {
      this.setState({ ...this.state, isNotificationsOpen: !this.state.isNotificationsOpen });
    }
    closeNotificationsBar() {
      if (!this.state.isNotificationsOpen) return;
      this.setState({ ...this.state, isNotificationsOpen: false });
    }
    render() {
      return (
        React.createElement("nav", { tabIndex: "0", onBlur: this.closeNotificationsBar },
        React.createElement(Notifications, { toggleNotificationsBar: this.toggleNotificationsBar, open: this.state.isNotificationsOpen })));
  
  
    }}
  
  
  ReactDOM.render(React.createElement(NavBar, null), document.body);