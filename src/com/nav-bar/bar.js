import { h, Component } 				from 'preact/preact';
import ButtonBase						from '../button-base/base';
import ButtonLink						from '../button-link/link';
import SVGIcon 							from 'com/svg-icon/icon';

function make_url( url ) {
	return url + window.location.search;
}

export default class NavBar extends Component {
	constructor( props ) {
		super(props);
	}
	
	render( {user}, {} ) {
		var Search = (
			<ButtonBase class="-icon" onclick={e => { console.log('search'); window.location.hash = "#search"; }}>
				<SVGIcon baseline>search</SVGIcon>
			</ButtonBase>
		);
		
		var Calendar = (
			<ButtonBase class="-button if-no-sidebar-block" onclick={e => { console.log('calendar'); window.location.hash = "#cal"; }}>
				<SVGIcon baseline>calendar</SVGIcon>
				<div class="if-sidebar-block">Schedule</div>
			</ButtonBase>		
		);
		
		if ( user && user.id ) {
			// TODO: Check if a participant of the current event
			var MyGame = "";
//			 (
//				<ButtonBase class="-button" onclick={e => console.log('my game')}>
//					<SVGIcon>gamepad</SVGIcon>
//					<div>My Game</div>
//				</ButtonBase>
//			);
			
			var NewPost = (
				<ButtonBase class="-button" onclick={e => { console.log('new'); window.location.hash = "#post-new"; }}>
					<SVGIcon>edit</SVGIcon>
					<div class="if-sidebar-block">New</div>
				</ButtonBase>
			);
			
			// TODO: Figure out how many notifications a user has
			let NotificationCount = false ? (
				<div class="-new">2</div>
			) : "";
			var Notification = (
				<ButtonBase class="-icon" onclick={e => {console.log('notification'); window.location.hash = "#dummy";}}>
					<SVGIcon baseline>bubble</SVGIcon>
					{NotificationCount}
				</ButtonBase>
			);
			
			// TODO: Pull this out of the user meta, else use a dummy
			let Avatar = (user.meta && user.meta.avatar) ? <img src={"//"+STATIC_DOMAIN+user.meta.avatar} /> : <img src={'//'+STATIC_DOMAIN+'/other/dummy/user64.png'} />;
			//'/other/logo/mike/Chicken64.png';
			var User = (
				<ButtonBase class="-user" onclick={e => console.log('user')}>
					{Avatar}
				</ButtonBase>
			);
			
			var Register = "";
			var Login = "";
		}
		else {
			var MyGame = "";
			var NewPost = "";
			var Notification = "";
			var User = "";
			var Register = (
				<ButtonBase class="-button" onclick={e => { console.log('register'); window.location.hash = "#user-register"; }}>
					<SVGIcon>user</SVGIcon>
					<div class="if-sidebar-block">Create Account</div>
				</ButtonBase>			
			);
			var Login = (
				<ButtonBase class="-button" onclick={e => { console.log('login'); window.location.hash = "#user-login"; }}>
					<SVGIcon>key</SVGIcon>
					<div class="if-sidebar-block">Login</div>
				</ButtonBase>			
			);
		}
		
		return (
			<div class="nav-bar">
				<div class="-content">
					<div class="-left">
						<ButtonLink href="/" class="-logo" onclick={e => console.log('logo')}>
							<SVGIcon class="if-sidebar-block" baseline>ludum</SVGIcon><SVGIcon class="if-sidebar-block" baseline>dare</SVGIcon>
							<SVGIcon class="if-no-sidebar-block" baseline>l-udum</SVGIcon><SVGIcon class="if-no-sidebar-block" baseline>d-are</SVGIcon>							
						</ButtonLink>
					</div>
					<div class="-right">
						{MyGame}
						{NewPost}
						{Calendar}
						{Search}
						{Notification}
						{User}
						{Register}
						{Login}
					</div>
				</div>
			</div>
		);
	}
//							<div class="-count">24</div>

//					<div class="-right">
//						<CoreButton class="-button if-no-sidebar-inline"><SVGIcon>calendar</SVGIcon><span class="if-small-hide">Schedule</span></CoreButton>
//						<CoreButton class="-button if-no-sidebar-inline"><SVGIcon>fire</SVGIcon><span class="if-small-hide">Trending</span></CoreButton>
//						<CoreButton class="-button"><SVGIcon>search</SVGIcon></CoreButton>
//						<CoreButton class="-button"><SVGIcon>question</SVGIcon> What is this?</CoreButton>
//						<CoreButton class="-button" onClick={ e => { console.log("moop"); } }><SVGIcon>user</SVGIcon><span>Register</span></CoreButton>
//						<CoreButton class="-button" keepFocus><SVGIcon>key</SVGIcon><span>Login</span></CoreButton>
//					</div>

//				<div>
//					<CoreButton class="button" onClick={ navbar_Static }>Static</CoreButton>
//					<CoreButton class="button" onClick={ navbar_Float }>Float</CoreButton>
//					<CoreButton class="button" onClick={ e => { document.activeElement.blur(); } }>Blank</CoreButton>
//				</div>
	
	componentDidMount() {
		document.body.classList.add('_use-nav-bar');
	}
	componentWillUnmount() {
		document.body.classList.remove('_use-nav-bar');
		document.body.classList.remove('_static-nav-bar');
	}
}

export function navbar_Float() {
	document.body.classList.remove('_static-nav-bar');
}
export function navbar_Static() {
	document.body.classList.add('_static-nav-bar');
}
