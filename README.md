# Portfólio — Tyler Canto

Portfólio pessoal apresentando projetos reais de **infraestrutura de TI**: virtualização, backup corporativo, redes, Linux e segurança da informação.

**Site:** https://projetos-mu-rose.vercel.app/

---

## Sobre

Site estático (HTML + CSS + JavaScript, sem frameworks) que reúne casos de projetos de infraestrutura executados em ambientes corporativos. Cada projeto tem uma página de detalhe descrevendo contexto, desafio, arquitetura, stack e impacto.

## Tecnologias abordadas nos projetos

- **Virtualização:** Proxmox VE, Hyper-V
- **Backup:** Bacula Enterprise, Acronis
- **Redes / Segurança:** pfSense, Mikrotik, VPN Site-to-Site, Active Directory
- **Sistemas / Automação:** Linux, Shell Script, SQL
- **Monitoramento:** Nagios

## Estrutura do projeto

```
.
├── index.html            # Página principal (hero, sobre, projetos, contato)
├── style.css             # Estilos globais
├── script.js             # Efeito de digitação e ano dinâmico
├── laboratorio-c.html    # Projeto: Laboratório de Análises
├── cartorio-p.html       # Projeto: Cartório de Registro Civil
├── vbrasil.html          # Projeto: V Brasil / V Cobranças
├── universo-p.html       # Projeto: Loja de Ferragens
├── contabilidade-a.html  # Projeto: Contabilidade
└── contabilidade-e.html  # Projeto: Contabilidade E
```

## Como executar localmente

Como é um site estático, basta abrir o `index.html` no navegador. Para testar com um servidor local:

```bash
# Python
python3 -m http.server 8000

# ou Node
npx serve
```

Acesse `http://localhost:8000`.

## Deploy

Hospedado na **Vercel**, com deploy automático a cada push na branch `main`.

## Contato

- **E-mail:** tylercanto23@gmail.com
- **LinkedIn:** https://www.linkedin.com/in/tyler-canto/
- **GitHub:** https://github.com/tylercanto
