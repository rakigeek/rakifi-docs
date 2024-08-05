import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import RakiLogo from './assets/RakiLogo'
import TelegramLogo from './assets/TelegramLogo'

const config: DocsThemeConfig = {
  darkMode: false,
  nextThemes: {
    defaultTheme: "light",
  },
  logo: (
    <div style={{fontWeight: 'bold', fontSize: "20px", display: 'flex'}}>
      <RakiLogo />
      <h1 style={{marginLeft: "10px"}}>Raki Finance</h1>
    </div>
  ),
  project: {
    link: 'https://t.me/rakifi_community',
    icon: <TelegramLogo/>,
  },
  chat: {
    link: 'https://discord.gg/nZM2u4cJ',
  },
  docsRepositoryBase: 'https://github.com/rakigeek',
  footer: {
    text: 'Raki Finance Documentation',
  },
}

export default config
