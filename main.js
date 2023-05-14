function sim() {
    alert("Você aceitou namorar comigo! :)");
    location.href="https://www.youtube.com/watch?v=izGwDsrQ1eQ&ab_channel=georgemichaelVEVO";
}

function desvia(t) {
    let btn = t;
    btn.style.position = 'absolute';
    btn.style.bottom = geraPosicao(10, 90);
    btn.style.left = geraPosicao(10, 90);
    console.log("opa, desviei...");
}

function geraPosicao(min, max) {
    return (Math.random() * (max - min) + min) + "%";
}