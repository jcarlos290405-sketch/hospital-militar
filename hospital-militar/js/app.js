const coloresEspecialidad = {
    'CARDIOLOGO': '#784212',
    'GASTROENTEROLOGO': '#145a32',
    'PSICOLOGO': '#4a235a',
    'ODONTOLOGIA': '#0e6655',
    'FISIOTERAPIA': '#1a5276'
};

const doctores = [
  {nombre: 'DRA. DECAN JACKELYNE', especialidad: 'PEDIATRA', horario: 'Lunes, Martes, Miércoles: 07:00 AM - 11:00 AM / Jueves: 01:00 PM - 04:00 PM'},
  {nombre: 'DRA. IBELICE MARTINEZ', especialidad: 'PEDIATRA', horario: 'Lunes, Martes, Jueves: 07:00 AM - 11:00 AM'},
  {nombre: 'DRA. NORMELYS LEZAMA', especialidad: 'PEDIATRA', horario: 'Lunes, Martes, Viernes: 07:00 AM - 11:00 AM'},
  {nombre: 'DRA. YOLAIXA BASTARDO', especialidad: 'PEDIATRA', horario: 'Martes, Miércoles: 07:00 AM - 11:00 AM / Lunes, Viernes: 01:00 PM - 04:00 PM'},
  {nombre: 'DRA. MONICA ROMERO', especialidad: 'PEDIATRA', horario: 'Lunes, Viernes: 01:00 PM - 04:00 PM'},
  {nombre: 'DR. YONMER GARCIA', especialidad: 'CIRUGIA PEDIATRA', horario: 'Jueves: 07:00 AM - 11:00 AM'},
  {nombre: 'DRA. MARIA ARISTIZABAL', especialidad: 'CIRUGIA PEDIATRA', horario: 'Martes: 07:00 AM - 11:00 AM'},
  {nombre: 'DRA. GOMEZ SAIDY', especialidad: 'GINECO-OBSTETRA', horario: 'Jueves: 07:00 AM - 11:00 AM / Martes: 01:00 PM - 04:00 PM'},
  {nombre: 'DRA. MERLIS GOMEZ', especialidad: 'GINECO-OBSTETRA', horario: 'Viernes: 07:00 AM - 11:00 AM / Viernes: 01:00 PM - 04:00 PM'},
  {nombre: 'DRA. PAOLA HERNANDEZ', especialidad: 'GINECO-OBSTETRA', horario: 'Lunes: 07:00 AM - 11:00 AM / Lunes: 01:00 PM - 04:00 PM'},
  {nombre: 'DR. HECTOR ARAGUAYAN', especialidad: 'GINECO-OBSTETRA', horario: 'Martes, Miércoles: 07:00 AM - 11:00 AM'},
  {nombre: 'DR. JOSE MORA', especialidad: 'ANESTESIOLOGO', horario: 'Lunes, Martes, Jueves: 07:00 AM - 11:00 AM'},
  {nombre: 'DRA. ILIANA CARRASQUERO', especialidad: 'ANESTESIOLOGO', horario: 'Jueves, Viernes: 07:00 AM - 11:00 AM'},
  {nombre: 'DR. FRANCO ALBERTO', especialidad: 'ANESTESIOLOGO', horario: 'Lunes, Martes, Jueves, Viernes: 07:00 AM - 11:00 AM'},
  {nombre: 'DRA. ZAYNELL ACOSTA', especialidad: 'ANESTESIOLOGO', horario: 'Lunes, Viernes: 07:00 AM - 11:00 AM'},
  {nombre: 'DRA. MIJARES ELYSEF', especialidad: 'ANESTESIOLOGO', horario: 'Martes, Miércoles: 07:00 AM - 11:00 AM'},
  {nombre: 'DRA. ABANO SALAS ANA', especialidad: 'ANESTESIOLOGO', horario: 'Martes: 07:00 AM - 11:00 AM'},
  {nombre: 'DRA. YONCRIS MILLAN', especialidad: 'ANESTESIOLOGO', horario: 'Jueves, Viernes: 01:00 PM - 04:00 PM'},
  {nombre: 'DR. MARTELLI ANTONIO', especialidad: 'TRAUMATOLOGO', horario: 'Martes, Miércoles, Jueves: 07:00 AM - 11:00 AM'},
  {nombre: 'DR. OLSEN ROJAS', especialidad: 'TRAUMATOLOGO', horario: 'Lunes, Martes: 07:00 AM - 11:00 AM'},
  {nombre: 'DR. LUIS RUIZ', especialidad: 'TRAUMATOLOGO', horario: 'Jueves: 07:00 AM - 11:00 AM'},
  {nombre: 'DR. CARLOS PULIDO', especialidad: 'TRAUMATOLOGO', horario: 'Lunes: 01:00 PM - 04:00 PM'},
  {nombre: 'DRA. YSAMAR ROJAS', especialidad: 'TRAUMATOLOGO', horario: 'Lunes, Martes, Viernes: 01:00 PM - 04:00 PM'},
  {nombre: 'DR. RUBEN PEREIRA', especialidad: 'INTERNISTA', horario: 'Jueves: 07:00 AM - 11:00 AM / Lunes: 01:00 PM - 04:00 PM'},
  {nombre: 'DRA. MARIBEL VILLARROEL', especialidad: 'INTERNISTA', horario: 'Martes, Viernes: 07:00 AM - 11:00 AM'},
  {nombre: 'DRA. LEON YUBGLYS', especialidad: 'INTERNISTA', horario: 'Martes: 07:00 AM - 11:00 AM / Lunes, Viernes: 01:00 PM - 04:00 PM'},
  {nombre: 'DRA. NAYIBI PIÑANGO', especialidad: 'INTERNISTA', horario: 'Lunes: 07:00 AM - 11:00 AM'},
  {nombre: 'DRA. PATRICIA HERNANDEZ', especialidad: 'INTERNISTA', horario: 'Martes: 01:00 PM - 04:00 PM'},
  {nombre: 'DR. OLIDEN MANZANO', especialidad: 'INTERNISTA', horario: 'Jueves: 01:00 PM - 04:00 PM'},
  {nombre: 'DR. CATONI CARLOS', especialidad: 'NEUROCIRUJANO', horario: 'Martes, Jueves: 07:00 AM - 11:00 AM'},
  {nombre: 'DR. RENNY MARCANO', especialidad: 'CIRUGIA GENERAL', horario: 'Lunes: 07:00 AM - 11:00 AM'},
  {nombre: 'DRA. DEYSI MARQUEZ', especialidad: 'CIRUGIA GENERAL', horario: 'Martes, Miércoles: 07:00 AM - 11:00 AM'},
  {nombre: 'DRA. DEXY BLANCO', especialidad: 'CIRUGIA GENERAL', horario: 'Jueves, Viernes: 07:00 AM - 11:00 AM'},
  {nombre: 'DRA. DAYANA AELLOS', especialidad: 'CIRUGIA GENERAL', horario: 'Lunes, Jueves: 01:00 PM - 04:00 PM'},
  {nombre: 'DR. ADRIAN FINOL', especialidad: 'CIRUGIA PLASTICA', horario: 'Lunes, Jueves: 01:00 PM - 04:00 PM'},
  {nombre: 'DRA. SANTOMAURO', especialidad: 'ENDOCRINOLOGO', horario: 'Martes: 01:00 PM - 04:00 PM'},
  {nombre: 'DR. GUALBERTO RIVERO', especialidad: 'HEMATOLOGO', horario: 'Viernes: 07:00 AM - 11:00 AM'},
  {nombre: 'DRA. JUDITH GRANADO', especialidad: 'OFTALMOLOGO', horario: 'Lunes, Viernes: 07:00 AM - 11:00 AM'},
  {nombre: 'DRA. BAEZ KARINA', especialidad: 'NEUMONOLOGO', horario: 'Martes: 07:00 AM - 11:00 AM'},
  {nombre: 'DR. MAESTRE JERSON', especialidad: 'MEDICINA OCUPACIONAL', horario: 'Jueves: 07:00 AM - 11:00 AM'},
  {nombre: 'DR. ARMAS PABLO', especialidad: 'O.R.L', horario: 'Martes, Jueves: 07:00 AM - 11:00 AM'},
  {nombre: 'DR. RAFAEL WONG', especialidad: 'INFECTOLOGO PEDIATRA', horario: 'Martes, Jueves: 01:00 PM - 04:00 PM'},
  {nombre: 'DRA. AURA ALBORNOZ', especialidad: 'NEFROLOGO', horario: 'Viernes: 07:00 AM - 11:00 AM'},
  {nombre: 'DRA. ELIZABETH VARGAS', especialidad: 'NEFROLOGO', horario: 'Martes: 07:00 AM - 11:00 AM'},
  {nombre: 'DRA. PATRICIA MATA', especialidad: 'CIRUJANO DE MANO', horario: 'Martes: 07:00 AM - 11:00 AM'},
  {nombre: 'DRA. ANA VILLALBA', especialidad: 'CIRUJANO DE MANO', horario: 'Martes: 01:00 PM - 04:00 PM'},
  {nombre: 'DRA. PIÑERO MAILIN', especialidad: 'CARDIOLOGO', horario: 'Martes, Jueves: 07:00 AM - 11:00 AM'},
  {nombre: 'DRA. MARIA CARRERO', especialidad: 'CARDIOLOGO', horario: 'Martes: 07:00 AM - 11:00 AM'},
  {nombre: 'DRA. TATIANA ANGEL', especialidad: 'UROLOGO', horario: 'Lunes, Viernes: 07:00 AM - 11:00 AM'},
  {nombre: 'DR. RENDON LUIS', especialidad: 'UROLOGO', horario: 'Jueves: 07:00 AM - 11:00 AM'},
  {nombre: 'DRA. ZAIDEE MARCANO', especialidad: 'MAXILOFACIAL', horario: 'Martes, Jueves: 07:00 AM - 11:00 AM'},
  {nombre: 'DRA. FLOR FLORES', especialidad: 'GASTROENTEROLOGO', horario: 'Lunes, Jueves: 07:00 AM - 11:00 AM'},
  {nombre: 'DRA. YANICETH NORIEGA', especialidad: 'GASTROENTEROLOGO', horario: 'Martes, Miércoles: 07:00 AM - 11:00 AM'},
  {nombre: 'LIC. ANDREINA MARTINEZ', especialidad: 'PSICOLOGO', horario: 'Martes, Jueves: 07:00 AM - 11:00 AM'},
  {nombre: 'O.D DIANA CHAPARRO', especialidad: 'ODONTOLOGIA', horario: 'Lunes a Viernes 07:30 AM - 12:30 PM'},
  {nombre: 'O.D CAROLINA LOPEZ', especialidad: 'ODONTOLOGIA', horario: 'Lunes a Viernes 07:30 AM - 12:30 PM'},
  {nombre: 'O.D MARGARET CARRENO', especialidad: 'ODONTOLOGIA', horario: 'Lunes a Viernes 07:30 AM - 12:30 PM'},
  {nombre: 'LIC. ELOISA GONZALEZ', especialidad: 'FISIOTERAPIA', horario: 'Lunes a Viernes 07:30 AM - 12:30 PM'}
];

document.addEventListener("DOMContentLoaded", () => {
    const select = document.getElementById("especialidadSelect");
    const btn = document.getElementById("consultarBtn");
    const grid = document.getElementById("resultadoGrid");

    if (select && btn && grid) {
        // Población del selector con especialidades únicas
        const especialidadesUnicas = [...new Set(doctores.map(d => d.especialidad))].sort();

        select.innerHTML = '<option value="">-- Seleccione Especialidad --</option>';
        especialidadesUnicas.forEach(esp => {
            const option = document.createElement("option");
            option.value = esp;
            option.textContent = esp;
            select.appendChild(option);
        });

        btn.addEventListener("click", () => {
            const espVal = select.value;
            if (!espVal) {
                alert("Por favor, seleccione una especialidad.");
                return;
            }

            grid.innerHTML = "";
            const filtrados = doctores.filter(d => d.especialidad === espVal);

            filtrados.forEach(doc => {
                const card = document.createElement("div");
                card.className = "doctor-card";
                const color = coloresEspecialidad[doc.especialidad] || "#001f3f";
                card.innerHTML = `
                    <span class="esp">${doc.especialidad}</span>
                    <h3>${doc.nombre}</h3>
                    <div class="horario" style="border-left: 4px solid ${color}"><strong>Horario:</strong> ${doc.horario}</div>
                `;
                grid.appendChild(card);
            });
        });
    }
});
