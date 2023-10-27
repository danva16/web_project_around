const path = require("path"); //conecta la ruta a la configuracuón de webpack
//plugin de conexión
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");


module.exports = {
    devtool: "inline-source-map",
    entry: {
        main: "./src/index.js"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js",
        publicPath: ""
    },
    target: ["web", "es5"],
    stats: { children: true }, //muestra los errores de compilación de hijos de los plugins
    mode: "development",
    devServer: {
        static: path.resolve(__dirname, "./dist"),
        compress: true,
        port: 1999,
        open:true
    },
    module: {
        rules: [ //array de reglas
            {
                //expresion regular que busca todos los archivos js
                test: /\.js$/,
                //todos los archivos procesados por babel-loader
                loader: "babel-loader",
                //excluimos la carpeta node_modules
                exclude: "/node_modules/"
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1
                        }
                    },
                    "postcss-loader"
                ],
            },
            {
                //la regla para procesar archivos
                test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
                type: "asset/resource"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html" //ruta a nuestro archivo html
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin()
    ]
}