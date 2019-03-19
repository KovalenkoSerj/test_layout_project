module.exports= {
    plugins: [
        require('autoprefixer'),
        require('cssnano'),
        require('css-mqpacker')({
            preset: [
                'default', {
                    discardComments: {
                        removaAll: true
                    }
                }
            ]
        })
    ]
}