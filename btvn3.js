var fs = require('fs');
const path = require('path'); 
//tao folder
fs.mkdir(path.join(__dirname, 'admin'), (err) => { 
    console.log(!err ? 'Directory created successfully!':'');
});
fs.mkdir(path.join(__dirname, 'admin/product'), (err) => { 
    console.log(!err ? 'Directory created successfully!':'');
});
fs.mkdir(path.join(__dirname, 'admin/category'), (err) => { 
    console.log(!err ? 'Directory created successfully!':'');
});
fs.mkdir(path.join(__dirname, 'admin/user'), (err) => { 
    console.log(!err ? 'Directory created successfully!':'');
});
//tao file
fs.open(path.join(__dirname, 'admin/product/them.txt'), 'w', function(err){
    console.log(!err ? 'file created successfully!':'');
});
fs.open(path.join(__dirname, 'admin/category/them.txt'), 'w', function(err){
    console.log(!err ? 'file created successfully!':'');
});
fs.open(path.join(__dirname, 'admin/user/them.txt'), 'w', function(err){
    console.log(!err ? 'file created successfully!':'');
});
// //ghi noi dung vao file
fs.writeFile(path.join(__dirname, 'admin/product/them.txt'), 'them', function(err){
    if(err) throw err;
    console.log('writefile successfully!');
});
fs.writeFile(path.join(__dirname, 'admin/category/them.txt'), 'them', function(err){
    if(err) throw err;
    console.log('writefile successfully!');
});
fs.writeFile(path.join(__dirname, 'admin/user/them.txt'), 'them', function(err){
    if(err) throw err;
    console.log('writefile successfully!');
});
//doc file
var f = fs.readFileSync(__dirname + '/admin/product/them.txt');
var g = fs.readFileSync(__dirname + '/admin/category/them.txt');
var h = fs.readFileSync(__dirname + '/admin/user/them.txt');
console.log(f.toString() +g.toString() + h.toString());

    