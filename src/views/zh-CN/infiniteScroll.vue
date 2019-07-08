<template>
  <section class="page-infiniteScroll content element-doc content">
    <h2 id="infinitescroll-wu-xian-gun-dong">
      <a href="#infinitescroll-wu-xian-gun-dong" aria-hidden="true" class="header-anchor">¶</a>
      InfiniteScroll 无限滚动
    </h2>

    <p>滚动至底部时，加载更多数据。</p>

    <h3 id="ji-chu-yong-fa">
      <a href="#ji-chu-yong-fa" aria-hidden="true" class="header-anchor">¶</a>
      基础用法
    </h3>
    <p>在要实现滚动加载的列表上上添加v-infinite-scroll，并赋值相应的加载方法，可实现滚动到底部时自动执行加载方法。</p>
    <div class="demo-block demo-zh-CN demo-backtop">
      <div class="source">
        <div>
          <ul class="infinite-list" v-infinite-scroll="load">
            <li v-for="i in count" class="infinite-list-item">{{ i }}</li>
          </ul>
        </div>
      </div>
    </div>

    <h3 id="jin-yong-jia-zai">
      <a href="#jin-yong-jia-zai" aria-hidden="true" class="header-anchor">¶</a>
      禁用加载
    </h3>
    <div class="demo-block demo-zh-CN demo-backtop">
      <div class="source">
        <div class="infinite-list-wrapper">
          <ul
            class="list"
            v-infinite-scroll="load"
            infinite-scroll-disabled="disabled">
            <li v-for="i in count01" class="list-item">{{ i }}</li>
          </ul>
          <p v-if="loading">加载中...</p>
          <p v-if="noMore">没有更多了</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
	export default {
		name: "infiniteScroll",
    data () {
      return {
        count: 0,
        // 禁用
        count01: 10,
        loading: false
      }
    },
    computed: {
      noMore () {
        return this.count >= 20
      },
      disabled () {
        return this.loading || this.noMore
      }
    },
    methods: {
      load () {
        this.count += 2;
        // 禁用
        this.loading = true
        setTimeout(() => {
          this.count01 += 2
          this.loading = false
        }, 2000)
      }
    }
	}
</script>

<style>
  .page-infiniteScroll {

  }
</style>
