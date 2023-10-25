let Personaje = document.getElementById("Personaje");
let image = document.getElementById("Imagen");
let Nombre = document.getElementById("Name");
let none = document.getElementById("Display");
let Traje = document.getElementById("Traje");
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
let Trajes = {
    "Izuku" : "Casual/Alpha/USJ/Beta/Gamma/Elipson/Zeta",
    "Bakugo": "Casual/Dynamite/BlackSnow/DarkShadow",
    "Todoroki": "Civil/Casual/Prototipo/Combate/Shadow",
    "Mirko": "Casual/Estudiante/Combate",
    "Uravity": "Casual/Combate/ZeroGravity",
    "Toga": "Casual/Villana/Combate",
    "Shigaraki": "Casual/Villano/StarFall/Despertar",
    "Dabi": "Casual/Combate/Villano/DeathFire",
    "EraserHead": "Estudiante/Casual/Combate",
    "AllMight": "Estudiante/TrueForm/Combate/Heroe/FinalForm"
}
Traje.addEventListener("change", () => {
    image.src = `Resources/Default.jpg`;
    Nombre.innerText = `${Nombres[Personaje.value]}`;
    if (Traje.value != ""){
        image.src = `Resources/${Personaje.value}/${Traje.value}.png`;
        Nombre.innerText = `${Nombres[Personaje.value]} - Traje ${Traje.value}`;
        if(Nombres[Personaje.value] == undefined){
            image.src = `Resources/Default.jpg`;
            Nombre.innerText = "Character not Not found";
        }
    }
    else{
    }
})
Personaje.addEventListener("change", () =>{
    image.src = `Resources/Default.jpg`;
    Nombre.innerText = `${Nombres[Personaje.value]}`;
    if (Personaje.value != ""){
        let ArrayTrajes = Trajes[Personaje.value];
        ArrayTrajes = ArrayTrajes.split("/");
        let aux = "";
        for (const e of ArrayTrajes) {
            aux = aux + `<option value="${e}">${e}</option>`;
        }
        Traje.innerHTML = aux
        Traje.value = "";
    }
})
self.addEventListener("DOMContentLoaded", () =>{
    Personaje.value = "";
    Traje.value = "";
    none.src="Resources/Izuku.png";
    none.src="Resources/Bakugo.png";
    none.src="Resources/Todoroki.png";
    none.src="Resources/Mirko.png";
    none.src="Resources/Uravity.png";
    none.src="Resources/Toga.png";
    none.src="Resources/Shigaraki.png";
    none.src="Resources/Dabi.png";
    none.src="Resources/EraserHead.png";
    none.src="Resources/AllMight.png";
    none.style.display = "none";
})

image.addEventListener("click", () => {
    if (Personaje.value != "" && Traje.value != ""){
        location.href = `Personaje.html?Personaje=${Personaje.value}&Traje=${Traje.value}`;
    }
    else{
        console.log('No se puede viajar a una ubicacion si no se ha seleccinado personaje y traje');
    }
})
