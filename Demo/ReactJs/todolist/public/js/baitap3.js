
 function show(){
 	const arr1 = ['Gustavo', 'Heisen', 'Berg', 'Jessie'];
    const arr2 = ['Labrador', 'Doberman', 'Spaniel', 'Husky'];
    for(x in arr1)
    	{
			document.write('{'+arr1[x]+': "'+arr2[x]+'"}'+'<br/>');
    	}
 }
 show();