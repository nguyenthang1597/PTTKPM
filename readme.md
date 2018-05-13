Đồ án môn học Phân tích thiết kế phần mềm 2018

Hướng dẫn cấu hình đồ án

# Cài đặt các ứng dụng sau
* NodeJS: https://nodejs.org/en/
* MySQL: https://www.mysql.com/
* MySQL Workbench

# Download source code và tiến hành cấu hình
##  Cấu hình database
* B1: Vào MySQL Workbench, tạo 1 database mới với tên tuỳ chọn
* B2: Sang tab Management chọn Data Import/Restore
* B3: Chọn Import from Self-Contained File, sau đó chọn file .sql trong thư mục database project
* B4: Chọn database vừa tạo ở Default Target Scheama và nhấn Start Import
##  Cấu hình project
* B1: Mở thư mục project, mở terminal và thực hiện lệnh *npm install* để cời các package
* B2: Mở file .env, sau đó ghi nội dung theo cấu trúc của file:
    - PORT = *port để chạy project*
    - DBHOST = *host của database (localhost)*
    - DBUSER = *tên tài khoản đăng nhập MySQL*
    - DBPASS = *mật khẩu của tài khoản*
    - DATABASE = *tên database tạo ở B1 cấu hình database*
* B3: Mở terminal và ghi lệnh *node app* để tiến hành chạy project
* B4: Vào link *http://localhost:PORT* (với PORT tạo ở B2) để chạy project