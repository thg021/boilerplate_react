import * as S from './styles'

const Main = ({
    title = 'React Avançado',
    description = 'Typescript, ReactJs, NextJs e Styled Components',
}) => (
    <S.Wrapper>
        <S.Logo
            src="/img/logo.svg"
            alt="Imagem de um átomo e React Avançado escrito ao lado"
        />
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
        <S.Illustration
            src="/img/hero-illustration.svg"
            alt="Imagem de um homem sentado na cadeira programando"
        />
    </S.Wrapper>
)
export default Main
