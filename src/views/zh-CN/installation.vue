<template>
  <section class="content"><h2 id="an-zhuang"><a
    href="http://element-cn.eleme.io/#/zh-CN/component/installationhttp://element-cn.eleme.io/#/zh-CN/component/installationhttp://element-cn.eleme.io/#/zh-CN/component/installationhttp://element-cn.eleme.io/#/zh-CN/component/installationhttp://element-cn.eleme.io/#/zh-CN/component/installationhttp://element-cn.eleme.io/#/zh-CN/component/installationhttp://element-cn.eleme.io/#/zh-CN/component/installationhttp://element-cn.eleme.io/#/zh-CN/component/installationhttp://element-cn.eleme.io/#/zh-CN/component/installation#an-zhuang"
    aria-hidden="true" class="header-anchor">¶</a> 安装</h2>
    <h3 id="npm-an-zhuang"><a
      href="http://element-cn.eleme.io/#/zh-CN/component/installationhttp://element-cn.eleme.io/#/zh-CN/component/installationhttp://element-cn.eleme.io/#/zh-CN/component/installationhttp://element-cn.eleme.io/#/zh-CN/component/installationhttp://element-cn.eleme.io/#/zh-CN/component/installationhttp://element-cn.eleme.io/#/zh-CN/component/installationhttp://element-cn.eleme.io/#/zh-CN/component/installationhttp://element-cn.eleme.io/#/zh-CN/component/installationhttp://element-cn.eleme.io/#/zh-CN/component/installation#npm-an-zhuang"
      aria-hidden="true" class="header-anchor">¶</a> npm 安装</h3>
    <p>推荐使用 npm 的方式安装，它能更好地和 <a href="https://webpack.js.org/">webpack</a> 打包工具配合使用。</p>
    <pre><code class="hljs language-shell">npm i element-ui -S
</code></pre>
    <h3 id="cdn"><a
      href="http://element-cn.eleme.io/#/zh-CN/component/installationhttp://element-cn.eleme.io/#/zh-CN/component/installationhttp://element-cn.eleme.io/#/zh-CN/component/installationhttp://element-cn.eleme.io/#/zh-CN/component/installationhttp://element-cn.eleme.io/#/zh-CN/component/installationhttp://element-cn.eleme.io/#/zh-CN/component/installationhttp://element-cn.eleme.io/#/zh-CN/component/installationhttp://element-cn.eleme.io/#/zh-CN/component/installationhttp://element-cn.eleme.io/#/zh-CN/component/installation#cdn"
      aria-hidden="true" class="header-anchor">¶</a> CDN</h3>
    <p>目前可以通过 <a href="https://unpkg.com/element-ui/">unpkg.com/element-ui</a> 获取到最新版本的资源，在页面上引入 js 和 css 文件即可开始使用。</p>
    <pre><code class="hljs language-html"><span class="hljs-comment">&lt;!-- 引入样式 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">link</span> <span class="hljs-attr">rel</span>=<span
  class="hljs-string">"stylesheet"</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"https://unpkg.com/element-ui/lib/theme-chalk/index.css"</span>&gt;</span>
<span class="hljs-comment">&lt;!-- 引入组件库 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span
  class="hljs-string">"https://unpkg.com/element-ui/lib/index.js"</span>&gt;</span><span class="undefined"></span><span
        class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
    <div class="tip"><p>我们建议使用 CDN 引入 Element 的用户在链接地址上锁定版本，以免将来 Element 升级时受到非兼容性更新的影响。锁定版本的方法请查看 <a
      href="https://unpkg.com">unpkg.com</a>。</p></div>
    <h3 id="hello-world"><a
      href="http://element-cn.eleme.io/#/zh-CN/component/installationhttp://element-cn.eleme.io/#/zh-CN/component/installationhttp://element-cn.eleme.io/#/zh-CN/component/installationhttp://element-cn.eleme.io/#/zh-CN/component/installationhttp://element-cn.eleme.io/#/zh-CN/component/installationhttp://element-cn.eleme.io/#/zh-CN/component/installationhttp://element-cn.eleme.io/#/zh-CN/component/installationhttp://element-cn.eleme.io/#/zh-CN/component/installationhttp://element-cn.eleme.io/#/zh-CN/component/installation#hello-world"
      aria-hidden="true" class="header-anchor">¶</a> Hello world</h3>
    <p>通过 CDN 的方式我们可以很容易地使用 Element 写出一个 Hello world 页面。<a href="https://jsfiddle.net/hzfpyvg6/14/">在线演示</a></p>
    <iframe width="100%" height="600" src="//jsfiddle.net/hzfpyvg6/1213/embedded/html,result/" allowpaymentrequest=""
            allowfullscreen="allowfullscreen" frameborder="0"></iframe>
    <p>如果是通过 npm 安装，并希望配合 webpack 使用，请阅读下一节：<a href="/#/zh-CN/component/quickstart">快速上手</a>。</p></section>
</template>
