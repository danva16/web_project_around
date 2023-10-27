const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");

module.exports = {
    //conecta los plugins al PostCSS
    plugins: [
        autoprefixer,
        cssnano({ preset: "default" }) //establece la configuración de minificación por defecto
    ]

}