const mongoose = require('mongoose')

const conexao = async()=>{
    //conexao local
    //var bdlocal = await mongoose.connect('mongodb://localhost/ac1tri')
    //conexao atlas
    var atlas = await mongoose.connect('mongodb+srv://userADM:ADM1976@fiaptecnico.n7tnr.mongodb.net/2emia1tri')
}

module.exports = conexao