# Instructivos y saberes agrupados por eje (01–35, ciclo 2026)

## 1. Ingeniería de prompts (la base de todo)
Instructivo 01: enseñarle a NotebookLM a ser un "Ingeniero de Prompts" con la fórmula Rol · Tarea · Contexto · Restricciones/Formato. Es la columna vertebral que reaparece en todas las producciones.

## 2. NotebookLM como motor narrativo e investigativo
Instructivo 03: podcast/programa de radio con noticia de IA + historia local. Instructivo 02: leyendas Pilagá y Qom como fuentes. Instructivo 17: historias consistentes y efemérides. Instructivo 18: reconstrucción de imágenes con Deep Research. Instructivo 27: "Mundo Aumentado", una sociedad de más de 30 habitantes que deliberan y generan cultura, leyes y relatos.

## 3. Imagen con IA
Guía de Práctica 14: de la investigación al prompt maestro para recrear efemérides con estética de "archivo histórico". Instructivo 18: reconstrucción de imágenes a partir de descripciones. Instructivo 05: imagen a 3D con Meshy.ai.

## 4. Video con IA
Instructivo 04: imagen a video para dar vida a diseños. Instructivo 15: video con agentes IA en Visla. Instructivo 23: efemérides coloradenses en video automatizado con NotebookLM + voz + música. Instructivo 24: "Cambiá el final del corto", final alternativo multimodal justificado.

## 5. Voz, audio y música
Instructivo 10: texto a voz en Google AI Studio con acento argentino. Instructivo 08: avatares parlantes en Symphony Creative Studio para un glosario. Instructivo 16: música instrumental con Suno IA en los tutoriales.

## 6. Web y apps sin saber programar
Instructivo 09: página web con Gamma IA. Instructivo 11: spot promocional de la web. Instructivo 07: juegos/apps con Canva en Gemini + AppCreator24. Instructivo 12: mini apps con Claude. Instructivo 34: "La caja mágica de tu app", hacerlas multijugador con Firebase.

## 7. Realidad Aumentada
Instructivo 04: del folleto tradicional a la RA. Instructivo 06: Jornada de Pueblos Originarios con RA + 3D en la naturaleza de El Colorado. Instructivo 27: Mundo Aumentado. Instructivo 32 (según el listado por ejes): "La foto antigua que cobra vida", restaurar una foto histórica real y mostrar su antes/después en RA.

## 8. Narrativa interactiva, gamificación y "otra forma de leer"
Instructivo 13: narrativas ramificadas tipo árbol de decisiones. Instructivo 25: gamificación de la lectura con transmedia, book-apps, ficción interactiva y escape rooms. Instructivo 21: reto narrativo del chatbot "El Protocolo del Monte Pixelado".

## 9. Chatbots, agentes e Inteligencia Aumentada
Instructivos 20–21: diseñar, construir y publicar un chatbot especializado con identidad propia. Instructivo 26: teoría de agentes y "Skills": arquitectura modular, percepción multimodal, autonomía. Instructivo 19: simulación de debate con personajes ficcionales, reales y virtuales sobre problemáticas actuales.

## 10. Proyectos integradores (lo grande)
Guía de Práctica 14: Práctica Profesionalizante, Efemérides Coloradenses. Instructivo 16 (TP): video-tutorial para YouTube con miniatura, portada y paquete de redes. Instructivo 22: Documental Transmedia de El Colorado (proyecto final). Instructivo 35: "Bajo el Anillo: La Resistencia de El Colorado", documental individual de 1 minuto sobre una catástrofe ambiental simulada con datos verificables.

# Instructivo 36 — Agente conversacional con ElevenLabs
Para crear un agente conversacional, primero se junta información para la base de conocimiento, si es posible en PDF para no ocupar mucho espacio en ElevenLabs. Después se construye la "skill" en una IA generativa: nombre, característica, personalidad y saludo inicial. Al terminar, cada estudiante tiene su propio agente conversacional con voz, que responde hablando sobre el tema elegido, y lo comparte con un link. Ideas ancladas a lo local: un guía turístico de El Colorado, un divulgador de la cultura Pilagá y Qom (con fuentes citadas y consentimiento de la comunidad), un tutor de una materia, un bibliotecario.

## Paso 1: juntar la información para la base de conocimiento
Un agente conversacional es tan "sabio" como la información que le des. Buscar información confiable (páginas oficiales, libros, apuntes propios) y citar siempre la fuente. Ordenar todo en un solo documento: definiciones, datos, preguntas frecuentes, anécdotas. Guardarlo como PDF, porque ElevenLabs en cuentas gratuitas tiene un límite total de 20 MB para la base de conocimiento.

## Paso 2: construir la skill (personalidad) con una IA generativa
Con Claude, Gemini o ChatGPT definir: nombre propio, rol, personalidad y tono, saludo inicial y reglas (qué no debe hacer). Prompt para copiar: «Sos un diseñador de personajes de IA. Ayudame a crear un agente conversacional sobre [TU TEMA]. Entregame, en español rioplatense y separado por títulos: (1) un NOMBRE original, (2) su ROL, (3) su PERSONALIDAD y tono, (4) un SALUDO INICIAL de una o dos frases, y (5) un SYSTEM PROMPT completo en segunda persona con sus reglas: que responda sólo sobre el tema, que cite fuentes, que si no sabe algo lo diga y no lo invente.» Ética desde el diseño: que el agente no se haga pasar por una persona real; si representa a alguien o a una comunidad, consentimiento y aclarar que es recreación educativa.

## Pasos 3 a 7: crear, probar y compartir en ElevenLabs
Entrar a elevenlabs.io (plan gratuito), sección Agents, Create agent, Blank. Cargar Name, Language (Español), First message (saludo) y System prompt. En Knowledge Base, Add document y subir el PDF: el agente responde con esa información y deja de inventar. Elegir una voz de la biblioteca y el LLM (Gemini, GPT o Claude). Clonar una voz real solo con consentimiento explícito (Ley 25.326 y UNESCO 2021). Probar con Test/Talk: que salude, que tenga la personalidad y que use el PDF. Guardar (Save), buscar Share/Widget/Embed para el link público, probarlo en otro dispositivo y subir al Drive el PDF, el link y un video corto de la charla.

## Checklist ética y problemas frecuentes
Citar fuentes; sin deepfakes; voz clonada solo con consentimiento escrito; sin datos personales de menores ni terceros (Ley 25.326); respetar UNESCO 2021; respeto y consulta con comunidades Pilagá o Qom. Si no aparece en español, revisar Language. Si se sale del tema o inventa, reforzar el system prompt y confirmar el PDF. Si no deja subir el PDF, achicarlo o dividirlo. Si no aparece el link, primero Save. El plan gratis tiene minutos limitados.
