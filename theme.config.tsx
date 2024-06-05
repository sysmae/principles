import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: "시스매의 원칙",
  project: {
    link: 'https://github.com/sysmae',
  },
  chat: {
    link: 'https://discord.gg/vfXSdVDt',
  },
  docsRepositoryBase: 'https://github.com/sysmae/principles',
  editLink: {
    // text: '내용 수정',
    // component: ({ children, className, filePath }) => (
    //   <a href={`${config.docsRepositoryBase}/edit/main/${filePath}`} className={className}>
    //     {children}
    //   </a>
    // ),
    text: null,
  },

  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return (
          <div style={{ fontWeight: "bold", color: "violet", fontSize: "20px"}}>{title}</div>
        )
      }
      if (title === '시스매의 원칙') {
        return (
      <div style={{fontWeight: "bold", color: "violet", fontSize: "20px"}}>{title}</div>        
    )
      }
      return <>{title}</>
    }
  },
  feedback: {
    content: null
  },
  "faviconGlyph":"💎",
  "useNextSeoProps": () => ({
   titleTemplate: '%s', 
  }),
  footer: {
      text: null
  }
}

export default config
