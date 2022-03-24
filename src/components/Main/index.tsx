import * as S from './styles'

const Main = () => (
    <S.Wrapper>
        <S.Logo
            src="/img/logo.svg"
            alt="Imagem de um átomo e React Avançado escrito ao lado"
        />
        <S.Title>React avançado</S.Title>
        <S.Description>
            Typescript, ReactJs, NextJs e Styled Components
        </S.Description>
        <S.Illustration
            src="/img/hero-illustration.svg"
            alt="Imagem de um homem sentado na cadeira programando"
        />
    </S.Wrapper>
)
export default Main
