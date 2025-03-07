import styled from 'styled-components'

type BotaoProps = {
  principal: boolean
  fontSize?: string
}

const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'red')};
  font-size: ${(props) => props.fontSize || '16px'};
`

const BotaoPerigo = styled(Botao)`
  background-color: pink;
  color: #fff;

  span {
    text-decoration: line-through;
  }
`

function Teste() {
  return (
    <>
      <Botao principal>Faturar uma grana</Botao>
      <Botao principal={false}>Perder uma grana</Botao>
      <BotaoPerigo as="a" principal>
        <span>Não Clique aqui</span>
      </BotaoPerigo>
    </>
  )
}

export default Teste
