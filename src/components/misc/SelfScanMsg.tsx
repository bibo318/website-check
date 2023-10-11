
import styled from 'styled-components';
import colors from 'styles/colors';
import { StyledCard } from 'components/Form/Card';

const StyledSelfScanMsg = styled(StyledCard)`
  margin: 0px auto 1rem;
  width: 95vw;
  a { color: ${colors.primary}; }
  b { font-weight: extra-bold; }
  span, i { opacity: 0.85; }
  img {
    width: 5rem;
    float: right;
    border-radius: 4px;
  }
`;

const messages = [
  'Đã phát hiện bị quét (scan).',
  'Này, đừng kiểm tra chúng tôi nữa! Chúng tôi đang cáu... 😉',
  'Hmmm, bạn đang quét chúng tôi phải không? Chúng tôi cảm thấy rất đặc biệt!',
  'Báo động! Đã phát hiện quét. Hãy tin tưởng chúng tôi, chúng tôi đang ổn 😉',
  'We\'re flattered you\'re trying to scan us, but we can\'t tickle ourselves!',
  'Ồ, đang kiểm tra thanh tra tôi phải không? Khởi đầu thú vị?',
  'Đợi một chút...đợi một chút...bạn đang quét chúng tôi?! Hehe, đó là một trò thú vị!',
  'Bạn đang scan chúng tôi? Một yêu cầu ngớ ngẩn ',
  'Chà, điều này thật khó xử...',
  'À, tôi thấy bạn đang quét trang này... Nhưng điều này không gây ra lỗi vòng lặp vô hạn (lần này)',
];

const SelfScanMsg = () => {
  return (
    <StyledSelfScanMsg>
      <img src="https://i.ibb.co/0tQbCPJ/test2.png" alt="Self-Scan" />
      <b>{messages[Math.floor(Math.random() * messages.length)]}</b>
      <br />
      <span>
        Nhưng nếu bạn muốn xem trang web này được xây dựng như thế nào, tại sao không xem qua
        các <a href='https://github.com/bibo318/website-check'>source code</a>?
      </span>
      <br />
      <i>Hãy giúp tôi một việc và đánh dấu sao cho repo khi bạn ở đó</i> 😉
    </StyledSelfScanMsg>
  );
};

export default SelfScanMsg;
