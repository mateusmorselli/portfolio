import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulos'
import { BotaoTema, Descricao, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Mateus Morselli</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        @mateusmorselli
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Engenheiro de Produção
      </Descricao>
      <BotaoTema>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
