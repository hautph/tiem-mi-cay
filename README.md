# Tiệm Mì Cay — Phiên bản mô phỏng chạy cục bộ

Một dự án game mô phỏng quản lý quán mì cay độc lập, với giao diện hoàn toàn bằng tiếng Việt, hình ảnh minh họa định dạng SVG tự vẽ, font chữ cục bộ và giao diện đáp ứng (responsive) linh hoạt trên cả máy tính lẫn thiết bị di động. Phiên bản 2 (Version 2) mang đến một hệ thống mô phỏng nấu ăn và quản lý tiệm mì chi tiết, sống động và hấp dẫn.

**Chơi trực tuyến:** [Tiệm Mì Cay tại game.heytram.vn](https://game.heytram.vn).

## Cách chạy dự án

Yêu cầu môi trường có cài đặt Node.js từ phiên bản 20 trở lên. Không cần cài đặt thêm thư viện phụ thuộc bên ngoài để chơi.

```powershell
npm start
```

Sau đó mở trình duyệt và truy cập **http://localhost:4173**. Server chỉ chấp nhận kết nối từ chính máy tính của bạn. Nhấn `Ctrl+C` trong terminal để dừng server. Nếu muốn đổi cổng khác, hãy gán biến môi trường `$env:PORT=4174` trước khi chạy `npm start`.

*Lưu ý:* Hãy dùng HTTP server thay vì mở trực tiếp file `index.html`. Lệnh `npm run build` sẽ xuất trang web tĩnh vào thư mục `dist/`. Đường dẫn tài nguyên tương đối hỗ trợ cả gốc trang web lẫn thư mục con (ví dụ: `/game-shop/`).

## Lối chơi (Gameplay)

- Bắt đầu với 400.000₫, 4.0 điểm danh tiếng và các kệ hàng trống rỗng. Lên kế hoạch nhập hàng với số lượng 0–99 cho mỗi món, hoặc dùng đơn gợi ý sẵn. Xác nhận thanh toán và mở cửa đón khách.
- Danh mục bao gồm 32 nguyên liệu, 20 trang thiết bị/phụ kiện nâng cấp, 6 nhân viên, 13 đồ trang trí và 10 cấp độ tiến trình. Mỗi nguyên liệu đều có giá nhập/giá bán riêng, chi phí mở khóa và hạn sử dụng riêng biệt.
- Đọc kỹ yêu cầu của khách hàng về nước dùng, các loại topping và cấp độ cay. Việc lấy tô, trụng mì và bỏ nguyên liệu sẽ tiêu hao kho ngay lập tức. Các nguyên liệu đã bỏ vào tô thì không thể gỡ ra hoặc hoàn lại.
- Thời gian nấu mì là 5.2 giây (hoặc 4.2 giây nếu đã nâng cấp bếp). Hãy gắp mì trong khoảng từ 50% đến 78% để đạt độ chín hoàn hảo. Mì còn sống hoặc bị nhừ sẽ bị trừ điểm đánh giá; bỏ quên mì quá lâu sẽ bị cháy khét. Mua thêm nồi và tuyển thêm nhân viên sẽ giúp bạn nấu nhiều tô cùng lúc.
- Màn hình phục vụ luôn co giãn vừa vặn với kích thước hiển thị: Điện thoại dọc dùng 1 cột, điện thoại xoay ngang dùng 2 cột, máy tính và máy tính bảng nằm ngang dùng 3 cột (Khách & Đơn hàng, Khu vực nấu nướng, Tủ nguyên liệu). Khách hàng, phiếu gọi món, nồi mì, lọ ớt, nút Bỏ món, nút Giao món và các công cụ trong ngày luôn được cố định không bị cuộn mất; chỉ có tủ nguyên liệu là cuộn được khi màn hình nhỏ không hiển thị hết tất cả món cùng lúc. Phiếu gọi món sẽ tự động tích chọn nước dùng, topping và cấp độ cay mà tô mì hiện tại đã khớp.
- Mỗi lần nhấn vào lọ ớt sẽ tăng 1 cấp độ cay, tối đa cấp độ 7. Một tô mì hoàn chỉnh có thể giao cho bất kỳ đơn hàng nào đang chờ phù hợp, kể cả món khác chưa làm xong trong cùng một nhóm khách. Nếu giao sai đơn hoàn toàn, tô mì sẽ bị lãng phí và khách hàng được chọn sẽ bực bội bỏ đi.
- Mỗi ngày làm việc kéo dài trong 210 giây để khách ghé quán. Khách mới sẽ dừng đến khi quán gần giờ đóng cửa, sau đó các đơn đang chờ sẽ có thêm tối đa 60 giây gia hạn. Đóng cửa sớm sẽ yêu cầu xác nhận, và xác nhận đóng cửa thêm lần nữa trong thời gian gia hạn sẽ kết thúc ngày ngay lập tức. Giá cả, độ danh tiếng, sự kiện và trang thiết bị nâng cấp sẽ tác động trực tiếp đến lượng khách đến quán.
- Hàng hóa trong kho hết hạn theo từng lô. Báo cáo tài chính cuối ngày tính đầy đủ tiền thuê mặt bằng, điện nước, điện tiêu thụ của thiết bị và tiền lương nhân viên; số dư tiền mặt có thể bị âm. Khoản trả nợ được tách biệt rõ ràng giữa tiền gốc và tiền lãi. Có ba mục tiêu hằng ngày giúp bạn nhận thêm tiền mặt và điểm kinh nghiệm (XP).
- Quán mới mở sẽ bắt đầu với 1 tô mì có người hướng dẫn: đồng hồ trong ngày sẽ tạm dừng trong khi huấn luyện viên khoanh vùng từng thao tác tiếp theo.
- Từ ngày thứ 2 trở đi, các mẩu chuyện đường phố sẽ ngẫu nhiên xuất hiện làm gián đoạn việc phục vụ (hết bình gas, đổ vỡ, xe du lịch ghé quán, thanh tra kiểm tra...). Những sự cố thanh toán cũng có thể xảy ra: khách ăn quẹt tiền, thối nhầm tiền thừa, khách xin nợ, hoặc khiếu nại chất lượng. Màn hình phục vụ sẽ tạm dừng và mỗi quyết định xử lý đều đi kèm chi phí/hậu quả riêng.
- Một số vị khách có thể đang vội, đột ngột đổi ý về độ cay, hoặc mặc cả kì kèo giá sau khi đã ăn xong.
- Khi một món bị hết nguyên liệu trong kho, phiếu gọi món sẽ hiện nút "Xử lý": mua gấp (giá cao hơn), đề xuất đổi món khác, bỏ bớt topping, bảo khách đợi, hoặc xin lỗi khách. Bấm trực tiếp vào nguyên liệu đã hết cũng sẽ mua gấp món đó.
- Nợ nần, các khoản tiền bất ngờ, thăng cấp, thông tin cập nhật mới, quà bất ngờ từ hàng xóm và đơn xin nghỉ phép của đầu bếp sẽ xuất hiện dưới dạng các thẻ thông báo vào sáng hôm sau theo đúng thứ tự. Nếu số dư trong két không đủ để nhập số lượng tối thiểu, quán sẽ không thể mở cửa cho đến khi bạn vay tiền hoặc bắt đầu một quán mới.
- Khách đánh giá quán sẽ nêu rõ lý do. Bạn có thể phản hồi đánh giá trong vòng 2 ngày: một câu trả lời lịch sự có thể gỡ lại 1 sao, còn trả lời thô lỗ sẽ khiến bạn bị mất thêm 1 sao.
- Trang bị, nhân sự, trang trí và biểu đồ phân bố đánh giá đều nằm trong các tab Quản lý. Hiệu ứng âm thanh và nhạc nền được tổng hợp trực tiếp bằng Web Audio trong trình duyệt, có nút bật/tắt riêng.
- Mỗi đối tượng trong game đều có hình minh họa nguyên bản riêng:
  - Khách hàng được vẽ theo từng nhóm tính cách, biểu cảm khuôn mặt thay đổi theo mức độ kiên nhẫn;
  - Chân dung nhân viên và linh vật Bếp trưởng Ớt Hiểm;
  - Mỗi loại nước dùng có một kiểu nồi riêng;
  - Tô mì được vẽ trực quan đúng theo những gì đang có bên trong (nước dùng, sợi mì, topping, ớt);
  - Khung cảnh quán thể hiện rõ mái hiên, đồ trang trí và từng món đồ bạn đã nâng cấp;
  - Khung cảnh con phố phía sau khách hàng chuyển dần từ ban ngày sang đêm muộn, và có mưa rơi vào những ngày trời mưa.
- Khi quán đã đăng ký ứng dụng giao hàng (delivery app), mỗi ngày sẽ có vài đơn quá xa đối với tài xế của app. Sau khi nấu xong, bạn có thể tự mình lái xe máy đi giao, né ổ gà, vũng nước và chóp nón giao thông, hoặc thuê dịch vụ giao hàng nhanh. Một chuyến giao hàng an toàn, không va chạm sẽ mang lại tiền thưởng và sao đánh giá.
- Từ cấp độ 9 trở đi, trạm không gian sẽ mở ra các đơn hàng liên hành tinh. Hãy tính toán lượng nhiên liệu mang theo, thu thập các bình năng lượng trên đường đi, né thiên thạch, rác vũ trụ và sao chổi để hạ cánh an toàn xuống 1 trong 5 hành tinh.
- Các hoạt động thường nhật bổ sung: trả giá ngoài chợ, trò chơi trí nhớ tìm công thức nước dùng bí mật, và rửa bát. Chế độ Thử thách hằng ngày (Daily Challenge) theo hạt giống (seed) chạy độc lập và không ảnh hưởng đến quán chính của bạn. Kỷ lục của chế độ này được lưu cục bộ trên trình duyệt.
- Các chuyển động mượt mà bám sát cơ chế gốc:
  - Khách đi vào quán, nhún nhảy trong lúc đợi, toát mồ hôi khi sắp hết kiên nhẫn, và bay đi như một bóng ma vui vẻ hoặc giận dữ (thả tim nếu tô mì hoàn hảo);
  - Mì được vớt lên với hiệu ứng văng nước đúng màu nước dùng, nước dùng nhỏ giọt, topping rơi vào tô;
  - Chai tương ớt bóp nhẹ, phun lửa khi đạt từ cấp độ cay 5 trở lên;
  - Tô mì bay đến tay khách, và tiền trong ví tăng số liên tục;
  - Các lựa chọn tình huống bị khóa trong 1.2 giây kèm thanh tiến trình để tránh bấm nhầm.

  Mọi hoạt ảnh đều tối ưu bằng `transform` và `opacity`, tự dừng khi mở hộp thoại và có thể tắt hoàn toàn qua tùy chọn **Chuyển động**.
- Con phố phía sau khách luôn sống động: Chim sẻ đậu trên dây điện, người qua lại (che ô khi trời mưa), xe máy và xe buýt chạy qua trên màn hình rộng. Đàn chim bay về tổ lúc hoàng hôn, đèn đường chập chờn thu hút bướm đêm, mèo đi dạo trên mái nhà, thả diều vào cuối tuần và thú cưng luôn đồng hành cùng bạn. Các câu chuyện đường phố đều có hoạt cảnh ngắn riêng.
- **Chuyện tình căn bếp:** Từ cấp độ 7, phụ bếp mì Bé Ngò và đầu bếp nước dùng Anh Sả sẽ nảy sinh tình cảm qua 3 giai đoạn và xin nghỉ phép hẹn hò. Đồng ý đồng nghĩa bạn phải tự nấu một mình. Từ chối có nguy cơ họ bỏ việc hoặc giảm năng suất. Một món quà cưới chúc phúc sẽ mang lại kẹo cưới và giúp quán đông khách hơn.
- **Hàng xóm:** Sáu cửa tiệm lân cận trên cùng dãy phố. Bạn có thể gửi tối đa 3 bất ngờ mỗi ngày sang quán họ: thả chuột, gửi khách say xỉn, báo tổ trật tự phường kiểm tra, gửi khách hay trả giá, dẫn đoàn du lịch hoặc mời người nổi tiếng. Họ cũng sẽ "đáp lễ" lại quán bạn vào ngày hôm sau, và bảng xếp hạng dãy phố sẽ so sánh doanh thu trọn đời giữa các quán. Hàng xóm hoàn toàn là nhân vật trong game, không phải người chơi thật.
- Linh vật Ớt Hiểm ngồi trên bảng hiệu quán sẽ đưa ra các lời khuyên hữu ích, đặc biệt là khi có đánh giá đang chờ trả lời hoặc quán đang vướng nợ. Bạn cũng có thể vuốt ve chú thú cưng trong bức tranh quán.
- Trò chơi có màn hình xác nhận điều khoản trước khi bắt đầu. Thẻ thông báo "Có gì mới" xuất hiện 1 lần cho mỗi phiên bản mới. Mục **Cài đặt** cung cấp hướng dẫn cài đặt ứng dụng và xem lại điều khoản. Game có thể thêm vào màn hình chính (PWA) và chơi ngoại tuyến hoàn toàn sau lần truy cập đầu tiên; thông báo cập nhật chỉ hiện ở màn hình chuẩn bị hàng, tuyệt đối không làm phiền giữa giờ bán.

Game sẽ tự động tạm dừng khi mở các hộp thoại hoặc khi bạn chuyển sang tab khác. Khi quay lại tab game đang chơi, một hộp thoại tiếp tục rõ ràng sẽ hiện ra. Kho hàng, tô mì đang làm, nồi mì, khách hàng và tiến trình chơi đều được lưu đồng bộ cùng nhau. Dữ liệu lưu từ phiên bản 1 cũ sẽ được tự động nâng cấp sang định dạng mới và giữ lại bản sao lưu JSON gốc (lưu ý: bộ engine v1 trước đây không lưu tô mì chưa nấu xong nên phần trạng thái dở dang đó không thể phục hồi).

Sử dụng **Menu → Xuất bản lưu** để tải về file sao lưu JSON, hoặc **Nhập bản lưu** để khôi phục lại tiến trình. Dữ liệu lưu gắn liền với từng trình duyệt và tên miền/cổng truy cập. Hãy luôn xuất bản lưu trước khi dọn dẹp dữ liệu duyệt web hoặc đổi cổng server.

## Kiểm thử & Xác thực chất lượng

```powershell
npm test
npm ci
npx playwright install chromium
npm run test:browser
npm run build
npm run test:pages
npm run test:simulation
```

Bộ chạy kiểm thử trình duyệt sẽ tự khởi động và tắt server kiểm thử cục bộ. Nó sẽ thực thi toàn bộ các bộ test: kiểm tra tính tương đương (parity), tương tác người dùng, bố cục hiển thị (layout), cài đặt/ngoại tuyến (`pwa-browser.mjs`), hiệu ứng (`fx-browser.mjs`) và con phố sống động (`life-browser.mjs`). Có thể truyền tham số `SUITES=a.mjs,b.mjs` để chọn bộ test, hoặc `ONLY=<tên kịch bản>` để chạy một phần kịch bản. CI (`test:pages`) chạy toàn bộ trừ suite con phố sống động (vì tốn vài phút chạy); các quy tắc của nó đã được bao phủ bởi `tests/life.test.js` và suite bố cục. Các bài kiểm thử bao quát từ bất biến của engine, cơ chế gốc, mini-game, thao tác nấu nướng thực tế, lưu/nhập/xuất file, tạm dừng game, phím điều hướng, cạnh tranh với hàng xóm, tải đồ họa đến độ co giãn màn hình. Kịch bản mô phỏng 100 ngày được cấp seed cố định giúp kiểm tra dòng tiền, hạn dùng kho hàng và tính toàn vẹn của dữ liệu lưu. Ảnh chụp màn hình và báo cáo máy đọc được xuất vào thư mục `test-results/`.

Lệnh `npm run test:pages` sẽ đóng gói và chạy server trên thư mục `dist/` dưới đường dẫn `/game-shop/` rồi chạy kiểm thử e2e tại đó nhằm đảm bảo không có đường dẫn tài nguyên nào bị lỗi khi đưa lên máy chủ thật.

Kiểm tra bố cục bao phủ đầy đủ các kích thước: màn hình điện thoại (320×568 đến 390×844), điện thoại xoay ngang (844×390), máy tính bảng (768×1024, 1024×768) và máy tính để bàn (1280×720 đến 1920×1080). Đảm bảo mọi nút bấm nấu nướng đều thấy được và bấm được mà không cần cuộn trang, vùng chạm tối thiểu 44px, vuốt ngón tay cuộn tủ nguyên liệu mà không bị kích hoạt bấm nhầm, và mọi hộp thoại đều giữ nút đóng/hành động nằm trong tầm nhìn.

## Triển khai lên GitHub Pages

Kho mã nguồn sử dụng remote SSH: `git@github.com:buicongnguyen/game-shop.git`. Khi đẩy nhánh `main`, GitHub Actions `.github/workflows/pages.yml` sẽ tự động chạy: cài đặt dependencies, chạy unit test của engine, build dự án, kiểm tra bản build trên Chromium, và đưa thư mục `dist/` lên GitHub Pages. Bạn cũng có thể kích hoạt workflow này thủ công trong tab Actions. Các file sao lưu cục bộ, node_modules, thư mục build và kết quả test đều được cấu hình bỏ qua trong Git.

*Lưu ý:* GitHub Pages và localhost sử dụng vùng nhớ trình duyệt riêng biệt. Bạn có thể dùng tính năng Xuất bản lưu từ máy cục bộ rồi Nhập bản lưu trên trang online để chuyển tiến trình chơi.

## Cấu trúc thư mục & Tệp tin

Dự án này sở hữu toàn bộ mã nguồn và tranh vẽ nguyên bản độc lập. Game chạy hoàn toàn cục bộ, không gửi yêu cầu ra internet. Service Worker lưu cache trang web tĩnh để chơi offline (trên HTTPS hoặc thêm cờ `?sw` khi chạy local). Dự án không cần dùng đến Blender hay Unity: định dạng SVG thuần giúp hình ảnh luôn sắc nét trên mọi độ phân giải màn hình, dung lượng nhẹ chỉ khoảng 1 KB mỗi nguyên liệu và đổi màu mái hiên linh hoạt. Tô mì và nồi nấu được kết xuất trực tiếp theo trạng thái game thực tế.

- [`src/game.js`](file:///C:/games/tiem-mi-cay/src/game.js): Trạng thái game, cơ chế nấu ăn, khách hàng, tình huống, kinh tế, lưu trữ và xác thực.
- [`src/situations.js`](file:///C:/games/tiem-mi-cay/src/situations.js): Các câu chuyện đường phố và kết quả của từng lựa chọn.
- [`src/voice.js`](file:///C:/games/tiem-mi-cay/src/voice.js): Tên khách hàng tiếng Việt nguyên bản, câu thoại gọi món, đánh giá và gợi ý phản hồi.
- [`src/audio.js`](file:///C:/games/tiem-mi-cay/src/audio.js): Hiệu ứng âm thanh Web Audio và 2 bản nhạc nền lặp được tổng hợp trực tiếp.
- [`src/catalog.js`](file:///C:/games/tiem-mi-cay/src/catalog.js): Cấu hình dữ liệu nguyên liệu, trang bị, nhân viên, đồ trang trí.
- [`src/sidequests.js`](file:///C:/games/tiem-mi-cay/src/sidequests.js): Trạng thái và quy tắc của các mini-game hằng ngày.
- [`src/art/people.js`](file:///C:/games/tiem-mi-cay/src/art/people.js), [`src/art/bowl.js`](file:///C:/games/tiem-mi-cay/src/art/bowl.js), [`src/art/scene.js`](file:///C:/games/tiem-mi-cay/src/art/scene.js): Bộ tạo đồ họa tự vẽ cho nhân vật, căn bếp, khung cảnh quán và đường phố (xem [docs/ART-STYLE.md](docs/ART-STYLE.md)).
- [`src/ride.js`](file:///C:/games/tiem-mi-cay/src/ride.js), [`src/planets.js`](file:///C:/games/tiem-mi-cay/src/planets.js): Mini-game lái xe máy và tàu vũ trụ (vẽ bằng canvas), quy tắc hành tinh, nhiên liệu và đường bay.
- [`src/neighbours.js`](file:///C:/games/tiem-mi-cay/src/neighbours.js): Hệ thống quán hàng xóm, các trò bất ngờ và bảng xếp hạng dãy phố.
- [`src/fx.js`](file:///C:/games/tiem-mi-cay/src/fx.js), [`src/fx.css`](file:///C:/games/tiem-mi-cay/src/fx.css): Lớp hiệu ứng thị giác trong bếp và khách hàng (sử dụng pool đối tượng, chỉ dùng transform và opacity).
- [`src/life.js`](file:///C:/games/tiem-mi-cay/src/life.js), [`src/life.css`](file:///C:/games/tiem-mi-cay/src/life.css), [`src/art/life.js`](file:///C:/games/tiem-mi-cay/src/art/life.js): Con phố sống động và các sprite hoạt cảnh, huy hiệu chuyện tình bếp và icon bất ngờ.
- [`src/meta-ui.js`](file:///C:/games/tiem-mi-cay/src/meta-ui.js): Giao diện điều khoản, thông tin phiên bản mới, hướng dẫn cài đặt PWA và mẹo từ linh vật.
- [`src/pwa.js`](file:///C:/games/tiem-mi-cay/src/pwa.js), [`sw.js`](file:///C:/games/tiem-mi-cay/sw.js), [`manifest.webmanifest`](file:///C:/games/tiem-mi-cay/manifest.webmanifest), [`src/art/app-icon.js`](file:///C:/games/tiem-mi-cay/src/art/app-icon.js), [`tools/icons.mjs`](file:///C:/games/tiem-mi-cay/tools/icons.mjs): Cài đặt màn hình chính, service worker offline và icon ứng dụng.
- [`src/app.js`](file:///C:/games/tiem-mi-cay/src/app.js), [`src/minigames-ui.js`](file:///C:/games/tiem-mi-cay/src/minigames-ui.js), [`src/ui.js`](file:///C:/games/tiem-mi-cay/src/ui.js): Giao diện người dùng và bộ điều khiển tương tác.
- [`src/style.css`](file:///C:/games/tiem-mi-cay/src/style.css): Bố cục tổng thể, giao diện và phản hồi đa kích thước màn hình (responsive).
- `public/assets/`: Các hình minh họa gốc, font chữ cục bộ và giấy phép font.
- [`server.mjs`](file:///C:/games/tiem-mi-cay/server.mjs), `tools/`: Server HTTP nội bộ, script đóng gói build và bộ chạy kiểm thử.
- `reference-values.md`: Các chỉ số và quy tắc quan sát được dùng để xây dựng game độc lập.
- `PLAN.md`, `docs/PARITY.md`, `AUDIT.md`: Kế hoạch thực hiện, ma trận tương quan và kết quả kiểm định.

Xem thêm [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) để biết thông tin bản quyền và nguồn gốc font chữ.
