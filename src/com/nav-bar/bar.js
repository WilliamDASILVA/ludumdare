import { h, Component } from 'preact/preact';
import ButtonBase		from '../button-base/base';
import SVGIcon 			from 'com/svg-icon/icon';

export default class NavBar extends Component {
	render( props, state ) {
		return (
			<div class="nav-bar">
				<div class="-content">
					<div class="-left">
						<ButtonBase class="-logo" onClick={e => console.log('hello')}>
							<SVGIcon baseline>ludum</SVGIcon><SVGIcon baseline>dare</SVGIcon>
						</ButtonBase>
					</div>
					<div class="-right">
						Hey
					</div>
				</div>
			</div>
		);
	}

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