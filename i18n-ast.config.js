module.exports = {
  entry: "./src", 
  output: "./src/u",
  exclude: [
    "**/node_modules/**/*",
    "ChangeLang.js"
  ],
  locales: 'zh_CN,en_US,zh_HK',
  excelName: 'collect.xlsx',
  autoTranslate: {
    enable: false,
    name: "BaiduTranslate",
    i18nMapping: {
      'zh_CN': 'zh',
      'zh_HK': 'cht',
      'en_US': 'en',
    },
  }
}