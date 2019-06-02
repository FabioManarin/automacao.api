const variables = {
    Api: {
        //port: process.env.port || 3000
        port: 3000
    },
    Databse: {
        conecction: process.env.conecction || 'mongodb+srv://admin:manarin1994@nofood-0xnxi.mongodb.net/test?retryWrites=true'
    },
    Security: {
        secretyKey: 'd41d8cd98f00b204e9800998ecf8427e|4e4d6c332b6fe62a63afe56171fd3725'
    }
}
module.exports = variables;