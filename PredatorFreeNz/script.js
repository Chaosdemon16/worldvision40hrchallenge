const traps = [{name:'Victor professional rat trap & tunnel', img:'Traps/VictorProfessionalrattrap_tunnel_40166f03-fd55-4d71-8fdd-47b61571c918_470x.webp', URL:'https://shop.predatorfreenz.org/products/victor-professional-rat-trap-tunnel'}, {name:'T-Rex Rat Trap in Tunnel', img:'Traps/Trexrattraptunnel.webp', URL:'https://shop.predatorfreenz.org/products/t-rex-rat-trap-in-tunnel'},{name:'Victor Professional rat trap & weka proof tunnel', img:'Traps/Wekaproofrattunnel.webp', URL:'https://shop.predatorfreenz.org/products/weka-proof-rat-trap-tunnel'},{name:'DOC 200 trap for stoats, rats and hedgehogs', img:'Traps/doc200.webp', URL:'https://shop.predatorfreenz.org/products/doc-200-trap-stoats-rats-hedgehogs'},{name:'Trapinator possum trap',img:'Traps/Trapinator.webp',URL:'https://shop.predatorfreenz.org/products/trapinator-possum-trap'},{name:'Flipping Timmy for possums',img:'Traps/Flippingtim.webp',URL:'https://shop.predatorfreenz.org/products/flipping-timmy'},{name:'Victor Professional rat traps',img:'Traps/Victor3pack.webp',URL:'https://shop.predatorfreenz.org/products/3-pack-victor-profesisonal-traps'},{name:'Smart Trap Kit',img:'Traps/Smarttrap.webp',URL:'https://shop.predatorfreenz.org/products/goodnature-smart-trap-kit-incl-shipping'}];
let loops = 0;
let trapshtml = '';
function renderTraps() {
  traps.forEach(() => {
    console.log(loops)
    console.log(traps[loops].name)
    const html = `<a href='${traps[loops].URL}'><div class="trap"><img class="trapPhoto" src="${traps[loops].img}"><h3>${traps[loops].name}</h3></div></a>`;
    trapshtml = trapshtml + html;
    document.querySelector('#trapsGrid').innerHTML = trapshtml;
    loops++

  })
}
renderTraps()