import styled from 'styled-components';

import colors from 'styles/colors';
import Heading from 'components/Form/Heading';
import Footer from 'components/misc/Footer';
import Nav from 'components/Form/Nav';
import Button from 'components/Form/Button';
import AdditionalResources from 'components/misc/AdditionalResources';
import { StyledCard } from 'components/Form/Card';
import docs, { about, featureIntro, license, fairUse, supportUs } from 'utils/docs';

const AboutContainer = styled.div`
width: 95vw;
max-width: 1000px;
margin: 2rem auto;
padding-bottom: 1rem;
header {
  margin 1rem 0;
  width: auto;
}
section {
  width: auto;
  .inner-heading { display: none; }
}
`;

const HeaderLinkContainer = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  a {
    text-decoration: none;
  }
`;

const Section = styled(StyledCard)`
  margin-bottom: 2rem;
  overflow: clip;
  max-height: 100%;
  section {
    clear: both;
  }
  h3 {
    font-size: 1.5rem;
  }
  hr {
    border: none;
    border-top: 1px dashed ${colors.primary};
    margin: 1.5rem auto;
  }
  ul {
    padding: 0 0 0 1rem;
    list-style: circle;
  }
  a {
    color: ${colors.primary};
    &:visited { opacity: 0.8; }
  }
  pre {
    background: ${colors.background};
    border-radius: 4px;
    padding: 0.5rem;
    width: fit-content;
  }
  small { opacity: 0.7; }
  .contents {
    ul {
      list-style: none;
      li {
        a {
          // color: ${colors.textColor};
          &:visited { opacity: 0.8; }
        }
        b {
          opacity: 0.75;
          display: inline-block;
          width: 1.5rem;
        }
      }
    }
  }
  .example-screenshot {
    float: right; 
    display: inline-flex;
    flex-direction: column;
    clear: both;
    max-width: 300px;
    img {
      float: right;
      break-inside: avoid;
      max-width: 300px;
      // max-height: 30rem;
      border-radius: 6px;
      clear: both;
    }
    figcaption {
      font-size: 0.8rem;
      text-align: center;
      opacity: 0.7;
    }
  }
`;

const makeAnchor = (title: string): string => {
  return title.toLowerCase().replace(/[^\w\s]|_/g, "").replace(/\s+/g, "-");
};

const About = (): JSX.Element => {
  return (
    <div>
    <AboutContainer>
      <Nav>
        <HeaderLinkContainer>
          <a href="https://github.com/bibo318/website-check"><Button>Xem trên GitHub</Button></a>
        </HeaderLinkContainer>
      </Nav>

      <Heading as="h2" size="medium" color={colors.primary}>Giới thiệu</Heading>
      <Section>
        {about.map((para, index: number) => (
          <p key={index}>{para}</p>
        ))}
        <hr />
        <p>
          website-check được phát triển và duy trì bởi <a href="https://aliciasykes.com">Bibo318</a>.
          Nó được cấp phép theo <a href="https://github.com/bibo318/website-check/blob/master/LICENSE">MIT license</a>,
          và hoàn toàn miễn phí sử dụng, sửa đổi và phân phối trong cả môi trường cá nhân và thương mại.<br />
          Mã nguồn và tài liệu tự lưu trữ có sẵn trên <a href="https://github.com/bibo318/website-check">GitHub</a>.
          Nếu bạn thấy dịch vụ này hữu ích, hãy cân nhắc <a href="https://github.com/sponsors/bibo318"> tài trợ cho tôi</a> từ $1/tháng,
          để hỗ trợ chi phí lưu trữ và phát triển liên tục.
        </p>
      </Section>
      
      <Heading as="h2" size="medium" color={colors.primary}>Đặc trưng</Heading>
      <Section>
        {featureIntro.map((fi: string, i: number) => (<p key={i}>{fi}</p>))}
        <div className="contents">
        <Heading as="h3" size="small" id="#feature-contents" color={colors.primary}>Nội dung</Heading>
          <ul>
            {docs.map((section, index: number) => (
              <li>
                <b>{index + 1}</b>
                <a href={`#${makeAnchor(section.title)}`}>{section.title}</a></li>
            ))}
          </ul>
          <hr />
        </div>
        {docs.map((section, sectionIndex: number) => (
          <section key={section.title}>
            { sectionIndex > 0 && <hr /> }
            <Heading as="h3" size="small" id={makeAnchor(section.title)} color={colors.primary}>{section.title}</Heading>
            {section.screenshot &&
              <figure className="example-screenshot">
                <img className="screenshot" src={section.screenshot} alt={`Example Screenshot ${section.title}`} />
                <figcaption>Fig.{sectionIndex + 1} - Ví dụ của {section.title}</figcaption>
              </figure> 
            }
            {section.description && <>
              <Heading as="h4" size="small">Miêu tả</Heading>
              <p>{section.description}</p>
            </>}
            { section.use && <>
              <Heading as="h4" size="small">Trường hợp sử dụng</Heading>
              <p>{section.use}</p>
            </>}
            {section.resources && section.resources.length > 0 && <>
              <Heading as="h4" size="small">Liên kết hữu ích</Heading>
              <ul>
                {section.resources.map((link: string | { title: string, link: string }, linkIndx: number) => (
                  typeof link === 'string' ? (
                    <li id={`link-${linkIndx}`}><a target="_blank" rel="noreferrer" href={link}>{link}</a></li>
                  ) : (
                    <li id={`link-${linkIndx}`}><a target="_blank" rel="noreferrer" href={link.link}>{link.title}</a></li>
                  )
                ))}
              </ul>
            </>}
          </section>
        ))}
      </Section>

      <Heading as="h2" size="medium" color={colors.primary}>Triển khai phiên bản của riêng bạn</Heading>
      <Section>
        <p>website-check được thiết kế để dễ dàng tự lưu trữ.</p>
        <Heading as="h3" size="small" color={colors.primary}>Tùy chọn số 1 -Netlify</Heading>
        <p>Nhấp vào nút bên dưới để triển khai lên Netlify</p>
        <a href="https://app.netlify.com/start/deploy?repository=https://github.com/bibo318/website-check">
          <img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify" />
        </a>

        <Heading as="h3" size="small" color={colors.primary}>Tùy chọn số 2 -Vercel</Heading>
        <p>Nhấp vào nút bên dưới để triển khai lên Vercel</p>
        <a href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fbibo318%2Fwebsite-check&project-name=website-check&repository-name=website-check-fork&demo-title=website-check%20Demo&demo-description=Check%20out%20website-check.xyz%20to%20see%20a%20live%20demo%20of%20this%20application%20running.&demo-url=https%3A%2F%2Fwebsite-check.xyz&demo-image=https%3A%2F%2Fraw.githubusercontent.com%2Fbibo318%2Fwebsite-check%2Fmaster%2F.github%2Fscreenshots%2Fwebsite-check-screenshot10.png">
          <img src="https://vercel.com/button" alt="Deploy with Vercel" />
        </a>

        <Heading as="h3" size="small" color={colors.primary}>Tùy chọn # 3 -Docker</Heading>
        <p>
        Một vùng chứa Docker(đang update) được xuất bản lên <a href="https://hub.docker.com/r/bibo318/website-check">DockerHub</a>
        <br />
        Run this command, then open <code>localhost:3000</code>
        <pre>docker run -p 3000:3000 bibo318/website-check</pre>
        </p>

        <Heading as="h3" size="small" color={colors.primary}>Tùy chọn số 4 -Thủ công</Heading>
        <pre>
        git clone https://github.com/bibo318/website-check.git<br />
        cd website-check # Di chuyển vào thư mục dự án<br />
        yarn install # Install dependencies<br />
        yarn build # Build the app for production<br />
        yarn serve # Start the app (API and GUI)<br />
        </pre>

        <Heading as="h3" size="small" color={colors.primary}>Further Docs</Heading>
        <p>
          Hướng dẫn cài đặt và thiết lập chi tiết hơn có thể được tìm thấy trong
          Kho lưu trữ GitHub - <a href="https://github.com/bibo318/website-check#readme">github.com/bibo318/website-check</a>
        </p>

        <Heading as="h3" size="small" color={colors.primary}>Configuring</Heading>
        <p>
          Có một số biến môi trường tùy chọn mà bạn có thể chỉ định để cung cấp cho bạn quyền truy cập vào một số biến môi trường bổ sung website-checks.
          Xem README để biết danh sách đầy đủ các tùy chọn.
        </p>

        <ul>
          <li>
            <code>GOOGLE_CLOUD_API_KEY</code>
            : <a href="https://cloud.google.com/api-gateway/docs/authenticate-api-keys">A Google API key</a>
            <i> Được sử dụng để trả về số liệu chất lượng cho một trang web</i>
          </li>
          <li>
            <code>REACT_APP_SHODAN_API_KEY</code>
            : <a href="https://account.shodan.io/">A Shodan API key</a>
            <i> Để hiển thị các máy chủ được liên kết cho một tên miền</i>
          </li>
          <li>
            <code>REACT_APP_WHO_API_KEY</code>
            : <a href="https://whoapi.com/">A WhoAPI key</a>
            <i> Cho phép hồ sơ WhoIs toàn diện hơn</i>
          </li>
        </ul>


{/*     
**Configuration Settings**:
- `CHROME_PATH` (e.g. `/usr/bin/chromium`) - The path the the Chromium executable
- `PORT` (e.g. `3000`) - Port to serve the API, when running server.js
- `DISABLE_GUI` (e.g. `false`) - Disable the GUI, and only serve the API
- `API_TIMEOUT_LIMIT` (e.g. `10000`) - The timeout limit for API requests, in milliseconds
- `REACT_APP_API_ENDPOINT` (e.g. `/api`) - The endpoint for the API (can be local or remote)</p> */}

      </Section>

      <Heading as="h2" size="medium" color={colors.primary}>Tài liệu API</Heading>
      <Section>
        {/* eslint-disable-next-line*/}
        <p>// Sắp ra mắt...</p>
      </Section>

      <Heading as="h2" size="medium" color={colors.primary}>Tài nguyên bổ sung</Heading>
      <AdditionalResources />

      <Heading as="h2" size="medium" color={colors.primary}>Hỗ trợ chúng tôi</Heading>
      <Section>
        {supportUs.map((para, index: number) => (<p dangerouslySetInnerHTML={{__html: para}} />))}
      </Section>

      <Heading as="h2" size="medium" color={colors.primary}>Điều khoản & Thông tin</Heading>
      <Section>
      <Heading as="h3" size="small" color={colors.primary}>License</Heading>
        <b>
          <a href="https://github.com/bibo318/website-check">website-check</a> được phân phối theo giấy phép MIT,
          © <a href="https://aliciasykes.com">Bibo318</a> { new Date().getFullYear()}
        </b>
        <br />
        <small>Để biết thêm thông tin, xem <a href="https://tldrlegal.com/license/mit-license">TLDR Legal → MIT</a></small>
        <pre>{license}</pre>
        <hr />
        <Heading as="h3" size="small" color={colors.primary}>Sử dụng hợp lý</Heading>
        <ul>
          {fairUse.map((para, index: number) => (<li>{para}</li>))}
        </ul>
        <hr />
        <Heading as="h3" size="small" color={colors.primary}>Sự riêng tư</Heading>
        <p>
        Phân tích được sử dụng trên phiên bản demo (thông qua phiên bản Hợp lý tự lưu trữ), điều này chỉ ghi lại URL bạn đã truy cập nhưng không có dữ liệu cá nhân.
        Ngoài ra còn có một số tính năng ghi nhật ký lỗi cơ bản (thông qua phiên bản GlitchTip tự lưu trữ), tính năng này chỉ được sử dụng để giúp tôi sửa lỗi.
        <br />
        <br />
        Địa chỉ IP, thông tin trình duyệt/OS/phần cứng của bạn cũng như bất kỳ dữ liệu nào khác sẽ không bao giờ được thu thập hoặc ghi lại.
        (Bạn có thể tự xác minh điều này bằng cách kiểm tra mã nguồn hoặc sử dụng các công cụ dành cho nhà phát triển)
        </p>
      </Section>
    </AboutContainer>
    <Footer />
    </div>
  );
}

export default About;
