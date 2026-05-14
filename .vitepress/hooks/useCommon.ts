import { useData } from 'vitepress'
import { tr } from '../i18n'

export default function () {
  const { lang } = useData()

  const t = (key: string) => {
    return tr(lang.value, key)
  }

  return {
    t
  }
}
