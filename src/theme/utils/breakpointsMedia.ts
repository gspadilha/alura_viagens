import { css, FlattenSimpleInterpolation } from 'styled-components';
import { defaultBreakpoints } from '../breakpoints';

export function breakpointsMedia(
  cssByBreakpoint: Record<string, FlattenSimpleInterpolation>,
) {
  const breakpointNames = Object.keys(defaultBreakpoints);

  return breakpointNames
    .filter(breakpointName => Boolean(cssByBreakpoint[breakpointName]))
    .map(
      breakpointName => css`
        @media only screen and (min-width: ${defaultBreakpoints[
            breakpointName
          ]}px) {
          ${cssByBreakpoint[breakpointName]}
        }
      `,
    );
}
