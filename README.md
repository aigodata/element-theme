# element-theme
基于ElementUI的定制主题

## 页面模板

    <template>
      <div class="page-user_log">
        <el-button>aaa</el-button>
      </div>
    </template>
    
    <script>
      import permission from '@/components/mixin/permission';
      export default {
        mixins: [permission],
        name: 'user_log',
        data() {
          return {}
        },
        methods: {},
        mounted() {
        }
      }
    </script>
    
    <style>
      .page-user_log {
    
      }
    </style>

## Project setup

      正常安装
      npm install
      
      快速安装
      npm install --registry=http://registry.npm.taobao.org


### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

