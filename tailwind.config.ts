import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'code-bg': '#282C34',
        black: 'rgb(0 0 0 / <alpha-value>)',
        white: 'rgb(255 255 255 / <alpha-value>)',
        text: 'rgb(var(--color--text) / <alpha-value>)',
        fore: 'rgb(var(--color--fore) / <alpha-value>)',
        back: 'rgb(var(--color--back) / <alpha-value>)',
        back_layout: 'rgb(var(--color--back_layout) / <alpha-value>)',
        gutter: 'rgb(var(--color--gutter) / <alpha-value>)',
        guide: 'rgb(var(--color--guide) / <alpha-value>)',
        accent: 'rgb(var(--color--accent) / <alpha-value>)',
        cyan: 'rgb(var(--color--cyan) / <alpha-value>)',
        blue: 'rgb(var(--color--blue) / <alpha-value>)',
        purple: 'rgb(var(--color--purple) / <alpha-value>)',
        green: 'rgb(var(--color--green) / <alpha-value>)',
        rose: 'rgb(var(--color--rose) / <alpha-value>)',
        orange: 'rgb(var(--color--orange) / <alpha-value>)',
        red: 'rgb(var(--color--red) / <alpha-value>)',
        gold: 'rgb(var(--color--gold) / <alpha-value>)',
        transparent: 'transparent',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
export default config;
