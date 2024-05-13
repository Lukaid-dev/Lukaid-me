export const Theme = {
  oneLight: 'one-light',
  oneDark: 'one-dark',
  githubLight: 'github-light',
  githubDark: 'github-dark',
} as const;

export type Theme = (typeof Theme)[keyof typeof Theme];
