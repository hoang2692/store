Browser("Đọc truyện tranh online").Page("Đọc truyện tranh online").Link("Đăng nhập").Click
Browser("Đọc truyện tranh online").Page("Đăng nhập - NetTruyen").WebEdit("ctl00$mainContent$login1$Login").Set "hoang2692@gmail.com"
Browser("Đọc truyện tranh online").Page("Đăng nhập - NetTruyen").WebEdit("ctl00$mainContent$login1$Login_2").SetSecure "5ed0a479b25a5c5cc1223d413a122ab313361f91dbedeb4a7000067bb4edab18"
Browser("Đọc truyện tranh online").Page("Đăng nhập - NetTruyen").WebButton("Đăng nhập").Click
Browser("Đọc truyện tranh online").Page("Đọc truyện tranh online").Check CheckPoint("Đọc truyện tranh online - Truyện gì cũng có - NetTruyen")
