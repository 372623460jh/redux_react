# redux_react综合使用demo
> 介绍redux脚手架使用以及如何和redux结合使用
## create-react-app脚手架使用
- 项目初始化
```javaScript
$ npm install -g create-react-app
$ create-react-app project_name
```
- 自定义配置
> 使用脚手架初始化项目,默认的配置文件是被隐藏的,大部分情况下需要自定义配置如`.babelrc`，`webpack`之类的配置文件，这时就需要自定义配置了。执行命令前需要确保代码已经提交到git。
```shell
#该命令是不可逆的
$ npm run eject  
```
> 命令执行完后会发现项目根目录下多了一个`config`文件夹，这个文件夹下就是可配合的配置文件。如果需要使用antd-mobile按需加载就需要修改babel配置文件。在`package.json`里的`babel`里，加入
```json
"plugins": [
    [
        "import",
        {
            "libraryName": "antd-mobile",
            "style": "css"
        }
    ]
]
```