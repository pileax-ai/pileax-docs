import { useData, useRouter } from 'vitepress'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/zh-cn'
import 'dayjs/locale/en'
dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(relativeTime)

import { tr } from '../i18n'

export default function () {
  const { lang } = useData()
  const router = useRouter()

  const t = (key: string) => {
    return tr(lang.value, key)
  }

  const isExternal = (url: string): boolean => {
    return /^(https?:)?\/\//.test(url)
  }

  const openUrl = (path: string, target = '') => {
    if (target === '_blank' || isExternal(path)) {
      window.open(path, target || '_self')
    } else {
      if (lang.value === 'zh' && !path.startsWith('/zh')) {
        path = '/zh' + path
      }
      router.go(path)
    }
  }

  const timeMulti = (time: string, format = 'YYYY/MM/DD HH:mm:ss') => {

    const d = () => {
      return dayjs.utc(time).tz('Asia/Shanghai')
    }

    return {
      fromNow: () => {
        const locale = lang.value.includes('zh') ? 'zh-cn' : 'en'
        return d().locale(locale).fromNow()
      },
      timestamp: () => {
        const locale = lang.value.includes('zh') ? 'zh-cn' : 'en'
        return d().locale(locale).format(format)
      }
    }
  }

  return {
    lang,
    t,
    openUrl,
    timeMulti
  }
}
