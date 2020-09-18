var fs = require('fs');
const path = require('path'); 

//*doc file
// var f = fs.readFileSync(__dirname + '/abc.txt');
// console.log(f.toString());

//*tao file
// var f = fs.appendFile('test1.txt', 'xin chao test', function(err){
//     if(err) throw err;
//     console.log('da tao file');
// });

//*tạo file rỗng
// fs.open('test2.txt', 'w', function (err, file) {
//     if (err) throw err;
//     console.log('Saved!');
//   });

//*tạo file ghi đè nội dung
// var f = fs.writeFile('test2.txt', 'vinh', function(){
//     if(err) throw err;
//     console.log('ok!');
// });

//*xoa file
// fs.unlink('test2.txt', function(err){
//     if(err) throw err;
//     console.log('delete');
// });

//*doi ten file
// fs.rename('test1.txt', 'test2.txt', function(err){
//     if(err) throw err;
//     console.log('file rename!');
// });

//*tao folder
   
fs.appendFile(path.join(__dirname, 'admin/product/them.txt'),'them', function (err){ 
    if (err) { 
        return console.error(err); 
    } 
    console.log('Directory created successfully!'); 
});
fs.appendFile(path.join(__dirname, 'admin/category/them.txt'),'them', function (err){ 
    if (err) { 
        return console.error(err); 
    } 
    console.log('Directory created successfully!'); 
});
fs.appendFile(path.join(__dirname, 'admin/user/them.txt'),'them', function (err){ 
    if (err) { 
        return console.error(err); 
    } 
    console.log('Directory created successfully!'); 
});
var f = fs.readFileSync(__dirname + '/admin/product/them.txt');
var g = fs.readFileSync(__dirname + '/admin/category/them.txt');
var h = fs.readFileSync(__dirname + '/admin/user/them.txt');
console.log(f.toString() +g.toString() + h.toString());








