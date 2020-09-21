function  sosanh(){
	const arr1=[4,5,9,7];
	const arr2=[5];
	for( x in arr1){
		if( arr2.indexOf(arr1[x])<0)
		{
			document.write(arr1[x]);
		}
	}
}
sosanh();