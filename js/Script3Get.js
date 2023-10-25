function obtenerParametro(parametro) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(parametro);
}
const Personaje = obtenerParametro('Personaje');
const Traje = obtenerParametro('Traje');
let Name = document.getElementById("Name");
let image = document.getElementById("Imagen");
let Desc = document.getElementById("Desc");
let phrase = document.getElementById('Phrase');
let Nombres = {
    "Izuku" : "Izuku Midoriya",
    "Bakugo": "Katsuki Bakugo (Kacchan)",
    "Todoroki": "Shoto Todoroki",
    "Mirko": "Rumi Usagiyama (Rabbit Hero: Mirko)",
    "Uravity": "Ochaco Uraraka (Uravity)",
    "Toga": "Himiko Toga",
    "Shigaraki": "Tenko Shimura (Tomura Shigaraki)",
    "Dabi": "Toya Todoroki",
    "EraserHead": "Shota Aizawa",
    "AllMight": "Toshinori Yagi"
};
let Descripcion = {
    "Izuku" : `A pesar de que Izuku nació sin don, logró captar la atención del legendario héroe All Might y desde entonces se ha convertido en su alumno cercano, así como en un estudiante de la Clase 1-A en la Academia U.A.. All Might le transfirió su don a Izuku, convirtiéndolo en el noveno y actual usuario del One For All. `,
    "Bakugo": `Katsuki Bakugo, también conocido como Kacchan por sus amigos, y por su nombre de héroe "Dios de la gran explosión asesina Dynamight", es un estudiante de la Clase 1-A de la Academia U.A., que está entrenando para convertirse en un Héroe. Es el deuteragonista de la serie y amigo de la infancia convertido en rival de Izuku Midoriya. `,
    "Todoroki": `Es un estudiante de la Clase 1-A de la Academia U.A, donde ingresó a través de recomendaciones oficiales y está entrenando para convertirse en un Héroe. Es el hijo más joven de Endeavor, el ex-héroe número 2 y actual número 1; y Rei Todoroki.`,
    "Mirko": `Rumi Usagiyama, también conocida como Rabbit Hero: Mirko, es la heroína profesional No.5. Rumi es dura y dice lo que piensa, incluso si provoca una confrontación, y respeta a quienes hacen lo mismo. Mirko tiene un alto sentido de la justicia, ya que está muy decidida a detener los planes de la Liga de Villanos. `,
    "Uravity": `Ochaco Uraraka, también conocida como Uravity, es una estudiante de la Clase 1-A de la Academia U.A. que está entrenando para convertirse en un Heroína profesional. Es una de los protagonistas de la serie. `,
    "Toga": `Himiko Toga Es una antagonista y miembro de la Liga de Villanos, afiliada al Escuadrón de Acción de Vanguardia. Himiko sirvió como una de las principales antagonistas del Viaje escolar y también aparece como antagonista durante el Examen de licencia provisional de héroe y Pasantías. `,
    "Shigaraki": `Tomura Shigaraki, cuyo nombre real es Tenko Shimura, es un villano y líder interino de la Liga de Villanos y el principal Hizo su primera aparición importante como uno de los principales antagonistas del arco de la U.S.J. Al igual que el resto de la liga; su objetivo es matar a All Might, el "Símbolo de la Paz", destruyendo la sociedad que representa, y crear una nueva y nueva forma de justicia a su propia imagen. `,
    "Dabi": `Toya Todoroki, mayormente conocido como Dabi, es el hijo mayor de Endeavor y Rei Todoroki y uno de los antagonistas secundarios más importantes de la serie.
    Actualmente es un villano afiliado a la Liga de Villanos y uno de los nueve lugartenientes del Frente de liberación paranormal, una organización formada a partir de la unión de la Liga de Villanos y el Ejército de liberación de súper poderes. `,
    "EraserHead": `Shota Aizawa, también conocido como Eraser Head, es un héroe profesional y el maestro encargado de la Clase 1-A en la Academia U.A.
    Shota es un hombre muy severo y mayormente reservado que tiene altas expectativas de sus alumnos. La lógica lo mueve principalmente y no cree en la necesidad de mantener una apariencia limpia o filtrar sus palabras o ideas para los demás. A menudo se muestra frío, apático e impaciente, exhortando muy poca energía en la mayoría de las situaciones, prefiriendo tomar siestas en su saco de dormir.  `,
    "AllMight": `Toshinori Yagi, mejor conocido como All Might, que ostentaba el título de ser el Símbolo de la paz, es el antiguo héroe número uno y el octavo usuario del Don One For All. También es maestro en la Academia U.A. para héroes. Después de luchar contra All For One, utilizó hasta la última de las brasas sobrantes de One For All por completo, por lo que All Might se retiró de la lucha contra el crimen, y por lo tanto, terminó su era. `
};
let Frase = {
    "Izuku" : `"Ya no soy el Deku que tratabas como alguien inútil, Kacchan, ahora soy... ¡¡El Deku que da vibra a nunca rendirse!!"`,
    "Bakugo": `"Si te quedas mirándolos hacia abajo, nunca podrás ver tus errores."`,
    "Todoroki": `"Endeavor es mi padre. Estoy seguro que sabes que el ha estado como el héroe número dos desde siempre. Si tienes algo del número uno, entonces... tengo más razón para derrotarte."`,
    "Mirko": `"Si vas a morir, haz el trabajo primero... ¡¡Mirko!! ¡Aún no he terminado! ¡¡Porque un Héroe nunca, nunca... se rinde!!"`,
    "Uravity": `"Definitivamente me convertiré en un héroe y haré dinero... para que mis padres puedan tener una vida sin preocupaciones"`,
    "Toga": `""¡Mi nombre es Toga! ¡Himiko Toga! ¡La vida es dura y me gustaría un mundo en el que es más fácil vivir! ¡Quiero convertirme en el gran Stain! ¡Quiero matar a Stain! ¡Vamos, déjame unirme, Tomura!""`,
    "Shigaraki": `"Ustedes héroes...fingen proteger la sociedad. En el pasado, por muchas generaciones, ustedes crearon este despreciable imperio... ignorando a quien no podían salvar, y haciendo todo para esconder sus errores. Como resultado, se pudrió por dentro y los gusanos surgieron. Poco a poco, uno a la vez. Basuras humanas que se acomodaron con la protección, y un grupo de hipócritas.... que cuidan de ellos. Desde el inicio.... todo lo que ustedes construyeron negó nuestra existencia, por eso negamos el regreso, por eso destruimos, por eso buscamos el poder. No les parece simple? Todo está bien si no lo entienden. Es por eso que.... somos Héroes y Villanos!!"`,
    "Dabi": `"Pensaste que mirando hacia el futuro podrías ser justo. ¡Parece que no lo sabes, asi que te lo mostraré! El pasado no desaparece... ¡Tú te lo buscaste! ¡Caigamos juntos, Enji Todoroki! ¡Bailemos juntos en el infierno, papá!"`,
    "EraserHead": `Este personaje no tiene una frase de motivacion especifica...`,
    "AllMight": `"Todo está bien, ¿Por qué? ¡Porque yo estoy aquí!"`
};
Name.innerText = Nombres[Personaje];
image.src = `Resources/${Personaje}/${Traje}.png`;
Desc.innerText = Descripcion[Personaje];
phrase.innerText = Frase[Personaje];
