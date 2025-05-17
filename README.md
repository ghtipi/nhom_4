WEBSITE ĐẶT MÓN ĂN NỘI BỘ
===========================

I. THÀNH VIÊN NHÓM
-------------------
Họ tên                  | Vai trò
------------------------|-----------------------
Trần Thành Phát         | Leader, Backend
Nguyễn Phúc Vũ Khánh    | Tester
Đặng Vương Đại          | Frontend
Huỳnh Minh Thuận        | UX/UI

II. MÔ TẢ DỰ ÁN
----------------
Website nội bộ giúp nhân viên công ty đặt món ăn trưa thuận tiện và nhanh chóng.  
Quản trị viên có thể quản lý thực đơn, đơn hàng mỗi ngày, giúp tối ưu quy trình đặt món.

III. TÍNH NĂNG CHÍNH
----------------------

1. Người dùng:
- Đăng ký / Đăng nhập
- Xem danh sách món ăn hôm nay
- Đặt món theo ngày
- Xem lịch sử các đơn đã đặt

2. Admin:
- Quản lý món ăn
- Quản lý đơn hàng theo từng ngày

IV. YÊU CẦU HỆ THỐNG
----------------------
- Trình duyệt hiện đại (Chrome, Firefox, Edge, Brave, ...)

V. HƯỚNG DẪN SỬ DỤNG GITHUB
-----------------------------

1. Đăng ký và cài đặt:

A. Đăng ký GitHub:
- Truy cập https://github.com
- Chọn "Sign up", điền email, username, mật khẩu
- Xác minh email để hoàn tất đăng ký

B. Cài đặt Git:
- Tải Git tại: https://git-scm.com/downloads
- Sau khi cài xong, mở Terminal (hoặc Git Bash) và kiểm tra:
  git --version

2. Quản lý Repository:

A. Tạo Repository :
- Nhấn nút "+" góc trên bên phải GitHub → "New repository"
- Nhập tên repo: nhom_4
- Chọn  Public 
- Nhấn "Create repository"

B. Mời thành viên:
- Vào repository → "Settings" → "Collaborators"
- Thêm username GitHub của các thành viên
- Chờ các thành viên accept lời mời

3. Làm việc với Git:

A. Clone repository về máy:
  git clone https://github.com/ghtipi/nhom_4.git
  cd nhom_4

B. Tạo nhánh riêng:
  git checkout -b ten_nhanh_cua_ban
  (Ví dụ: git checkout -b feature/login-page)

C. Làm việc, commit code:
  git add .
  git commit -m "feat: thêm chức năng đăng nhập"

D. Push code lên GitHub:
  git push --set-upstream origin ten_nhanh_cua_ban

E. Tạo Pull Request (PR):
- Truy cập GitHub → Chọn tab Pull Requests → "New Pull Request"
- So sánh nhánh của bạn với nhánh main
- Nhấn "Create Pull Request", thêm mô tả và gán người review

F. Merge Pull Request (chỉ leader hoặc người được giao):
- Review code
- Nếu ổn → Nhấn "Merge Pull Request"
- Có thể xoá branch nếu muốn

G. Cập nhật code mới nhất từ main:
  git checkout main
  git pull origin main

4. Quy ước đặt tên và commit:

A. Tên nhánh (branch):
- feature/ten-chuc-nang → thêm mới
- fix/ten-loi → sửa lỗi
- hotfix/ten-van-de → lỗi khẩn cấp
- docs/update-readme → chỉnh tài liệu

B. Quy ước commit:

Loại commit     | Ý nghĩa
----------------|-----------------------------
feat            | Thêm chức năng mới
fix             | Sửa lỗi
docs            | Cập nhật tài liệu
refactor        | Tối ưu mã, không ảnh hưởng logic
test            | Thêm / sửa unit test
chore           | Công việc phụ, setup, config...

VI. HƯỚNG DẪN CHẠY DỰ ÁN REACT
-------------------------------

1. Clone code:
  git clone https://github.com/ghtipi/nhom_4.git
  cd nhom_4

2. Cài đặt thư viện:
  npm install

3. Chạy dự án:
  npm start

4. Mở trình duyệt:
  http://localhost:3000

VII. GHI CHÚ
-------------
- Dự án chỉ phục vụ mục đích học tập
- Không sử dụng cho mục đích thương mại hoặc chia sẻ công khai nếu có dữ liệu nội bộ
