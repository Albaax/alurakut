import React from 'react';
import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet} from '../src/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

function ProfileSidebar(proprieties) {
  return (
    <Box>
      <img src={`https://github.com/${proprieties.githubUser}.png`} style={{ borderRadius: '8px' }} />
      <hr/>

      <p>
        <a className="boxLink" href={`https://github.com/${proprieties.githubUser}`}>
          @{proprieties.githubUser}
        </a>
      </p>
      <hr />

      <AlurakutProfileSidebarMenuDefault /> 
    </Box>
  )
}

export default function Home() {
  const usuarioAleatorio = 'albaax';
  const [communities, setCommunities] = React.useState([{
    id: '12345', 
    title: 'Geral do Grêmio',
    image: 'https://studiosol-a.akamaihd.net/uploadfile/letras/fotos/7/4/c/f/74cfcfe6003f597e188d4e886ab4611b.jpg',
    link: 'https://www.facebook.com/Geral.do.Gremio/' 
  }]);
  const pessoasFavoritas = [
    'juunegreiros',
    'omariosouto',
      'peas',
      'rafaballerini',
      'marcobrunodev',
      'felipefialho'
    ]
    
    return (
      <>
      <AlurakutMenu />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: 'profileArea'}}>
          <ProfileSidebar githubUser={usuarioAleatorio} />
        </div>
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea'}}>
          <Box>
            <h1 className="title">
              Welcome
            </h1>

            <OrkutNostalgicIconSet />
          </Box>

          <Box>
            <h2 className="subTitle">What do you wanna do?</h2>
            <form onSubmit={function handleCreateCommunity(e) {
              e.preventDefault();
              const dataForm = new FormData(e.target);

              const community = {
                id: new Date().toISOString(),
                title: dataForm.get('title'),
                image: dataForm.get('image'),
                link: dataForm.get('link')
              }
              const communitiesUpdated = [...communities, community];
              setCommunities(communitiesUpdated);
            }}>
              <div>
                <input placeholder="What will be the community's name?"
                  aria-label="What will be the community's name?" required
                  type="text" name="title"
                />
              </div>
              <div>
                <input placeholder="Type your community link"
                  aria-label="Type your community link" required
                  name="link"
                />
              </div>
              <div>
                <input placeholder="Type an URL to we use as cover"
                  name="image" required
                  aria-label="Type an URL to we use as cover"
                />
              </div>

              <button>Create community</button>
            </form>
          </Box>
        </div>
        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
            <ProfileRelationsBoxWrapper>
              <h2 className="smallTitle">
                Comunity people ({pessoasFavoritas.length})
              </h2>

              <ul>
                {pessoasFavoritas.map((itemCurrent) => {
                  return (
                    <li key={itemCurrent}>
                      <a href={`/users/${itemCurrent}`}>
                        <img src={`https://github.com/${itemCurrent}.png`} />
                        <span>{itemCurrent}</span>
                      </a>
                    </li>
                  )
                })}
              </ul>
            </ProfileRelationsBoxWrapper>
            <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Communities ({communities.length})
            </h2>
            <ul>
              {communities.map((itemCurrent) => {
                return (
                  <li key={itemCurrent.id}>
                    <a href={itemCurrent.link}>
                      <img src={itemCurrent.image} />
                      <span>{itemCurrent.title}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
          </div>
      </MainGrid>
    </>
  )
}
