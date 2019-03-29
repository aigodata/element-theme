<template>
  <section class="page-carousel">
    <h2 id="carousel-zou-ma-deng">
      <a href="#carousel-zou-ma-deng" aria-hidden="true" class="header-anchor">¶</a>
      Carousel 走马灯
    </h2>
    <p>在有限空间内，循环播放同一类型的图片、文字等内容</p>

    <h3 id="ji-ben-yong-fa">
      <a href="#ji-ben-yong-fa" aria-hidden="true" class="header-anchor">¶</a>
      基本用法
    </h3>
    <p>适用广泛的基础用法</p>
    <div class="demo-block demo-zh-CN demo-carousel">
      <div class="source">
        <div class="block">
          <span class="demonstration">默认 Hover 指示器触发</span>
          <el-carousel height="150px">
            <el-carousel-item v-for="item in 4" :key="item">
              <h3>{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="block">
          <span class="demonstration">Click 指示器触发</span>
          <el-carousel trigger="click" height="150px">
            <el-carousel-item v-for="item in 4" :key="item">
              <h3>{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </div>

    <h3 id="zhi-shi-qi">
      <a href="#zhi-shi-qi" aria-hidden="true" class="header-anchor">¶</a>
      指示器
    </h3>
    <p>可以将指示器的显示位置设置在容器外部</p>
    <div class="demo-block demo-zh-CN demo-carousel">
      <div class="source">
        <el-carousel indicator-position="outside">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3>{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>

    <h3 id="qie-huan-jian-tou">
      <a href="#qie-huan-jian-tou" aria-hidden="true" class="header-anchor">¶</a>
      切换箭头
    </h3>
    <p>可以设置切换箭头的显示时机</p>
    <div class="demo-block demo-zh-CN demo-carousel">
      <div class="source">
        <el-carousel :interval="5000" arrow="always">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3>{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>

    <h3 id="qia-pian-hua">
      <a href="#qia-pian-hua" aria-hidden="true" class="header-anchor">¶</a>
      卡片化
    </h3>
    <p>当页面宽度方向空间空余，但高度方向空间匮乏时，可使用卡片风格</p>
    <div class="demo-block demo-zh-CN demo-carousel">
      <div class="source">
        <el-carousel :interval="4000" type="card" height="200px">
          <el-carousel-item v-for="item in 6" :key="item">
            <h3>{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'carousel',
    data() {
      return {

      }
    }
  }
</script>

<style scoped>
  .page-carousel {

  }

  .page-carousel .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .page-carousel .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .page-carousel .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .page-carousel .demo-carousel .block {
    padding: 30px;
    text-align: center;
    border-right: 1px solid #eff2f6;
    display: inline-block;
    width: 50%;
    box-sizing: border-box;
  }

  .page-carousel .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .page-carousel .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .page-carousel .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
