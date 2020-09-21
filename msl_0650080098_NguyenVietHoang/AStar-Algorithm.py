class Graph:
    def __init__(self, name, path, cost,straight_linee):
        self.name = name
        self.path = path
        self.cost = cost
        self.straight_linee = straight_linee

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

def straight_line():
	h = {}
	with open("straight_line.txt", 'r') as f:
		for line in f:
			city, line = line.strip().split(' ')
			h[city] = int(line)
	return h
sl = straight_line()
fringe = []
closed = []
best=[]
def astar( A, SL , start, goal):
	root = Graph(start, start, 0, SL[start])
	fringe.insert(0,root)
	while fringe:
		count = 0
		for i in fringe:
			print("Phần tử trong fringe :",i.name)
			temp = i.cost + i.straight_linee
			best.append(temp)
			temp = 0
		bc = min(best)
		for i in fringe:
			if i.cost+i.straight_linee == bc:	
				n = fringe.pop(fringe.index(i))
				best.clear()
				print("Chọn n: ",n.name," với chi phí là: ",n.cost+n.straight_linee)
		closed.append(n)
		print("---")
		if n.name == goal:
			print("Tìm ra đường đi từ ",start," đến ",goal," là: ", n.path,"Với chi phí là: ",n.cost+n.straight_linee)
			return
		for city,cost in A[n.name].items():
			for cities in SL:
				for i in closed:
					if city != i.name and city == cities:
						count = count+1
						if count >= len(closed):
							node = Graph(name=city,
			                             path=n.path + ',' + city,
			                             cost=n.cost + cost,
			                             straight_linee=n.straight_linee + SL[cities])
							fringe.insert(0,node)
				count = 0
	return print("Không tìm thấy đường đi")


astar(cities_and_paths, sl , 'Arad' , 'Bucharest')



