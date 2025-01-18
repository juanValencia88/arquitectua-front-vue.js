# front-messages-wh

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## Escafolding

````
src/
├── assets/                # Archivos estáticos (imágenes, estilos, fuentes, etc.)
│   ├── images/            # Imágenes y gráficos
│   ├── styles/            # Archivos CSS/SCSS globales
│       └── variables.scss # Variables de estilos (opcional)
│   └── fonts/             # Fuentes personalizadas
│
├── components/            # Componentes reutilizables
│   ├── common/            # Componentes genéricos (botones, modales, etc.)
│       ├── BaseButton.vue
│       ├── Modal.vue
│   ├── layout/            # Componentes relacionados con la estructura (Header, Footer, Sidebar)
│       ├── Header.vue
│       ├── Footer.vue
│       └── Sidebar.vue
│   ├── forms/             # Componentes relacionados con formularios
│       ├── InputField.vue
│       ├── Checkbox.vue
│       └── Select.vue
│   └── specific/          # Componentes específicos para vistas particulares
│       └── UserCard.vue
│
├── layouts/               # Plantillas generales (Estructura base para vistas)
│   ├── DefaultLayout.vue  # Layout principal
│   ├── AuthLayout.vue     # Layout para vistas de autenticación
│
├── pages/                 # Páginas principales (Rutas de tu aplicación)
│   ├── Home.vue           # Página de inicio
│   ├── About.vue          # Página de "Acerca de"
│   └── Auth/              # Agrupa las páginas relacionadas con autenticación
│       ├── Login.vue
│       ├── Register.vue
│
├── plugins/               # Configuración de plugins (Vuetify, Axios, etc.)
│   ├── vuetify.js         # Configuración de Vuetify
│   ├── axios.js           # Configuración de Axios
│
├── router/                # Configuración del router
│   └── index.js           # Archivo principal de rutas
│
├── store/                 # Configuración de Vuex (estado global)
│   ├── index.js           # Archivo principal de Vuex
│   └── modules/           # Módulos Vuex
│       ├── auth.js        # Estado relacionado con autenticación
│       └── user.js        # Estado relacionado con usuarios
│
├── utils/                 # Utilidades y funciones helper
│   ├── formatDate.js      # Función para formatear fechas
│   ├── validateInput.js   # Validaciones genéricas
│
├── views/                 # Vistas principales de la aplicación
│   ├── Dashboard.vue      # Vista de dashboard
│   └── Profile.vue        # Vista de perfil
│
├── App.vue                # Componente raíz
├── main.js                # Punto de entrada principal
└── vue.config.js          # Configuración personalizada de Vue.js


````