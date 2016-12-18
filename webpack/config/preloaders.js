

export default source => [
    {
        test: /\.js$/,
        include: [source],
        loader: 'eslint-loader',
    },
    {
        test: /\.ts$/,
        exclude: ['node_modules'],
        loader: 'tslint',
    },
    {
        test: /\.html/,
        loader: 'htmlhint',
        exclude: [/node_modules/],
    },
];
