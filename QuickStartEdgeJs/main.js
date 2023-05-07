const process = require('process');
const path = require('path');
const baseDll = path.join(__dirname, 'QuickStartEdgeJs/bin/Release/net7.0/QuickStartEdgeJs.dll');
const localTypeName = 'QuickStartEdgeJs.LocalMethods';
    console.log('Base DLL:'+ baseDll);
    process.env.EDGE_USE_CORECLR = 1;
const edge = require('edge-js');

//process.argv.forEach((value, index) => {
 //   console.log(index, value);
//});
    const useDynamicInput = edge.func({
        assemblyFile: baseDll,
        typeName: localTypeName,
        methodName: 'UseDynamicInput'
    });

    useDynamicInput(process.argv[2], function(error, result) {
        if (error) throw error;
        console.log(result);
    });