// /functions/hello-world.js
exports.handler = async function () {
    return {
        statusCode: 200,
        body: 'Hi!',
    }
}