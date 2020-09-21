Browser("Đọc truyện tranh online").Page("Đọc truyện tranh online").Link("Đăng nhập").Click
Browser("Đọc truyện tranh online").Page("Đăng nhập - NetTruyen").WebEdit("ctl00$mainContent$login1$Login").Set "hoang2692@gmail.com"
Browser("Đọc truyện tranh online").Page("Đăng nhập - NetTruyen").WebButton("Đăng nhập").Click
Browser("Đọc truyện tranh online").Page("Đăng nhập - NetTruyen").Check CheckPoint("Đăng nhập - NetTruyen")
