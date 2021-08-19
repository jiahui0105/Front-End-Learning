module.exports ={
    devServer: {
        open: true,
        // host: "localhost",
        // port: 8080,
        // https: false,
        proxy: {
            //要按照访问url的顺序来写
            '/j/search_subjects': {
                target: 'https://movie.douban.com',  //请求的第三方接口
                changeOrigin: true,
                pathRewrite: {//路径重写
                    '^/j/search_subjects': '/j/search_subjects'   //替换target中的请求地址，在axios中直接写剩下的地址即可
                }
            },

        }
    },
    lintOnSave:false
};