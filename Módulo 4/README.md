# Módulo 4: QGIS

## Descripción del Proyecto
En este módulo abordamos el procesamiento de datos geográﬁcos y alfanuméricos mediante Sistemas de Información Geográﬁca (SIG) en **QGIS** e integración con consultas.

El objetivo principal es dotar al ingeniero industrial de herramientas de análisis espacial e ingeniería de datos para la toma de decisiones territoriales y logísticas. 

## Contenido de la Actividad 1
El estudio permite evaluar la distribución espacial de la infraestructura industrial en Mendoza, analizando factores clave como la superficie ocupada, la generación de puestos de trabajo y los índices de impacto/contaminación ambiental de los distintos parques y zonas industriales.

1. **Análisis Vectorial y Raster:** Integración de capas vectoriales (`.shp`) de puntos (ubicación de parques) y polígonos (límites departamentales y zonas industriales), junto con el procesamiento de imágenes y datos raster.
2. **Edición y Estructuración de Atributos:** Uso de la conmutación de edición para digitalizar, corregir geometría y alimentar la tabla de atributos con variables de superficie, empleo y contaminación.
3. **Análisis Espacial Avanzado:** Generación de polígonos de Voronoi y Triangulación de Delaunay para estudiar la cobertura, vecindad y conectividad espacial entre los nodos industriales de la provincia.
4. **Exportación Web Interactiva:** Implementación de la extensión `qgis2web` para publicar el proyecto en formato HTML/OpenLayers interactivo, permitiendo la conmutación de capas y visualización dinámica en la web.

### 🌐 Mapa Web Interactivo
Puedes explorar el mapa web interactivo exportado directamente en el siguiente enlace:
👉 [Ver Mapa Interactivo de Parques Industriales](https://anagodoyy85.github.io/TyHMII_Entregas/Modulo%204/mapa%20web/index.html)

## Contenido de la Actividad 2

### Descripción de la Actividad
Esta segunda fase del módulo se centró en el monitoreo medioambiental y el procesamiento de imágenes satelitales (formato raster). El objetivo fue cuantificar y comparar la variación de la superficie cubierta por nieve en la zona del Valle de las Lágrimas entre dos períodos distintos (hace dos años versus la imagen actual).

### Metodología y Herramientas Aplicadas
1. **Gestión de Imágenes Raster:** Importación y superposición de imágenes satelitales `.tif` (datos de Copernicus) correspondientes a los dos períodos de estudio temporal.
2. **Ajuste de Proyección Cartográfica:** Transformación del Sistema de Referencia de Coordenadas (SRC) del proyecto, pasando de grados cartográficos (EPSG:4326) a un sistema métrico proyectado (**EPSG:32719 - WGS 84 / UTM zone 19S**). Este ajuste es crítico para garantizar la exactitud en la planimetría y evitar distorsiones topográficas al medir el terreno.
3. **Vectorización y Digitalización:** Creación de capas vectoriales (Shapefiles) de tipo polígono para delimitar y extraer las masas de nieve visibles en cada período, utilizando herramientas de conmutación de edición y digitalización manual.
4. **Geoprocesamiento y Cálculo de Superficies:** Separación de las geometrías en capas independientes y aplicación de la Calculadora de Campos mediante sintaxis espacial (`$area / 10000`) en la tabla de atributos. Esto permitió procesar el área matemáticamente exacta en **hectáreas (ha)** para realizar la comparativa.

### 🌐 Mapa Web Interactivo
Puedes explorar el mapa web interactivo exportado directamente en el siguiente enlace:
👉 [Ver Mapa Interactivo de Valle de las Lagrimas](https://anagodoyy85.github.io/TyHMII_Entregas/Modulo%204/mapa%20nieve/index.html)

## 📥 Descargas
Los archivos .zip de los proyectos pueden descargarse mediante los siguientes atajos:

[Descarga aquí el paquete de la Actividad 1 (.zip)](https://github.com/mauricio-mansur/TyHMII-Entregas/blob/main/M%C3%B3dulo%204/M4A1%20(1).zip)

[Descarga aquí el paquete de la Actividad 2 (.zip)](https://github.com/mauricio-mansur/TyHMII-Entregas/blob/main/M%C3%B3dulo%204/M4A2%20(1).zip)
