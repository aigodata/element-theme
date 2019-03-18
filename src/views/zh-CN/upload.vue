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

  </section>
</template>

<script>
  export default {
    name: 'upload',
    data() {
      return {
        // 点击上传
        fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
        // 用户头像上传
        imageUrl: '',
        // 照片墙
        dialogImageUrl: '',
        dialogVisible: false,
        // 图片列表缩略图
        fileList2: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
        //
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
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      }
    }
  }
</script>

<style scoped>
  .page-upload {

  }
</style>
