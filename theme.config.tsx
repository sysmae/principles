import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: "Principles",
  project: {
    link: 'https://github.com/sysmae',
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
      if (title === '[ 멘토의 원칙 ]') {
        return (
          <div style={{ fontWeight: "bold", color: "violet", fontSize: "16px"}}>{title}</div>
        )
      }
      if (title === '[ 시스매의 원칙 ]') {
        return (
      <div style={{fontWeight: "bold", color: "violet", fontSize: "16px"}}>{title}</div>        
    )
      }

      return <>{title}</>
    },
    toggleButton:true,
    defaultMenuCollapseLevel: 3 // 자동으로 열려있게 하는 요인

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
