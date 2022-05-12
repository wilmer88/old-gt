var fs = requier("fs");
console.log(process.argv[2])

fs.appendFile("message.txt", process.argv[2], function(err){
    if (err) throw err;
    console.log('"data to append" was append to file');
});