# React 기본 개념

<pre>
1. React 개발 환경 설정
    1.프로젝트 생성
        1-1. 프로젝트 디렉토리 생성
        1-2. src, public 디렉토리 생성

    2.매니페스트(package.json) 초기화
        $ npm init -y

    3.패키지 설치
        $ npm i -D webpack webpack-cli webpack-dev-server react react-dom @babel/core babel-loader @babel/preset-env @babel/preset-react

    4.webpack 설정(webpack.config.js)
    -----------------------------------------
    const path = require('path');
    module.exports = {
        entry: path.resolve('src/index.js'),
        output: {
            path: path.resolve('public'),
            filename: 'bundle.js'
        },
        module: {
            rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }]
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
    -----------------------------------------

    5. babel 설정(babel.config.json)
    -----------------------------------------
    {
        "presets": [["@babel/env",{
                    "targets": {
                        "ie": "11",
                        "edge": "80",
                        "firefox": "73",
                        "chrome": "82",
                        "opera": "69",
                        "safari": "13"
                    }
                }], "@babel/preset-react"]
    }
    -----------------------------------------

    6. npm scripting : package.json, scripts 섹션 수정
    -----------------------------------------
    "scripts": {
        "build": "npx webpack",
        "start": "npx webpack-dev-server"
    }
    -----------------------------------------

2. 속성(props)
   상태(state)

</pre>