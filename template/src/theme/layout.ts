export const Spacing = {
  /**
   * Spacing tokens (design system).
   *
   * This follows Atlassian-style spacing tokens (8px grid + useful in-betweens).
   * Use `keyof Spacing` (ex: `"space.150"`) in UI props like `gap`, `top`, `padding`.
   */
  //small
  'space.0': 0,
  'space.025': 2,
  'space.050': 4,
  'space.075': 6,
  'space.100': 8,
  //medium
  'space.150': 12,
  'space.200': 16,
  'space.250': 20,
  'space.300': 24,
  //large
  'space.400': 32,
  'space.500': 40,
  'space.600': 48,
  'space.800': 64,
  'space.1000': 80,
  //negative (use to negate parent whitespace / overlap UI)
  'space.negative.025': -2,
  'space.negative.050': -4,
  'space.negative.075': -6,
  'space.negative.100': -8,
  'space.negative.150': -12,
  'space.negative.200': -16,
  'space.negative.250': -20,
  'space.negative.300': -24,
  'space.negative.400': -32
} as const satisfies Record<string, number>
