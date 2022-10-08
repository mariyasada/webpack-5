const path=require('path');
module.exports={
    entry:path.resolve(__dirname,"src","index.js"), 

    //"./src/index.js" we can write like this also
    
    output:{
        filename:"main.js",
        path:path.resolve(__dirname,"dist")
    },
    mode:"development",
};
module.exports=webpackConfig;
