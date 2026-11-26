const path = require("node:path");
const swaggerJsdoc = require("swagger-jsdoc");
const { version } = require("../../package.json");

const swaggerSpec = {
    failOnErrors: true, 
    apis: [path.join(__dirname, '../**/*.js').replace(/\\/g, "/")],
    definition: {
        openapi: '3.0.3',
        info: {
            tittle: 'Encurtador de URLs - DS2',
            version: version
        },
        servers: [
            { url: '/' }
        ],
        security: []
    }
};


const swaggerConfig = swaggerJsdoc(swaggerSpec);

module.exports = swaggerConfig;