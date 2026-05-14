import { useData } from 'vitepress'
import { tr } from '../i18n'

export default function () {
  const { lang } = useData()

  const t = (key: string) => {
    console.log('lang', lang.value)
    return tr(lang.value, key)
  }

  return {
    t
  }
}
