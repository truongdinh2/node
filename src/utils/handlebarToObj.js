module.exports = {
    mutipleObjMongoose: function(data) {
        return data.map(item => item.toObject())
    },
    oneObjMongoose: function(data) {
        return data ? data.toObject() : ''
    }
}