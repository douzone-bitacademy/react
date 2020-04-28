## 내용 요약
<pre>
[project-ex01]
ES6 for React


==========================================
[project-ex02]
전통적인 DOM API 기반의 앱

npm init -y  project menifest package.json 생성

==========================================
[project-ex03]
파일 나눠서 작성해 보기

==========================================
[project-ex04]
ES6 모듈 지원 기반으로 작성해 보기

==========================================
[project-ex05]
번들링
1.프로젝트 생성
    1-1. 프로젝트 디렉토리 생성
    1-2. src, public 디렉토리 생성  
2.매니페스트(package.json) 초기화
    $ npm init -y
3.webpack 설치
    $ npm i -D webpack webpack-cli webpack-dev-server
    $ npx webpack -v
4.webpack 설정(webpack.config.js)
const path = require('path');
module.exports = {
    entry: path.resolve('src/index.js'),
    output: {
        path: path.resolve('public'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve('public'),
        host: '0.0.0.0',
        port: 9999,
        inline: true,
        liveReload: true,
        hot: false,
        compress: true,
        historyApiFallback: true
    }    
}
5.npm scripting 
  "scripts": {
    "build": "npx webpack",
    "start": "npx webpack-dev-server"
  }  
==========================================
[project-ex06]
1~5 까지는 project-ex05 동일


<pre>