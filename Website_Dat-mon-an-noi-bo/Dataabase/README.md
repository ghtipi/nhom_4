# Database Folder

Thư mục này chứa dữ liệu mẫu và script hỗ trợ cho MongoDB trong dự án Căn tin nội bộ.

## Cấu trúc
- `seeds/` – Dữ liệu JSON dùng để seed vào MongoDB
- `schemas/` – Cấu trúc dữ liệu mô tả các collection
- `scripts/` – Script import/export MongoDB bằng Node.js

## Cách sử dụng

1. Cài Node.js
2. Chạy import:
```bash
npm install mongodb
bash scripts/import_all.sh