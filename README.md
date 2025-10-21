# Just Coffee ☕  
Una web para los amantes del café — desarrollada con Next .js + TypeScript

[🔗 Ver demo en producción](https://just-coffee-sage.vercel.app/)

## 🎯 ¿Por qué este proyecto?  
Este proyecto nace de mi interés por el mundo del café y mi deseo de crear un sitio web moderno, visualmente atractivo y funcional para mostrar mis habilidades en desarrollo web.  
Además, quise experimentar con la estructura de un proyecto real: rutas, datos locales, desplegar en la nube.

## 🚀 Características principales  
- Diseño **responsive**: adaptado para desktop, tablet y móvil.  
- Navegación intuitiva entre secciones.  
- Datos locales (carpeta `data/`) que alimentan componentes de vista.  
- Uso de componentes reutilizables en React/Next.js.  
- Optimización de fuentes/imagenes usando `next/font`, `next/image`.  
- Despliegue automático en Vercel — listo para mostrar a otros.

## 🧰 Tecnologías utilizadas  
- [Next.js](https://nextjs.org) (estructura del proyecto, routing, optimización)
- TypeScript  
- CSS / TailwindCSS
- ScrollReveal
- Framer-motion 
- ESLint (`eslint.config.mjs`)  
- Despliegue: Vercel  

## 📂 Estructura del proyecto  
```
.
├── data/              # contenido estático  
├── public/            # assets públicos  
├── src/               # código fuente  
│   ├── app/           # rutas de Next.js
│   ├── components/    # componentes reutilizables
│   ├── hooks/         # funciones reutilizables 
│   └── models/        # modelos de interfaces y tipos de Typescript  
├── next.config.ts     # configuración de Next.js  
├── tsconfig.json      # configuración de TypeScript  
└── README.md  
```

## 🚀 Cómo ejecutar localmente (debes tener instalado NodeJS en tu ordenador)  
1. Clona este repositorio:  
   ```bash
   git clone https://github.com/JorgeNeder97/just-coffee.git
   cd just-coffee
   ```  
2. Instala dependencias:  
   ```bash
   npm install
   ```  
3. Corre el servidor de desarrollo:  
   ```bash
   npm run dev
   ```  
4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la web.

## 📦 Despliegue  
El sitio está desplegado y accesible en: [https://just-coffee-sage.vercel.app/](https://just-coffee-sage.vercel.app/)  
Se realizó mediante Vercel, lo que me permitió experimentar con despliegues automáticos y optimización web.

## 🔍 Lo que aprendí / Retos que superé  
- Aprendí a estructurar un proyecto con Next.js + TypeScript desde cero.  
- Implementé datos propios en `data/`, aprendiendo cómo importarlos y usarlos en componentes.  
- Mejoré mi conocimiento en optimización de imágenes/fuentes usando `next/image` o `next/font`.  
- Trabajé en diseño responsive para asegurar que la experiencia sea buena tanto en móvil como en escritorio.  
- Resolví un reto al utilizar datos locales, la primera versión de esta app utilizaba prisma y una db en supabase, pero como es un proyecto propio la base de datos se suspendía por falta de uso. Esto hacía que la disponibilidad de los datos no sea óptima, por lo tanto decidí cambiar la estrategia en este caso e implementar una "mini db" en json para tener los datos de forma local (ya que no son datos que cambien, lo unico que hace la web es leer los datos).

## 📈 Mejoras a futuro  
- Mejorar SEO y accesibilidad (WCAG).  
- Mejorar efectos visuales y el diseño.

## 📄 Licencia  
Este proyecto está bajo la licencia [Apache 2.0](LICENSE).
