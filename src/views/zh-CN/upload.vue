<template>
  <section class="page-upload">
    <h2 id="upload-shang-chuan">
      <a href="#upload-shang-chuan" aria-hidden="true" class="header-anchor">¶</a>
      Upload 上传
    </h2>
    <p>通过点击或者拖拽上传文件</p>

    <h3 id="dian-ji-shang-chuan">
      <a href="#dian-ji-shang-chuan" aria-hidden="true" class="header-anchor">¶</a>
      点击上传
    </h3>
    <div class="demo-block demo-zh-CN demo-upload">
      <div class="source">
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :before-remove="beforeRemove"
          multiple
          :limit="3"
          :on-exceed="handleExceed"
          :file-list="fileList">
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </div>
    </div>

    <h3 id="yong-hu-tou-xiang-shang-chuan">
      <a href="#yong-hu-tou-xiang-shang-chuan" aria-hidden="true" class="header-anchor">¶</a>
      用户头像上传
    </h3>
    <p>使用 before-upload 限制用户上传的图片格式和大小。</p>
    <div class="demo-block demo-zh-CN demo-upload">
      <div class="source">
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </div>
    </div>

    <h3 id="zhao-pian-qiang">
      <a href="#zhao-pian-qiang" aria-hidden="true" class="header-anchor">¶</a>
      照片墙
    </h3>
    <p>使用 list-type 属性来设置文件列表的样式。</p>
    <div class="demo-block demo-zh-CN demo-upload">
      <div class="source">
        <el-upload
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove">
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
      </div>
    </div>

    <h3 id="wen-jian-suo-lue-tu">
      <a href="#wen-jian-suo-lue-tu" aria-hidden="true" class="header-anchor">¶</a>
      文件缩略图
    </h3>
    <p>使用 scoped-slot 去设置缩略图模版。</p>
    <div class="demo-block demo-zh-CN demo-upload">
      <div class="source">
        <el-upload
          action="#"
          list-type="picture-card"
          :auto-upload="false">
          <i slot="default" class="el-icon-plus"></i>
          <div slot="file" slot-scope="{file}">
            <img
              class="el-upload-list__item-thumbnail"
              :src="file.url" alt=""
            >
            <span class="el-upload-list__item-actions">
        <span
          class="el-upload-list__item-preview"
          @click="handlePictureCardPreview(file)"
        >
          <i class="el-icon-zoom-in"></i>
        </span>
        <span
          v-if="!disabled"
          class="el-upload-list__item-delete"
          @click="handleDownload(file)"
        >
          <i class="el-icon-download"></i>
        </span>
        <span
          v-if="!disabled"
          class="el-upload-list__item-delete"
          @click="handleRemove(file)"
        >
          <i class="el-icon-delete"></i>
        </span>
      </span>
          </div>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
      </div>
    </div>

    <h3 id="tu-pian-lie-biao-suo-lue-tu">
      <a href="#tu-pian-lie-biao-suo-lue-tu" aria-hidden="true" class="header-anchor">¶</a>
      图片列表缩略图
    </h3>
    <div class="demo-block demo-zh-CN demo-upload">
      <div class="source">
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="fileList2"
          list-type="picture">
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </div>
    </div>

    <h3 id="shang-chuan-wen-jian-lie-biao-kong-zhi">
      <a href="#shang-chuan-wen-jian-lie-biao-kong-zhi" aria-hidden="true" class="header-anchor">¶</a>
      上传文件列表控制
    </h3>
    <p>通过 on-change 钩子函数来对列表进行控制</p>
    <div class="demo-block demo-zh-CN demo-upload">
      <div class="source">
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-change="handleChange"
          :file-list="fileList">
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </div>
    </div>

    <h3 id="tuo-zhuai-shang-chuan">
      <a href="#tuo-zhuai-shang-chuan" aria-hidden="true" class="header-anchor">¶</a>
      拖拽上传
    </h3>
    <div class="demo-block demo-zh-CN demo-upload">
      <div class="source">
        <el-upload
          class="upload-demo"
          drag
          action="https://jsonplaceholder.typicode.com/posts/"
          multiple>
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </div>
    </div>

    <h3 id="shou-dong-shang-chuan">
      <a href="#shou-dong-shang-chuan" aria-hidden="true" class="header-anchor">¶</a>
      手动上传
    </h3>
    <div class="demo-block demo-zh-CN demo-upload">
      <div class="source">
        <el-upload
          class="upload-demo"
          ref="upload"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="fileList"
          :auto-upload="false">
          <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
          <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </div>
    </div>

  </section>
</template>

<script>
  export default {
    name: 'upload',
    data() {
      return {
        // 文件缩略图
        disabled: false,
        // 点击上传
        fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'},
          {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
        // 用户头像上传
        imageUrl: '',
        // 照片墙
        dialogImageUrl: '',
        dialogVisible: false,
        // 图片列表缩略图
        fileList2: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'},
          {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
      }
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      },
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      submitUpload() {
        this.$refs.upload.submit();
      },
      handleChange(file, fileList) {
        this.fileList = fileList.slice(-3);
      },
      handleDownload(file) {
        console.log(file);
      }
    }
  }
</script>

<style scoped>
  .page-upload {

  }
</style>
