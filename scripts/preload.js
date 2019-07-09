const fs = require("fs");
const path = require("path");
const ModulesPath = path.join(__dirname, "../public/modules");
let ModulesOrder = [

];
/**
 * let content = fs.readFileSync();
 * content.replace(/RESOURCES\s*=\s*\[[\s\S]+\]/, function(){
 *  return "RESOURCES = [" + files.join(",") + "]";
 * })
 * 
 * 
 */
const dirs = fs.readdirSync(ModulesPath, {
    encoding: "utf8"
});
var zz = /(.mp3)$/;

function travel(dir, callback) {
    fs.readdirSync(dir).forEach(function (file) {
        var pathname = path.join(dir, file);
        for (j = 0, len = ModulesOrder.length; j < len; j++) {
            if (ModulesOrder[j] == pathname) {
                return
            }
        }
        if (fs.statSync(pathname).isDirectory()) {
            travel(pathname, callback);
        } else {
            callback(pathname);
        }
    });
}
travel(ModulesPath, function (pathname) {
    //去掉MP3
    if (zz.test(pathname)) {
        console.log('mp3')
    } else {
        ModulesOrder.push(pathname);
    }
});
//读取loader文件，进行改写。
ModulesOrder = ModulesOrder.map(function (currentValue, index, arr) {
    var _currentValue = currentValue;
    var relative = path.relative(__dirname + "/../public", _currentValue);
    // var n = relative.replace(/\\/g, "/")
    return relative;
    //换成相对路径
})
let content = fs.readFileSync(__dirname + "/../public/loader.html", {
    encoding: "utf8"
});
content = content.replace(/RESOURCES\s*=\s*\[[\s\S]+\]/g, function () {
    return "RESOURCES = " + JSON.stringify(ModulesOrder);
});
fs.writeFile('../public/loader.html', content, 'utf8', function (err) {
    if (err) {
        console.log(err)
    };
});
console.log(content);