# element-theme

基于ElementUI的定制主题

## 正常安装

      npm i aigodata-element-theme

## 代码地址

      https://github.com/aigodata/element-theme


## 演示地址(最新版)

      https://aigodata.github.io/element-theme
      
## 切换版本

      git clone 工程  
      使用 git 切换版本
      
## 寻找element-ui的css

      /element-theme/node_modules/element-ui
      
      https://github.com/ElementUI/theme-default
      
## npm发布
      0. npm run publish  
         npm run build

      1. npm login
        输入用户名, 密码, 邮箱(可能需要登录邮箱验证)
        
      2. npm publish --access=public
      
        发布npm
      
      3. git tag -a v2.10.1 -m 'my version 2.10.1'
        
        打版本
        
      4. git push --tags
      
        提交到github
      

##  更新element-ui

      npm uninstall element-ui
      npm install element-ui --save
