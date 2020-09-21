Browser("Đọc truyện tranh online").Page("Đọc truyện tranh online").Link("Đăng nhập").Click
Browser("Đọc truyện tranh online").Page("Đăng nhập - NetTruyen").WebEdit("ctl00$mainContent$login1$Login").SetSecure "5ed0a61d8d832652b74adfc2cb7a910af03a79681e8d38fa610a665d2de307b9"
Browser("Đọc truyện tranh online").Page("Đăng nhập - NetTruyen").WebButton("Đăng nhập").Click
Browser("Đọc truyện tranh online").Page("Đăng nhập - NetTruyen").Check CheckPoint("Đăng nhập - NetTruyen")
Browser("Đọc truyện tranh online").Page("Đăng nhập - NetTruyen").Sync
Browser("Đọc truyện tranh online").Close

