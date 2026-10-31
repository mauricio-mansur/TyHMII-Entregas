# Módulo 5: Dinámica de Sistemas

## Planteo del Problema: Cervecería Artesanal
Para este trabajo, desarrollamos un caso de estudio propio centrado en la gestión de la cámara de frío de una cervecería artesanal. El objetivo fue diseñar un "sistema autorregulado" que ajuste dinámicamente el ritmo de envasado en función de la brecha existente entre el inventario físico y una meta ideal de seguridad, evitando así el sobrealmacenamiento, la inmovilización de capital y los altos costos de refrigeración.

El modelo fue configurado para un horizonte temporal de 10 semanas y sometido a dos pruebas de estrés

1. **Escenario de Estabilidad:** Una meta constante de 150 barriles, donde el bucle de realimentación demostró funcionar a la perfección estabilizando la producción al empatar con los despachos.
2. **Escenario de Perturbación (Función STEP):** Se introdujo un *shock* operativo simulando una exigencia repentina de la gerencia comercial para duplicar la meta a 300 barriles en la semana 4, de cara a un festival cervecero. 

### Conclusión Técnica
El análisis de las curvas resultantes confirmó la solidez del sistema. Ante la perturbación, el modelo exhibió un comportamiento típico de primer orden: un rápido pico productivo inicial seguido de un ajuste exponencial suave (asintótico) del inventario. Esta capacidad de amortiguación garantiza que no se produzcan oscilaciones abruptas, protegiendo la estabilidad de la carga de trabajo del personal en planta.

## 📥 Descargas
Los archivos del proyecto, incluyendo el informe técnico y el modelo ejecutable de Vensim, pueden descargarse directamente mediante los siguientes atajos:

[Ver el Informe del Módulo 5 en Formato Distill (Web)](https://anagodoyy85.github.io/TyHMII_Entregas/Modulo%205/ProyectoM5/Informe_M5.html)

[Descarga aquí el Proyecto Completo del Módulo 5 en PositCloud (.zip)](https://github.com/mauricio-mansur/TyHMII-Entregas/blob/main/M%C3%B3dulo%205/ProyectoM5.zip)

[Descarga aquí el Modelo de Vensim (.mdl)](https://github.com/mauricio-mansur/TyHMII-Entregas/blob/main/M%C3%B3dulo%205/modelo_cerveza_STEP.mdl)
