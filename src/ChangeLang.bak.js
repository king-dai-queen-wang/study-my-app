
import i18_locales from './u/index';
import intl from 'react-intl-universal';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
const defaultLang = Cookies.get('xt-lang') || 'zh_CN';
export function initI18n() {
  intl.init({
    currentLocale: defaultLang,
    locales: i18_locales,
  }).then(() => {
    Cookies.set('xt-lang', defaultLang);
  })
}

export function useI18n(defaultClientLang) {
  const [lang, setLang] = useState(defaultClientLang || defaultLang)
  useEffect(() => {
    intl.init({
      currentLocale: lang,
      locales: i18_locales,
    }).then(() => {
      Cookies.set('xt-lang', lang);
    })
  }, [lang])
  const changeLanguage = function() {
    let targetLang = '';
    if(lang === 'zh_CN') {
        targetLang = 'en_US'
    } else if(lang === 'en_US') {
        targetLang = 'zh_HK'
    } else if(lang === 'zh_HK') {
        targetLang = 'zh_CN'
    } else {
      targetLang = 'zh_CN'
    }
    
    setLang(targetLang)
    
  }
  return {lang, setLang, changeLanguage}
}
