const a1 = [
  {id: 1, score: 1},
  {id: 4, score: 2},
  {id: 5, score: 3},
  {id: 2, score: 4},
  {id: 3, score: 5}
  ]
const a2 = [
  {id: 3, test: 1},
  {id: 1, test: 2},
  {id: 2, test: 3},
  {id: 5, test: 4},
  {id: 4, test: 5}
]

function timkiem(){
	var min_score=a1[0].score;
	var min_test=a2[0].test;
		for(i=1;i< a1.length;i++){
			
			if(a1[i].score<min_score)
				min_score=a1.source;

			if(a2[i].test<min_test)
				min_test=a2.test;		
} 

console.log("score nhỏ nhất: "+min_score)
console.log("test nhỏ nhất: "+min_test)		
}

timkiem();