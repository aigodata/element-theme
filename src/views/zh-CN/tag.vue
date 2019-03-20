<template>
  <section class="page-tag">
    <h2 id="tag-biao-qian">
      <a href="#tag-biao-qian" aria-hidden="true" class="header-anchor">¶</a>
      Tag 标签
    </h2>
    <p>用于标记和选择。</p>

    <h3 id="ji-chu-yong-fa">
      <a href="#ji-chu-yong-fa" aria-hidden="true" class="header-anchor">¶</a>
      基础用法
    </h3>
    <div class="demo-block demo-zh-CN demo-tag">
      <div class="source">
        <el-tag>标签一</el-tag>
        <el-tag type="success">标签二</el-tag>
        <el-tag type="info">标签三</el-tag>
        <el-tag type="warning">标签四</el-tag>
        <el-tag type="danger">标签五</el-tag>
      </div>
    </div>

    <h3 id="ke-yi-chu-biao-qian">
      <a href="#ke-yi-chu-biao-qian" aria-hidden="true" class="header-anchor">¶</a>
      可移除标签
    </h3>
    <div class="demo-block demo-zh-CN demo-tag">
      <div class="source">
        <el-tag
          v-for="tag in tags"
          :key="tag.name"
          closable
          :type="tag.type">
          {{tag.name}}
        </el-tag>
      </div>
    </div>

    <h3 id="dong-tai-bian-ji-biao-qian">
      <a href="#dong-tai-bian-ji-biao-qian" aria-hidden="true" class="header-anchor">¶</a>
      动态编辑标签
    </h3>
    <div class="demo-block demo-zh-CN demo-tag">
      <div class="source">
        <el-tag
          :key="tag"
          v-for="tag in dynamicTags"
          closable
          :disable-transitions="false"
          @close="handleClose(tag)">
          {{tag}}
        </el-tag>
        <el-input
          class="input-new-tag"
          v-if="inputVisible"
          v-model="inputValue"
          ref="saveTagInput"
          size="small"
          @keyup.enter.native="handleInputConfirm"
          @blur="handleInputConfirm"
        >
        </el-input>
        <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
      </div>
    </div>

    <h3 id="bu-tong-chi-cun">
      <a href="#bu-tong-chi-cun" aria-hidden="true" class="header-anchor">¶</a>
      动态编辑标签
    </h3>
    <div class="demo-block demo-zh-CN demo-tag">
      <div class="source">
        <el-tag closable>默认标签</el-tag>
        <el-tag size="medium" closable>中等标签</el-tag>
        <el-tag size="small" closable>小型标签</el-tag>
        <el-tag size="mini" closable>超小标签</el-tag>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'tag',
    data() {
      return {
        // 可移除标签
        tags: [
          { name: '标签一', type: '' },
          { name: '标签二', type: 'success' },
          { name: '标签三', type: 'info' },
          { name: '标签四', type: 'warning' },
          { name: '标签五', type: 'danger' }
        ],
        // 动态编辑标签
        dynamicTags: ['标签一', '标签二', '标签三'],
        inputVisible: false,
        inputValue: ''
      }
    },
    methods: {
      handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },

      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },

      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.dynamicTags.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
      }
    }
  }
</script>

<style scoped>
  .page-tag {

  }

  .page-tag .demo-block.demo-tag .el-tag+.el-tag {
    margin-left: 10px;
  }

  .page-tag .demo-block.demo-tag .button-new-tag {
    margin-left: 10px;
  }

  .page-tag .demo-block.demo-tag .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
</style>
