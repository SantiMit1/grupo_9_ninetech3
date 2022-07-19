let productos = [
    {
        id: 1,
        name: "PLACA DE VIDEO EVGA GTX 1660 SUPER SC ULTRA 6GB",
        price: 75069,
        enOferta: true,
        discount: 0.20, //numero del 0 al 1
        description: [
            "RENDIMIENTO:",
            "NVIDIA GTX 1660 Super",
            "1408 núcleos CUDA",
            "Reloj de aumento de 1830 MHz",
            "161.0GT / s Tasa de relleno de textura",
            "MEMORIA:",
            "6144 MB, GDDR6 de 192 bits",
            "14000 MHz (efectivo)",
            "336 GB / s de ancho de banda de memoria",
            "REFRIGERACION:",
            "Doble ventilador",
            "LED",
            "INRTERFAZ:",
            "PCIe 3.0 16x",
            "DisplayPort, HDMI, DVI-D",
            "RESOLUCION Y ACTUALIZAR:",
            "Monitores máximos admitidos: 3",
            "Frecuencia de actualización máxima de 240 Hz",
            "Max analógico:",
            "Máx. Digital: 7680x4320",
            "DIMENSIONES:",
            "Altura: 111.15mm",
            "Longitud: 202.1mm",
            "Ancho: doble ranura",
            "SOPORTE DE SISTEMA OPERATIVO:",
            "Windows 10 de 64 bits",
            "Windows 7 de 64 bits",
            "REQUERIMIENTOS:",
            "Mínimo de una fuente de alimentación de 450 V.",
            "Un dongle de alimentación PCIe de 8 pines disponible",
            "Consumo de energía total: 125 W"
        ],
        image: "gtx 1660.jpg"
    },
    {
        id: 2,
        name: "DISCO DURO HDD 1 TB WESTERN DIGITAL WD BLUE",
        price: 7349,
        enOferta: true,
        discount: 0.1,
        description: [
            "Interfaz SATA III (6 GB/s)",
            "Tamaño del búfer 64 MB",
            "Velocidad de rotación 7200 RPM",
            "Capacidad 1 TB",
            "Tiempos de acceso 0,6 ms (lectura) / 0,8 ms (escritura)",
            "Carga / descarga 300.000 veces",
            "Consumo de energía 6,4W (lectura/escritura); 3,7W (detenido); 1W (stand-by/sleep)",
            "Dimensiones (al. x prof. x an.) 2,61 x 14,7 x 10,16 cm",
            "Peso 450 g",
            "Temperatura operativa 0°C a 60°C",
            "Temperatura no operativa -40°C a 70°C",
        ],
        image: "disco hdd.jpg"
    },
    {
        id: 3,
        name: "DISCO SOLIDO SSD 240GB KINGSTON A400 SATA III",
        price: 5549,
        enOferta: true,
        discount: 0.19,
        description: [
            "Capacidad: 240Gb",
            "Factor de forma: 2.5",
            "Interfaz: SATA Rev. 3.0 (6 Gb/s): con compatibilidad con versiones anteriores de SATA Rev. 2.0 (3 Gb/s)",
            "NAND: 3D",
            "Consumo de energía: 0.195W Inactivo / 0.279W Promedio / 0.642W (MAX) Lectura / 1.535W (MAX) Escritura",
            "Temperatura de almacenamiento: -40°C ~ 85°C",
            "Temperatura de funcionamiento: 0°C ~70°C",
            "Dimensiones: 100,0 mm x 69,9 mm x 7,0 mm (2,5)",
            "Funcionamiento por vibración: Pico de 2.17G (7-800Hz)",
            "Vibración no operativa: Pico de 20G (10-2000Hz)",
            "Esperanza de vida: 1 millón de horas MTBF"
        ],
        image: "disco ssd.jpg"
    },
    {
        id: 4,
        name: "MICROPROCESADOR AMD RYZEN 5600G 4.4 GHZ AM4",
        price: 37389,
        description: [
            "# de núcleos de CPU 6",
            "# de los hilos 12",
            "# de núcleos de GPU 7",
            "Reloj base 3,9 GHz",
            "Reloj de impulso máximo Hasta 4,4 GHz",
            "Caché L2 total 3 MB",
            "Caché L3 total 16 MB",
            "Desbloqueado sí",
            "CMOS TSMC 7nm FinFET",
            "Paquete AM4",
            "Versión PCI Express® PCIe® 3.0",
            "Solución térmica (PIB) Wraith Stealth",
            "TDP / TDP predeterminado 65W",
            "cTDP 45-65W",
            "Temperaturas máximas 95 ° C"
        ],
        image: "cpu ryzen.jpg"
    },
    {
        id:5,
        name: "TECLADO MECANICO HYPERX ALLOY FPS PRO",
        price: 12620,
        description: [
            "Estructura sólida de acero",
            "Teclas mecánicas CHERRY® MX",
            "Diseño portátil con cable extraíble",
            "Modo de juego, 100% anti-ghosting y funciones N-key rollover"
        ],
        image: "teclado hyperx.jpg"
    },
    {
        id: 6,
        name: "AURICULAR HYPERX CLOUD ALPHA",
        price: 17259,
        description: [
            "Tipo de parlante: Neodimio, 50mm",
            "Sensibilidad: 98dBSPL / mW a 1kHz",
            "Frecuencia: 13 Hz–27 000 Hz",
            "Impedancia: 65 Ω",
            "Longitud y tipo de cable:  Cable de auriculares extraíble (1,3 m) + alargador para PC (2 m) con control para subir, bajar volumen y silenciar micrófono. ",
            "Conector: 1 jack de 3.5mm + extensión Y a 2 plugs. ",
            "Peso con microfono: 336g",
            "Tipo de microfono: Condensador electret.",
            "Direccionalidad: Omnidireccional, con cancelación de ruido",
            "Frecuencia: 50 Hz-18 000 Hz.",
            "Sensibilidad: -43 dBV (0 dB=1 V/Pa, 1 kHz)."
        ],
        image: "auriculares hyperx.jpg"
    },
    {
        id:7,
        name: "AURICULAR INALAMBRICO LOGITECH G G733",
        price: 26549,
        description: [
            "Transductor: PRO-G 40 mm",
            "Respuesta de frecuencia: 20 Hz-20 kHz",
            "Impedancia: 39 ohmios (pasiva), 5 kilohmios (activa)",
            "Sensibilidad: 87,5 dB SPL/mW",
            "Patrón de captación de micrófono: Cardioide (unidireccional)",
            "Tamaño: 6 mm",
            "Respuesta de frecuencia: 100 Hz - 10 kHz",
            "Tipo de conexión: Tecnología inalámbrica LIGHTSPEED a través de USB"
        ],
        image: "auriculares logitech.jpg"
    },
    {
        id: 8,
        name: "MOUSE COOLER MASTER MM711",
        price: 6289,
        description: [
            "Color del mouse  Blanco",
            "Tratamiento de superficies  Mate, brillant",
            "Led del mouse Sí, RGB en rueda y logo",
            "Sensor de ratón Pixart PMW3389" ,
            "Cpi / dpi 7 niveles (400, 800, 1200 (predeterminado), 1600, 3200, 6400, 16000)" ,
            "Velocidad de seguimiento del mouse  400 ips" ,
            "Distancia de despegue del mouse  <~ 2 mm" ,
            "Tasa de sondeo  1000 hz" ,
            "Aceleración del ratón  50 gramos" ,
            "Procesador de ratón  ARM cortex M0 + de 32 bits" ,
            "Memoria incorporada 512 kb" ,
            "Vida útil del mouse (interruptores l / r)  OMRON, 20 millones" ,
            "Botones del mouse  6" ,
            "Software  Sí, soporte cooler master masterplus +  Longitud del cable del mouse  Cable fijo ultraweave, 1,8 m" ,
            'Dimensión del ratón 116,5 x 62,4 x 38,3 mm / 4,587 "x 2,457" x 1,508 "(largo x ancho x alto)' 
        ],
        image: "mouse cooler master.jpg"
    },
    {
        id: 9,
        name: "FUENTE COOLER MASTER 850W V2 80+ GOLD FULL MODULAR",
        price: 35159,
        description: [
            "Versión atx versión atx 12v. 2.41",
            "PFC activo",
            "Voltaje de entrada 100-240v",
            "Corriente de entrada 12-6a",
            "Frecuencia de entrada 47-63hz",
            "Dimensiones (l x an x al) 160x150x86mm",
            "Tamaño del ventilador 120 mm",
            "Cojinete de ventilador hdb",
            "Velocidad del ventilador 1500 rpm",
            "Nivel de ruido @ 20% 0 dba",
            "Nivel de ruido @ 50% 17,8 dba",
            "Nivel de ruido @ 100% 25,9 dba",
            "Eficiencia ≥90% a carga típica",
            "Calificación 80+ GOLD",
            "mtbf >100.000 horas",
            "protecciones ovp, opp, otp, scp, ocp, uvp",
            "regulador tuv, ce, ccc, eac, rcm, ctuvus, fcc, bsmi, bis, ukca"
        ],
        image: "fuente cooler master.jpg"
    }
]

module.exports = productos;