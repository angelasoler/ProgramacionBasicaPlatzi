var d = document.getElementById("grafico");
var lienzo = d.getContext("2d");

var yi, xf;

for(var l = 0; l < 30; l++)
{
    yi = 10 * l;
    xf = 300 - (10 * (l + 1));
    trazarlinea("#993399", 300, yi, xf, 300);
}

for(var l = 0; l < 30; l++)
{
    yi = 10 * l;
    xf = 10 * (l + 1);
    trazarlinea("#FF00FF", yi, 0, 300, xf);
}

for(var l = 0; l < 30; l++)
{
    yi = 10 * l;
    xf = 10 * (l + 1);
    trazarlinea("#00FFAA", 0, yi, xf, 300);
}
trazarlinea("#000000", 1, 1, 1, 299);
trazarlinea("#000000", 1, 299, 299, 299);
trazarlinea("#000000", 300, 300, 300, 300);


function trazarlinea(color, x_ini, y_ini, x_fin, y_fin)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(x_ini, y_ini);
    lienzo.lineTo(x_fin, y_fin);
    lienzo.stroke();
    lienzo.closePath();
}
