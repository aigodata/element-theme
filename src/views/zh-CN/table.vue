<template>
  <section class="page-table">
    <h2 id="table-biao-ge">
      <a href="#table-biao-ge" aria-hidden="true" class="header-anchor">¶</a>
      Table 表格
    </h2>
    <p>用于展示多条结构类似的数据，可对数据进行排序、筛选、对比或其他自定义操作。</p>

    <h3 id="ji-chu-biao-ge">
      <a href="#ji-chu-biao-ge" aria-hidden="true" class="header-anchor">¶</a>
      基础表格
    </h3>
    <p>基础的表格展示用法。</p>
    <div class="demo-block demo-zh-CN demo-table">
      <div class="source">
        <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            prop="date"
            label="日期"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址">
          </el-table-column>
        </el-table>
      </div>
    </div>

    <h3 id="dai-ban-ma-wen-biao-ge">
      <a href="#dai-ban-ma-wen-biao-ge" aria-hidden="true" class="header-anchor">¶</a>
      带斑马纹表格
    </h3>
    <p>使用带斑马纹的表格，可以更容易区分出不同行的数据。</p>
    <div class="demo-block demo-zh-CN demo-table">
      <div class="source">
        <el-table
          :data="tableData"
          stripe
          style="width: 100%">
          <el-table-column
            prop="date"
            label="日期"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址">
          </el-table-column>
        </el-table>
      </div>
    </div>

    <h3 id="dai-bian-kuang-biao-ge">
      <a href="#dai-bian-kuang-biao-ge" aria-hidden="true" class="header-anchor">¶</a>
      带边框表格
    </h3>
    <div class="demo-block demo-zh-CN demo-table">
      <div class="source">
        <el-table
          :data="tableData"
          border
          style="width: 100%">
          <el-table-column
            prop="date"
            label="日期"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址">
          </el-table-column>
        </el-table>
      </div>
    </div>

    <h3 id="dai-zhuang-tai-biao-ge">
      <a href="#dai-zhuang-tai-biao-ge" aria-hidden="true" class="header-anchor">¶</a>
      带状态表格
    </h3>
    <p>可将表格内容 highlight 显示，方便区分「成功、信息、警告、危险」等内容。</p>
    <div class="demo-block demo-zh-CN demo-table">
      <div class="source">
        <el-table
          :data="tableData"
          style="width: 100%"
          :row-class-name="tableRowClassName">
          <el-table-column
            prop="date"
            label="日期"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址">
          </el-table-column>
        </el-table>
      </div>
    </div>

    <h3 id="gu-ding-biao-tou">
      <a href="#gu-ding-biao-tou" aria-hidden="true" class="header-anchor">¶</a>
      固定表头
    </h3>
    <p>纵向内容过多时，可选择固定表头。</p>
    <div class="demo-block demo-zh-CN demo-table">
      <div class="source">
        <el-table
          :data="tableData01"
          height="250"
          border
          style="width: 100%">
          <el-table-column
            prop="date"
            label="日期"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址">
          </el-table-column>
        </el-table>
      </div>
    </div>

    <h3 id="gu-ding-lie">
      <a href="#gu-ding-lie" aria-hidden="true" class="header-anchor">¶</a>
      固定列
    </h3>
    <p>横向内容过多时，可选择固定列。</p>
    <div class="demo-block demo-zh-CN demo-table">
      <div class="source">
        <el-table
          :data="tableData02"
          border
          style="width: 100%">
          <el-table-column
            fixed
            prop="date"
            label="日期"
            width="150">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="120">
          </el-table-column>
          <el-table-column
            prop="province"
            label="省份"
            width="120">
          </el-table-column>
          <el-table-column
            prop="city"
            label="市区"
            width="120">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址"
            width="300">
          </el-table-column>
          <el-table-column
            prop="zip"
            label="邮编"
            width="120">
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="100">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
              <el-button type="text" size="small">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>

    <h3 id="gu-ding-lie-he-biao-tou">
      <a href="#gu-ding-lie-he-biao-tou" aria-hidden="true" class="header-anchor">¶</a>
      固定列和表头
    </h3>
    <p>横纵内容过多时，可选择固定列和表头。</p>
    <div class="demo-block demo-zh-CN demo-table">
      <div class="source">
        <el-table
            :data="tableData01"
            style="width: 100%"
            height="250">
            <el-table-column
              fixed
              prop="date"
              label="日期"
              width="150">
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
              width="120">
            </el-table-column>
            <el-table-column
              prop="province"
              label="省份"
              width="120">
            </el-table-column>
            <el-table-column
              prop="city"
              label="市区"
              width="120">
            </el-table-column>
            <el-table-column
              prop="address"
              label="地址"
              width="300">
            </el-table-column>
            <el-table-column
              prop="zip"
              label="邮编"
              width="120">
            </el-table-column>
          </el-table>
      </div>
    </div>

    <h3 id="liu-ti-gao-du">
      <a href="#liu-ti-gao-du" aria-hidden="true" class="header-anchor">¶</a>
      流体高度
    </h3>
    <p>当数据量动态变化时，可以为 Table 设置一个最大高度。</p>
    <div class="demo-block demo-zh-CN demo-table">
      <div class="source">
        <el-table
            :data="tableData01"
            style="width: 100%"
            max-height="250">
            <el-table-column
              fixed
              prop="date"
              label="日期"
              width="150">
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
              width="120">
            </el-table-column>
            <el-table-column
              prop="province"
              label="省份"
              width="120">
            </el-table-column>
            <el-table-column
              prop="city"
              label="市区"
              width="120">
            </el-table-column>
            <el-table-column
              prop="address"
              label="地址"
              width="300">
            </el-table-column>
            <el-table-column
              prop="zip"
              label="邮编"
              width="120">
            </el-table-column>
            <el-table-column
              fixed="right"
              label="操作"
              width="120">
              <template slot-scope="scope">
                <el-button
                  @click.native.prevent="deleteRow(scope.$index, tableData)"
                  type="text"
                  size="small">
                  移除
                </el-button>
              </template>
            </el-table-column>
          </el-table>
      </div>
    </div>

    <h3 id="duo-ji-biao-tou">
      <a href="#duo-ji-biao-tou" aria-hidden="true" class="header-anchor">¶</a>
      多级表头
    </h3>
    <p>数据结构比较复杂的时候，可使用多级表头来展现数据的层次关系。</p>
    <div class="demo-block demo-zh-CN demo-table">
      <div class="source">
        <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            prop="date"
            label="日期"
            width="150">
          </el-table-column>
          <el-table-column label="配送信息">
            <el-table-column
              prop="name"
              label="姓名"
              width="120">
            </el-table-column>
            <el-table-column label="地址">
              <el-table-column
                prop="province"
                label="省份"
                width="120">
              </el-table-column>
              <el-table-column
                prop="city"
                label="市区"
                width="120">
              </el-table-column>
              <el-table-column
                prop="address"
                label="地址"
                width="300">
              </el-table-column>
              <el-table-column
                prop="zip"
                label="邮编"
                width="120">
              </el-table-column>
            </el-table-column>
          </el-table-column>
        </el-table>
      </div>
    </div>

    <h3 id="dan-xuan">
      <a href="#dan-xuan" aria-hidden="true" class="header-anchor">¶</a>
      单选
    </h3>
    <p>选择单行数据时使用色块表示。</p>
    <div class="demo-block demo-zh-CN demo-table">
      <div class="source">
        <el-table
          ref="singleTable"
          :data="tableData"
          highlight-current-row
          @current-change="handleCurrentChange"
          style="width: 100%">
          <el-table-column
            type="index"
            width="50">
          </el-table-column>
          <el-table-column
            property="date"
            label="日期"
            width="120">
          </el-table-column>
          <el-table-column
            property="name"
            label="姓名"
            width="120">
          </el-table-column>
          <el-table-column
            property="address"
            label="地址">
          </el-table-column>
        </el-table>
        <div style="margin-top: 20px">
          <el-button @click="setCurrent(tableData[1])">选中第二行</el-button>
          <el-button @click="setCurrent()">取消选择</el-button>
        </div>
      </div>
    </div>

    <h3 id="duo-xuan">
      <a href="#duo-xuan" aria-hidden="true" class="header-anchor">¶</a>
      多选
    </h3>
    <p>选择多行数据时使用 Checkbox。</p>
    <div class="demo-block demo-zh-CN demo-table">
      <div class="source">
        <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange">
          <el-table-column
            type="selection"
            width="55">
          </el-table-column>
          <el-table-column
            label="日期"
            width="120">
            <template slot-scope="scope">{{ scope.row.date }}</template>
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="120">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址"
            show-overflow-tooltip>
          </el-table-column>
        </el-table>
        <div style="margin-top: 20px">
          <el-button @click="toggleSelection([tableData[1], tableData[2]])">切换第二、第三行的选中状态</el-button>
          <el-button @click="toggleSelection()">取消选择</el-button>
        </div>
      </div>
    </div>

    <h3 id="pai-xu">
      <a href="#pai-xu" aria-hidden="true" class="header-anchor">¶</a>
      排序
    </h3>
    <p>对表格进行排序，可快速查找或对比数据。</p>
    <div class="demo-block demo-zh-CN demo-table">
      <div class="source">
        <el-table
          :data="tableData"
          style="width: 100%"
          :default-sort = "{prop: 'date', order: 'descending'}"
        >
          <el-table-column
            prop="date"
            label="日期"
            sortable
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            sortable
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址"
            :formatter="formatter">
          </el-table-column>
        </el-table>
      </div>
    </div>

    <h3 id="shai-xuan">
      <a href="#shai-xuan" aria-hidden="true" class="header-anchor">¶</a>
      筛选
    </h3>
    <p>对表格进行筛选，可快速查找到自己想看的数据。</p>
    <div class="demo-block demo-zh-CN demo-table">
      <div class="source">
        <el-button @click="resetDateFilter">清除日期过滤器</el-button>
        <el-button @click="clearFilter">清除所有过滤器</el-button>
        <div style="height: 20px"></div>
        <el-table
          ref="filterTable"
          :data="tableData03"
          style="width: 100%">
          <el-table-column
            prop="date"
            label="日期"
            sortable
            width="180"
            column-key="date"
            :filters="[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]"
            :filter-method="filterHandler"
          >
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址"
            :formatter="formatter">
          </el-table-column>
          <el-table-column
            prop="tag"
            label="标签"
            width="100"
            :filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]"
            :filter-method="filterTag"
            filter-placement="bottom-end">
            <template slot-scope="scope">
              <el-button
                size="mini" plain :type="scope.row.tag === '家' ? 'primary' : 'success'"
                disable-transitions>{{scope.row.tag}}</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>

    <h3 id="zi-ding-yi-lie-mo-ban">
      <a href="#zi-ding-yi-lie-mo-ban" aria-hidden="true" class="header-anchor">¶</a>
      自定义列模板
    </h3>
    <p>自定义列的显示内容，可组合其他组件使用。</p>
    <div class="demo-block demo-zh-CN demo-table">
      <div class="source">
        <el-table
          :data="tableData04"
          style="width: 100%">
          <el-table-column
            label="日期"
            width="180">
            <template slot-scope="scope">
              <i class="el-icon-time"></i>
              <span style="margin-left: 10px">{{ scope.row.date }}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="姓名"
            width="180">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top">
                <p>姓名: {{ scope.row.name }}</p>
                <p>住址: {{ scope.row.address }}</p>
                <div slot="reference" class="name-wrapper">
                  <el-tag size="medium">{{ scope.row.name }}</el-tag>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>

    <h3 id="zhan-kai-xing">
      <a href="#zhan-kai-xing" aria-hidden="true" class="header-anchor">¶</a>
      展开行
    </h3>
    <p>当行内容过多并且不想显示横向滚动条时，可以使用 Table 展开行功能。</p>
    <div class="demo-block demo-zh-CN demo-table">
      <div class="source">
        <el-table
          :data="tableData05"
          style="width: 100%">
          <el-table-column type="expand">
            <template slot-scope="props">
              <el-form label-position="left" inline class="demo-table-expand">
                <el-form-item label="商品名称">
                  <span>{{ props.row.name }}</span>
                </el-form-item>
                <el-form-item label="所属店铺">
                  <span>{{ props.row.shop }}</span>
                </el-form-item>
                <el-form-item label="商品 ID">
                  <span>{{ props.row.id }}</span>
                </el-form-item>
                <el-form-item label="店铺 ID">
                  <span>{{ props.row.shopId }}</span>
                </el-form-item>
                <el-form-item label="商品分类">
                  <span>{{ props.row.category }}</span>
                </el-form-item>
                <el-form-item label="店铺地址">
                  <span>{{ props.row.address }}</span>
                </el-form-item>
                <el-form-item label="商品描述">
                  <span>{{ props.row.desc }}</span>
                </el-form-item>
              </el-form>
            </template>
          </el-table-column>
          <el-table-column
            label="商品 ID"
            prop="id">
          </el-table-column>
          <el-table-column
            label="商品名称"
            prop="name">
          </el-table-column>
          <el-table-column
            label="描述"
            prop="desc">
          </el-table-column>
        </el-table>
      </div>
    </div>

    <h3 id="shu-xing-shu-ju-yu-lan-jia-zai">
      <a href="#shu-xing-shu-ju-yu-lan-jia-zai" aria-hidden="true" class="header-anchor">¶</a>
      树形数据与懒加载
    </h3>
    <div class="demo-block demo-zh-CN demo-table">
      <div class="source">
        <div>
          <el-table
            :data="tableData1"
            style="width: 100%;margin-bottom: 20px;"
            border
            row-key="id">
            <el-table-column
              prop="date"
              label="日期"
              sortable
              width="180">
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
              sortable
              width="180">
            </el-table-column>
            <el-table-column
              prop="address"
              label="地址">
            </el-table-column>
          </el-table>

          <el-table
            :data="tableData2"
            style="width: 100%"
            row-key="id"
            border
            lazy
            :load="load"
          >
            <el-table-column
              prop="date"
              label="日期"
              width="180">
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
              width="180">
            </el-table-column>
            <el-table-column
              prop="address"
              label="地址">
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>

    <h3 id="zi-ding-yi-biao-tou">
      <a href="#zi-ding-yi-biao-tou" aria-hidden="true" class="header-anchor">¶</a>
      自定义表头
    </h3>
    <p>表头支持自定义。</p>
    <div class="demo-block demo-zh-CN demo-table">
      <div class="source">
        <el-table
          :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
          style="width: 100%">
          <el-table-column
            label="Date"
            prop="date">
          </el-table-column>
          <el-table-column
            label="Name"
            prop="name">
          </el-table-column>
          <el-table-column
            align="right">
            <template slot="header" slot-scope="scope">
              <el-input
                v-model="scope.search"
                size="mini"
                placeholder="输入关键字搜索"/>
            </template>
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>

    <h3 id="biao-wei-he-ji-xing">
      <a href="#biao-wei-he-ji-xing" aria-hidden="true" class="header-anchor">¶</a>
      表尾合计行
    </h3>
    <p>若表格展示的是各类数字，可以在表尾显示各列的合计。</p>
    <div class="demo-block demo-zh-CN demo-table">
      <div class="source">
        <el-table
          :data="tableData06"
          border
          show-summary
          style="width: 100%">
          <el-table-column
            prop="id"
            label="ID"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名">
          </el-table-column>
          <el-table-column
            prop="amount1"
            sortable
            label="数值 1">
          </el-table-column>
          <el-table-column
            prop="amount2"
            sortable
            label="数值 2">
          </el-table-column>
          <el-table-column
            prop="amount3"
            sortable
            label="数值 3">
          </el-table-column>
        </el-table>

        <el-table
          :data="tableData06"
          border
          height="200"
          :summary-method="getSummaries"
          show-summary
          style="width: 100%; margin-top: 20px">
          <el-table-column
            prop="id"
            label="ID"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名">
          </el-table-column>
          <el-table-column
            prop="amount1"
            label="数值 1（元）">
          </el-table-column>
          <el-table-column
            prop="amount2"
            label="数值 2（元）">
          </el-table-column>
          <el-table-column
            prop="amount3"
            label="数值 3（元）">
          </el-table-column>
        </el-table>
      </div>
    </div>

    <h3 id="he-bing-xing-huo-lie">
      <a href="#he-bing-xing-huo-lie" aria-hidden="true" class="header-anchor">¶</a>
      合并行或列
    </h3>
    <p>多行或多列共用一个数据时，可以合并行或列。</p>
    <div class="demo-block demo-zh-CN demo-table">
      <div class="source">
        <el-table
          :data="tableData07"
          :span-method="arraySpanMethod"
          border
          style="width: 100%">
          <el-table-column
            prop="id"
            label="ID"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名">
          </el-table-column>
          <el-table-column
            prop="amount1"
            sortable
            label="数值 1">
          </el-table-column>
          <el-table-column
            prop="amount2"
            sortable
            label="数值 2">
          </el-table-column>
          <el-table-column
            prop="amount3"
            sortable
            label="数值 3">
          </el-table-column>
        </el-table>

        <el-table
          :data="tableData07"
          :span-method="objectSpanMethod"
          border
          style="width: 100%; margin-top: 20px">
          <el-table-column
            prop="id"
            label="ID"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名">
          </el-table-column>
          <el-table-column
            prop="amount1"
            label="数值 1（元）">
          </el-table-column>
          <el-table-column
            prop="amount2"
            label="数值 2（元）">
          </el-table-column>
          <el-table-column
            prop="amount3"
            label="数值 3（元）">
          </el-table-column>
        </el-table>
      </div>
    </div>

    <h3 id="zi-ding-yi-suo-yin">
      <a href="#zi-ding-yi-suo-yin" aria-hidden="true" class="header-anchor">¶</a>
      自定义索引
    </h3>
    <p>自定义 type=index 列的行号。</p>
    <div class="demo-block demo-zh-CN demo-table">
      <div class="source">
        <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            type="index"
            :index="indexMethod">
          </el-table-column>
          <el-table-column
            prop="date"
            label="日期"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址">
          </el-table-column>
        </el-table>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'table',
    data() {
      return {
        search: '',
        // 基础表格
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        tableData01: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        tableData02: [{
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1517 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1519 弄',
          zip: 200333
        }, {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1516 弄',
          zip: 200333
        }],
        tableData03: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          tag: '家'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          tag: '公司'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          tag: '家'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          tag: '公司'
        }],
        tableData04: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        tableData05: [{
          id: '12987122',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }, {
          id: '12987123',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }, {
          id: '12987125',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }, {
          id: '12987126',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }],
        tableData06: [{
          id: '12987122',
          name: '王小虎',
          amount1: '234',
          amount2: '3.2',
          amount3: 10
        }, {
          id: '12987123',
          name: '王小虎',
          amount1: '165',
          amount2: '4.43',
          amount3: 12
        }, {
          id: '12987124',
          name: '王小虎',
          amount1: '324',
          amount2: '1.9',
          amount3: 9
        }, {
          id: '12987125',
          name: '王小虎',
          amount1: '621',
          amount2: '2.2',
          amount3: 17
        }, {
          id: '12987126',
          name: '王小虎',
          amount1: '539',
          amount2: '4.1',
          amount3: 15
        }],
        tableData07: [{
          id: '12987122',
          name: '王小虎',
          amount1: '234',
          amount2: '3.2',
          amount3: 10
        }, {
          id: '12987123',
          name: '王小虎',
          amount1: '165',
          amount2: '4.43',
          amount3: 12
        }, {
          id: '12987124',
          name: '王小虎',
          amount1: '324',
          amount2: '1.9',
          amount3: 9
        }, {
          id: '12987125',
          name: '王小虎',
          amount1: '621',
          amount2: '2.2',
          amount3: 17
        }, {
          id: '12987126',
          name: '王小虎',
          amount1: '539',
          amount2: '4.1',
          amount3: 15
        }],
        tableData1: [{
          id: 1,
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          id: 2,
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          id: 3,
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          children: [{
            id: 31,
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            id: 32,
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }]
        }, {
          id: 4,
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        tableData2: [{
          id: 1,
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          id: 2,
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          id: 3,
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          hasChildren: true
        }, {
          id: 4,
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },
    methods: {
      tableRowClassName({rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      },
      handleClick(row) {
        console.log(row);
      },
      setCurrent(row) {
        this.$refs.singleTable.setCurrentRow(row);
      },
      handleCurrentChange(val) {
        this.currentRow = val;
      },
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      resetDateFilter() {
        this.$refs.filterTable.clearFilter('date');
      },
      clearFilter() {
        this.$refs.filterTable.clearFilter();
      },
      formatter(row) {
        return row.address;
      },
      filterTag(value, row) {
        return row.tag === value;
      },
      filterHandler(value, row, column) {
        const property = column['property'];
        return row[property] === value;
      },
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      getSummaries(param) {
        const { columns, data } = param;
        const sums = [];
        columns.forEach((column, index) => {
          if (index === 0) {
            sums[index] = '总价';
            return;
          }
          const values = data.map(item => Number(item[column.property]));
          if (!values.every(value => isNaN(value))) {
            sums[index] = values.reduce((prev, curr) => {
              const value = Number(curr);
              if (!isNaN(value)) {
                return prev + curr;
              } else {
                return prev;
              }
            }, 0);
            sums[index] += ' 元';
          } else {
            sums[index] = 'N/A';
          }
        });

        return sums;
      },
      arraySpanMethod({ rowIndex, columnIndex }) {
        if (rowIndex % 2 === 0) {
          if (columnIndex === 0) {
            return [1, 2];
          } else if (columnIndex === 1) {
            return [0, 0];
          }
        }
      },

      objectSpanMethod({ rowIndex, columnIndex }) {
        if (columnIndex === 0) {
          if (rowIndex % 2 === 0) {
            return {
              rowspan: 2,
              colspan: 1
            };
          } else {
            return {
              rowspan: 0,
              colspan: 0
            };
          }
        }
      },
      indexMethod(index) {
        return index * 2;
      },
      load(tree, treeNode, resolve) {
        resolve([
          {
            id: 31,
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            id: 32,
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }
        ])
      }
    }
  }
</script>

<style scoped>
  .page-table {

  }
</style>
