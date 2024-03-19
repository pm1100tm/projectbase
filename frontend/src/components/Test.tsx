import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const BigTitle = styled(Title)`
  font-size: 3em;
`;

const RedBigTitle = styled(BigTitle)`
  font-size: 3em;
  color: red;
`;

function TitleCSS({ className }: React.HtmlHTMLAttributes<HTMLElement>) {
  return (
    <Wrapper>
      <RedBigTitle className={className}>title</RedBigTitle>
    </Wrapper>
  );
}

const SmallTitle = styled(TitleCSS)`
  font-size: 1.8rem;
`;

export default function Test() {
  return <SmallTitle />;
}
