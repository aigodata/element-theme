<template>
  <section class="page-steps">
    <h2 id="steps-bu-zou-tiao">
      <a href="#steps-bu-zou-tiao" aria-hidden="true" class="header-anchor">¶</a>
      Steps 步骤条
    </h2>
    <p>引导用户按照流程完成任务的分步导航条，可根据实际应用场景设定步骤，步骤不得少于 2 步。</p>

    <h3 id="ji-ben-yong-fa">
      <a href="#ji-ben-yong-fa" aria-hidden="true" class="header-anchor">¶</a>
      基本用法
    </h3>
    <p>简单的步骤条。</p>
    <div class="demo-block demo-zh-CN demo-steps">
      <div class="source">
        <el-steps :active="active" finish-status="success">
          <el-step title="步骤 1"></el-step>
          <el-step title="步骤 2"></el-step>
          <el-step title="步骤 3"></el-step>
        </el-steps>

        <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
      </div>
    </div>

    <h3 id="han-zhuang-tai-bu-zou-tiao">
      <a href="#han-zhuang-tai-bu-zou-tiao" aria-hidden="true" class="header-anchor">¶</a>
      含状态步骤条
    </h3>
    <p>每一步骤显示出该步骤的状态。</p>
    <div class="demo-block demo-zh-CN demo-steps">
      <div class="source">
        <el-steps :space="200" :active="1" finish-status="success">
          <el-step title="已完成"></el-step>
          <el-step title="进行中"></el-step>
          <el-step title="步骤 3"></el-step>
        </el-steps>
      </div>
    </div>

    <h3 id="you-miao-shu-de-bu-zou-tiao">
      <a href="#you-miao-shu-de-bu-zou-tiao" aria-hidden="true" class="header-anchor">¶</a>
      有描述的步骤条
    </h3>
    <p>每个步骤有其对应的步骤状态描述。</p>
    <div class="demo-block demo-zh-CN demo-steps">
      <div class="source">
        <el-steps :active="1">
          <el-step title="步骤 1" description="这是一段很长很长很长的描述性文字"></el-step>
          <el-step title="步骤 2" description="这是一段很长很长很长的描述性文字"></el-step>
          <el-step title="步骤 3" description="这段就没那么长了"></el-step>
        </el-steps>
      </div>
    </div>

    <h3 id="ju-zhong-de-bu-zou-tiao">
      <a href="#ju-zhong-de-bu-zou-tiao" aria-hidden="true" class="header-anchor">¶</a>
      居中的步骤条
    </h3>
    <p>标题和描述都将居中。</p>
    <div class="demo-block demo-zh-CN demo-steps">
      <div class="source">
        <el-steps :active="2" align-center>
          <el-step title="步骤1" description="这是一段很长很长很长的描述性文字"></el-step>
          <el-step title="步骤2" description="这是一段很长很长很长的描述性文字"></el-step>
          <el-step title="步骤3" description="这是一段很长很长很长的描述性文字"></el-step>
          <el-step title="步骤4" description="这是一段很长很长很长的描述性文字"></el-step>
        </el-steps>
      </div>
    </div>

    <h3 id="dai-tu-biao-de-bu-zou-tiao">
      <a href="#dai-tu-biao-de-bu-zou-tiao" aria-hidden="true" class="header-anchor">¶</a>
      带图标的步骤条
    </h3>
    <p>标题和描述都将居中。</p>
    <div class="demo-block demo-zh-CN demo-steps">
      <div class="source">
        <el-steps :active="1">
          <el-step title="步骤 1" icon="el-icon-edit"></el-step>
          <el-step title="步骤 2" icon="el-icon-upload"></el-step>
          <el-step title="步骤 3" icon="el-icon-picture"></el-step>
        </el-steps>
      </div>
    </div>

    <h3 id="shu-shi-bu-zou-tiao">
      <a href="#shu-shi-bu-zou-tiao" aria-hidden="true" class="header-anchor">¶</a>
      竖式步骤条
    </h3>
    <p>竖直方向的步骤条。</p>
    <div class="demo-block demo-zh-CN demo-steps">
      <div class="source">
        <div style="height: 300px;">
          <el-steps direction="vertical" :active="1">
            <el-step title="步骤 1"></el-step>
            <el-step title="步骤 2"></el-step>
            <el-step title="步骤 3" description="这是一段很长很长很长的描述性文字"></el-step>
          </el-steps>
        </div>
      </div>
    </div>

    <h3 id="jian-ji-feng-ge-de-bu-zou-tiao">
      <a href="#jian-ji-feng-ge-de-bu-zou-tiao" aria-hidden="true" class="header-anchor">¶</a>
      简洁风格的步骤条
    </h3>
    <p>设置 simple 可应用简洁风格，该条件下 align-center / description / direction / space 都将失效。</p>
    <div class="demo-block demo-zh-CN demo-steps">
      <div class="source">
        <el-steps :active="1" simple>
          <el-step title="步骤 1" icon="el-icon-edit"></el-step>
          <el-step title="步骤 2" icon="el-icon-upload"></el-step>
          <el-step title="步骤 3" icon="el-icon-picture"></el-step>
        </el-steps>

        <el-steps :active="1" finish-status="success" simple style="margin-top: 20px">
          <el-step title="步骤 1" ></el-step>
          <el-step title="步骤 2" ></el-step>
          <el-step title="步骤 3" ></el-step>
        </el-steps>

      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'steps',
    data() {
      return {
        // 基本用法
        active: 0
      }
    },
    methods: {
      next() {
        if (this.active++ > 2) this.active = 0;
      }
    }
  }
</script>

<style scoped>
  .page-steps {

  }
</style>
