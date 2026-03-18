class Loger{
    log(msg){console.log(`[LOG] ${msg}`);}
    error(msg) {console.error(`[ERR] ${msg}`)}
}
module.exports= Loger;
