===============================
WEBSITE ĐẶT MÓN ĂN NỘI BỘ
===============================

## Thành viên nhóm:

* Trần Thàn Phát (leader): Backend
* Nguyễn Phúc Vũ Khánh: Tester
* Đặng Vương Đại: Frontend
* Huỳnh Minh Thuận: UX/UI

## Mô tả:

Website này cho phép nhân viên trong công ty đặt món ăn trưa một cách tiện lợi, nhanh chóng.
Ngoài ra, quản trị viên có thể quản lý thực đơn và đơn hàng của từng ngày.

## Tính năng:

* Đăng nhập và đăng ký tài khoản
* Xem danh sách món ăn
* Đặt món ăn theo ngày
* Xem lịch sử đơn hàng đã đặt
* Trang quản trị dành cho Admin:

  * Quản lý món ăn
  * Quản lý đơn hàng

## Yêu cầu hệ thống:

* React (hoặc nền tảng web tương ứng)
* Trình duyệt web hiện đại (Chrome, Firefox, ...)

## Hướng dẫn cài đặt và chạy:

1. Tải mã nguồn từ GitHub:
   [https://github.com/ghtipi/nhom\_4.git](https://github.com/ghtipi/nhom_4.git)

2. Mở terminal và chạy các lệnh sau:

   ```bash
   git clone https://github.com/ghtipi/nhom_4.git
   cd nhom_4
   ```

3. Cài đặt thư viện (nếu là dự án React):

   ```bash
   npm install
   ```

4. Chạy dự án:

   ```bash
   npm start
   ```

5. Truy cập trình duyệt tại: [http://localhost:3000](http://localhost:3000)

## Hướng dẫn tạo và sử dụng GitHub làm việc nhóm:

### A. Tạo tài khoản GitHub

1. Truy cập [https://github.com](https://github.com)
2. Chọn "Sign up" để đăng ký tài khoản (email, username, password)
3. Xác nhận email và hoàn tất đăng ký

### B. Tạo repository trên GitHub

1. Sau khi đăng nhập, nhấn vào biểu tượng ➕ (góc trên phải), chọn "New repository"
2. Đặt tên repository (ví dụ: `nhom_4`), mô tả, chọn Public hoặc Private
3. Nhấn "Create repository"

### C. Thêm thành viên vào repository

1. Vào trang chính của repository
2. Chọn "Settings" > "Collaborators & teams"
3. Nhập GitHub username của các thành viên nhóm để mời vào repo

### D. Clone repository về máy

```bash
git clone https://github.com/ghtipi/nhom_4.git
cd nhom_4
```

### E. Làm việc với nhánh riêng

```bash
git checkout -b ten_nhanh_cua_ban  # tạo nhánh mới
```

### F. Push nhánh lên GitHub

```bash
git push --set-upstream origin ten_nhanh_cua_ban
```

### G. Tạo Pull Request (PR)

1. Truy cập GitHub repo > Chọn tab "Pull Requests"
2. Nhấn nút "New Pull Request"
3. So sánh nhánh `main` với nhánh của bạn, viết mô tả, rồi nhấn "Create Pull Request"

### H. Kéo code mới nhất về

```bash
git pull origin main
```



## Ghi chú:

* Dự án chỉ phục vụ mục đích học tập.
* Không sử dụng cho mục đích thương mại.