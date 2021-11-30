Loguear con los siguientes datos: 
Mail: challenge@alkemy.org
Password: react 

Este proyecto está preparado para ser utilizado en localhost. El link compartido a Netlify tuvo una pequeña variante, a causa de un problema de compatibilidad 
con las peticiones a APIs sin protocolo HTTPS. Para que pueda ser subido a dicha plataforma simplemente hay que cambiar en src/components/sections/Login.js la línea 20.
Reemplazando "http://challenge-react.alkemy.org/" por /api/ (dentro de axios.post). 
