import KiwiIntl from 'kiwi-intl';
import Cookies from 'js-cookie';
import * as en_US from './langs/en-US/index.ts';
import * as zh_CN from './langs/zh-CN/index.ts';
import  * as zh_TW from './langs/zh-TW/index.ts';

const kiwiIntl = KiwiIntl.init('en-UK', {
  'en-US': en_US,
  'zh-CN': zh_CN,
  'zh-TW': zh_TW,
});


export const Language = () => {
    const lang = Cookies.get('xt-lang');
    let targetLang = '';
    if(lang === 'zh-CN') {
        targetLang = 'en-US'
    } else if(lang === 'en-US') {
        targetLang = 'zh-HK'
    } else if(lang === 'zh-HK') {
        targetLang = 'zh-CN'
    } else {
      targetLang = 'zh-CN'
    }
    return <button onClick={() => kiwiIntl.setLang(targetLang)}>切换语言</button>
}