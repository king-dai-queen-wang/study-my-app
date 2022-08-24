module.exports = {
  entry: "./src", 
  // entry: "/Users/david/Desktop/projects/mfe-user-fund/shared/containers/App/Dashboard/DashboardHome", // ! PC
  // !APP:
  // entry: [
  //   "/Users/david/Desktop/projects/atta-app/src/navigations/Register/",
  //   "/Users/david/Desktop/projects/atta-app/src/navigations/User/"
  // ],
  output: "./src/u",
  exclude: [
    "**/node_modules/**/*",
    // ! pc 未解决下面3个报错
    "components/Header/LogoWithPlatformExchange/index.tsx",
    "ChangeLang.js"
  ],
  // randomFuc: (filePath) => `${Math.random().toString(36).substr(2)}`,
  locales: 'zh_CN,en_US,zh_HK',
  excelName: 'collect.xlsx',
  unpack: {
    excelName: 'collect.xlsx',
    entry: "./src/u", // 解析的excel 的入口， 不写默认是外面配置项的output
    output: "./src/m", // 可选， 不写的话默认外面配置项的output,会覆盖原来的翻译文件
  },
  autoTranslate: {
    enable: true,
    name: "BaiduTranslate",
    i18nMapping: {
      'zh_CN': 'zh',
      'zh_HK': 'cht',
      'en_US': 'en',
    },
  }
}