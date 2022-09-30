
import I18N from 'src/utils/I18N';
const Demo01 = () => {
    const a2 = I18N.pages.Demo01.quanQiuShouKuanJi2
    const obj = { test: I18N.pages.Demo01.jiChuBanYongJiu };
    const shareData = {
      title: I18N.pages.Demo01.mianWJieHuiE,
      link: `${a2}://`,
      desc: I18N.pages.Demo01.quanQiuShouKuanJi,
      imgUrl: `${a2}/images/figure/thumbnail.png`,
    }
    return <>
            <div>{I18N.pages.Demo01.xTRAN}</div>
            <p>
                {I18N.pages.Demo01.gaiShiYongTiaoKuan}</p>
    </>
  }

export default Demo01