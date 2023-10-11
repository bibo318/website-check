export interface Doc {
  id: string;
  title: string;
  description: string;
  use: string;
  resources: string[] | { title: string, link: string}[];
  screenshot?: string;
}

const docs: Doc[] = [
  {
    id: "get-ip",
    title: "Thông tin IP",
    description:
      "Địa chỉ IP (Địa chỉ Giao thức Internet) là nhãn số được gán cho mỗi thiết bị được kết nối với mạng /internet. Có thể tìm thấy IP được liên kết với một miền nhất định bằng cách truy vấn Hệ thống tên miền (DNS) để tìm bản ghi A (địa chỉ) của miền.",
    use: "Tìm IP của một máy chủ nhất định là bước đầu tiên để tiến hành điều tra thêm vì nó cho phép chúng tôi thăm dò máy chủ để biết thêm thông tin. Bao gồm việc tạo bản đồ chi tiết về cơ sở hạ tầng mạng của mục tiêu, xác định chính xác vị trí thực của máy chủ, xác định dịch vụ lưu trữ và thậm chí khám phá các miền khác được lưu trữ trên cùng một địa chỉ IP.",
    resources: [
      { title: 'Hiểu biết IP Addresses', link: 'https://www.digitalocean.com/community/tutorials/understanding-ip-addresses-subnets-and-cidr-notation-for-networking'},
      { title: 'IP Addresses - Wiki', link: 'https://en.wikipedia.org/wiki/IP_address'},
      { title: 'RFC-791 Internet Protocol', link: 'https://tools.ietf.org/html/rfc791'},
      { title: 'whatismyipaddress.com', link: 'https://whatismyipaddress.com/'},
    ],
  },
  {
    id: "ssl",
    title: "Chuỗi SSL",
    description:
    "Chứng chỉ SSL là chứng chỉ kỹ thuật số xác thực danh tính của trang web hoặc máy chủ, cho phép liên lạc được mã hóa an toàn (HTTPS) và thiết lập niềm tin giữa máy khách và máy chủ. Cần có chứng chỉ SSL hợp lệ để trang web có thể sử dụng giao thức HTTPS và mã hóa dữ liệu người dùng + trang web trong quá trình truyền. Chứng chỉ SSL được cấp bởi Cơ quan cấp chứng chỉ (CA), là bên thứ ba đáng tin cậy xác minh danh tính và tính hợp pháp của chủ sở hữu chứng chỉ.",  
    use: "Chứng chỉ SSL không chỉ đảm bảo rằng việc truyền dữ liệu đến và từ trang web được an toàn mà còn cung cấp dữ liệu OSINT có giá trị. Thông tin từ chứng chỉ SSL có thể bao gồm cơ quan cấp, tên miền, thời hạn hiệu lực và đôi khi thậm chí cả thông tin chi tiết về tổ chức. Điều này có thể hữu ích để xác minh tính xác thực của trang web, hiểu thiết lập bảo mật của trang web hoặc thậm chí để khám phá các tên miền phụ liên quan hoặc các dịch vụ khác.",
    resources: [
      { title: 'TLS - Wiki', link: 'https://en.wikipedia.org/wiki/Transport_Layer_Security'},
      { title: 'SSL là gì (thông qua học tập trên Cloudflare)', link: 'https://www.cloudflare.com/learning/ssl/what-is-ssl/'},
      { title: 'RFC-8446 - TLS', link: 'https://tools.ietf.org/html/rfc8446'},
      { title: 'SSL Checker', link: 'https://www.sslshopper.com/ssl-checker.html'},
    ],
    screenshot: 'https://i.ibb.co/kB7LsV1/wc-ssl.png',
  },
  {
    id: "dns",
    title: "Bản ghi DNS",
    description:
      "Nhiệm vụ này liên quan đến việc tra cứu các bản ghi DNS được liên kết với một miền cụ thể. DNS là một hệ thống dịch các tên miền mà con người có thể đọc được thành địa chỉ IP mà máy tính sử dụng để liên lạc. Tồn tại nhiều loại bản ghi DNS khác nhau, bao gồm A (địa chỉ), MX (trao đổi thư), NS (máy chủ tên), CNAME (tên chuẩn) và TXT (văn bản), cùng với các loại khác.",
    use: "Trích xuất bản ghi DNS có thể cung cấp nhiều thông tin trong cuộc điều tra OSINT. Ví dụ: bản ghi A và AAAA có thể tiết lộ địa chỉ IP được liên kết với một tên miền, có khả năng tiết lộ vị trí của máy chủ. Bản ghi MX có thể cung cấp manh mối về nhà cung cấp email của tên miền . Các bản ghi TXT thường được sử dụng cho nhiều mục đích quản trị khác nhau và đôi khi có thể vô tình làm rò rỉ thông tin nội bộ. Việc hiểu rõ thiết lập DNS của một miền cũng có thể hữu ích trong việc hiểu cách xây dựng và quản lý cơ sở hạ tầng trực tuyến của miền đó.",
    resources: [
      { title: 'What are DNS records? (via Cloudflare learning)', link: 'https://www.cloudflare.com/learning/dns/dns-records/'},
      { title: 'DNS Record Types', link: 'https://en.wikipedia.org/wiki/List_of_DNS_record_types'},
      { title: 'RFC-1035 - DNS', link: 'https://tools.ietf.org/html/rfc1035'},
      { title: 'DNS Lookup (via MxToolbox)', link: 'https://mxtoolbox.com/DNSLookup.aspx'},
    ],
    screenshot: 'https://i.ibb.co/7Q1kMwM/wc-dns.png',
  },
  {
    id: "cookies",
    title: "Cookies",
    description:
      "Nhiệm vụ Cookies bao gồm việc kiểm tra các cookie HTTP do trang web mục tiêu đặt. Cookie là những đoạn dữ liệu nhỏ được trình duyệt web lưu trữ trên máy tính của người dùng khi duyệt một trang web. Họ lưu giữ một lượng dữ liệu khiêm tốn dành riêng cho một khách hàng và trang web cụ thể, chẳng hạn như tùy chọn trang web, trạng thái phiên của người dùng hoặc thông tin theo dõi.",
    use: "Cookie có thể tiết lộ thông tin về cách trang web theo dõi và tương tác với người dùng. Ví dụ: cookie phiên có thể tiết lộ cách quản lý phiên của người dùng và cookie theo dõi có thể gợi ý loại khung theo dõi hoặc phân tích nào đang được sử dụng. Ngoài ra, việc kiểm tra các chính sách và thực tiễn về cookie có thể cung cấp thông tin chi tiết về cài đặt bảo mật của trang web và việc tuân thủ các quy định về quyền riêng tư.",
    resources: [
      { title: 'Tài liệu cookie HTTP(Mozilla)', link: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies' },
      { title: 'Cookie là gì (thông qua Cloudflare Learning)', link: 'https://www.cloudflare.com/learning/privacy/what-are-cookies/' },
      { title: 'Kiểm tra thuộc tính cookie (OWASP)', link: 'https://owasp.org/www-project-web-security-testing-guide/v42/4-Web_Application_Security_Testing/06-Session_Management_Testing/02-Testing_for_Cookies_Attributes' },
      { title: 'RFC-6265 - Coolies', link: 'https://tools.ietf.org/html/rfc6265' },
    ],
    screenshot: 'https://i.ibb.co/TTQ6DtP/wc-cookies.png',
  },
  {
    id: "robots-txt",
    title: "Quy tắc thu thập thông tin",
    description:
      "Robots.txt là một tệp được tìm thấy (thường) ở thư mục gốc của miền và được dùng để triển khai Giao thức loại trừ robot (REP) nhằm cho biết những trang nào sẽ bị bỏ qua bởi trình thu thập thông tin và bot nào. Đó là một cách thực hành tốt để tránh các trình thu thập thông tin của công cụ tìm kiếm tải quá mức trang web của bạn, nhưng không nên sử dụng để loại các trang ra khỏi kết quả tìm kiếm (thay vào đó hãy sử dụng thẻ meta noindex hoặc tiêu đề).",
    use: "Việc kiểm tra tệp robots.txt trong quá trình điều tra thường rất hữu ích vì đôi khi nó có thể tiết lộ các thư mục và trang mà chủ sở hữu trang web không muốn lập chỉ mục, có thể vì chúng chứa thông tin nhạy cảm hoặc tiết lộ sự tồn tại của các thông tin bị ẩn hoặc bị ẩn. các thư mục không được liên kết. Ngoài ra, việc hiểu các quy tắc thu thập dữ liệu có thể cung cấp thông tin chi tiết về chiến lược SEO của trang web.",
    resources: [
      { title: 'Tài liệu Tìm kiếm của Google -Robots.txt', link: 'https://developers.google.com/search/docs/advanced/robots/intro' },
      { title: 'Learn about robots.txt (via Moz.com)', link: 'https://moz.com/learn/seo/robotstxt' },
      { title: 'RFC-9309 -  Robots Exclusion Protocol', link: 'https://datatracker.ietf.org/doc/rfc9309/' },
      { title: 'Robots.txt - wiki', link: 'https://en.wikipedia.org/wiki/Robots_exclusion_standard' },
    ],
    screenshot: 'https://i.ibb.co/KwQCjPf/wc-robots.png',
  },
  {
    id: "headers",
    title: "Headers",
    description:
      "Nhiệm vụ Tiêu đề liên quan đến việc trích xuất và giải thích các tiêu đề HTTP được gửi bởi trang web mục tiêu trong chu kỳ phản hồi yêu cầu. Tiêu đề HTTP là các cặp khóa-giá trị được gửi khi bắt đầu phản hồi HTTP hoặc trước dữ liệu thực tế. Tiêu đề chứa các chỉ thị quan trọng về cách xử lý dữ liệu được truyền, bao gồm chính sách bộ đệm, loại nội dung, mã hóa, thông tin máy chủ, chính sách bảo mật, v.v.",
    use: "Phân tích tiêu đề HTTP có thể cung cấp những hiểu biết quan trọng trong cuộc điều tra OSINT. Tiêu đề có thể tiết lộ cấu hình máy chủ cụ thể, công nghệ đã chọn, chỉ thị bộ nhớ đệm và các cài đặt bảo mật khác nhau. Thông tin này có thể giúp xác định nền tảng công nghệ cơ bản của trang web, các biện pháp bảo mật phía máy chủ, các lỗ hổng tiềm ẩn và các phương pháp vận hành chung.",
    resources: [
      { title: 'Headers HTTP -Tài liệu', link: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers' },
      { title: 'RFC-7231 Section 7 - Headers', link: 'https://datatracker.ietf.org/doc/html/rfc7231#section-7' },
      { title: 'List of header response fields', link: 'https://en.wikipedia.org/wiki/List_of_HTTP_header_fields' },
      { title: 'OWASP Secure Headers Project', link: 'https://owasp.org/www-project-secure-headers/' },
    ],
    screenshot: 'https://i.ibb.co/t3xcwP1/wc-headers.png',
  },
  {
    id: "quality",
    title: "Chỉ số chất lượng",
    description:
      "Khi sử dụng Lighthouse, tác vụ Chỉ số chất lượng sẽ đo lường hiệu suất, khả năng truy cập, các phương pháp hay nhất và SEO của trang web mục tiêu. Điều này trả về một danh sách kiểm tra đơn giản gồm 100 số liệu cốt lõi, cùng với điểm cho từng danh mục, để đánh giá chất lượng tổng thể của một trang web nhất định.",
    use: "Hữu ích để đánh giá tình trạng kỹ thuật của trang web, các vấn đề về SEO, xác định lỗ hổng và đảm bảo tuân thủ các tiêu chuẩn.",
    resources: [
      { title: 'Lighthouse Docs', link: 'https://developer.chrome.com/docs/lighthouse/' },
      { title: 'Google Page Speed Tools', link: 'https://developers.google.com/speed' },
      { title: 'W3 Accessibility Tools', link: 'https://www.w3.org/WAI/test-evaluate/' },
      { title: 'Google Search Console', link: 'https://search.google.com/search-console' },
      { title: 'SEO Checker', link: 'https://www.seobility.net/en/seocheck/' },
      { title: 'PWA Builder', link: 'https://www.pwabuilder.com/' },
    ],
    screenshot: 'https://i.ibb.co/Kqg8rx7/wc-quality.png',
  },
  {
    id: "location",
    title: "Vị trí máy chủ",
    description:
      "Tác vụ Vị trí máy chủ xác định vị trí thực tế của máy chủ lưu trữ một trang web nhất định dựa trên địa chỉ IP của nó. Điều này được thực hiện bằng cách tra cứu IP trong cơ sở dữ liệu vị trí, cơ sở dữ liệu này ánh xạ IP tới vĩ độ + vĩ độ của các trung tâm dữ liệu và ISP đã biết. Từ vĩ độ và kinh độ, sau đó có thể hiển thị thông tin theo ngữ cảnh bổ sung, như ghim trên bản đồ, cùng với địa chỉ, cờ, múi giờ, tiền tệ, v.v.",
    use: "Biết vị trí máy chủ là bước đầu tiên tốt để hiểu rõ hơn về một trang web. Đối với chủ sở hữu trang web, điều này hỗ trợ tối ưu hóa việc phân phối nội dung, đảm bảo tuân thủ các yêu cầu về nơi lưu trữ dữ liệu và xác định các vấn đề tiềm ẩn về độ trễ có thể ảnh hưởng đến trải nghiệm người dùng ở các khu vực địa lý cụ thể. Và đối với nhà nghiên cứu bảo mật, hãy đánh giá rủi ro do các khu vực hoặc khu vực pháp lý cụ thể gây ra liên quan đến các mối đe dọa và quy định trên mạng.",
    resources: [
      { title: 'IP Locator', link: 'https://geobytes.com/iplocator/' },
      { title: 'Internet Geolocation - Wiki', link: 'https://en.wikipedia.org/wiki/Internet_geolocation' },
    ],
    screenshot: 'https://i.ibb.co/cXH2hfR/wc-location.png',
  },
  {
    id: "hosts",
    title: "Host được liên kết",
    description:
      "Nhiệm vụ này bao gồm việc xác định và liệt kê tất cả các tên miền và tên miền phụ (tên máy chủ) được liên kết với tên miền chính của trang web. Quá trình này thường liên quan đến việc liệt kê DNS để khám phá mọi tên miền và tên máy chủ được liên kết, cũng như xem xét các bản ghi DNS đã biết.",
    use: "Trong quá trình điều tra, việc hiểu toàn bộ phạm vi hiện diện web của mục tiêu là rất quan trọng. Các miền được liên kết có thể dẫn đến việc phát hiện các dự án liên quan, các trang sao lưu, các trang phát triển/thử nghiệm hoặc các dịch vụ được liên kết với trang chính. Những điều này đôi khi có thể cung cấp thêm thông tin hoặc các lỗ hổng bảo mật tiềm ẩn. Danh sách đầy đủ các tên miền và tên máy chủ được liên kết cũng có thể cung cấp cái nhìn tổng quan về cấu trúc và dấu chân trực tuyến của tổ chức.",
    resources: [
      { title: 'DNS Enumeration - Wiki', link: 'https://en.wikipedia.org/wiki/DNS_enumeration' },
      { title: 'OWASP - Enumerate Applications on Webserver', link: 'https://owasp.org/www-project-web-security-testing-guide/latest/4-Web_Application_Security_Testing/01-Information_Gathering/04-Enumerate_Applications_on_Webserver' },
      { title: 'DNS Enumeration - DNS Dumpster', link: 'https://dnsdumpster.com/' },
      { title: 'Subdomain Finder', link: 'https://subdomainfinder.c99.nl/' },
    ],
    screenshot: 'https://i.ibb.co/25j1sT7/wc-hosts.png',
  },
  {
    id: "redirects",
    title: "Chuỗi chuyển hướng (redirects)",
    description:
      "Tác vụ này theo dõi trình tự chuyển hướng HTTP xảy ra từ URL gốc đến URL đích cuối cùng. Chuyển hướng HTTP là phản hồi có mã trạng thái khuyên khách hàng truy cập một URL khác. Chuyển hướng có thể xảy ra vì một số lý do, chẳng hạn như chuẩn hóa URL (hướng tới phiên bản www của trang web), thực thi HTTPS, công cụ rút ngắn URL hoặc chuyển tiếp người dùng đến vị trí trang web mới.",
    use: "Hiểu chuỗi chuyển hướng có thể hữu ích vì một số lý do. Từ góc độ bảo mật, chuỗi chuyển hướng dài hoặc phức tạp có thể là dấu hiệu của những rủi ro bảo mật tiềm ẩn, chẳng hạn như các chuyển hướng không được mã hóa trong chuỗi. Ngoài ra, chuyển hướng có thể ảnh hưởng đến hiệu suất trang web và SEO, vì mỗi chuyển hướng đều giới thiệu thêm thời gian khứ hồi (RTT). Đối với OSINT, việc hiểu chuỗi chuyển hướng có thể giúp xác định mối quan hệ giữa các tên miền khác nhau hoặc tiết lộ việc sử dụng các công nghệ hoặc nhà cung cấp dịch vụ lưu trữ nhất định.",
    resources: [
      { title: 'HTTP Redirects - MDN', link: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Redirections' },
      { title: 'URL Redirection - Wiki', link: 'https://en.wikipedia.org/wiki/URL_redirection' },
      { title: '301 Redirects explained', link: 'https://ahrefs.com/blog/301-redirects/' },
    ],
    screenshot: 'https://i.ibb.co/hVVrmwh/wc-redirects.png',
  },
  {
    id: "txt-records",
    title: "Bản ghi TXT",
    description:
      "TXT records là một loại bản ghi DNS cung cấp thông tin văn bản cho các nguồn bên ngoài miền của bạn. Chúng có thể được sử dụng cho nhiều mục đích khác nhau, chẳng hạn như xác minh quyền sở hữu miền, đảm bảo bảo mật email và thậm chí ngăn chặn những thay đổi trái phép đối với trang web của bạn.",
    use: "Bản ghi TXT thường tiết lộ những dịch vụ và công nghệ bên ngoài nào đang được sử dụng với một miền nhất định. Chúng có thể tiết lộ chi tiết về cấu hình email của miền, việc sử dụng các dịch vụ cụ thể như Google Workspace hoặc Microsoft 365 hoặc các biện pháp bảo mật hiện có như SPF và DKIM. Hiểu được những chi tiết này có thể cung cấp cái nhìn sâu sắc về các công nghệ được tổ chức sử dụng, các biện pháp bảo mật email của họ và các lỗ hổng tiềm ẩn.",
    resources: [
      { title: 'TXT Records (via Cloudflare Learning)', link: 'https://www.cloudflare.com/learning/dns/dns-records/dns-txt-record/' },
      { title: 'TXT Records - Wiki', link: 'https://en.wikipedia.org/wiki/TXT_record' },
      { title: 'RFC-1464 - TXT Records', link: 'https://datatracker.ietf.org/doc/html/rfc1464' },
      { title: 'TXT Record Lookup (via MxToolbox)', link: 'https://mxtoolbox.com/TXTLookup.aspx' },
    ],
    screenshot: 'https://i.ibb.co/wyt21QN/wc-txt-records.png',
  },
  {
    id: "status",
    title: "Trạng thái Server ",
    description: "Kiểm tra xem máy chủ có trực tuyến và phản hồi yêu cầu không.",
    use: "",
    resources: [
    ],
    screenshot: 'https://i.ibb.co/V9CNLBK/wc-status.png',
  },
  {
    id: "ports",
    title: "Open Ports",
    description:
      "Open ports trên máy chủ là các điểm cuối của giao tiếp có sẵn để thiết lập kết nối với máy khách. Mỗi cổng tương ứng với một dịch vụ hoặc giao thức cụ thể, chẳng hạn như HTTP (cổng 80), HTTPS (cổng 443), FTP (cổng 21), v.v. Có thể xác định các cổng mở trên máy chủ bằng cách sử dụng các kỹ thuật như quét cổng.",
    use: "Biết cổng nào đang mở trên máy chủ có thể cung cấp thông tin về các dịch vụ đang chạy trên máy chủ đó, hữu ích để hiểu các lỗ hổng tiềm ẩn của hệ thống hoặc để hiểu bản chất của các dịch vụ mà máy chủ đang cung cấp.",
    resources: [
      { title: 'List of TCP & UDP Port Numbers', link: 'https://en.wikipedia.org/wiki/List_of_TCP_and_UDP_port_numbers' },
      { title: 'NMAP - Port Scanning Basics', link: 'https://nmap.org/book/man-port-scanning-basics.html' },
    ],
    screenshot: 'https://i.ibb.co/F8D1hmf/wc-ports.png',
  },
  {
    id: "trace-route",
    title: "Traceroute",
    description:
      "Traceroute là một công cụ chẩn đoán mạng được sử dụng để theo dõi trong thời gian thực đường đi của một gói thông tin từ hệ thống này sang hệ thống khác. Nó ghi lại từng bước nhảy dọc theo tuyến đường, cung cấp thông tin chi tiết về IP của bộ định tuyến và độ trễ tại mỗi điểm.",
    use: "Trong các cuộc điều tra OSINT, traceroute có thể cung cấp thông tin chuyên sâu về đường dẫn định tuyến và vị trí địa lý của cơ sở hạ tầng mạng hỗ trợ một trang web hoặc dịch vụ. Điều này có thể giúp xác định các tắc nghẽn mạng, khả năng kiểm duyệt hoặc thao túng lưu lượng mạng và mang lại cảm nhận tổng thể về cấu trúc và hiệu quả của mạng. Ngoài ra, các địa chỉ IP được thu thập trong quá trình theo dõi có thể cung cấp các điểm yêu cầu bổ sung để điều tra OSINT sâu hơn.",
    resources: [
      "https://www.cloudflare.com/learning/network-layer/what-is-traceroute/",
      "https://tools.ietf.org/html/rfc1393",
      "https://en.wikipedia.org/wiki/Traceroute",
      "https://www.ripe.net/publications/docs/ripe-611",
    ],
    screenshot: 'https://i.ibb.co/M59qgxP/wc-trace-route.png',
  },
  {
    id: "carbon",
    title: "Carbon Footprint",
    description:
      "Nhiệm vụ này tính toán lượng khí thải carbon ước tính của một trang web. Nó dựa trên lượng dữ liệu được truyền và xử lý cũng như mức sử dụng năng lượng của các máy chủ lưu trữ và phân phối trang web. Trang web càng lớn và các tính năng càng phức tạp thì lượng khí thải carbon càng cao.",
    use: "Từ góc độ OSINT, việc hiểu lượng khí thải carbon của một trang web không trực tiếp cung cấp thông tin chuyên sâu về hoạt động nội bộ của trang web đó hoặc tổ chức đằng sau trang web đó. Tuy nhiên, nó vẫn có thể là dữ liệu có giá trị trong các phân tích rộng hơn, đặc biệt là trong bối cảnh mà tác động môi trường được xem xét . Ví dụ: nó có thể hữu ích cho các nhà hoạt động, nhà nghiên cứu hoặc tin tặc có đạo đức, những người quan tâm đến tính bền vững của cơ sở hạ tầng kỹ thuật số và những người muốn yêu cầu các tổ chức phải chịu trách nhiệm về tác động môi trường của họ.",
    resources: [
      { title: 'WebsiteCarbon - Carbon Calculator', link: 'https://www.websitecarbon.com/' },
      { title: 'The Green Web Foundation', link: 'https://www.thegreenwebfoundation.org/' },
      { title: 'The Eco Friendly Web Alliance', link: 'https://ecofriendlyweb.org/' },
      { title: 'Reset.org', link: 'https://en.reset.org/' },
      { title: 'Your website is killing the planet - via Wired', link: 'https://www.wired.co.uk/article/internet-carbon-footprint' },
    ],
    screenshot: 'https://i.ibb.co/5v6fSyw/Screenshot-from-2023-07-29-19-07-50.png',
  },
  {
    id: "server-info",
    title: "Thông tin máy chủ",
    description:
      "Tác vụ này truy xuất nhiều thông tin khác nhau về máy chủ lưu trữ trang web mục tiêu. Điều này có thể bao gồm loại máy chủ (ví dụ: Apache, Nginx), nhà cung cấp dịch vụ lưu trữ, Số hệ thống tự trị (ASN), v.v. Thông tin thường được lấy thông qua sự kết hợp giữa tra cứu địa chỉ IP và phân tích tiêu đề phản hồi HTTP.",
    use: "Trong bối cảnh OSINT, thông tin máy chủ có thể cung cấp manh mối có giá trị về tổ chức đằng sau một trang web. Ví dụ: việc lựa chọn nhà cung cấp dịch vụ lưu trữ có thể gợi ý khu vực địa lý nơi tổ chức hoạt động, trong khi loại máy chủ có thể gợi ý về các công nghệ được sử dụng bởi tổ chức. ASN cũng có thể được sử dụng để tìm các miền khác được lưu trữ bởi cùng một tổ chức.",
    resources: [
      "https://en.wikipedia.org/wiki/List_of_HTTP_header_fields",
      "https://en.wikipedia.org/wiki/Autonomous_system_(Internet)",
      "https://tools.ietf.org/html/rfc7231#section-7.4.2",
      "https://builtwith.com/",
    ],
    screenshot: 'https://i.ibb.co/Mk1jx32/wc-server.png',
  },
  {
    id: "domain",
    title: "Whois Lookup",
    description:
      "Tác vụ này truy xuất bản ghi Whois cho miền đích. Bản ghi Whois là nguồn thông tin phong phú, bao gồm tên và thông tin liên hệ của người đăng ký miền, ngày tạo và hết hạn của miền, máy chủ định danh của miền, v.v. Thông tin thường được thu thập thông qua truy vấn tới máy chủ cơ sở dữ liệu Whois.",
    use: "Trong bối cảnh OSINT, bản ghi Whois có thể cung cấp manh mối có giá trị về thực thể đằng sau một trang web. Chúng có thể hiển thị thời điểm tên miền được đăng ký lần đầu và thời điểm miền được đặt hết hạn, điều này có thể cung cấp thông tin chi tiết về tiến trình hoạt động của thực thể. thông tin liên hệ, mặc dù thường được biên tập lại hoặc ẩn danh, đôi khi có thể dẫn đến các hướng điều tra bổ sung. Máy chủ tên cũng có thể được sử dụng để liên kết nhiều miền thuộc sở hữu của cùng một thực thể với nhau.",
    resources: [
      "https://en.wikipedia.org/wiki/WHOIS",
      "https://www.icann.org/resources/pages/whois-2018-01-17-en",
      "https://whois.domaintools.com/",
    ],
    screenshot: 'https://i.ibb.co/89WLp14/wc-domain.png',
  },
  {
    id: "whois",
    title: "Thông tin Domain",
    description:
      "Tác vụ này truy xuất bản ghi Whois cho miền đích. Bản ghi Whois là nguồn thông tin phong phú, bao gồm tên và thông tin liên hệ của người đăng ký miền, ngày tạo và hết hạn của miền, máy chủ định danh của miền, v.v. Thông tin thường được thu thập thông qua truy vấn tới máy chủ cơ sở dữ liệu Whois.",
    use: "Trong bối cảnh OSINT, bản ghi Whois có thể cung cấp manh mối có giá trị về thực thể đằng sau một trang web. Chúng có thể hiển thị thời điểm tên miền được đăng ký lần đầu và thời điểm miền được đặt hết hạn, điều này có thể cung cấp thông tin chi tiết về tiến trình hoạt động của thực thể. thông tin liên hệ, mặc dù thường được biên tập lại hoặc ẩn danh, đôi khi có thể dẫn đến những con đường điều tra bổ sung. Máy chủ tên cũng có thể được sử dụng để liên kết nhiều miền thuộc sở hữu của cùng một thực thể với nhau.",
    resources: [
      "https://en.wikipedia.org/wiki/WHOIS",
      "https://www.icann.org/resources/pages/whois-2018-01-17-en",
      "https://whois.domaintools.com/",
    ],
    screenshot: 'https://i.ibb.co/89WLp14/wc-domain.png',
  },
  {
    id: "dnssec",
    title: "Tiện ích mở rộng DNS Security ",
    description:
      "Nếu không có DNSSEC, kẻ tấn công MITM có thể giả mạo hồ sơ và dẫn người dùng đến các trang web lừa đảo. Điều này là do hệ thống DNS không bao gồm các phương pháp tích hợp để xác minh rằng phản hồi cho yêu cầu không bị giả mạo hoặc bất kỳ phần nào khác của Quá trình không bị gián đoạn bởi kẻ tấn công. Tiện ích mở rộng bảo mật DNS (DNSSEC) bảo mật việc tra cứu DNS bằng cách ký các bản ghi DNS của bạn bằng khóa chung, để trình duyệt có thể phát hiện xem phản hồi có bị giả mạo hay không. Một giải pháp khác cho vấn đề này là DoH (DNS over) HTTPS) và DoT (DNS qua TLD)",
    use: "Thông tin DNSSEC cung cấp cái nhìn sâu sắc về mức độ trưởng thành về an ninh mạng và các lỗ hổng tiềm ẩn của tổ chức, đặc biệt là xung quanh việc giả mạo DNS và đầu độc bộ nhớ đệm. Nếu không triển khai bảo mật DNS (DNSSEC, DoH, DoT, v.v.), điều này có thể cung cấp điểm vào cho một kẻ tấn công.",
    resources: [
      "https://dnssec-analyzer.verisignlabs.com/",
      "https://www.cloudflare.com/dns/dnssec/how-dnssec-works/",
      "https://en.wikipedia.org/wiki/Domain_Name_System_Security_Extensions",
      "https://www.icann.org/resources/pages/dnssec-what-is-it-why-important-2019-03-05-en",
      "https://support.google.com/domains/answer/6147083",
      "https://www.internetsociety.org/resources/deploy360/2013/dnssec-test-sites/",
    ],
    screenshot: 'https://i.ibb.co/J54zVmQ/wc-dnssec.png',
  },
  {
    id: "features",
    title: "Tính năng trang web",
    description: 'Kiểm tra những tính năng cốt lõi nào có trên một trang web. Nếu một tính năng được đánh dấu là đã chết, điều đó có nghĩa là tính năng đó không được sử dụng tích cực vào thời điểm tải',
    use: "Điều này rất hữu ích để hiểu khả năng của một trang web và những công nghệ cần tìm kiếm",
    resources: [],
    screenshot: 'https://i.ibb.co/gP4P6kp/wc-features.png',
  },
  {
    id: "hsts",
    title: "HTTP Strict Transport Security",
    description: 'HTTP Strict Transport Security (HSTS) là một chính sách bảo mật web '
    +'cơ chế giúp bảo vệ trang web khỏi các cuộc tấn công hạ cấp giao thức và '
    + 'chiếm quyền điều khiển cookie. Một trang web có thể được đưa vào danh sách tải trước HSTS bằng cách '
    + 'tuân theo một bộ yêu cầu và sau đó tự đưa vào danh sách.',
    use: `Có một số lý do tại sao việc kích hoạt HSTS lại quan trọng đối với một trang web:
  1. Dấu trang của người dùng hoặc nhập thủ công http://example.com và là đối tượng của kẻ tấn công trung gian
    HSTS tự động chuyển hướng các yêu cầu HTTP sang HTTPS cho tên miền mục tiêu
  2. Ứng dụng web được thiết kế thuần túy là HTTPS vô tình chứa các liên kết HTTP hoặc phục vụ nội dung qua HTTP
    HSTS tự động chuyển hướng các yêu cầu HTTP sang HTTPS cho tên miền mục tiêu
  3. Kẻ tấn công trung gian cố gắng chặn lưu lượng truy cập từ người dùng nạn nhân bằng chứng chỉ không hợp lệ và hy vọng người dùng sẽ chấp nhận chứng chỉ xấu
    HSTS không cho phép người dùng ghi đè thông báo chứng chỉ không hợp lệ
    `,
    resources: [
      'https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security',
      'https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Strict_Transport_Security_Cheat_Sheet.html',
      'https://hstspreload.org/'
    ],
    screenshot: 'https://i.ibb.co/k253fq4/Screenshot-from-2023-07-17-20-10-52.png',
  },
  {
    id: 'dns-server',
    title: 'DNS Server',
    description: 'Kiểm tra này xác định (các) máy chủ DNS mà URL /IP được yêu cầu phân giải. Đồng thời tiến hành kiểm tra sơ bộ để xem liệu máy chủ DNS có hỗ trợ DoH hay không và dự báo xem nó có dễ bị nhiễm độc bộ đệm DNS hay không.',
    use: '',
    resources: [],
    screenshot: 'https://i.ibb.co/tKpL8F9/Screenshot-from-2023-08-12-15-43-12.png',
  },
  {
    id: 'tech-stack',
    title: 'Tech Stack',
    description: 'Kiểm tra những công nghệ mà một trang web được xây dựng bằng. '
    + 'Điều này được thực hiện bằng cách tìm nạp và phân tích trang web, sau đó so sánh nó với danh sách bit RegEx được Wappalyzer duy trì để xác định dấu vân tay duy nhất mà các công nghệ khác nhau để lại.',
    use: 'Việc xác định công nghệ của trang web sẽ hỗ trợ việc đánh giá tính bảo mật của trang web đó bằng cách phát hiện các lỗ hổng tiềm ẩn, '
    + 'cung cấp thông tin phân tích cạnh tranh và quyết định phát triển, đồng thời có thể hướng dẫn các chiến lược tiếp thị phù hợp. '
    + 'Việc áp dụng kiến ​​thức này một cách có đạo đức là rất quan trọng để tránh các hoạt động có hại như đánh cắp dữ liệu hoặc xâm nhập trái phép.',
    resources: [
      { title: 'Wappalyzer fingerprints', link: 'https://github.com/wappalyzer/wappalyzer/tree/master/src/technologies'},
      { title: 'BuiltWith - Check what tech a site is using', link: 'https://builtwith.com/'},
    ],
    screenshot: 'https://i.ibb.co/bBQSQNz/Screenshot-from-2023-08-12-15-43-46.png',
  },
  {
    id: 'sitemap',
    title: 'Liệt kê Pages',
    description: 'Công việc này tìm và phân tích sơ đồ trang web được liệt kê của một trang web. Tệp này liệt kê các trang con công khai trên trang web mà tác giả mong muốn được các công cụ tìm kiếm thu thập dữ liệu. Sơ đồ trang web giúp SEO nhưng cũng hữu ích để xem nhanh tất cả nội dung công khai của trang web.',
    use: 'Hiểu cấu trúc nội dung công khai của trang web và đối với chủ sở hữu trang web, hãy kiểm tra xem sơ đồ trang web của bạn có thể truy cập được, có thể phân tích cú pháp và chứa mọi thứ bạn muốn hay không.',
    resources: [
      { title: 'Tìm hiểu về Sơ đồ trang web', link: 'https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview'},
      { title: 'Sitemap XML spec', link: 'https://www.sitemaps.org/protocol.html'},
      { title: 'Sitemap tutorial', link: 'https://www.conductor.com/academy/xml-sitemap/'},
    ],
    screenshot: 'https://i.ibb.co/GtrCQYq/Screenshot-from-2023-07-21-12-28-38.png',
  },
  {
    id: 'security-txt',
    title: 'Security.txt',
    description: "Tệp security.txt cho các nhà nghiên cứu biết cách họ có thể tiết lộ bất kỳ vấn đề bảo mật nào được tìm thấy trên trang web của bạn một cách có trách nhiệm."
    + "Tiêu chuẩn đã được đề xuất trong RFC 9116 và chỉ định rằng tệp này phải bao gồm một điểm liên hệ (địa chỉ email), "
    + "cũng như các thông tin tùy chọn khác, như liên kết đến chính sách tiết lộ bảo mật, khóa PGP, ngôn ngữ được cung cấp, thời hạn chính sách và hơn thế nữa."
    + "Tệp phải được đặt ở thư mục gốc tên miền của bạn, tại /security.txt hoặc /.well-known/security.txt.",
    use: "Điều này rất quan trọng, vì nếu không có đầu mối liên hệ xác định, nhà nghiên cứu bảo mật có thể không báo cáo được một vấn đề bảo mật quan trọng,"
    + "hoặc có thể sử dụng các kênh không an toàn hoặc có thể là công khai để làm như vậy. Từ góc độ OSINT, bạn cũng có thể thu thập thông tin về một trang web bao gồm "
    + "quan điểm của họ về bảo mật, nhà cung cấp CSAF của họ và siêu dữ liệu từ khóa công khai PGP.",
    resources: [
      { title: 'securitytxt.org', link: 'https://securitytxt.org/'},
      { title: 'RFC-9116 Proposal', link: 'https://datatracker.ietf.org/doc/html/rfc9116'},
      { title: 'RFC-9116 History', link: 'https://datatracker.ietf.org/doc/rfc9116/'},
      { title: 'Security.txt (Wikipedia)', link: 'https://en.wikipedia.org/wiki/Security.txt'},
      { title: 'Example security.txt (Cloudflare)', link: 'https://www.cloudflare.com/.well-known/security.txt'},
      { title: 'Tutorial for creating security.txt (Pieter Bakker)', link: 'https://pieterbakker.com/implementing-security-txt/'},
    ],
    screenshot: 'https://i.ibb.co/tq1FT5r/Screenshot-from-2023-07-24-20-31-21.png',
  },
  {
    id: 'linked-pages',
    title: 'Linked Pages',
    description: 'Hiển thị tất cả các liên kết bên trong và bên ngoài được tìm thấy trên một trang web, được xác định bằng thuộc tính href gắn với các phần tử neo.',
    use: "Đối với chủ sở hữu trang web, điều này rất hữu ích để chẩn đoán các vấn đề về SEO, cải thiện cấu trúc trang web, hiểu cách nội dung được kết nối với nhau. Liên kết bên ngoài có thể hiển thị quan hệ đối tác, sự phụ thuộc và rủi ro danh tiếng tiềm ẩn."
    + "Từ quan điểm bảo mật, các liên kết ngoài có thể giúp xác định bất kỳ trang web độc hại hoặc bị xâm phạm tiềm ẩn nào mà trang web đang vô tình liên kết đến. Việc phân tích các liên kết nội bộ có thể giúp hiểu được cấu trúc của trang web và có khả năng phát hiện ra các trang ẩn hoặc dễ bị tổn thương không được công khai."
    + "Và đối với người điều tra OSINT, nó có thể hỗ trợ xây dựng sự hiểu biết toàn diện về mục tiêu, khám phá các thực thể, tài nguyên liên quan hoặc thậm chí các phần tiềm ẩn của trang web.",
    resources: [
      { title: 'W3C Link Checker', link: 'https://validator.w3.org/checklink'},
    ],
    screenshot: 'https://i.ibb.co/LtK14XR/Screenshot-from-2023-07-29-11-16-44.png',
  },
  {
    id: 'social-tags',
    title: 'Social Tags',
    description: 'Các trang web có thể bao gồm một số thẻ meta nhất định, cho phép các công cụ tìm kiếm và nền tảng truyền thông xã hội biết thông tin nào sẽ hiển thị. Điều này thường bao gồm tiêu đề, mô tả, hình thu nhỏ, từ khóa, tác giả, tài khoản mạng xã hội, v.v.',
    use: 'Thêm dữ liệu này vào trang web của bạn sẽ thúc đẩy SEO và với tư cách là nhà nghiên cứu OSINT, việc hiểu cách một ứng dụng web nhất định tự mô tả chính nó',
    resources: [
      { title: 'SocialSharePreview.com', link: 'https://socialsharepreview.com/'},
      { title: 'The guide to social meta tags', link: 'https://css-tricks.com/essential-meta-tags-social-media/'},
      { title: 'Web.dev metadata tags', link: 'https://web.dev/learn/html/metadata/'},
      { title: 'Open Graph Protocol', link: 'https://ogp.me/'},
      { title: 'Twitter Cards', link: 'https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards'},
      { title: 'Facebook Open Graph', link: 'https://developers.facebook.com/docs/sharing/webmasters'},
    ],
    screenshot: 'https://i.ibb.co/4srTT1w/Screenshot-from-2023-07-29-11-15-27.png',
  },
  {
    id: 'mail-config',
    title: 'Cấu hình email',
    description: "DMARC (Xác thực, báo cáo và tuân thủ thư dựa trên tên miền): DMARC là giao thức xác thực email hoạt động với SPF và DKIM để ngăn chặn việc giả mạo và lừa đảo qua email. Nó cho phép chủ sở hữu tên miền chỉ định cách xử lý thư không được xác thực thông qua chính sách được xuất bản trong DNS và cung cấp cách để máy chủ thư gửi phản hồi về việc tuân thủ email cho người gửi. " +
    "BIMI (Chỉ báo thương hiệu để nhận dạng thư): BIMI là một tiêu chuẩn email mới cho phép các tổ chức tự động hiển thị biểu tượng trong ứng dụng email khách của khách hàng. BIMI liên kết biểu tượng với bản ghi DMARC của miền, cung cấp một mức độ đảm bảo trực quan khác cho người nhận rằng email đó là hợp pháp." +
    "DKIM (Thư được xác định bằng khóa miền): DKIM là một tiêu chuẩn bảo mật email được thiết kế để đảm bảo rằng các thư không bị thay đổi trong quá trình truyền giữa máy chủ gửi và máy chủ người nhận. Nó sử dụng chữ ký số được liên kết với miền của người gửi để xác minh người gửi và đảm bảo thư sự chính trực." +
    "SPF (Khung chính sách người gửi): SPF là một phương thức xác thực email được thiết kế để ngăn chặn việc giả mạo email. Nó chỉ định máy chủ thư nào được phép gửi email thay mặt cho một miền bằng cách tạo bản ghi DNS. Điều này giúp bảo vệ chống thư rác bằng cách cung cấp một cách để nhận máy chủ thư nhằm kiểm tra xem thư đến từ một miền có đến từ máy chủ được quản trị viên của miền đó ủy quyền hay không.",
    use: "Thông tin này hữu ích cho các nhà nghiên cứu vì nó giúp đánh giá trạng thái bảo mật email của miền, phát hiện các lỗ hổng tiềm ẩn và xác minh tính hợp pháp của email để phát hiện lừa đảo. Những chi tiết này cũng có thể cung cấp cái nhìn sâu sắc về môi trường lưu trữ, nhà cung cấp dịch vụ tiềm năng và mô hình cấu hình của tổ chức mục tiêu, hỗ trợ các nỗ lực điều tra.",
    resources: [
      { title: 'Intro to DMARC, DKIM, and SPF (via Cloudflare)', link: 'https://www.cloudflare.com/learning/email-security/dmarc-dkim-spf/' },
      { title: 'EasyDMARC Domain Scanner', link: 'https://easydmarc.com/tools/domain-scanner' },
      { title: 'MX Toolbox', link: 'https://mxtoolbox.com/' },
      { title: 'RFC-7208 - SPF', link: 'https://datatracker.ietf.org/doc/html/rfc7208' },
      { title: 'RFC-6376 - DKIM', link: 'https://datatracker.ietf.org/doc/html/rfc6376' },
      { title: 'RFC-7489 - DMARC', link: 'https://datatracker.ietf.org/doc/html/rfc7489' },
      { title: 'BIMI Group', link: 'https://bimigroup.org/' },
    ],
    screenshot: 'https://i.ibb.co/yqhwx5G/Screenshot-from-2023-07-29-18-22-20.png',
  },
  {
    id: 'firewall',
    title: 'Phát hiện tường lửa',
    description: 'Tường lửa ứng dụng web hoặc WAF giúp bảo vệ các ứng dụng web bằng cách lọc và giám sát lưu lượng HTTP giữa ứng dụng web và Internet. Nó thường bảo vệ các ứng dụng web khỏi các cuộc tấn công như giả mạo trang web, tập lệnh chéo trang (XSS), đưa tệp vào và chèn SQL, cùng nhiều cuộc tấn công khác.',
    use: 'Thật hữu ích khi hiểu liệu một trang web có đang sử dụng WAF hay không và nó đang sử dụng phần mềm/dịch vụ tường lửa nào, vì điều này cung cấp cái nhìn sâu sắc về khả năng bảo vệ trang web khỏi một số vectơ tấn công, nhưng cũng có thể tiết lộ các lỗ hổng trong tường lửa chính nó.',
    resources: [
      { title: 'What is a WAF (via Cloudflare Learning)', link: 'https://www.cloudflare.com/learning/ddos/glossary/web-application-firewall-waf/' },
      { title: 'OWASP - Web Application Firewalls', link: 'https://owasp.org/www-community/Web_Application_Firewall' },
      { title: 'Web Application Firewall Best Practices', link: 'https://owasp.org/www-pdf-archive/Best_Practices_Guide_WAF_v104.en.pdf' },
      { title: 'WAF - Wiki', link: 'https://en.wikipedia.org/wiki/Web_application_firewall' },
    ],
    screenshot: 'https://i.ibb.co/MfcxQt2/Screenshot-from-2023-08-12-15-40-52.png',
  },
  {
    id: 'http-security',
    title: 'Tính năng bảo mật HTTP',
    description: 'Tiêu đề HTTP bảo mật được định cấu hình chính xác sẽ thêm một lớp bảo vệ chống lại các cuộc tấn công phổ biến vào trang web của bạn. Các tiêu đề chính cần lưu ý là: '
    + 'HTTP Strict Transport Security (HSTS): Thực thi việc sử dụng HTTPS, giảm thiểu các cuộc tấn công trung gian và các nỗ lực hạ cấp giao thức. '
    + 'Chính sách bảo mật nội dung (CSP): Hạn chế tài nguyên trang web để ngăn chặn các cuộc tấn công chèn dữ liệu và script chéo trang. '
    + 'X-Content-Type-Options: Ngăn chặn trình duyệt MIME đánh hơi phản hồi từ loại nội dung được khai báo, hạn chế các cuộc tấn công nhầm lẫn kiểu MIME. '
    + 'X-Frame-Options: Bảo vệ người dùng khỏi các cuộc tấn công clickjacking bằng cách kiểm soát xem trình duyệt có hiển thị trang trong <frame>, <iframe>, <embed> hay <object> hay không. ',
    use: 'Việc xem xét các tiêu đề bảo mật là rất quan trọng vì nó cung cấp thông tin chi tiết về trạng thái phòng thủ của trang web và các lỗ hổng tiềm ẩn, cho phép chủ động giảm thiểu và đảm bảo tuân thủ các biện pháp bảo mật tốt nhất.',
    resources: [
      { title: 'OWASP Secure Headers Project', link: 'https://owasp.org/www-project-secure-headers/'},
      { title: 'HTTP Header Cheatsheet', link: 'https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Headers_Cheat_Sheet.html' },
      { title: 'content-security-policy.com', link: 'https://content-security-policy.com/' },
      { title: 'resourcepolicy.fyi', link: 'https://resourcepolicy.fyi/' },
      { title: 'HTTP Security Headers', link: 'https://securityheaders.com/' },
      { title: 'Mozilla Observatory', link: 'https://observatory.mozilla.org/' },
      { title: 'CSP Docs', link: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP' },
      { title: 'HSTS Docs', link: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security' },
      { title: 'X-Content-Type-Options Docs', link: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options' },
      { title: 'X-Frame-Options Docs', link: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options' },
      { title: 'X-XSS-Protection Docs', link: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection' },
    ],
    screenshot: 'https://i.ibb.co/LP05HMV/Screenshot-from-2023-08-12-15-40-28.png',
  },
  {
    id: 'archives',
    title: 'Archive History',
    description: 'Tìm nạp toàn bộ lịch sử lưu trữ từ máy Wayback',
    use: 'Điều này hữu ích để hiểu lịch sử của một trang web và nó đã thay đổi như thế nào theo thời gian. Nó cũng có thể hữu ích khi tìm các phiên bản cũ của một trang web hoặc tìm nội dung đã bị xóa.',
    resources: [
      { title: 'Wayback Machine', link: 'https://archive.org/web/'},
    ],
    screenshot: 'https://i.ibb.co/nB9szT1/Screenshot-from-2023-08-14-22-31-16.png',
  },
  {
    id: 'rank',
    title: 'Xếp hạng toàn cầu',
    description: 'Kiểm tra này cho thấy thứ hạng toàn cầu của trang web được yêu cầu. Điều này chỉ chính xác đối với các trang web nằm trong danh sách 100 triệu hàng đầu. Chúng tôi đang sử dụng dữ liệu từ dự án Tranco (xem bên dưới), dự án này đối chiếu các trang web hàng đầu trên web từ Umbrella, Majestic, Quantcast, Báo cáo trải nghiệm người dùng Chrome và Cloudflare Radar.',
    use: 'Biết thứ hạng tổng thể toàn cầu của một trang web có thể hữu ích để hiểu quy mô của trang web và để so sánh nó với các trang web khác. Nó cũng có thể hữu ích để hiểu mức độ phổ biến tương đối của một trang web và để xác định các xu hướng tiềm năng.',
    resources: [
      { title: 'Tranco List', link: 'https://tranco-list.eu/' },
      { title: 'Tranco Research Paper', link: 'https://tranco-list.eu/assets/tranco-ndss19.pdf'},
    ],
    screenshot: 'https://i.ibb.co/nkbczgb/Screenshot-from-2023-08-14-22-02-40.png',
  },
  {
    id: 'block-lists',
    title: 'Block Detection',
    description: 'Kiểm tra quyền truy cập vào URL bằng cách sử dụng hơn 10 máy chủ DNS chặn quyền riêng tư, phần mềm độc hại và quyền kiểm soát của phụ huynh phổ biến nhất.',
    use: '',
    resources: [
      { title: 'ThreatJammer Lists', link: 'https://threatjammer.com/osint-lists'},
    ],
    screenshot: 'https://i.ibb.co/M5JSXbW/Screenshot-from-2023-08-26-12-12-43.png',
  },
  {
    id: 'threats',
    title: 'Malware & Phishing Detection',
    description: 'Kiểm tra xem một trang web có xuất hiện trong một số danh sách phần mềm độc hại và lừa đảo phổ biến hay không, để xác định mức độ đe dọa của trang web đó.',
    use: 'Việc biết liệu một trang web có được liệt kê là mối đe dọa bởi bất kỳ dịch vụ nào trong số này hay không có thể hữu ích để hiểu danh tiếng của trang web và xác định các xu hướng tiềm năng.',
    resources: [
      { title: 'URLHaus', link: 'https://urlhaus-api.abuse.ch/'},
      { title: 'PhishTank', link: 'https://www.phishtank.com/'},
    ],
    screenshot: 'https://i.ibb.co/hYgy621/Screenshot-from-2023-08-26-12-07-47.png',
  },
  {
    id: 'tls-cipher-suites',
    title: 'TLS Cipher Suites',
    description: 'Đây là sự kết hợp của các thuật toán mã hóa được máy chủ sử dụng để thiết lập kết nối an toàn. Nó bao gồm thuật toán trao đổi khóa, thuật toán mã hóa hàng loạt, thuật toán MAC và PRF (hàm giả ngẫu nhiên).',
    use: 'Đây là thông tin quan trọng cần kiểm tra từ góc độ bảo mật. Bởi vì một bộ mật mã chỉ an toàn khi có các thuật toán chứa trong đó. Nếu phiên bản của thuật toán mã hóa hoặc xác thực trong bộ mật mã có lỗ hổng đã biết thì bộ mật mã và kết nối TLS khi đó có thể dễ bị hạ cấp hoặc bị tấn công khác',
    resources: [
      { title: 'sslscan2 CLI', link: 'https://github.com/rbsec/sslscan' },
      { title: 'ssl-enum-ciphers (NPMAP script)', link: 'https://nmap.org/nsedoc/scripts/ssl-enum-ciphers.html' }
    ],
    screenshot: 'https://i.ibb.co/6ydtH5R/Screenshot-from-2023-08-26-12-09-58.png',
  },
  {
    id: 'tls-security-config',
    title: 'TLS Security Config',
    description: 'Điều này sử dụng các nguyên tắc từ Đài quan sát TLS của Mozilla để kiểm tra tính bảo mật của cấu hình TLS. Nó kiểm tra các cấu hình xấu, có thể khiến trang web dễ bị tấn công, cũng như đưa ra lời khuyên về cách khắc phục. Nó cũng sẽ đưa ra các đề xuất về cấu hình TLS lỗi thời và hiện đại',
    use: 'Hiểu các vấn đề với cấu hình TLS của trang web sẽ giúp bạn giải quyết các lỗ hổng tiềm ẩn và đảm bảo trang web đang sử dụng cấu hình TLS mới nhất và an toàn nhất.',
    resources: [],
    screenshot: 'https://i.ibb.co/FmksZJt/Screenshot-from-2023-08-26-12-12-09.png',
  },
  {
    id: 'tls-client-support',
    title: 'TLS Handshake Simulation',
    description: 'Điều này mô phỏng cách các máy khách khác nhau (trình duyệt, hệ điều hành) sẽ thực hiện bắt tay TLS với máy chủ. Nó giúp xác định các vấn đề tương thích và cấu hình không an toàn.',
    use: '',
    resources: [
      { title: 'TLS Handshakes (via Cloudflare Learning)', link: 'https://www.cloudflare.com/learning/ssl/what-happens-in-a-tls-handshake/' },
      { title: 'SSL Test (via SSL Labs)', link: 'https://www.ssllabs.com/ssltest/' },
    ],
    screenshot: 'https://i.ibb.co/F7qRZkh/Screenshot-from-2023-08-26-12-11-28.png',
  },
  {
    id: 'screenshot',
    title: 'Screenshot',
    description: 'Quá trình kiểm tra này sẽ chụp ảnh màn hình của trang web mà URL /IP được yêu cầu phân giải và hiển thị nó.',
    use: 'Điều này có thể hữu ích để xem một trang web cụ thể trông như thế nào, không bị ràng buộc bởi trình duyệt, IP hoặc vị trí của bạn.',
    resources: [],
    screenshot: 'https://i.ibb.co/2F0x8kP/Screenshot-from-2023-07-29-18-34-48.png',
  },
];

export const featureIntro = [
  'Khi tiến hành điều tra OSINT trên một trang web hoặc máy chủ lưu trữ nhất định, có một số lĩnh vực chính cần xem xét. Mỗi tài liệu này đều được ghi lại bên dưới, cùng với các liên kết đến các công cụ và kỹ thuật mà bạn có thể sử dụng để thu thập thông tin liên quan.',
  'kiểm tra trang web có thể tự động hóa quá trình thu thập dữ liệu này, nhưng việc diễn giải kết quả và đưa ra kết luận sẽ tùy thuộc vào bạn.',
];

export const about = [
`website-check là một công cụ tất cả trong một mạnh mẽ để khám phá thông tin về trang web/máy chủ.
Triết lý cốt lõi rất đơn giản: cung cấp dữ liệu cho trang web -kiểm tra URL và để nó thu thập, đối chiếu và trình bày một loạt dữ liệu mở để bạn nghiên cứu sâu.`,

`Báo cáo tập trung vào các hướng tấn công tiềm ẩn, các biện pháp an ninh hiện có,
và mạng lưới các kết nối trong kiến ​​trúc của một trang web.
Kết quả cũng có thể giúp tối ưu hóa phản hồi của máy chủ, định cấu hình chuyển hướng,
quản lý cookie hoặc tinh chỉnh bản ghi DNS cho trang web của bạn.`,

`Vì vậy, dù bạn là nhà phát triển, quản trị viên hệ thống, nhà nghiên cứu bảo mật, thâm nhập
người thử nghiệm hoặc chỉ quan tâm đến việc khám phá các công nghệ cơ bản của một trang web nhất định
-Tôi chắc chắn bạn sẽ thấy đây là một bổ sung hữu ích cho hộp công cụ của mình.`,
];

export const license = `The MIT License (MIT)
Copyright (c) Bibo318 <demongod@bugcrowdninja.com> 

Permission is hereby granted, free of charge, to any person obtaining a copy 
of this software and associated documentation files (the "Software"), to deal 
in the Software without restriction, including without limitation the rights 
to use, copy, modify, merge, publish, distribute, sub-license, and/or sell 
copies of the Software, and to permit persons to whom the Software is furnished 
to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included install 
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANT ABILITY, FITNESS FOR A
PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
`;

export const supportUs = [
  "website-check được sử dụng miễn phí mà không bị hạn chế.",
  "Tất cả mã đều là mã nguồn mở, vì vậy bạn cũng có thể tự do triển khai phiên bản của riêng mình cũng như phân nhánh, sửa đổi và phân phối mã trong cả cài đặt riêng tư và thương mại.",
  "Việc chạy kiểm tra trang web khiến tôi tốn một khoản tiền nhỏ mỗi tháng, vì vậy nếu bạn thấy ứng dụng này hữu ích, hãy cân nhắc <a href='https://github.com/sponsors/bibo318'>tài trợ cho tôi trên GitHub< /a> nếu bạn có thể. Thậm chí chỉ $1 hoặc $2/tháng cũng sẽ giúp ích rất nhiều trong việc hỗ trợ chi phí vận hành dự án đang diễn ra.",
  "Ngoài ra, bạn có thể trợ giúp theo nhiều cách khác, chẳng hạn như gửi hoặc xem xét yêu cầu kéo tới <a href='https://github.com/bibo318/website-check'>kho lưu trữ GitHub</a>, ủng hộ chúng tôi trên <a href='https://www.producthunt.com/posts/website-check'>Product Hunt</a> hoặc bằng cách chia sẻ với mạng của bạn.",
  "Nhưng đừng cảm thấy bắt buộc phải làm bất cứ điều gì, vì ứng dụng này (và tất cả các dự án khác của tôi) sẽ luôn là nguồn mở và miễn phí 100%, đồng thời tôi sẽ cố gắng hết sức để đảm bảo các phiên bản được quản lý vẫn hoạt động và khả dụng miễn là khả thi :)",
];

export const fairUse = [
  'Hãy sử dụng công cụ này một cách có trách nhiệm. Không sử dụng nó cho các máy chủ mà bạn không có quyền quét. Không sử dụng nó như một phần của kế hoạch tấn công hoặc làm gián đoạn các dịch vụ.',
  'Yêu cầu có thể được giới hạn tỷ lệ để ngăn chặn lạm dụng. Nếu bạn cần tăng thêm băng thông, vui lòng triển khai phiên bản của riêng bạn.',
  'Không có gì đảm bảo về thời gian hoạt động hoặc tính sẵn có. Nếu bạn cần đảm bảo dịch vụ có sẵn, vui lòng triển khai phiên bản của riêng bạn.',
'Vui lòng sử dụng một cách công bằng, vì việc sử dụng quá mức sẽ nhanh chóng làm cạn kiệt tín dụng của chức năng lambda, khiến người khác không thể sử dụng dịch vụ này (và/hoặc làm trống tài khoản ngân hàng của tôi!).',
];

export default docs;
