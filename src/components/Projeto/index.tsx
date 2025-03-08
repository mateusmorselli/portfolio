import Paragrafo from '../Paragrafo'
import Titulo from '../Titulos'

import { Card, LinkBotao } from './styles'

const Projeto = () => (
  <div>
    <Card>
      <Titulo>Projeto 1</Titulo>
      <Paragrafo tipo="secundario">Projeto feito com VueJS</Paragrafo>
      <LinkBotao>Visualizar</LinkBotao>
    </Card>
  </div>
)

export default Projeto
