self.addEventListener('install', e=>{
    const recursos = caches.open("BovedaPrincipal").then(cache=>{
        cache.add('/'),
        cache.add('index.html'),
        cache.add('Error.html'),
        cache.add('Personajes.html'),
        cache.add('Personaje.html'),
        cache.add('manifest.json'),
        cache.add('css/stylesheet.css'),
        cache.add('css/css/bootstrap.min.css'),
        cache.add('css/css/bootstrap.css'),
        cache.add('js/js/bootstrap.min.js'),
        cache.add('js/js/bootstrap.js'),
        cache.add('js/Scripts.js'),
        cache.add('js/Scripts2.js'),
        cache.add('js/Scripts3Get.js'),
        cache.add('https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css');
    });
    e.waitUntil(recursos);
    const recursos2 = caches.open("BovedaAuxiliar").then(cache=>{
        cache.add('/'),
        cache.add('Resources/404Image.png'),
        cache.add('Resources/bg.jpg'),
        cache.add('Resources/bg2.png'),
        cache.add('Resources/bg3.png'),
        cache.add('Resources/Iconos03/Icono.png'),
        cache.add('Resources/Iconos03/Icono32.png'),
        cache.add('Resources/Iconos03/Icono48.png'),
        cache.add('Resources/Iconos03/Icono64.png'),
        cache.add('Resources/Iconos03/Icono72.png'),
        cache.add('Resources/Iconos03/Icono96.png'),
        cache.add('Resources/Iconos03/Icono128.png'),
        cache.add('Resources/Iconos03/Icono256.png'),
        cache.add('Resources/Iconos03/Icono512.png'),
        cache.add('Resources/Iconos03/IconoPage.ico'),
        cache.add('Resources/Izuku.png'),
        cache.add('Resources/Bakugo.png'),
        cache.add('Resources/Todoroki.png'),
        cache.add('Resources/Mirko.png'),
        cache.add('Resources/Uravity.png'),
        cache.add('Resources/Toga.png'),
        cache.add('Resources/Shigaraki.png'),
        cache.add('Resources/Dabi.png'),
        cache.add('Resources/EraserHead.png'),
        cache.add('Resources/AllMight.png'),
        cache.add('Resources/Bakugo/BlackSnow.png'),
        cache.add('Resources/Bakugo/Casual.png'),
        cache.add('Resources/Bakugo/DarkShadow.png'),
        cache.add('Resources/Bakugo/Dynamite.png'),
        cache.add('Resources/Dabi/Casual.png'),
        cache.add('Resources/Dabi/Combate.png'),
        cache.add('Resources/Dabi/DeathFire.png'),
        cache.add('Resources/Dabi/Villano.png'),
        cache.add('Resources/EraserHead/Casual.png'),
        cache.add('Resources/EraserHead/Combate.png'),
        cache.add('Resources/EraserHead/Estudiante.png'),
        cache.add('Resources/Izuku/Alpha.png'),
        cache.add('Resources/Izuku/Beta.png'),
        cache.add('Resources/Izuku/casual.png'),
        cache.add('Resources/Izuku/Elipson.png'),
        cache.add('Resources/Izuku/Gamma.png'),
        cache.add('Resources/Izuku/USJ.png'),
        cache.add('Resources/Izuku/Zeta.png'),
        cache.add('Resources/Mirko/Casual.png'),
        cache.add('Resources/Mirko/Combate.png'),
        cache.add('Resources/Mirko/Estudiante.png'),
        cache.add('Resources/Shigaraki/Casual.png'),
        cache.add('Resources/Shigaraki/Despertar.png'),
        cache.add('Resources/Shigaraki/StarFall.png'),
        cache.add('Resources/Shigaraki/Villano.png'),
        cache.add('Resources/Todoroki/Casual.png'),
        cache.add('Resources/Todoroki/Civil.png'),
        cache.add('Resources/Todoroki/Combate.png'),
        cache.add('Resources/Todoroki/Prototipo.png'),
        cache.add('Resources/Todoroki/Shadow.png'),
        cache.add('Resources/Toga/Casual.png'),
        cache.add('Resources/Toga/Invernal.png'),
        cache.add('Resources/Toga/Villana.png'),
        cache.add('Resources/Uravity/Casual.png'),
        cache.add('Resources/Uravity/Combate.png'),
        cache.add('Resources/Uravity/ZeroGravity.png');
    });
    e.waitUntil(recursos2);
})
function print(string){
    console.log(string);
}
let BovedaAUsar = "BovedaPrincipal";
let aux = "";
self.addEventListener('fetch', e => {
    const respuesta = fetch(e.request).then(newResp => {
        aux = ((newResp.url).split('/'))[((newResp.url).split('/')).length - 1];
        aux = (aux.split('.'))[1];
        console.log(aux);
        caches.open("BovedaAuxiliar").then(cache => {
            cache.put(e.request, newResp)
        });
        return newResp.clone();
    }).catch(err =>{
        return caches.match(e.request);
    });
    e.respondWith(respuesta);
})
