const data = [
    {id: 1, value: 2},
    {id: 2, value: 2},
    {id: 3, value: 2},
    {id: 4, value: 2},
    {id: 5, value: 2},
    
]


function xoa(){
	var id=2;
	for(var i=0;i<data.length;i++){
		if(data[i].id==id){
			data.splice(i,1);
		}
	}
	console.log(data);
 }


xoa();