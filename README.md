# Estudos-docker

## diretório ./golang
Imagem go gerada no dockerHub: [golang](https://hub.docker.com/repository/docker/arturcampos/golang)

## diretório ./nginx-node-proxy
Imagens geradas para o desafio:

[nginx](https://hub.docker.com/repository/docker/arturcampos/nginx)

[node](https://hub.docker.com/repository/docker/arturcampos/node)

### modo de executar
- Baixar o projeto
- Abrir um terminal no diretório nginx-node-proxy

- Opção 1
    - executar no terminal <code>docker-compose up -d </code>
    
- Opção 2
    -- executar no terminal <code>docker-compose up -d --build </code>
    
- ir até um web browser e colocar a url: <code>http://localhost:8080</code>

- para finalizar executar no terminal: <code> docker-compose stop </code>
