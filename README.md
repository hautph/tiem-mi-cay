# Tiệm Mì Cay

Game mô phỏng quản lý quán mì cay độc lập hoạt động trực tiếp trên trình duyệt. Trò chơi sở hữu giao diện tiếng Việt hoàn chỉnh, đồ họa minh họa định dạng SVG thuần, font chữ cục bộ và tối ưu hiển thị tốt trên cả máy tính lẫn điện thoại.

- **Chơi trực tuyến**: [game.heytram.vn](https://game.heytram.vn)
- **Mã nguồn**: [GitHub Repository](https://github.com/buicongnguyen/game-shop)

---

## 1. Hướng dẫn cài đặt và chạy

### Yêu cầu hệ thống
- Node.js phiên bản 20 trở lên.
- Không cần cài thêm thư viện phụ thuộc của bên thứ ba để chơi bản phát triển.

### Khởi động nhanh
```powershell
npm start
```

Sau khi chạy lệnh, truy cập **http://localhost:4173** trên trình duyệt của bạn. Server chỉ cho phép kết nối từ chính máy cục bộ. Nhấn `Ctrl + C` trong terminal khi cần dừng máy chủ.

*Mẹo*: Để đổi cổng chạy server, gán biến môi trường trước khi chạy:
```powershell
$env:PORT=4174; npm start
```

### Đóng gói sản phẩm
```powershell
npm run build
```
Bản dựng tĩnh sẽ được xuất vào thư mục `dist/`. Hỗ trợ chạy từ thư mục con trên máy chủ web (ví dụ: `/game-shop/`).

---

## 2. Tổng quan lối chơi

### Khởi đầu kinh doanh
- Bắt đầu với số vốn ban đầu 400.000₫, điểm danh tiếng 4.0 và kho hàng trống.
- Lên kế hoạch nhập kho theo nhu cầu (0–99 đơn vị mỗi loại) hoặc sử dụng đơn nhập mẫu gợi ý sẵn.
- Thanh toán đơn nhập hàng và mở cửa đón lượt khách trong ngày.

### Quy trình chế biến & Phục vụ
- **Tiếp nhận đơn**: Khách gọi món gồm loại nước dùng, topping đi kèm và cấp độ cay (từ cấp 0 đến cấp 7). Mỗi lần chạm vào lọ ớt sẽ tăng 1 cấp độ cay.
- **Tiêu hao nguyên liệu**: Thao tác lấy tô, trụng mì và gắp topping sẽ trừ nguyên liệu trong kho ngay lập tức. Đồ ăn đã cho vào tô không thể hoàn tác hay lấy lại.
- **Canh độ chín của mì**: Thời gian nấu mì là 5.2 giây (giảm còn 4.2 giây sau khi nâng cấp bếp). Hãy gắp mì ra khi đồng hồ tiến trình đạt từ **50% đến 78%** để đạt độ chín chuẩn. Mì chưa chín hoặc chín nhũn sẽ bị trừ điểm đánh giá, để quá lâu mì sẽ bị cháy khét.
- **Giao món**: Một tô mì hoàn chỉnh có thể giao cho bất kỳ đơn hàng nào đang chờ phù hợp. Giao sai món hoàn toàn sẽ làm hỏng đơn, lãng phí nguyên liệu và khách sẽ bỏ đi trong bực bội.

### Vận hành & Tài chính
- **Thời gian trong ngày**: Mỗi ca bán hàng kéo dài 210 giây đón khách. Khi hết giờ, có thêm tối đa 60 giây gia hạn để xử lý dứt điểm các đơn còn tồn đọng.
- **Chi phí & Báo cáo cuối ngày**: Hàng trong kho hết hạn sử dụng theo từng lô. Doanh thu ngày sẽ trừ đi tiền thuê mặt bằng, điện nước, điện năng thiết bị tiêu thụ và lương nhân viên. Nếu tiền két không đủ trả, số dư có thể bị âm.
- **Nợ & Khoản vay**: Phân tách rõ ràng giữa tiền gốc và tiền lãi. Quán không thể mở cửa nếu két không đủ tiền mua số nguyên liệu tối thiểu, trừ khi bạn vay tiền hoặc bắt đầu quán mới.
- **Đánh giá của khách**: Khách để lại bình luận và lý do cụ thể. Bạn có 2 ngày để phản hồi: trả lời nhã nhặn giúp gỡ lại 1 sao, phản hồi cộc lốc sẽ bị trừ thêm 1 sao.

### Tình huống phát sinh & Ngoại cảnh
- **Sự cố đường phố**: Từ ngày thứ 2, các sự kiện ngẫu nhiên có thể xuất hiện (hết gas, vỡ đồ, đoàn khách đông, thanh tra kiểm tra, khách xin nợ, quẹt thẻ lỗi...). Màn hình tạm dừng để bạn chọn phương án giải quyết.
- **Khi hết nguyên liệu giữa chừng**: Nút xử lý trên đơn cho phép chọn mua gấp (giá cao hơn bình thường), gợi ý đổi món, bớt topping, xin khách đợi hoặc hủy đơn xin lỗi.
- **Giao hàng bằng xe máy**: Nhận đơn cự ly xa từ ứng dụng giao hàng, tự lái xe né chướng ngại vật hoặc chi tiền thuê dịch vụ giao gấp.
- **Đơn hàng trạm không gian (Cấp độ 9+)**: Tính toán lộ trình, gom bình năng lượng và né thiên thạch để vận chuyển đơn hàng liên hành tinh.
- **Chuyện tình căn bếp (Cấp độ 7+)**: Câu chuyện tình cảm giữa phụ bếp Bé Ngò và đầu bếp Anh Sả với các lựa chọn duyệt nghỉ phép hoặc chúc phúc đám cưới.
- **Tương tác hàng xóm**: Gửi các "bất ngờ" sang 6 cửa tiệm đối thủ cùng dãy phố và so tài doanh thu trên bảng xếp hạng phố.

---

## 3. Bố cục giao diện & Khả năng tương thích

Giao diện được thiết kế thích ứng hoàn toàn (responsive) theo từng kích thước màn hình:
- **Điện thoại dọc**: Bố cục 1 cột tối ưu cuộn mượt mà.
- **Điện thoại ngang**: Bố cục 2 cột.
- **Máy tính bảng & Máy tính**: Bố cục 3 cột trực quan (Khách hàng & Đơn hàng | Khu vực nấu nướng | Tủ nguyên liệu).
- **Vùng thao tác cố định**: Khách hàng, phiếu gọi món, bếp nấu, nút bỏ món/giao món luôn cố định trong tầm mắt; chỉ phần kệ nguyên liệu cuộn linh hoạt khi không gian hẹp.
- **Hỗ trợ PWA**: Có thể cài đặt trực tiếp lên màn hình chính và hỗ trợ chơi offline hoàn toàn sau lần tải đầu tiên.
- **Dữ liệu lưu trữ**: Trạng thái game, kho hàng và đơn hàng dở dang được tự động lưu cục bộ trong LocalStorage. Dùng tính năng *Menu → Xuất bản lưu* để sao lưu ra file JSON hoặc nhập vào thiết bị khác.

---

## 4. Kiểm thử & Đảm bảo chất lượng

Dự án cung cấp bộ kiểm thử toàn diện gồm unit test logic, kiểm thử giao diện trình duyệt qua Playwright và kịch bản mô phỏng 100 ngày bán hàng:

```powershell
# Chạy toàn bộ unit test logic
npm test

# Chuẩn bị môi trường kiểm thử trình duyệt
npm ci
npx playwright install chromium

# Chạy kiểm thử e2e trên trình duyệt
npm run test:browser

# Đóng gói và kiểm tra trang web tĩnh
npm run build
npm run test:pages

# Chạy mô phỏng 100 ngày với hạt giống (seed) cố định
npm run test:simulation
```

Các bài kiểm tra xác thực tính đúng đắn của dòng tiền, độ co giãn giao diện từ màn hình 320px đến 1920px, kích thước vùng chạm tối thiểu 44px và tính tương thích trên trình duyệt Chromium.

---

## 5. Cấu trúc thư mục mã nguồn

```
tiem-mi-cay/
├── public/
│   └── assets/            # Font chữ cục bộ, ảnh và tài nguyên tĩnh
├── src/
│   ├── app.js             # Điểm khởi đầu ứng dụng và điều hướng
│   ├── game.js            # Engine lõi: trạng thái, cơ chế nấu nướng, tài chính, lưu trữ
│   ├── catalog.js         # Dữ liệu nguyên liệu, trang thiết bị, nhân viên, đồ trang trí
│   ├── situations.js      # Kịch bản sự cố ngẫu nhiên và nhánh lựa chọn
│   ├── voice.js           # Lời thoại khách hàng tiếng Việt và đánh giá quán
│   ├── audio.js           # Tổng hợp âm thanh và nhạc nền qua Web Audio API
│   ├── sidequests.js      # Logic các mini-game hằng ngày (chợ, công thức nước, rửa bát)
│   ├── ride.js            # Trò chơi giao hàng bằng xe máy
│   ├── planets.js         # Trò chơi giao hàng không gian
│   ├── neighbours.js      # Hệ thống 6 quán hàng xóm và bảng xếp hạng dãy phố
│   ├── meta-ui.js         # Giao diện điều khoản, hướng dẫn PWA, linh vật hướng dẫn
│   ├── ui.js              # Xử lý tương tác màn hình chính
│   ├── minigames-ui.js    # Giao diện cho các trò chơi phụ
│   ├── fx.js / fx.css     # Hiệu ứng thị giác (chỉ dùng transform và opacity tối ưu hiệu năng)
│   ├── life.js / life.css # Hoạt cảnh con phố phía sau quán
│   ├── art/               # Các module sinh đồ họa SVG tự vẽ (nhân vật, tô mì, căn bếp)
│   ├── style.css          # Hệ thống kiểu dáng và bố cục thích ứng
│   └── pwa.js             # Cài đặt PWA và đăng ký Service Worker
├── tests/                 # Kịch bản kiểm thử tự động
├── tools/                 # Script hỗ trợ build, sinh icon và chạy test
├── server.mjs             # HTTP server nội bộ phục vụ phát triển
├── sw.js                  # Service Worker hỗ trợ lưu cache ngoại tuyến
└── manifest.webmanifest   # Cấu hình Web App Manifest
```

---

## 6. Triển khai

Dự án đã được thiết lập sẵn GitHub Actions tại `.github/workflows/pages.yml`. Khi đẩy mã nguồn lên nhánh `main`, hệ thống sẽ tự động chạy kiểm thử, đóng gói và phát hành phiên bản mới nhất lên GitHub Pages.

Xem chi tiết về giấy phép và nguồn gốc phông chữ tại [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).

