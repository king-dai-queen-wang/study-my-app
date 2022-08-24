
import i18_locales from './m/index';
import intl from 'react-intl-universal';
import Cookies from 'js-cookie';

export function initI18n(initLang) {
  initLang && Cookies.set('xt-lang', initLang);
  const lang = initLang || Cookies.get('xt-lang') || 'en_US';
  intl.init({
    currentLocale: lang,
    locales: i18_locales,
  })
  intl.changeLanguage = function(lang) {
    Cookies.set('xt-lang', lang);
    window.location.reload();
  }
}

export const Language = () => {
    const lang = Cookies.get('xt-lang');
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
    return <button onClick={() => intl.changeLanguage(targetLang)}>切换语言</button>
}