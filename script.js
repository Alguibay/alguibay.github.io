const comunas = [
  {"nombre": "ALGARROBO", "codigo_postal": "2 71 00 00"},
  {"nombre": "ALHUE", "codigo_postal": "9650000"},
  {"nombre": "ALTO BIOBIO", "codigo_postal": "4590000"},
  {"nombre": "ALTO DEL CARMEN", "codigo_postal": "1650000"},
  {"nombre": "ALTO HOSPICIO", "codigo_postal": "1130000"},
  {"nombre": "ANCUD", "codigo_postal": "5710000"},
  {"nombre": "ANDACOLLO", "codigo_postal": "1750000"},
  {"nombre": "ANGOL", "codigo_postal": "4650000"},
  {"nombre": "ANTARTICA", "codigo_postal": "6360000"},
  {"nombre": "ANTOFAGASTA", "codigo_postal": "1240000"},
  {"nombre": "ANTUCO", "codigo_postal": "4490000"},
  {"nombre": "ARAUCO", "codigo_postal": "4360000"},
  {"nombre": "ARICA", "codigo_postal": "1000000"},
  {"nombre": "AYSEN", "codigo_postal": "6000000"},
  {"nombre": "BUIN", "codigo_postal": "9500000"},
  {"nombre": "BULNES", "codigo_postal": "3930000"},
  {"nombre": "CABILDO", "codigo_postal": "2050000"},
  {"nombre": "CABO DE HORNOS", "codigo_postal": "6350000"},
  {"nombre": "CABRERO", "codigo_postal": "4470000"},
  {"nombre": "CALAMA", "codigo_postal": "1390000"},
  {"nombre": "CALBUCO", "codigo_postal": "5570000"},
  {"nombre": "CALDERA", "codigo_postal": "1570000"},
  {"nombre": "CALERA DE TANGO", "codigo_postal": "9560000"},
  {"nombre": "CALLE LARGA", "codigo_postal": "2130000"},
  {"nombre": "CAMARONES", "codigo_postal": "1040000"},
  {"nombre": "CAMINA", "codigo_postal": "1150000"},
  {"nombre": "CANELA", "codigo_postal": "1960000"},
  {"nombre": "CANETE", "codigo_postal": "4390000"},
  {"nombre": "CARAHUE", "codigo_postal": "5010000"},
  {"nombre": "CARTAGENA", "codigo_postal": "2680000"},
  {"nombre": "CASABLANCA", "codigo_postal": "2480000"},
  {"nombre": "CASTRO", "codigo_postal": "5700000"},
  {"nombre": "CATEMU", "codigo_postal": "2230000"},
  {"nombre": "CAUQUENES", "codigo_postal": "3690000"},
  {"nombre": "CERRILLOS", "codigo_postal": "9200000"},
  {"nombre": "CERRO NAVIA", "codigo_postal": "9080000"},
  {"nombre": "CHAITEN", "codigo_postal": "5850000"},
  {"nombre": "CHANARAL", "codigo_postal": "1490000"},
  {"nombre": "CHANCO", "codigo_postal": "3720000"},
  {"nombre": "CHEPICA", "codigo_postal": "3120000"},
  {"nombre": "CHIGUAYANTE", "codigo_postal": "4100000"},
  {"nombre": "CHILE CHICO", "codigo_postal": "6050000"},
  {"nombre": "CHILLAN", "codigo_postal": "3780000"},
  {"nombre": "CHILLAN VIEJO", "codigo_postal": "3820000"},
  {"nombre": "CHIMBARONGO", "codigo_postal": "3090000"},
  {"nombre": "CHOL CHOL", "codigo_postal": "5040000"},
  {"nombre": "CHONCHI", "codigo_postal": "5770000"},
  {"nombre": "CISNES", "codigo_postal": "6010000"},
  {"nombre": "COBQUECURA", "codigo_postal": "3990000"},
  {"nombre": "COCHAMO", "codigo_postal": "5560000"},
  {"nombre": "COCHRANE", "codigo_postal": "6100000"},
  {"nombre": "CODEGUA", "codigo_postal": "2900000"},
  {"nombre": "COELEMU", "codigo_postal": "3970000"},
  {"nombre": "COIHUECO", "codigo_postal": "3870000"},
  {"nombre": "COINCO", "codigo_postal": "3010000"},
  {"nombre": "COLBUN", "codigo_postal": "3610000"},
  {"nombre": "COLCHANE", "codigo_postal": "1160000"},
  {"nombre": "COLINA", "codigo_postal": "9340000"},
  {"nombre": "COLLIPULLI", "codigo_postal": "4680000"},
  {"nombre": "COLTAUCO", "codigo_postal": "3000000"},
  {"nombre": "COMBARBALA", "codigo_postal": "1890000"},
  {"nombre": "CONCEPCION", "codigo_postal": "4030000"},
  {"nombre": "CONCHALI", "codigo_postal": "8540000"},
  {"nombre": "CONCON", "codigo_postal": "2510000"},
  {"nombre": "CONSTITUCION", "codigo_postal": "3560000"},
  {"nombre": "CONTULMO", "codigo_postal": "4400000"},
  {"nombre": "COPIAPO", "codigo_postal": "1530000"},
  {"nombre": "COQUIMBO", "codigo_postal": "1780000"},
  {"nombre": "CORONEL", "codigo_postal": "4190000"},
  {"nombre": "CORRAL", "codigo_postal": "5190000"},
  {"nombre": "COYHAIQUE", "codigo_postal": "5950000"},
  {"nombre": "CUNCO", "codigo_postal": "4890000"},
  {"nombre": "CURACAUTIN", "codigo_postal": "4700000"},
  {"nombre": "CURACAVI", "codigo_postal": "9630000"},
  {"nombre": "CURACO DE VELEZ", "codigo_postal": "5740000"},
  {"nombre": "CURANILAHUE", "codigo_postal": "4370000"},
  {"nombre": "CURARREHUE", "codigo_postal": "4910000"},
  {"nombre": "CUREPTO", "codigo_postal": "3570000"},
  {"nombre": "CURICO", "codigo_postal": "3340000"},
  {"nombre": "DALCAHUE", "codigo_postal": "5730000"},
  {"nombre": "DIEGO DE ALMAGRO", "codigo_postal": "1500000"},
  {"nombre": "DONIHUE", "codigo_postal": "3020000"},
  {"nombre": "EL BOSQUE", "codigo_postal": "8010000"},
  {"nombre": "EL CARMEN", "codigo_postal": "3900000"},
  {"nombre": "EL MONTE", "codigo_postal": "9810000"},
  {"nombre": "EL QUISCO", "codigo_postal": "2700000"},
  {"nombre": "EL TABO", "codigo_postal": "2690000"},
  {"nombre": "EMPEDRADO", "codigo_postal": "3540000"},
  {"nombre": "ERCILLA", "codigo_postal": "4710000"},
  {"nombre": "ESTACION CENTRAL", "codigo_postal": "9160000"},
  {"nombre": "FLORIDA", "codigo_postal": "4170000"},
  {"nombre": "FREIRE", "codigo_postal": "4940000"},
  {"nombre": "FREIRINA", "codigo_postal": "1630000"},
  {"nombre": "FRESIA", "codigo_postal": "5600000"},
  {"nombre": "FRUTILLAR", "codigo_postal": "5620000"},
  {"nombre": "FUTALEUFU", "codigo_postal": "5870000"},
  {"nombre": "FUTRONO", "codigo_postal": "5180000"},
  {"nombre": "GALVARINO", "codigo_postal": "5030000"},
  {"nombre": "GENERAL LAGOS", "codigo_postal": "1080000"},
  {"nombre": "GORBEA", "codigo_postal": "4960000"},
  {"nombre": "GRANEROS", "codigo_postal": "2880000"},
  {"nombre": "GUAITECAS", "codigo_postal": "6020000"},
  {"nombre": "HIJUELAS", "codigo_postal": "2310000"},
  {"nombre": "HUALAIHUE", "codigo_postal": "5860000"},
  {"nombre": "HUALANE", "codigo_postal": "3400000"},
  {"nombre": "HUALPEN", "codigo_postal": "4600000"},
  {"nombre": "HUALQUI", "codigo_postal": "4180000"},
  {"nombre": "HUARA", "codigo_postal": "1140000"},
  {"nombre": "HUASCO", "codigo_postal": "1640000"},
  {"nombre": "HUECHURABA", "codigo_postal": "8580000"},
  {"nombre": "ILLAPEL", "codigo_postal": "1930000"},
  {"nombre": "INDEPENDENCIA", "codigo_postal": "8380000"},
  {"nombre": "IQUIQUE", "codigo_postal": "1100000"},
  {"nombre": "ISLA DE MAIPO", "codigo_postal": "9790000"},
  {"nombre": "ISLA DE PASCUA", "codigo_postal": "2770000"},
  {"nombre": "JUAN FERNANDEZ", "codigo_postal": "2600000"},
  {"nombre": "LA CALERA", "codigo_postal": "2290000"},
  {"nombre": "LA CISTERNA", "codigo_postal": "7970000"},
  {"nombre": "LA CRUZ", "codigo_postal": "2280000"},
  {"nombre": "LA ESTRELLA", "codigo_postal": "3250000"},
  {"nombre": "LA FLORIDA", "codigo_postal": "8240000"},
  {"nombre": "LA GRANJA", "codigo_postal": "8780000"},
  {"nombre": "LA HIGUERA", "codigo_postal": "1740000"},
  {"nombre": "LA LIGUA", "codigo_postal": "2030000"},
  {"nombre": "LA PINTANA", "codigo_postal": "8820000"},
  {"nombre": "LA REINA", "codigo_postal": "7850000"},
  {"nombre": "LA SERENA", "codigo_postal": "1700000"},
  {"nombre": "LA UNION", "codigo_postal": "5220000"},
  {"nombre": "LAGO RANCO", "codigo_postal": "5250000"},
  {"nombre": "LAGO VERDE", "codigo_postal": "5960000"},
  {"nombre": "LAGUNA BLANCA", "codigo_postal": "6250000"},
  {"nombre": "LAJA", "codigo_postal": "4560000"},
  {"nombre": "LAMPA", "codigo_postal": "9380000"},
  {"nombre": "LANCO", "codigo_postal": "5160000"},
  {"nombre": "LAS CABRAS", "codigo_postal": "3030000"},
  {"nombre": "LAS CONDES", "codigo_postal": "7550000"},
  {"nombre": "LAUTARO", "codigo_postal": "4860000"},
  {"nombre": "LEBU", "codigo_postal": "4350000"},
  {"nombre": "LICANTEN", "codigo_postal": "3410000"},
  {"nombre": "LIMACHE", "codigo_postal": "2240000"},
  {"nombre": "LINARES", "codigo_postal": "3580000"},
  {"nombre": "LITUECHE", "codigo_postal": "3240000"},
  {"nombre": "LLANQUIHUE", "codigo_postal": "5610000"},
  {"nombre": "LLAY LLAY", "codigo_postal": "2220000"},
  {"nombre": "LO BARNECHEA", "codigo_postal": "7690000"},
  {"nombre": "LO ESPEJO", "codigo_postal": "9120000"},
  {"nombre": "LO PRADO", "codigo_postal": "8980000"},
  {"nombre": "LOLOL", "codigo_postal": "3140000"},
  {"nombre": "LONCOCHE", "codigo_postal": "4970000"},
  {"nombre": "LONGAVI", "codigo_postal": "3620000"},
  {"nombre": "LONQUIMAY", "codigo_postal": "4690000"},
  {"nombre": "LOS ALAMOS", "codigo_postal": "4380000"},
  {"nombre": "LOS ANDES", "codigo_postal": "2100000"},
  {"nombre": "LOS ANGELES", "codigo_postal": "4440000"},
  {"nombre": "LOS LAGOS", "codigo_postal": "5170000"},
  {"nombre": "LOS MUERMOS", "codigo_postal": "5590000"},
  {"nombre": "LOS SAUCES", "codigo_postal": "4760000"},
  {"nombre": "LOS VILOS", "codigo_postal": "1940000"},
  {"nombre": "LOTA", "codigo_postal": "4210000"},
  {"nombre": "LUMACO", "codigo_postal": "4740000"},
  {"nombre": "MACHALI", "codigo_postal": "2910000"},
  {"nombre": "MACUL", "codigo_postal": "7810000"},
  {"nombre": "MAFIL", "codigo_postal": "5200000"},
  {"nombre": "MAIPU", "codigo_postal": "9250000"},
  {"nombre": "MAIPÚ", "codigo_postal": "9250727"},
  {"nombre": "MALLOA", "codigo_postal": "2950000"},
  {"nombre": "MARCHIHUE", "codigo_postal": "3260000"},
  {"nombre": "MARIA ELENA", "codigo_postal": "1360000"},
  {"nombre": "MARIA PINTO", "codigo_postal": "9620000"},
  {"nombre": "MARIQUINA", "codigo_postal": "5150000"},
  {"nombre": "MAULE", "codigo_postal": "3530000"},
  {"nombre": "MAULLIN", "codigo_postal": "5580000"},
  {"nombre": "MEJILLONES", "codigo_postal": "1310000"},
  {"nombre": "MELIPEUCO", "codigo_postal": "4900000"},
  {"nombre": "MELIPILLA", "codigo_postal": "9580000"},
  {"nombre": "MOLINA", "codigo_postal": "3380000"},
  {"nombre": "MONTE PATRIA", "codigo_postal": "1880000"},
  {"nombre": "MOSTAZAL", "codigo_postal": "2890000"},
  {"nombre": "MULCHEN", "codigo_postal": "4530000"},
  {"nombre": "NACIMIENTO", "codigo_postal": "4550000"},
  {"nombre": "NANCAGUA", "codigo_postal": "3110000"},
  {"nombre": "NATALES", "codigo_postal": "6160000"},
  {"nombre": "NAVIDAD", "codigo_postal": "3230000"},
  {"nombre": "NEGRETE", "codigo_postal": "4540000"},
  {"nombre": "NINHUE", "codigo_postal": "4010000"},
  {"nombre": "NIQUEN", "codigo_postal": "3850000"},
  {"nombre": "NOGALES", "codigo_postal": "2300000"},
  {"nombre": "NUEVA IMPERIAL", "codigo_postal": "5020000"},
  {"nombre": "NUNOA", "codigo_postal": "7750000"},
  {"nombre": "O HIGGINS", "codigo_postal": "6110000"},
  {"nombre": "OLIVAR", "codigo_postal": "2920000"},
  {"nombre": "OLLAHUE", "codigo_postal": "1420000"},
  {"nombre": "OLMUE", "codigo_postal": "2330000"},
  {"nombre": "OSORNO", "codigo_postal": "5290000"},
  {"nombre": "OVALLE", "codigo_postal": "1840000"},
  {"nombre": "PADRE HURTADO", "codigo_postal": "9710000"},
  {"nombre": "PADRE LAS CASAS", "codigo_postal": "4850000"},
  {"nombre": "PAIGUANO", "codigo_postal": "1770000"},
  {"nombre": "PAILLACO", "codigo_postal": "5230000"},
  {"nombre": "PAINE", "codigo_postal": "9540000"},
  {"nombre": "PALENA", "codigo_postal": "5880000"},
  {"nombre": "PALMILLA", "codigo_postal": "3160000"},
  {"nombre": "PANGUIPULLI", "codigo_postal": "5210000"},
  {"nombre": "PANQUEHUE", "codigo_postal": "2210000"},
  {"nombre": "PAPUDO", "codigo_postal": "2070000"},
  {"nombre": "PAREDONES", "codigo_postal": "3270000"},
  {"nombre": "PARRAL", "codigo_postal": "3630000"},
  {"nombre": "PEDRO AGUIRRE CERDA", "codigo_postal": "8460000"},
  {"nombre": "PELEARCO", "codigo_postal": "3500000"},
  {"nombre": "PELLUHUE", "codigo_postal": "3710000"},
  {"nombre": "PEMUCO", "codigo_postal": "3910000"},
  {"nombre": "PENAFLOR", "codigo_postal": "9750000"},
  {"nombre": "PENALOLEN", "codigo_postal": "7910000"},
  {"nombre": "PENCAHUE", "codigo_postal": "3550000"},
  {"nombre": "PENCO", "codigo_postal": "4150000"},
  {"nombre": "PERALILLO", "codigo_postal": "3170000"},
  {"nombre": "PERQUENCO", "codigo_postal": "4870000"},
  {"nombre": "PETORCA", "codigo_postal": "2040000"},
  {"nombre": "PEUMO", "codigo_postal": "2990000"},
  {"nombre": "PICA", "codigo_postal": "1170000"},
  {"nombre": "PICHIDEGUA", "codigo_postal": "2980000"},
  {"nombre": "PICHILEMU", "codigo_postal": "3220000"},
  {"nombre": "PINTO", "codigo_postal": "3880000"},
  {"nombre": "PIRQUE", "codigo_postal": "9480000"},
  {"nombre": "PITRUFQUEN", "codigo_postal": "4950000"},
  {"nombre": "PLACILLA", "codigo_postal": "3100000"},
  {"nombre": "PORTEZUELO", "codigo_postal": "3960000"},
  {"nombre": "PORVENIR", "codigo_postal": "6300000"},
  {"nombre": "POZO ALMONTE", "codigo_postal": "1180000"},
  {"nombre": "PRIMAVERA", "codigo_postal": "6310000"},
  {"nombre": "PROVIDENCIA", "codigo_postal": "7500000"},
  {"nombre": "PUCHUNCAVI", "codigo_postal": "2500000"},
  {"nombre": "PUCON", "codigo_postal": "4920000"},
  {"nombre": "PUDAHUEL", "codigo_postal": "9020000"},
  {"nombre": "PUENTE ALTO", "codigo_postal": "7500908"},
  {"nombre": "PUERTO MONTT", "codigo_postal": "5480000"},
  {"nombre": "PUERTO OCTAY", "codigo_postal": "5370000"},
  {"nombre": "PUERTO VARAS", "codigo_postal": "5550000"},
  {"nombre": "PUMANQUE", "codigo_postal": "3150000"},
  {"nombre": "PUNITAQUI", "codigo_postal": "1900000"},
  {"nombre": "PUNTA ARENAS", "codigo_postal": "6200000"},
  {"nombre": "PUQUELDON", "codigo_postal": "5760000"},
  {"nombre": "PUREN", "codigo_postal": "4750000"},
  {"nombre": "PURRANQUE", "codigo_postal": "5380000"},
  {"nombre": "PUTAENDO", "codigo_postal": "2190000"},
  {"nombre": "PUTRE", "codigo_postal": "1070000"},
  {"nombre": "PUYEHUE", "codigo_postal": "5360000"},
  {"nombre": "QUEILEN", "codigo_postal": "5780000"},
  {"nombre": "QUELLON", "codigo_postal": "5790000"},
  {"nombre": "QUEMCHI", "codigo_postal": "5720000"},
  {"nombre": "QUILACO", "codigo_postal": "4520000"},
  {"nombre": "QUILICURA", "codigo_postal": "8700000"},
  {"nombre": "QUILLECO", "codigo_postal": "4500000"},
  {"nombre": "QUILLON", "codigo_postal": "3940000"},
  {"nombre": "QUILLOTA", "codigo_postal": "2260000"},
  {"nombre": "QUILPUE", "codigo_postal": "2430000"},
  {"nombre": "QUINCHAO", "codigo_postal": "5750000"},
  {"nombre": "QUINTA DE TILCOCO", "codigo_postal": "2960000"},
  {"nombre": "QUINTA NORMAL", "codigo_postal": "8500000"},
  {"nombre": "QUINTERO", "codigo_postal": "2490000"},
  {"nombre": "QUIRIHUE", "codigo_postal": "4000000"},
  {"nombre": "RANCAGUA", "codigo_postal": "2820000"},
  {"nombre": "RANQUIL", "codigo_postal": "3950000"},
  {"nombre": "RAUCO", "codigo_postal": "3430000"},
  {"nombre": "RECOLETA", "codigo_postal": "8420000"},
  {"nombre": "RENAICO", "codigo_postal": "4670000"},
  {"nombre": "RENCA", "codigo_postal": "8640000"},
  {"nombre": "RENGO", "codigo_postal": "2940000"},
  {"nombre": "REQUINOA", "codigo_postal": "2930000"},
  {"nombre": "RETIRO", "codigo_postal": "3640000"},
  {"nombre": "RINCONADA", "codigo_postal": "2140000"},
  {"nombre": "RIO BUENO", "codigo_postal": "5240000"},
  {"nombre": "RIO CLARO", "codigo_postal": "3510000"},
  {"nombre": "RIO HURTADO", "codigo_postal": "1870000"},
  {"nombre": "RIO IBANEZ", "codigo_postal": "6060000"},
  {"nombre": "RIO NEGRO", "codigo_postal": "5390000"},
  {"nombre": "RIO VERDE", "codigo_postal": "6240000"},
  {"nombre": "ROMERAL", "codigo_postal": "3370000"},
  {"nombre": "SAAVEDRA", "codigo_postal": "5000000"},
  {"nombre": "SAGRADA FAMILIA", "codigo_postal": "3390000"},
  {"nombre": "SALAMANCA", "codigo_postal": "1950000"},
  {"nombre": "SAN ANTONIO", "codigo_postal": "2660000"},
  {"nombre": "SAN BERNARDO", "codigo_postal": "8050000"},
  {"nombre": "SAN CARLOS", "codigo_postal": "3840000"},
  {"nombre": "SAN CLEMENTE", "codigo_postal": "3520000"},
  {"nombre": "SAN ESTEBAN", "codigo_postal": "2120000"},
  {"nombre": "SAN FABIAN", "codigo_postal": "3860000"},
  {"nombre": "SAN FELIPE", "codigo_postal": "2170000"},
  {"nombre": "SAN FERNANDO", "codigo_postal": "3070000"},
  {"nombre": "SAN GREGORIO", "codigo_postal": "6260000"},
  {"nombre": "SAN IGNACIO", "codigo_postal": "3890000"},
  {"nombre": "SAN JAVIER", "codigo_postal": "3660000"},
  {"nombre": "SAN JOAQUIN", "codigo_postal": "8940000"},
  {"nombre": "SAN JOSE DE MAIPO", "codigo_postal": "9460000"},
  {"nombre": "SAN JUAN DE LA COSTA", "codigo_postal": "5400000"},
  {"nombre": "SAN MIGUEL", "codigo_postal": "8900000"},
  {"nombre": "SAN NICOLAS", "codigo_postal": "4020000"},
  {"nombre": "SAN PABLO", "codigo_postal": "5350000"},
  {"nombre": "SAN PEDRO", "codigo_postal": "9660000"},
  {"nombre": "SAN PEDRO DE ATACAMA", "codigo_postal": "1410000"},
  {"nombre": "SAN PEDRO DE LA PAZ", "codigo_postal": "4130000"},
  {"nombre": "SAN RAFAEL", "codigo_postal": "3490000"},
  {"nombre": "SAN RAMON", "codigo_postal": "8860000"},
  {"nombre": "SAN ROSENDO", "codigo_postal": "4570000"},
  {"nombre": "SAN VICENTE DE TAGUA TAGUA", "codigo_postal": "2970000"},
  {"nombre": "SANTA BARBARA", "codigo_postal": "4510000"},
  {"nombre": "SANTA CRUZ", "codigo_postal": "3130000"},
  {"nombre": "SANTA JUANA", "codigo_postal": "4230000"},
  {"nombre": "SANTA MARIA", "codigo_postal": "2200000"},
  {"nombre": "SANTIAGO", "codigo_postal": "8320000"},
  {"nombre": "SANTO DOMINGO", "codigo_postal": "2720000"},
  {"nombre": "SIERRA GORDA", "codigo_postal": "1320000"},
  {"nombre": "TALAGANTE", "codigo_postal": "9670000"},
  {"nombre": "TALCA", "codigo_postal": "3460000"},
  {"nombre": "TALCAHUANO", "codigo_postal": "4260000"},
  {"nombre": "TALTAL", "codigo_postal": "1300000"},
  {"nombre": "TEMUCO", "codigo_postal": "4780000"},
  {"nombre": "TENO", "codigo_postal": "3360000"},
  {"nombre": "TEODORO SCHMIDT", "codigo_postal": "4990000"},
  {"nombre": "TIERRA AMARILLA", "codigo_postal": "1580000"},
  {"nombre": "TILTIL", "codigo_postal": "9420000"},
  {"nombre": "TIMAUKEL", "codigo_postal": "6320000"},
  {"nombre": "TIRUA", "codigo_postal": "4410000"},
  {"nombre": "TOCOPILLA", "codigo_postal": "1340000"},
  {"nombre": "TOLTEN", "codigo_postal": "4980000"},
  {"nombre": "TOME", "codigo_postal": "4160000"},
  {"nombre": "TORRES DEL PAINE", "codigo_postal": "6170000"},
  {"nombre": "TORTEL", "codigo_postal": "6120000"},
  {"nombre": "TRAIGUEN", "codigo_postal": "4730000"},
  {"nombre": "TREGUACO", "codigo_postal": "3980000"},
  {"nombre": "TUCAPEL", "codigo_postal": "4480000"},
  {"nombre": "VALDIVIA", "codigo_postal": "5090000"},
  {"nombre": "VALLENAR", "codigo_postal": "1610000"},
  {"nombre": "VALPARAISO", "codigo_postal": "2340000"},
  {"nombre": "VICHUQUEN", "codigo_postal": "3420000"},
  {"nombre": "VICTORIA", "codigo_postal": "4720000"},
  {"nombre": "VICUNA", "codigo_postal": "1760000"},
  {"nombre": "VILCUN", "codigo_postal": "4880000"},
  {"nombre": "VILLA ALEGRE", "codigo_postal": "3650000"},
  {"nombre": "VILLA ALEMANA", "codigo_postal": "6500000"},
  {"nombre": "VILLARRICA", "codigo_postal": "4930000"},
  {"nombre": "VINA DEL MAR", "codigo_postal": "2520000"},
  {"nombre": "VITACURA", "codigo_postal": "7630000"},
  {"nombre": "YERBAS BUENAS", "codigo_postal": "3600000"},
  {"nombre": "YUMBEL", "codigo_postal": "4580000"},
  {"nombre": "YUNGAY", "codigo_postal": "3920000"},
  {"nombre": "ZAPALLAR", "codigo_postal": "2060000"}
]

const gpsButton = document.getElementById('gpsButton');
const gpsComuna = document.getElementById('gpsComuna');
const gpsCalle = document.getElementById('gpsCalle');
const gpsLatitud = document.getElementById('gpsLatitud');
const gpsLongitud = document.getElementById('gpsLongitud');
const comunaSelect = document.getElementById('comunaSelect');
const codigoPostalInput = document.getElementById('codigoPostal');
const searchComuna = document.getElementById('searchComuna');

// Cargar comunas en el select
function cargarComunas() {
  comunaSelect.innerHTML = ''; // Limpiar la lista
  comunas.forEach(comuna => {
    const option = document.createElement('option');
    option.value = comuna.nombre;
    option.textContent = comuna.nombre;
    comunaSelect.appendChild(option);
  });
}

cargarComunas();

// Filtrar comunas mientras el usuario escribe
searchComuna.addEventListener('input', function() {
  const searchValue = searchComuna.value.toLowerCase();
  comunaSelect.innerHTML = '';
  comunas
    .filter(comuna => comuna.nombre.toLowerCase().includes(searchValue))
    .forEach(comuna => {
      const option = document.createElement('option');
      option.value = comuna.nombre;
      option.textContent = comuna.nombre;
      comunaSelect.appendChild(option);
    });
  
  // Buscar el código postal correspondiente
  const comunaEncontrada = comunas.find(comuna => comuna.nombre.toLowerCase().includes(searchValue));
  if (comunaEncontrada) {
    codigoPostalInput.value = comunaEncontrada.codigo_postal;
  } else {
    codigoPostalInput.value = 'Búsqueda fallida';
  }
});

// Detectar cambios en el select para mostrar el código postal
comunaSelect.addEventListener('change', function() {
  const selectedComuna = comunaSelect.value;
  const comunaEncontrada = comunas.find(comuna => comuna.nombre === selectedComuna);
  
  if (comunaEncontrada) {
    codigoPostalInput.value = comunaEncontrada.codigo_postal;
  } else {
    codigoPostalInput.value = 'Búsqueda fallida';
  }
});

// Simulación de búsqueda por GPS con Nominatim
gpsButton.addEventListener('click', function() {
  cargarComunas();

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      // Hacer la solicitud a Nominatim para geocodificación inversa
      const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`;

      fetch(url)
        .then(response => response.json())
        .then(data => {
          if (data && data.address) {
            // Revisar los diferentes campos que podrían contener la comuna
            const comunaEncontrada = data.address.city || 
                                     data.address.town || 
                                     data.address.village || 
                                     data.address.municipality || 
                                     data.address.suburb ||  // Revisamos el campo de suburbio
                                     'No encontrada';

            gpsComuna.textContent = comunaEncontrada;

            // Seleccionar la comuna en el select y mostrar el código postal correspondiente
            const comunaData = comunas.find(comuna => comuna.nombre === comunaEncontrada.toUpperCase());
            if (comunaData) {
              comunaSelect.value = comunaData.nombre;
              codigoPostalInput.value = comunaData.codigo_postal;
            } else {
              codigoPostalInput.value = 'No se encontró el código postal';
            }
          } else {
            gpsComuna.textContent = 'No encontrada';
          }
        })
        .catch(error => {
          console.error('Error al obtener la comuna:', error);
        });
    });
  } else {
    alert('Geolocalización no disponible.');
  }
});