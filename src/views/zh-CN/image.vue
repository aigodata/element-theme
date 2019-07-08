<template>
  <section class="page-image content element-doc content">
    <h2 id="image-tu-pian">
      <a href="#image-tu-pian" aria-hidden="true" class="header-anchor">¶</a>
      Image 图片
    </h2>

    <p>图片容器，在保留原生img的特性下，支持懒加载，自定义占位、加载失败等</p>

    <h3 id="ji-chu-yong-fa">
      <a href="#ji-chu-yong-fa" aria-hidden="true" class="header-anchor">¶</a>
      基础用法
    </h3>
    <div class="demo-block demo-zh-CN demo-image">
      <div class="source">
        <div class="demo-image">
          <div class="block" v-for="fit in fits" :key="fit">
            <span class="demonstration">{{ fit }}</span>
            <el-image
              style="width: 100px; height: 100px"
              :src="url"
              :fit="fit"></el-image>
          </div>
        </div>
      </div>
    </div>

    <h3 id="zhan-wei-nei-rong">
      <a href="#zhan-wei-nei-rong" aria-hidden="true" class="header-anchor">¶</a>
      占位内容
    </h3>
    <div class="demo-block demo-zh-CN demo-image">
      <div class="source">
        <div class="demo-image__placeholder">
          <div class="block">
            <span class="demonstration">默认</span>
            <el-image :src="src"></el-image>
          </div>
          <div class="block">
            <span class="demonstration">自定义</span>
            <el-image :src="src">
              <div slot="placeholder" class="image-slot">
                加载中<span class="dot">...</span>
              </div>
            </el-image>
          </div>
        </div>
      </div>
    </div>

    <h3 id="jia-zai-shi-bai">
      <a href="#jia-zai-shi-bai" aria-hidden="true" class="header-anchor">¶</a>
      加载失败
    </h3>
    <div class="demo-block demo-zh-CN demo-image">
      <div class="source">
        <div class="demo-image__error">
          <div class="block">
            <span class="demonstration">默认</span>
            <el-image></el-image>
          </div>
          <div class="block">
            <span class="demonstration">自定义</span>
            <el-image>
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
          </div>
        </div>
      </div>
    </div>

    <h3 id="lan-jia-zai">
      <a href="#lan-jia-zai" aria-hidden="true" class="header-anchor">¶</a>
      懒加载
    </h3>
    <div class="demo-block demo-zh-CN demo-image">
      <div class="source">
        <div class="demo-image__lazy">
          <el-image v-for="url in urls" :key="url" :src="url" lazy></el-image>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
	export default {
		name: "image",
    data() {
      return {
        fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
        urls: [
          'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
          'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
          'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
          'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
          'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
          'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
          'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg'
        ]
      }
    }
	}
</script>

<style>

</style>
