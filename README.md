# 🍱 WEBSITE ĐẶT MÓN ĂN NỘI BỘ

---

## 👨‍👩‍👧‍👦 Thành viên nhóm

| Họ tên               | Vai trò     |
|----------------------|-------------|
| Trần Thành Phát      | 👑 Leader, Backend |
| Nguyễn Phúc Vũ Khánh | 🧪 Tester   |
| Đặng Vương Đại       | 🎨 Frontend |
| Huỳnh Minh Thuận     | 🧠 UX/UI    |

---

## 📌 Mô tả dự án

Website nội bộ giúp nhân viên công ty đặt món ăn trưa thuận tiện và nhanh chóng.  
Quản trị viên có thể quản lý thực đơn, đơn hàng mỗi ngày, giúp tối ưu quy trình đặt món.

---

## ⚙️ Tính năng chính

### Người dùng
- Đăng ký / Đăng nhập
- Xem danh sách món ăn hôm nay
- Đặt món theo ngày
- Xem lịch sử các đơn đã đặt

### Admin
- Quản lý món ăn
- Quản lý đơn hàng theo từng ngày

---

## 🖥️ Yêu cầu hệ thống

- Trình duyệt hiện đại (Chrome, Firefox, Edge, Brave, ...)
- Node.js + npm (nếu dự án dùng React)
- Git

---

## 🧑‍💻 Hướng dẫn sử dụng GitHub để làm việc nhóm

### 1. Đăng ký và cài đặt

#### A. Đăng ký tài khoản GitHub
1. Truy cập [https://github.com](https://github.com)
2. Chọn **"Sign up"**, điền email, username, mật khẩu
3. Xác minh email để hoàn tất đăng ký

#### B. Cài đặt Git
Tải Git tại: https://git-scm.com/downloads  
Cài xong, mở terminal (hoặc Git Bash) và chạy:
```bash
git --version
2. Quản lý Repository
A. Tạo Repository (chỉ 1 lần duy nhất bởi leader)
Click nút ➕ ở góc phải trên GitHub → Chọn "New repository"

Nhập tên: nhom_4, chọn Private (hoặc Public nếu không có thông tin nhạy cảm)

Nhấn Create repository

B. Mời thành viên
Vào repository → "Settings" → "Collaborators"

Thêm username của các thành viên

Chờ các bạn accept invite

3. Làm việc với Git (chi tiết từng bước)
A. Clone repo về máy:
bash
Copy
Edit
git clone https://github.com/ghtipi/nhom_4.git
cd nhom_4
B. Tạo nhánh riêng (mỗi người làm trên một nhánh)
bash
Copy
Edit
git checkout -b ten_nhanh_cua_ban
# Ví dụ:
git checkout -b feature/login-page
C. Làm việc, commit code:
bash
Copy
Edit
git add .
git commit -m "feat: thêm chức năng đăng nhập"
D. Push lên GitHub:
bash
Copy
Edit
git push --set-upstream origin ten_nhanh_cua_ban
E. Tạo Pull Request (PR):
Vào GitHub repository

Chọn tab Pull Requests → Nhấn "New Pull Request"

Chọn nhánh của bạn → So sánh với main

Nhấn "Create Pull Request", thêm mô tả, gán người review

F. Merge Pull Request (chỉ leader hoặc người được phân công)
Review code

Nếu ổn → Click Merge pull request

Xong, xoá branch nếu muốn

G. Cập nhật code mới nhất từ main:
bash
Copy
Edit
git checkout main
git pull origin main
4. Quy ước đặt tên và commit
A. Tên nhánh (branch):
feature/ten-chuc-nang – thêm mới

fix/ten-loi – sửa lỗi

hotfix/ten-van-de – lỗi khẩn cấp

docs/update-readme – chỉnh tài liệu

B. Quy ước commit:
Loại commit	Ý nghĩa
feat	Thêm chức năng mới
fix	Sửa lỗi
docs	Cập nhật tài liệu
refactor	Tối ưu mã, không ảnh hưởng logic
test	Thêm / sửa unit test
chore	Công việc phụ, setup, config...

🚀 Hướng dẫn chạy dự án React
bash
Copy
Edit
# Clone code
git clone https://github.com/ghtipi/nhom_4.git
cd nhom_4

# Cài đặt thư viện
npm install

# Chạy dự án
npm start

# Mở trình duyệt:
http://localhost:3000
📝 Ghi chú
Dự án chỉ phục vụ mục đích học tập

Không được sử dụng cho mục đích thương mại hoặc chia sẻ công khai nếu có dữ liệu nội bộ

