class Graph:
    def __init__(self, name, path, cost):
        self.name = name
        self.path = path
        self.cost = cost

def cities_graph():
	dict_graph = {}
	with open('data.txt', 'r') as data:
	    for line in data:
	        city_a, city_b, cost = line.strip().split(' ')
	        cost = int(cost)
	        if city_a not in dict_graph:
	            dict_graph[city_a] = {city_b: cost}
	        else:
	            dict_graph[city_a][city_b] = cost
	        if city_b not in dict_graph:
	            dict_graph[city_b] = {city_a: cost}
	        else:
	            dict_graph[city_b][city_a] = cost
	return dict_graph
cities_and_paths = cities_graph()

fringe = []
closed = []
best = []

def ucs( A , start, goal):
	root = Graph(start, start, 0)
	fringe.insert(0,root)
	while fringe:
		count =0
		for i in fringe:	
			print("Phần tử trong fringe: ",i.name)
			best.append(i.cost)
		bc=min(best)
		for i in fringe:
			if i.cost == bc:	
				n = fringe.pop(fringe.index(i))
				best.clear()
		print("Chọn n :",n.name," với chi phí là: ",n.cost)
		closed.append(n)
		print("---")
		if n.name == goal:
			print("Tìm ra đường đi từ ",start," đến ",goal," là: ", n.path,"Với chi phí là : ", n.cost)
			return
		x = cities_and_paths[n.name]
		for city,cost in A[n.name].items():
			for i in closed:
				if city != i.name:
					count = count+1
				if count == len(closed):
					node = Graph(name=city,
	                             path=n.path + ',' + city,
	                             cost=n.cost + cost)
					fringe.insert(0,node)
					count = 0
	return print("Không tìm thấy đường đi")


ucs(cities_and_paths , 'Arad' , 'Bucharest')



