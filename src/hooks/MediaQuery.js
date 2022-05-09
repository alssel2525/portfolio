export const BREAKPOINTS = {
	BREAKPOINT_PC: 1,
	BREAKPOINT_TABLET: 2,
	BREAKPOINT_MOBILE: 3,
}

const MediaQuery = (breakpoint) => {
	switch (breakpoint) {
		case BREAKPOINTS.BREAKPOINT_PC:
			return "screen and (min-width: 1024px)";
		case BREAKPOINTS.BREAKPOINT_TABLET:
			return "screen and (min-width: 768px) and (max-width: 1023px)";
		case BREAKPOINTS.BREAKPOINT_MOBILE:
			return "screen and (max-width: 767px)";
		default:
			return null;
	}
}

export default MediaQuery;

