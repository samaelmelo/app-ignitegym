# Ignite Gym 🏋️‍♂️

Aplicativo mobile desenvolvido em React Native durante o curso **Ignite** da **Rocketseat**, com foco em consolidar os conceitos de programação orientada a componentes, navegação, consumo de API e boas práticas com TypeScript.

## 📸 Screenshots
 <div style="display: flex, flex-wrap: wrap, justify-content: center">
    <img src="src/assets/Screenshot 2025-05-06 at 22.25.38.png" alt="Foto do app" width="" height="500px">
  <img src="src/assets/Screenshot 2025-05-06 at 22.25.50.png" alt="Foto do app" width="" height="500px">
  <img src="src/assets/Screenshot 2025-05-06 at 22.26.26.png" alt="Foto do app" width="" height="500px">
  <img src="src/assets/Screenshot 2025-05-06 at 22.26.33.png" alt="Foto do app" width="" height="500px">
  <img src="src/assets/Screenshot 2025-05-06 at 22.26.44.png" alt="Foto do app" width="" height="500px">
  <img src="src/assets/Screenshot 2025-05-06 at 22.26.51.png" alt="Foto do app" width="" height="500px">
  <img src="src/assets/Screenshot 2025-05-06 at 22.38.22.png" alt="Foto do app" width="" height="500px">
   </div>

## 📱 Sobre o app

O **Ignite Gym** é uma aplicação para academias, onde usuários podem:

- Visualizar exercícios por grupo muscular 💪
- Acessar detalhes de cada exercício 📋
- Marcar treinos como concluídos ✅
- Acompanhar seu histórico de treinos 🗓️
- Realizar login com autenticação JWT 🔐

---

## 🛠️ Tecnologias utilizadas

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Navigation](https://reactnavigation.org/)
- [Axios](https://axios-http.com/)
- [AsyncStorage](https://react-native-async-storage.github.io/async-storage/)
- [React Hook Form](https://react-hook-form.com/)
- [expo-image-picker](https://docs.expo.dev/versions/latest/sdk/imagepicker/)
- [Gluestack UI](https://gluestack.io/)

## 🧠 Desafios e aprendizados
Durante o desenvolvimento do projeto Ignite Gym, enfrentei diversos desafios que me proporcionaram aprendizados práticos essenciais no desenvolvimento mobile com React Native:

### 🔐 Autenticaç com JWT
Implementei fluxo completo de autenticação com login, cadastro e logout, utilizando JWT e interceptadores do Axios para injetar automaticamente o token em requisições autenticadas. Também realizei o armazenamento seguro da sessão com AsyncStorage, mantendo o usuário logado mesmo após fechar o app.

### 🌐 Gerenciamento de sessã com Context API
Criei um contexto de autenticação (AuthContext) para compartilhar o estado global do usuário entre telas públicas e privadas, garantindo acessos controlados e consistência de dados durante toda a navegação.

### 🚦 Controle de rotas públicas e privadas
Implementei uma lógica de rotas que reireciona dinamicamente o usuário com base na autenticação, utilizando React Navigation. Isso inclui o uso de Splash Screen para verificar a sessão antes de renderizar o app.

### 🧭 Navegação entre telas
Utilizei *Stack Navigator e Bottom Tabs para estruturar a navegação da aplicação, com passagem de parâmetros entre telas e integração com o histórico de navegação de forma fluida e escalável.

### 🧰 Formulários com validação
Implementei formulários com React Hook Form em conjunto com Zod, criando validações claras e mensagens de erro intuitivas para melhorar a experiência do usuário no cadastro e login.

### 🖼️ Upload e manipulação de imagens
Utilizei o expo-image-picker para permitir que o usuário selecione ou capture uma imagem da galeria ou câmera. Também implementei o envio dessa imagem como avatar para a API com preview local, lidando com permissões e compressão imagem.

### 💠 Interface moderna e responsiva
Utilizei a biblioteca Gluestack UI, baseada em design system, para compor a interface do ap com foco em acessibilidade, responsividade e manutenibilidade. Trabalhei com temas, componentes reutilizáveis e layouts flexíveis.

### 📂 Organização do projeto
Mantive uma estrutura de pastas modular e limpa, separando componentes, hooks, rotas, serviços, utilitários e contexto, seguindo boas práticas de arquitetura para aplicações escaláveis.

## 👨‍💻 Desenvolvedor
Feito com 💙 por Samael Melo
