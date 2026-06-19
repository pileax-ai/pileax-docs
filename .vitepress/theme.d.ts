import { type DefaultTheme } from 'vitepress'

export interface CustomThemeConfig extends DefaultTheme.Config {
  comment?: {
    [key: string]: any;
  }
  posts?: {
    [key: string]: any;
  }
  pageSize?: number
  postLength?: number
}
