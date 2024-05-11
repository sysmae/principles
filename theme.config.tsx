import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: "원칙",
  footer: {
    text: '원칙',
  },

  project: {
    link: 'https://github.com/sysmae',
  },
  // chat: {
  //   link: 'https://discord.com',
  // },
  docsRepositoryBase: 'https://github.com/sysmae/principles',
  editLink: {
    text: '내용 수정',
    component: ({ children, className, filePath }) => (
      <a href={`${config.docsRepositoryBase}/edit/main/${filePath}`} className={className}>
        {children}
      </a>
    ),
  },
  "faviconGlyph":"💎",
  "useNextSeoProps": () => ({
   titleTemplate: '%s',
  }),
}

export default config
