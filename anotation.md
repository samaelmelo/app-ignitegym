## Projeto foi criado com expo

`npx create-expo-app --template `

## Fonts do google no projeto

`npx expo install expo-font @expo-google-fonts/roboto`

## Intalação do glueStack components e patters

`npm i @gluestack-ui/themed@1.1.34 @gluestack-style/react@1.0.57 @gluestack-ui/config@1.1.19`

GluestackUIProvider -> provider que compartilhará os componentes de UI

## Ejetar o tema do gluestack dentro do meu projeto

`npx gluestack-ui-scripts eject-theme`

import {config} from "@gluestack-ui/config -> usar a config padrão é usar o tema padrão.
ao fazer o eject do thema dentro do projeto posso importar diretamente o arquivo do tema e escrever/reescrever minhas meu tema
import { config } from './config/gluestack-ui.config'

passá-la dentro do GluestackUiProvider

## Intalação do react native svg

`npx expo install react-native-svg`

## Instalação de lib para usar svg como componente

obs: ler documentacao para criar o metro.config.js

` npm install --save-dev react-native-svg-transformer`

## Instalação da lib do react navigation para navegar com stack navigation

```
npm install @react-navigation/native
 npx expo install react-native-screens react-native-safe-area-context
 npm install @react-navigation/native-stack
```

## Instalação da navegação com bottom tab navigation da mesma lig react navigation

````
npm install @react-navigation/bottom-tabs
````
