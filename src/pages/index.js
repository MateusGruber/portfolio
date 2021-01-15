/** @jsx jsx */
import { jsx, css, keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import Layout from '../components/Layout'
import Helmet from 'react-helmet'

const CircleWrapper = styled.div`
  ${({ theme }) => css`
    background: linear-gradient(63.18deg, ${theme.colors.pallet.purple} 33.26%, rgba(47, 25, 91, 0) 83.26%), ${theme.colors.pallet.black};
    height: 50vh;
    position: relative;
    padding-top: 5vw;

    ${theme.queries.small} {
      padding-top: 25vh;
    }
  `}
`

const neonGlowing = theme => keyframes`
  0% {
    background-position: 0 0;
  }

  100% {
    background-position: 3000px 0;
  }
`

const neonBlinking = theme => keyframes`
  0% {
    box-shadow: 0px 0px 15px 6px ${theme.colors.pallet.lightBlue}, inset 0px 0px 15px 6px ${theme.colors.pallet.lightBlue};
  }

  46% {
    box-shadow: 0px 0px 15px 6px ${theme.colors.pallet.lightBlue}, inset 0px 0px 15px 6px ${theme.colors.pallet.lightBlue};
    opacity: 1;
  }

  49% {
    box-shadow: none;
    opacity: 0.5;
  }

  50% {
    box-shadow: 0px 0px 15px 6px ${theme.colors.pallet.lightBlue}, inset 0px 0px 15px 6px ${theme.colors.pallet.lightBlue};
    opacity: 1;
  }

  52% {
    box-shadow: none;
    opacity: 0.5;
  }

  54% {
    box-shadow: 0px 0px 15px 6px ${theme.colors.pallet.lightBlue}, inset 0px 0px 15px 6px ${theme.colors.pallet.lightBlue};
    opacity: 1;
  }

  100% {
    box-shadow: 0px 0px 15px 6px ${theme.colors.pallet.lightBlue}, inset 0px 0px 15px 6px ${theme.colors.pallet.lightBlue};
  }
`

const NeonBar = styled.div`
  ${({ theme }) => css`
    height: 4px;
    background-color: white;
    position: absolute;
    bottom: 50%;
    transform: translateY(50%);
    left: 0;
    right: 0;
    z-index: 1;

    &:before {
      background: linear-gradient(to right, ${theme.colors.pallet.lightBlue} 0%, ${theme.colors.pallet.lightPurple} 40%, ${theme.colors.pallet.lightPurple} 70%, ${theme.colors.pallet.lightBlue} 100%);
      content: "";
      position: absolute;
      left: -500px;
      right: -500px;
      bottom: 50%;
      transform: translateY(50%);
      filter: blur(7px);
      overflow-x: hidden;
      height: 15px;
      animation: ${neonGlowing(theme)} 1.5s linear forwards infinite;
    }
  `}
`

const ContentWrapper = styled.div`
  ${({ theme }) => css`
    height: 50vh;
    position: relative;
    background-color: ${theme.colors.pallet.black};
    padding: 50px;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    p {
      color: white;
      font-size: 18px;
      line-height: 26px;
      text-align: center;

      span {
        font-size: 36px;
        display: block;
        margin-bottom: 50px;
      }

      a {
        background: -webkit-linear-gradient(${theme.colors.pallet.lightPurple}, ${theme.colors.pallet.lightBlue});
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      ${theme.queries.small} {
        font-size: 15px;

        span {
          font-size: 30px;
          margin-bottom: 40px;
        }
      }
    }
  `}
`

const Circle = styled.div`
    ${({ theme }) => css`
      background-color: transparent;
      border: 4px solid #b4ebff;
      width: 35vw;
      height: 35vw;
      border-radius: 50%;
      margin: 0 auto;
      display: block;
      animation: ${neonBlinking(theme)} 3.5s linear forwards infinite;

      ${theme.queries.small} {
        width: 35vh;
        height: 35vh;
      }
    `}
`

const IndexPage = () => (
  <Layout>
    <Helmet title="Bem-vindo!"/>
    <CircleWrapper>
      <Circle/>
    </CircleWrapper>
    <NeonBar/>
    <ContentWrapper>
      <p>
        <span>Olá,</span>
        Por enquanto estou trabalhando Por aqui.<br/> Mas você pode encontrar um pouco mais sobre mim <a href="https://www.behance.net/mateus_gruber" target="_blank">neste link</a>.
      </p>
    </ContentWrapper>
  </Layout>
)

export default IndexPage
