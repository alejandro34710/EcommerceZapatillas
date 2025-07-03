// ✅ Importaciones de imágenes
import imgHombreCasual1 from '../Recursos/products/Hombres/Casual/imagenc1.png';
import imgHombreCasual2 from '../Recursos/products/Hombres/Casual/imagenc2.png';
import imgHombreCasual3 from '../Recursos/products/Hombres/Casual/imagenc3.png';
import imgHombreCasual4 from '../Recursos/products/Hombres/Casual/imagenc4.png';

import imgHombreRunning1 from '../Recursos/products/Hombres/Running/imagen1.png';
import imgHombreRunning2 from '../Recursos/products/Hombres/Running/imagen2.png';
import imgHombreRunning3 from '../Recursos/products/Hombres/Running/imagen3.png';
import imgHombreRunning4 from '../Recursos/products/Hombres/Running/imagen4.png';
import imgHombreRunning5 from '../Recursos/products/Hombres/Running/imagen5.png';
import imgHombreRunning6 from '../Recursos/products/Hombres/Running/imagen6.png';
import imgHombreRunning7 from '../Recursos/products/Hombres/Running/imagen7.png';
import imgHombreRunning8 from '../Recursos/products/Hombres/Running/imagen8.png';

import imgHombreTraining1 from '../Recursos/products/Hombres/Training/imagent1.png';
import imgHombreTraining2 from '../Recursos/products/Hombres/Training/imagent2.png';
import imgHombreTraining3 from '../Recursos/products/Hombres/Training/imagent3.png';
import imgHombreTraining4 from '../Recursos/products/Hombres/Training/imagent4.png';
import imgHombreTraining5 from '../Recursos/products/Hombres/Training/imagent5.png';
import imgHombreTraining6 from '../Recursos/products/Hombres/Training/imagent6.png';

import imgMujerCasual1 from '../Recursos/products/Mujeres/Casual/imagenc1.png';
import imgMujerCasual2 from '../Recursos/products/Mujeres/Casual/imagenc2.png';

import imgMujerRunning1 from '../Recursos/products/Mujeres/Running/imagen1.png';
import imgMujerRunning2 from '../Recursos/products/Mujeres/Running/imagen2.png';
import imgMujerRunning3 from '../Recursos/products/Mujeres/Running/imagen3.png';
import imgMujerRunning4 from '../Recursos/products/Mujeres/Running/imagen4.png';
import imgMujerRunning5 from '../Recursos/products/Mujeres/Running/imagen5.png';
import imgMujerRunning6 from '../Recursos/products/Mujeres/Running/imagen6.png';
import imgMujerRunning7 from '../Recursos/products/Mujeres/Running/imagen7.png';

import imgMujerTraining1 from '../Recursos/products/Mujeres/Training/imagent1.png';
import imgMujerTraining2 from '../Recursos/products/Mujeres/Training/imagent2.png';
import imgMujerTraining3 from '../Recursos/products/Mujeres/Training/imagent3.png';
import imgMujerTraining4 from '../Recursos/products/Mujeres/Training/imagent4.png';
import imgMujerTraining5 from '../Recursos/products/Mujeres/Training/imagent5.png';

import imgNiñosCasual1 from '../Recursos/products/Niños/Casual/imagenc1.png';
import imgNiñosCasual2 from '../Recursos/products/Niños/Casual/imagenc2.png';
import imgNiñosCasual3 from '../Recursos/products/Niños/Casual/imagenc3.png';
import imgNiñosCasual4 from '../Recursos/products/Niños/Casual/imagenc4.png';

import imgNiñosRunning1 from '../Recursos/products/Niños/Running/imagen1.png';
import imgNiñosRunning2 from '../Recursos/products/Niños/Running/imagen2.png';
import imgNiñosRunning3 from '../Recursos/products/Niños/Running/imagen3.png';
import imgNiñosRunning4 from '../Recursos/products/Niños/Running/imagen4.png';
import imgNiñosRunning5 from '../Recursos/products/Niños/Running/imagen5.png';
import imgNiñosRunning6 from '../Recursos/products/Niños/Running/imagen6.png';
import imgNiñosRunning7 from '../Recursos/products/Niños/Running/imagen7.png';

export const products = [
  // 🏋️ HOMBRES - Casual
  {_id: "hcas1", name: "UrbanTrail Phantom", description: "Zapatilla de diseño ergonómico y estética contemporánea, ideal para quienes buscan comodidad durante largas jornadas sin sacrificar el estilo. Perfecta para desplazamientos urbanos y actividades cotidianas con máxima ligereza y soporte.", price: 120, image: imgHombreCasual1, category: "Hombres", subCategory: "Casual", sizes: ["39", "40", "41", "42"], date: Date.now(), bestseller: true},
  {_id: "hcas2", name: "StreetFlow Neo", description: "Combina lo mejor del diseño clásico con un toque moderno. Su estructura minimalista y elegante la convierte en una opción versátil para outfits urbanos, destacando por su comodidad y sofisticación sutil en cada paso.",price: 115,image: imgHombreCasual2,category: "Hombres",subCategory: "Casual",sizes: ["40", "41", "42", "43"],date: Date.now(),bestseller: false},
  {_id: "hcas3", name: "MetroStride X1", description: "Diseñada para acompañarte en tu rutina diaria con un balance perfecto entre funcionalidad y estilo. Su suela flexible y su diseño liviano ofrecen una experiencia dinámica tanto en el trabajo como en tiempo libre.", price: 110,  image: imgHombreCasual3,category: "Hombres",subCategory: "Casual",sizes: ["41", "42", "43"],date: Date.now(),bestseller: false},
  {_id: "hcas4", name: "CasualVibe Core", description: "Fusión perfecta entre lo deportivo y lo casual. Esta zapatilla ofrece una estética relajada con inspiración atlética, ideal para quienes valoran un look activo pero con estilo urbano contemporáneo.",price: 105,image: imgHombreCasual4,category: "Hombres",subCategory: "Casual",sizes: ["40", "41", "42"],date: Date.now(),bestseller: false}, 
   // 🏋️ HOMBRES - Running
{ _id: "hrun1", name: "FlashRun Pro", description: "Diseñadas para quienes buscan superar sus límites, estas zapatillas ultraligeras optimizan la velocidad y la eficiencia en cada zancada. Ideales para runners exigentes que priorizan el rendimiento sin sacrificar confort.", price: 130, image: imgHombreRunning1, category: "Hombres", subCategory: "Running", sizes: ["40", "41", "42", "43"], date: Date.now(), bestseller: true },
{ _id: "hrun2", name: "TurboPulse XT", description: "Incorpora una entresuela de alta respuesta con tecnología de amortiguación avanzada, brindando una pisada suave y firme en todo tipo de terreno. Su suela con tracción mejorada te da el impulso necesario para dominar cada kilómetro.", price: 125, image: imgHombreRunning2, category: "Hombres", subCategory: "Running", sizes: ["40", "41", "42"], date: Date.now(), bestseller: false },
{ _id: "hrun3", name: "AeroStep Ignite", description: "Fabricadas con materiales de alta ventilación que mantienen tus pies frescos incluso en recorridos de larga distancia. Su diseño aerodinámico y liviano favorece la estabilidad y reduce la fatiga muscular.", price: 135, image: imgHombreRunning3, category: "Hombres", subCategory: "Running", sizes: ["41", "42", "43"], date: Date.now(), bestseller: false },
{ _id: "hrun4", name: "Velocity Rush 2.0", description: "Ergonomía de vanguardia para un rendimiento atlético superior. Este modelo se adapta al contorno del pie, brindando soporte dinámico y máxima eficiencia biomecánica en entrenamientos de alta intensidad.", price: 128, image: imgHombreRunning4, category: "Hombres", subCategory: "Running", sizes: ["39", "40", "41"], date: Date.now(), bestseller: false },
{ _id: "hrun5", name: "SpeedGlide Max", description: "Construidas para ofrecer un soporte estructurado sin comprometer la agilidad. Su diseño acolchado protege el tobillo ante impactos repetitivos, ideal para corredores que exigen estabilidad prolongada en sus sesiones.", price: 132, image: imgHombreRunning5, category: "Hombres", subCategory: "Running", sizes: ["40", "41", "42"], date: Date.now(), bestseller: false },
{ _id: "hrun6", name: "StriderX Drive", description: "El aliado perfecto para tus rutinas diarias. Su composición ligera y resistente proporciona tracción óptima y una pisada suave, haciéndola ideal tanto para entrenamientos en pista como para trotes urbanos.", price: 126, image: imgHombreRunning6, category: "Hombres", subCategory: "Running", sizes: ["40", "42", "43"], date: Date.now(), bestseller: false },
{ _id: "hrun7", name: "JetSprint Evo", description: "Equipada con tecnología de pisada inteligente que distribuye la presión de manera uniforme, reduciendo el riesgo de lesiones. Su diseño vanguardista y funcional potencia tu rendimiento con cada impulso.", price: 137, image: imgHombreRunning7, category: "Hombres", subCategory: "Running", sizes: ["41", "42", "43"], date: Date.now(), bestseller: false },
{ _id: "hrun8", name: "ThunderDash Rise", description: "Una combinación poderosa de velocidad, estilo moderno y confort duradero. Pensadas para atletas urbanos que buscan destacar tanto en la pista como fuera de ella con un calzado versátil y de alto desempeño.", price: 129, image: imgHombreRunning8, category: "Hombres", subCategory: "Running", sizes: ["40", "41", "42", "43"], date: Date.now(), bestseller: false },
  // 🏋️ HOMBRES - TRAINING
  { _id: "htra1", name: "CoreLift Trainer", description: "Desarrolladas para soportar rutinas intensas de gimnasio, estas zapatillas brindan una estructura firme y estable que mejora la postura durante levantamientos y ejercicios de fuerza. Su diseño reforzado protege el pie sin sacrificar movilidad.", price: 125, image: imgHombreTraining1, category: "Hombres", subCategory: "Training", sizes: ["40", "41", "42"], date: Date.now(), bestseller: false},
  { _id: "htra2", name: "FlexForge Elite", description: "Combinación perfecta de flexibilidad y soporte. Ideales para entrenamiento funcional y movimientos de agilidad, con una suela adaptable que se ajusta al terreno y proporciona una base sólida en cada repetición.", price: 120, image: imgHombreTraining2, category: "Hombres", subCategory: "Training", sizes: ["39", "40", "42"], date: Date.now(), bestseller: false },
  { _id: "htra3", name: "PowerBase Prime", description: "Pensadas para atletas que practican entrenamientos funcionales de alta intensidad. Su estructura robusta y sujeción reforzada permiten una mayor estabilidad en ejercicios como sentadillas, burpees o saltos pliométricos.", price: 130, image: imgHombreTraining3, category: "Hombres", subCategory: "Training", sizes: ["40", "41", "43"], date: Date.now(), bestseller: true },
  { _id: "htra4", name: "IronStride Max", description: "Zapatillas técnicas diseñadas para soportar ejercicios de fuerza exigentes. Su base ancha y su amortiguación densa ofrecen el control necesario en levantamientos pesados, brindando confianza en cada movimiento.", price: 135, image: imgHombreTraining4, category: "Hombres", subCategory: "Training", sizes: ["41", "42", "43"], date: Date.now(), bestseller: false },
  { _id: "htra5", name: "StaminaGrip Fusion", description: "Ideal para sesiones prolongadas en el gimnasio o circuitos de entrenamiento. Su amortiguación avanzada reduce el impacto en articulaciones, mientras que su suela antideslizante maximiza la tracción en superficies interiores.", price: 128, image: imgHombreTraining5, category: "Hombres", subCategory: "Training", sizes: ["40", "41", "42"], date: Date.now(), bestseller: false },
  { _id: "htra6", name: "TitanTrack Fit", description: "Diseñadas con un patrón de agarre multidireccional que proporciona una tracción excepcional. Su diseño favorece la estabilidad durante desplazamientos rápidos y movimientos explosivos típicos del entrenamiento funcional.", price: 122, image: imgHombreTraining6, category: "Hombres", subCategory: "Training", sizes: ["40", "41", "42", "43"], date: Date.now(), bestseller: false },

  // 👟 MUJERES - CASUAL
  { _id: "mcas1", name: "SkyBloom Lite", description: "Una zapatilla ligera y elegante pensada para acompañarte con comodidad en tus recorridos diarios. Su diseño moderno y femenino combina suavidad al caminar con un toque contemporáneo que resalta cualquier outfit casual.", price: 115, image: imgMujerCasual1, category: "Mujeres", subCategory: "Casual", sizes: ["36", "37", "38", "39"], date: Date.now(), bestseller: false },
  { _id: "mcas2", name: "VivaStep Grace", description: "Fusión perfecta entre estilo urbano y funcionalidad. Su silueta versátil se adapta a múltiples ocasiones, brindando confort durante todo el día y destacando por su diseño sobrio, femenino y con detalles sutiles que marcan la diferencia.", price: 118, image: imgMujerCasual2, category: "Mujeres", subCategory: "Casual", sizes: ["37", "38", "39"], date: Date.now(), bestseller: false },

  // 🏃‍♀️ MUJERES - RUNNING
  { _id: "mrun1", name: "AuraSprint Rise", description: "Diseñadas para corredoras que valoran la ligereza sin sacrificar estilo. Su estructura aerodinámica proporciona una pisada fluida, mientras su diseño moderno aporta elegancia incluso en los entrenamientos más exigentes.", price: 130, image: imgMujerRunning1, category: "Mujeres", subCategory: "Running", sizes: ["37", "38", "39"], date: Date.now(), bestseller: false },
  { _id: "mrun2", name: "ZenRun Feather", description: "Tecnología de amortiguación reactiva que absorbe el impacto y devuelve energía en cada paso. Ideal para quienes buscan fluidez, ligereza y protección en carreras de media y larga distancia.", price: 128, image: imgMujerRunning2, category: "Mujeres", subCategory: "Running", sizes: ["36", "37", "38"], date: Date.now(), bestseller: false },
  { _id: "mrun3", name: "NovaDash Spirit", description: "Diseño flexible que acompaña el movimiento natural del pie. Perfectas para sesiones de running o entrenamiento activo, brindan libertad total y una sujeción suave para un rendimiento sin límites.", price: 135, image: imgMujerRunning3, category: "Mujeres", subCategory: "Running", sizes: ["37", "38", "39"], date: Date.now(), bestseller: false },
  { _id: "mrun4", name: "GlamRush Volt", description: "Combinan potencia y elegancia en un solo diseño. Su suela de alta tracción y su ajuste ergonómico mejoran el desempeño en terrenos diversos, sin renunciar al estilo deportivo femenino.", price: 132, image: imgMujerRunning4, category: "Mujeres", subCategory: "Running", sizes: ["37", "38", "39"], date: Date.now(), bestseller: false },
  { _id: "mrun5", name: "SparkGlow Motion", description: "Zapatillas ultracómodas pensadas para acompañarte todo el día. Desde una carrera matutina hasta una tarde activa, ofrecen suavidad, frescura y soporte constante con un toque vibrante de energía.", price: 129, image: imgMujerRunning5, category: "Mujeres", subCategory: "Running", sizes: ["36", "37", "38"], date: Date.now(), bestseller: false },
  { _id: "mrun6", name: "FlyLift Dream", description: "Una invitación a superar tus metas. Su diseño ligero y transpirable potencia cada zancada, brindando soporte sin restricciones. Inspiradas en la libertad de volar más lejos con cada entrenamiento.", price: 127, image: imgMujerRunning6, category: "Mujeres", subCategory: "Running", sizes: ["37", "38", "39"], date: Date.now(), bestseller: true },
  { _id: "mrun7", name: "PulseShift Luna", description: "Estabilidad y dinamismo en perfecta armonía. Esta zapatilla equilibra firmeza en la pisada con una respuesta rápida, ideal para corredoras que exigen control y agilidad en cada movimiento.", price: 134, image: imgMujerRunning7, category: "Mujeres", subCategory: "Running", sizes: ["37", "38", "39", "40"], date: Date.now(), bestseller: false },

  // 💪 MUJERES - TRAINING
  { _id: "mtra1", name: "IronBloom Motion", description: "Diseñadas para adaptarse a cualquier tipo de entrenamiento, desde rutinas funcionales hasta sesiones de fuerza. Su estructura reforzada proporciona estabilidad, mientras su diseño femenino aporta carácter y estilo deportivo.", price: 122, image: imgMujerTraining1, category: "Mujeres", subCategory: "Training", sizes: ["36", "37", "38"], date: Date.now(), bestseller:false },
  { _id: "mtra2", name: "CoreFlex Aria", description: "Ultraligeras y cómodas, perfectas para movimientos dinámicos y de alta intensidad. Ideales para sesiones de gimnasio, su diseño flexible favorece la movilidad sin comprometer el soporte.", price: 120, image: imgMujerTraining2, category: "Mujeres", subCategory: "Training", sizes: ["37", "38", "39"], date: Date.now(), bestseller: false },
  { _id: "mtra3", name: "BalanceX Core", description: "El equilibrio perfecto entre estabilidad y libertad de movimiento. Estas zapatillas ofrecen una base sólida para rutinas exigentes, con amortiguación estratégica que protege las articulaciones sin perder sensibilidad al suelo.", price: 125, image: imgMujerTraining3, category: "Mujeres", subCategory: "Training", sizes: ["36", "37", "38"], date: Date.now(), bestseller: false },
  {_id: "mtra4", name: "PowerEase Zen", description: "Con una estética limpia y deportiva, estas zapatillas están pensadas para mujeres activas que buscan rendimiento y estilo. Su diseño ergonómico favorece el ajuste al pie, brindando soporte durante ejercicios variados.", price: 130, image: imgMujerTraining4, category: "Mujeres", subCategory: "Training", sizes: ["36", "37", "38"], date: Date.now(), bestseller: false },
  { _id: "mtra5", name: "ForceLuxe Shift", description: "Una zapatilla resistente, diseñada para resistir entrenamientos exigentes sin sacrificar la comodidad. Su interior acolchado y suela antideslizante la convierten en una opción ideal para actividades de alto impacto o rutinas prolongadas.", price: 124, image: imgMujerTraining5, category: "Mujeres", subCategory: "Training", sizes: ["36", "37", "38", "39"], date: Date.now(), bestseller: false },

  // 👶 NIÑOS - CASUAL
  { _id: "ncas1", name: "KidZoom Galaxy", description: "Zapatillas llenas de energía y color, pensadas para acompañar cada aventura infantil. Combinan estilo lúdico con materiales cómodos y seguros, ideales para juegos, paseos y días activos.", price: 90, image: imgNiñosCasual1, category: "Niños", subCategory: "Casual", sizes: ["30", "31", "32"], date: Date.now(), bestseller: false},
  { _id: "ncas2", name: "PlayDash Turbo", description: "Diseño vibrante y construcción resistente que soporta el ritmo imparable de los más pequeños. Con acabados duraderos y suela antideslizante, son perfectas para uso diario en cualquier entorno.", price: 85, image: imgNiñosCasual2, category: "Niños", subCategory: "Casual", sizes: ["30", "31", "32"], date: Date.now(), bestseller: false },
  { _id: "ncas3", name: "MiniRunner Joy", description: "Versátiles, ligeras y muy cómodas, estas zapatillas son perfectas para la escuela o actividades extracurriculares. Su diseño ergonómico facilita el movimiento natural del pie durante todo el día.", price: 88, image: imgNiñosCasual3, category: "Niños", subCategory: "Casual", sizes: ["30", "31", "32"], date: Date.now(), bestseller: false },
  { _id: "ncas4", name: "BounceBlast Z", description: "Combinan confort acolchado y un diseño divertido que encanta a los niños. Su estructura flexible y segura ofrece el soporte ideal para etapas de crecimiento y juego constante.", price: 89, image: imgNiñosCasual4, category: "Niños", subCategory: "Casual", sizes: ["30", "31", "32"], date: Date.now(), bestseller: false },

  // 🏃‍♂️ NIÑOS - RUNNING
  { _id: "nrun1", name: "SprintBolt Jr", description: "Diseñadas para acompañar a los más pequeños en sus momentos de mayor energía. Resistentes, ligeras y cómodas, son ideales para juegos al aire libre, carreras y aventuras diarias sin pausas.", price: 95, image: imgNiñosRunning1, category: "Niños", subCategory: "Running", sizes: ["30", "31", "32"], date: Date.now(), bestseller: false },
  { _id: "nrun2", name: "RunBuddy Dash", description: "Con un ajuste anatómico y tejido transpirable, estas zapatillas permiten mantener los pies frescos y protegidos. Su suela flexible garantiza estabilidad en cada paso y soporte en cualquier superficie.", price: 92, image: imgNiñosRunning2, category: "Niños", subCategory: "Running", sizes: ["30", "31", "32"], date: Date.now(), bestseller: false },
  { _id: "nrun3", name: "FlashStep Mini", description: "Zapatillas infantiles con diseño seguro y estructura flexible que se adapta al movimiento natural del pie. Perfectas para correr, saltar y jugar con libertad total en cada terreno.", price: 93, image: imgNiñosRunning3, category: "Niños", subCategory: "Running", sizes: ["30", "31", "32"], date: Date.now(), bestseller: false },
  { _id: "nrun4", name: "RocketPlay Max", description: "Ideales para pequeños atletas en formación. Su diseño robusto con suela antideslizante brinda tracción y protección, mientras su amortiguación suave permite correr y saltar con total confianza.", price: 91, image: imgNiñosRunning4, category: "Niños", subCategory: "Running", sizes: ["30", "31", "32"], date: Date.now(), bestseller: false },
  { _id: "nrun5", name: "ColorZoom Fly", description: "Llenas de color y energía, estas zapatillas deportivas combinan estilo vibrante con rendimiento. Son perfectas para niños activos que disfrutan moverse con seguridad y diversión a cada paso.", price: 94, image: imgNiñosRunning5, category: "Niños", subCategory: "Running", sizes: ["30", "31", "32"], date: Date.now(), bestseller: false },
  { _id: "nrun6", name: "LilZoom Blaze", description: "Con un diseño moderno y funcional, estas zapatillas ofrecen confort durante todo el día. Pensadas para brindar soporte en carreras cortas o juegos prolongados, sin perder estilo ni ligereza.", price: 96, image: imgNiñosRunning6, category: "Niños", subCategory: "Running", sizes: ["30", "31", "32"], date: Date.now(), bestseller: false },
  { _id: "nrun7", name: "QuickFeet Hero", description: "Ultraligeras y fáciles de calzar, estas zapatillas permiten a los niños moverse con total libertad. Ideales para uso escolar, actividades deportivas o tardes de juego en movimiento constante.", price: 97, image: imgNiñosRunning7, category: "Niños", subCategory: "Running", sizes: ["30", "31", "32"], date: Date.now(), bestseller: true },
];
