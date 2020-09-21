const page = 1
const limit = 5
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
const arr2 = [3, 5, 7]

function test(page, limit) {
  for( var i=0; i<arr2.length;i++){
  	for(var j=0;j<arr1.length;j++){
  		if(arr1[j]==arr2[i])
  			arr1.splice(j,1);
  	}
  }

  var arr3=arr2.concat(arr1)
  var arr4=" ";
  if(page==1){
  	for(var i=page*limit-5;i<limit;i++){
  		var arr4=arr3[i];
  		console.log(arr4);
  	}
  }
  if(page==2){
  	for(var i= page*limit-5;i<limit*page;i++){
  		var arr4=arr3[i];
  		console.log(arr4);
  	}
  }
}
 test(1,5)