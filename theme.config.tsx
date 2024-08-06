import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: "Principles",
  project: {
    link: 'https://github.com/sysmae',
  },
  docsRepositoryBase: 'https://github.com/sysmae/principles',
  chat: {
    link: 'https://www.instagram.com/sysmae__/',
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>   
    )
},
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
