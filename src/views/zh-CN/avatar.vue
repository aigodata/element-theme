<template>
  <section class="page-avatar">
    <h2 id="avatar-tou-xiang">
      <a href="#avatar-tou-xiang" aria-hidden="true" class="header-anchor">¶</a>
      Avatar 头像
    </h2>
    <p>用图标、图片或者字符的形式展示用户或事物信息。</p>

    <h3 id="ji-chu-yong-fa">
      <a href="#ji-chu-yong-fa" aria-hidden="true" class="header-anchor">¶</a>
      基础用法
    </h3>
    <p>通过 shape 和 size 设置头像的形状和大小。</p>
    <div class="demo-block demo-zh-CN demo-avatar">
      <div class="source">
        <el-row class="demo-avatar demo-basic">
          <el-col :span="12">
            <div class="sub-title">circle</div>
            <div class="demo-basic--circle">
              <div class="block"><el-avatar :size="50" :src="circleUrl"></el-avatar></div>
              <div class="block" v-for="size in sizeList" :key="size">
                <el-avatar :size="size" :src="circleUrl"></el-avatar>
              </div>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="sub-title">square</div>
            <div class="demo-basic--circle">
              <div class="block"><el-avatar shape="square" :size="50" :src="squareUrl"></el-avatar></div>
              <div class="block" v-for="size in sizeList" :key="size">
                <el-avatar shape="square" :size="size" :src="squareUrl"></el-avatar>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>

    <h3 id="zhan-shi-lei-xing">
      <a href="#zhan-shi-lei-xing" aria-hidden="true" class="header-anchor">¶</a>
      展示类型
    </h3>
    <p>支持三种类型：图标、图片和字符</p>
    <div class="demo-block demo-zh-CN demo-avatar">
      <div class="source">
        <div class="demo-type">
          <div>
            <el-avatar icon="el-icon-user-solid"></el-avatar>
          </div>
          <div>
            <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
          </div>
          <div>
            <el-avatar> user </el-avatar>
          </div>
        </div>
      </div>
    </div>

    <h3 id="tu-pian-jia-zai-shi-bai-de-fallback-xing-wei">
      <a href="#tu-pian-jia-zai-shi-bai-de-fallback-xing-wei" aria-hidden="true" class="header-anchor">¶</a>
      图片加载失败的 fallback 行为
    </h3>
    <p>当展示类型为图片的时候，图片加载失败的 fallback 行为</p>
    <div class="demo-block demo-zh-CN demo-avatar">
      <div class="source">
        <div class="demo-type">
          <el-avatar :size="60" src="https://empty" @error="errorHandler">
            <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"/>
          </el-avatar>
        </div>
      </div>
    </div>

    <h3 id="tu-pian-ru-he-gua-ying-rong-qi-kuang">
      <a href="#tu-pian-ru-he-gua-ying-rong-qi-kuang" aria-hidden="true" class="header-anchor">¶</a>
      图片如何适应容器框
    </h3>
    <p>当展示类型为图片的时候，使用 fit 属性定义图片如何适应容器框，同原生 object-fit。</p>
    <div class="demo-block demo-zh-CN demo-avatar">
      <div class="source">
        <div class="demo-fit">
          <div class="block" v-for="fit in fits" :key="fit">
            <span class="title">{{ fit }}</span>
            <el-avatar shape="square" :size="100" :fit="fit" :src="url"></el-avatar>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'avatar',
    data() {
      return {
        circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
        squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
        sizeList: ["large", "medium", "small"],
        fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
      }
    },
    methods: {
      errorHandler() {
        return true
      }
    }
  }
</script>

<style>
  .page-avatar {

  }
</style>
