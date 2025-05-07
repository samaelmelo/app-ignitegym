# Ignite Gym 🏋️‍♂️

Aplicativo mobile desenvolvido em React Native durante o curso **Ignite** da **Rocketseat**, com foco em consolidar os conceitos de programação orientada a componentes, navegação, consumo de API e boas práticas com TypeScript.

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
- [NativeBase](https://nativebase.io/)
- [React Navigation](https://reactnavigation.org/)
- [Axios](https://axios-http.com/)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)
- [AsyncStorage](https://react-native-async-storage.github.io/async-storage/)

## 📸 Screenshots
  <img src="src/assets/Screenshot 2025-05-06 at 22.25.38.png" alt="Foto do app" width="" height="500px">
  <img src="src/assets/Screenshot 2025-05-06 at 22.25.50.png" alt="Foto do app" width="" height="500px">
  <img src="src/assets/Screenshot 2025-05-06 at 22.26.26.png" alt="Foto do app" width="" height="500px">
  <img src="src/assets/Screenshot 2025-05-06 at 22.26.33.png" alt="Foto do app" width="" height="500px">
  <img src="src/assets/Screenshot 2025-05-06 at 22.26.44.png" alt="Foto do app" width="" height="500px">
  <img src="src/assets/Screenshot 2025-05-06 at 22.26.51.png" alt="Foto do app" width="" height="500px">
  <img src="src/assets/Screenshot 2025-05-06 at 22.38.22.png" alt="Foto do app" width="" height="500px">

## 🧠 Desafios e aprendizados
Durante o desenvolvimento do Ignite Gym, enfrentei e superei diversos desafios técnicos que contribuíram fortemente para minha evolução como desenvolvedor mobile:

### 🔐 1. Autenticação com JWT
Integração com API para login e registro de usuário.

Armazenamento seguro do token usando AsyncStorage.

Requisições autenticadas com interceptadores do Axios.

### 📦 2. Gerenciamento de estado com Context API
Criação de um AuthContext para manter o usuário logado.

Compartilhamento de dados de sessão entre múltiplas telas.

### 🚦 3. Controle de rotas privadas e públicas
Implementação de lógica de redirecionamento entre telas públicas (Login/Cadastro) e privadas (Home/Exercícios).

Splash screen personalizada enquanto verifica autenticação.

### 🧭 4. Navegação entre telas
Uso de React Navigation (Stack e Bottom Tabs).

Passagem de parâmetros entre telas e navegação com histórico.

### 🧰 5. Formulários com validação
Utilização de React Hook Form + Zod para validação de campos (e-mail, senha, etc).

Mensagens de erro amigáveis e adaptadas.

### 🗂️ 6. Organização de componentes
Separação clara entre componentes reutilizáveis, hooks personalizados, rotas, serviços, e armazenamento local.

Código limpo e modular, seguindo boas práticas de arquitetura.

### 💾 7. Persistência local
Armazenamento e recuperação de dados com AsyncStorage para manter login e histórico mesmo ao fechar o app.

### 📱 8. Design responsivo com NativeBase
Criação de uma UI moderna e adaptada para diferentes tamanhos de tela.

Uso de tokens de tema para cores, fontes e espaçamentos.

## 👨‍💻 Desenvolvedor
Feito com 💙 por Samael Melo