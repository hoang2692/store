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
	with open("straight_line.txt", 'r') as data_straight_line:
		for line in data_straight_line:
			city, line = line.strip().split(' ')
			h[city] = int(line)
	return h
StraightLine = straight_line()
fringe = []
closed = []
best = []
def gbfs( data, StraightLine , start, goal):
	root = Graph(start, start, 0,StraightLine[start])
	fringe.insert(0,root)
	while fringe:
		count=0
		for i in fringe:
			print("Phần tử trong fringe: ",i.name)
			best.append(i.straight_linee)
		bc = min(best)
		for i in fringe:
			if i.straight_linee == bc:
				n = fringe.pop(fringe.index(i))
				best.clear()
		print("Chọn n: ",n.name," với chi phí là: ",n.straight_linee)
		closed.append(n)
		for i in closed:
			print("Phần tử trong closed: ",i.name)
		print("---")
		if n.name == goal:
			print("Tìm ra đường đi từ ",start," đến ",goal," là: ", n.path, "Với chi phí đường chim bay là : ", n.straight_linee)
			return
		for city,cost in data[n.name].items():
			for cities in StraightLine:
				for i in closed:
					if city != i.name and city == cities:
						count = count+1
						if count >= len(closed):
							node = Graph(name=city,
			                             path=n.path + ',' + city,
			                             cost=n.cost + cost,
			                             straight_linee=n.straight_linee + StraightLine[cities])
							fringe.insert(0,node)
				count = 0
	return print("Không tìm thấy đường đi!")


gbfs(cities_and_paths, StraightLine , 'Arad' , 'Bucharest')



