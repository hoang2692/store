function baiTap01(){
    setTimeout(() => {
        console.log('11111111111111111')
    },10000)
    console.log('22222222222222222222');
}
baiTap01();
console.log('333333333333333333333333333')
//=== kết quả là:22222222222222222222
//				333333333333333333333333333
//				11111111111111111

//khi có lệnh setTimeout thì nó sẽ tạo ra một function có thể truy cập bên ngoài, khi đó nó sẽ đợi những function khác chạy trước rồi đến một thời gian quy định thì nó sẽ chạy
