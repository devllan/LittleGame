const fs = require("fs");
const path = require("path");
const ModulesPath = path.join(__dirname, "../public/modules");
const ModulesOrder = [

];

const dirs = fs.readdirSync(ModulePath, {encoding: "utf8"});

let files = [];
function findAssets(dir){
    const dirs = fs.readdirSync(dir, {encoding: "utf8"});
    dirs.forEach(file =>{

    });
}
dirs.forEach( dir =>{
    let rets = findAssets(path.join(ModulesPath, dir));
});
