const BREAKPOINT_PC = 1;
const BREAKPOINT_TABLET = 2;
const BREAKPOINT_MOBILE = 3;

const MediaQuery = (BREAKPOINT) => {
	switch (BREAKPOINT) {
		case BREAKPOINT_PC:
			return "screen and (min-width: 1024px)";
		case BREAKPOINT_TABLET:
			return "screen and (min-width: 768px) and (max-width: 1023px)";
		case BREAKPOINT_MOBILE:
			return "screen and (max-width: 767px)";
		default:
			return null;
	}
}

export default MediaQuery;

