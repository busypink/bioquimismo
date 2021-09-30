const arrayReagentes = [
    "Indol",
    "Citrato de Sinmon's",
    "H2S(TSI)",
    "Urease",
    "Mobilidade",
    "Lisina descarboxilase",
    "Ornitina descarboxilase",
    "Fenilalanina desaminase",
    "Malonato",
    "Gás de Glicose",
    "Lactose"
];
const arrayBacterias = [
    "Escherichia coli",
    "Shigella sonnei",
    "Shigella sp.",
    "edwardsiella tarda",
    "Salmonella sp.",
    "Salmonella typhi",
    "'Grupo Arizona'",
    "Citrobacter freundii",
    "Citrobacter diversus",
    "Citrobacter amalonaticus",
    "Klebsiella pneumoniae",
    "Klebsiella oxytoca",
    "Enterobacter clocae",
    "Enterobacter aerogenes",
    "Enterobacter agglomerans",
    "Enterobacter sazakii",
    "Enterobacter Gergoviae",
    "Hafnia alvei",
    "Serratia marcescens",
    "Serratia Grupo S. Liquefaciens",
    "Serratia rubidaea",
    "Proteus vulgaris",
    "Proteus mirabilis",
    "Morganella morganii",
    "Providência rettgeri",
    "Providência alcalifaciens",
    "Providência stuartii",
    "Yersinia enterocolítico",
    "Yersinia pseudo-tuberculosis",
    "Yersinia pestis"
];
const arrayRespostas = [];
let i = 0;
let check = false;

document.getElementById("displayReagente").innerText = arrayReagentes[i];

document.getElementById("btnPos").addEventListener("click", () => {
    arrayRespostas.push('1');
    if(arrayRespostas.length === arrayReagentes.length){check = true;}  
    main();  
});
document.getElementById("btnNeg").addEventListener("click", () => {
    arrayRespostas.push('0'); 
    if(arrayRespostas.length === arrayReagentes.length){check = true;}
    main();
});
function main(){
    i+=1;
    document.getElementById("displayReagente").innerText = arrayReagentes[i];
    if (check===true){disableButtons();discoverBacteria()}
}    
function disableButtons(){
    document.getElementById("displayReagente").innerText = "Lactose";
    document.getElementById("btnPos").disabled = true;
    document.getElementById("btnNeg").disabled = true;
    document.getElementById("wrp-reag").style.color = "#c3bcb5";
    document.getElementById("btnPos").style.borderColor = "#c3bcb5";
    document.getElementById("btnNeg").style.borderColor = "#c3bcb5";
}
function discoverBacteria(){
    if (arrayRespostas[0]==="1" && arrayRespostas[1]==="0" && arrayRespostas[2] === "0" && arrayRespostas[3] ==="0" && arrayRespostas[7]==="0" && arrayRespostas[8]=="0" && arrayRespostas[9] ==="1" && arrayRespostas[10] ==="1"){
        document.getElementById("displayBacteria").innerText = arrayBacterias[0];
    }
    else if (arrayRespostas[1]==="0" &&  arrayRespostas[1]==="0" && arrayRespostas[2] === "0" && arrayRespostas[3] ==="0" && arrayRespostas[5]=="0" && arrayRespostas[6] ==="0" && arrayRespostas[7] ==="0" && arrayRespostas[8]==="0" && arrayRespostas[9]==="0" && arrayRespostas[10]==="0"){
        document.getElementById("displayBacteria").innerText = arrayBacterias[29]; //pestis
    }
    else if (arrayRespostas[0]==="0" && arrayRespostas[1]==="0" && arrayRespostas[2] === "0" && arrayRespostas[3] ==="0" && arrayRespostas[4]==="0" && arrayRespostas[5]=="0" && arrayRespostas[6] ==="1" && arrayRespostas[7] ==="0" && arrayRespostas[8]==="0" && arrayRespostas[9]==="0"){
        document.getElementById("displayBacteria").innerText = arrayBacterias[1];
        document.getElementById("obs").innerText = "88% das cepas de Shigella sonnei são fermentadoras tardias de lactose";
    }
    else if (arrayRespostas[1]==="0" && arrayRespostas[2] === "0" && arrayRespostas[3] ==="0" && arrayRespostas[4]==="0" && arrayRespostas[5]=="0" && arrayRespostas[6] ==="0" && arrayRespostas[7] ==="0" && arrayRespostas[8]==="0" && arrayRespostas[10]==="0"){
        document.getElementById("displayBacteria").innerText = arrayBacterias[2];
        document.getElementById("obs").innerText = "Alguns sorotipos de Shigella flexneri produzem gás de glicose";
    }
    else if (arrayRespostas[0]==="1" && arrayRespostas[1]==="0" && arrayRespostas[2] === "1" && arrayRespostas[3] ==="0" && arrayRespostas[4]==="1" && arrayRespostas[5]=="1" && arrayRespostas[6] ==="1" && arrayRespostas[7] ==="0" && arrayRespostas[8]==="0" && arrayRespostas[9]==="1" && arrayRespostas[10]==="0"){
        document.getElementById("displayBacteria").innerText = arrayBacterias[3];
    }
    else if (arrayRespostas[0]==="0" &&  arrayRespostas[2] === "1" && arrayRespostas[3] ==="0" && arrayRespostas[4]==="1" && arrayRespostas[5]=="1" && arrayRespostas[6] ==="1" && arrayRespostas[7] ==="0" && arrayRespostas[8]==="0" && arrayRespostas[9]==="1" && arrayRespostas[10]==="0"){
        document.getElementById("displayBacteria").innerText = arrayBacterias[4];
    }
    else if (arrayRespostas[0]==="0" && arrayRespostas[1]==="0" && arrayRespostas[3] ==="0" && arrayRespostas[4]==="1" && arrayRespostas[5]=="1" && arrayRespostas[6] ==="0" && arrayRespostas[7] ==="0" && arrayRespostas[8]==="0" && arrayRespostas[9]==="0" && arrayRespostas[10]==="0"){
        document.getElementById("displayBacteria").innerText = arrayBacterias[5];
    }
    else if (arrayRespostas[0]==="0" && arrayRespostas[1]==="1" && arrayRespostas[2] === "1" && arrayRespostas[3] ==="0" && arrayRespostas[4]==="1" && arrayRespostas[5]=="1" && arrayRespostas[6] ==="1" && arrayRespostas[7] ==="0" && arrayRespostas[8]==="1" && arrayRespostas[9]==="1"){
        document.getElementById("displayBacteria").innerText = arrayBacterias[6];
    }
    else if (arrayRespostas[0]==="0" && arrayRespostas[1]==="1" && arrayRespostas[2] === "1" && arrayRespostas[4]==="1" && arrayRespostas[5]=="0" && arrayRespostas[7] ==="0" && arrayRespostas[9]==="1"){
        document.getElementById("displayBacteria").innerText = arrayBacterias[7];
    }
    else if (arrayRespostas[0]==="1" && arrayRespostas[1]==="1" && arrayRespostas[2] === "0" && arrayRespostas[4]==="1" && arrayRespostas[5]=="0" && arrayRespostas[6] ==="1" && arrayRespostas[7] ==="0" && arrayRespostas[8] ==="1" && arrayRespostas[9]==="1"){
        document.getElementById("displayBacteria").innerText = arrayBacterias[8];
    }
    else if (arrayRespostas[0]==="1" && arrayRespostas[1]==="1" && arrayRespostas[2] === "0" && arrayRespostas[4]==="1" && arrayRespostas[5]=="0" && arrayRespostas[6] ==="1" && arrayRespostas[7] ==="0" && arrayRespostas[8]==="0" && arrayRespostas[9]==="1"){
        document.getElementById("displayBacteria").innerText = arrayBacterias[9];
    }
    else if (arrayRespostas[0]==="0" && arrayRespostas[1]==="1" && arrayRespostas[2] === "0" && arrayRespostas[3] ==="1" && arrayRespostas[4]==="0" && arrayRespostas[5]=="1" && arrayRespostas[6] ==="0" && arrayRespostas[7] ==="0" && arrayRespostas[8]==="1" && arrayRespostas[9]==="1" && arrayRespostas[10]==="1"){
        document.getElementById("displayBacteria").innerText = arrayBacterias[10];
    }
    else if (arrayRespostas[0]==="1" && arrayRespostas[1]==="1" && arrayRespostas[2] === "0" && arrayRespostas[3] ==="1" && arrayRespostas[4]==="0" && arrayRespostas[5]=="1" && arrayRespostas[6] ==="0" && arrayRespostas[7] ==="0" && arrayRespostas[8]==="1" && arrayRespostas[9]==="1" && arrayRespostas[10]==="1"){
        document.getElementById("displayBacteria").innerText = arrayBacterias[11];
    }
    else if (arrayRespostas[0]==="0" && arrayRespostas[1]==="1" && arrayRespostas[2] === "0" && arrayRespostas[4]==="1" && arrayRespostas[5]=="0" && arrayRespostas[6] ==="1" && arrayRespostas[7] ==="0" && arrayRespostas[9]==="1"){
        document.getElementById("displayBacteria").innerText = arrayBacterias[12];
    }
    else if (arrayRespostas[0]==="0" && arrayRespostas[1]==="1" && arrayRespostas[2] === "0" && arrayRespostas[3] ==="0" && arrayRespostas[4]==="1" && arrayRespostas[5]=="1" && arrayRespostas[6] ==="1" && arrayRespostas[7] ==="0" && arrayRespostas[9]==="1" && arrayRespostas[10]==="1"){
        document.getElementById("displayBacteria").innerText = arrayBacterias[13];
    }
    else if (arrayRespostas[1]==="1" && arrayRespostas[2] === "0" && arrayRespostas[3] ==="0" && arrayRespostas[4]==="1" && arrayRespostas[6] ==="1" && arrayRespostas[9]==="1" && arrayRespostas[10]==="1"){
        document.getElementById("displayBacteria").innerText = arrayBacterias[15];
    }
    else if (arrayRespostas[0]==="0" && arrayRespostas[1]==="1" && arrayRespostas[2] === "0" && arrayRespostas[3] ==="1" && arrayRespostas[4]==="1" && arrayRespostas[6] ==="1" && arrayRespostas[7] ==="0" && arrayRespostas[8]==="1" && arrayRespostas[9]==="1"){
        document.getElementById("displayBacteria").innerText = arrayBacterias[16];
    }
    else if (arrayRespostas[0]==="0" && arrayRespostas[2] === "0" && arrayRespostas[3] ==="0" && arrayRespostas[4]==="1" && arrayRespostas[5]=="1" && arrayRespostas[6] ==="1" && arrayRespostas[7] ==="0" && arrayRespostas[9]==="1"){
        document.getElementById("displayBacteria").innerText = arrayBacterias[17];
    }
    else if (arrayRespostas[0]==="0" && arrayRespostas[1]==="1" && arrayRespostas[2] === "0" && arrayRespostas[4]==="1" && arrayRespostas[5]=="1" && arrayRespostas[6] ==="1" && arrayRespostas[7] ==="0" && arrayRespostas[8]==="0" && arrayRespostas[10]==="0"){
        document.getElementById("displayBacteria").innerText = arrayBacterias[18];
        document.getElementById("obs").innerText = "as diferenças entre Serratia marcenscens e Grupo S. Liquefaciens não são computáveis";
    }
    else if (arrayRespostas[0]==="0" && arrayRespostas[1]==="1" && arrayRespostas[2] === "0" && arrayRespostas[4]==="1" && arrayRespostas[5]=="1" && arrayRespostas[6] ==="1" && arrayRespostas[7] ==="0" && arrayRespostas[8]==="0"){
        document.getElementById("displayBacteria").innerText = arrayBacterias[19];
        document.getElementById("obs").innerText = "as diferenças entre Serratia marcenscens e Grupo S. Liquefaciens não são computáveis";
    }
    else if (arrayRespostas[0]==="0" && arrayRespostas[2] === "0" && arrayRespostas[6] ==="0" && arrayRespostas[7] ==="0" && arrayRespostas[10]==="1"){
        document.getElementById("displayBacteria").innerText = arrayBacterias[20];
    }
    else if (arrayRespostas[0]==="1" && arrayRespostas[1]==="0" && arrayRespostas[2] === "1" && arrayRespostas[3] ==="1" && arrayRespostas[4]==="1" && arrayRespostas[5]=="0" && arrayRespostas[6] ==="0" && arrayRespostas[7] ==="1" && arrayRespostas[8]==="0"  && arrayRespostas[10]==="0"){
        document.getElementById("displayBacteria").innerText = arrayBacterias[21];
    }
    else if (arrayRespostas[0]==="0" && arrayRespostas[2] === "1" && arrayRespostas[4]==="1" && arrayRespostas[5]=="0" && arrayRespostas[6] ==="1" && arrayRespostas[7] ==="1" && arrayRespostas[8]==="0" && arrayRespostas[9]==="1" && arrayRespostas[10]==="0"){
        document.getElementById("displayBacteria").innerText = arrayBacterias[22];
    }
    else if (arrayRespostas[0]==="1" && arrayRespostas[1]==="0" && arrayRespostas[2] === "0" && arrayRespostas[3] ==="1" && arrayRespostas[5]=="0" && arrayRespostas[6] ==="1" && arrayRespostas[7] ==="1" && arrayRespostas[8]==="0" &&  arrayRespostas[10]==="0"){
        document.getElementById("displayBacteria").innerText = arrayBacterias[23];
    }
    else if (arrayRespostas[0]==="1" && arrayRespostas[1]==="1" && arrayRespostas[2] === "0" && arrayRespostas[3] ==="1" && arrayRespostas[4]==="1" && arrayRespostas[5]=="0" && arrayRespostas[6] ==="0" && arrayRespostas[7] ==="1" && arrayRespostas[8]==="0" && arrayRespostas[10]==="0"){
        document.getElementById("displayBacteria").innerText = arrayBacterias[24];
    }
    else if (arrayRespostas[0]==="1" && arrayRespostas[1]==="1" && arrayRespostas[2] === "0" && arrayRespostas[3] ==="0" && arrayRespostas[4]==="1" && arrayRespostas[5]=="0" && arrayRespostas[6] ==="0" && arrayRespostas[7] ==="1" && arrayRespostas[8]==="0"&& arrayRespostas[10]==="0"){
        document.getElementById("displayBacteria").innerText = arrayBacterias[25];
    }
    else if (arrayRespostas[0]==="1" && arrayRespostas[1]==="1" && arrayRespostas[2] === "0" && arrayRespostas[5]=="0" && arrayRespostas[6] ==="0" && arrayRespostas[7] ==="1" && arrayRespostas[8]==="0" && arrayRespostas[9]==="0" && arrayRespostas[10]==="0"){
        document.getElementById("displayBacteria").innerText = arrayBacterias[26];
    }
    else if (arrayRespostas[1]==="0" && arrayRespostas[2] === "0" && arrayRespostas[3] ==="1" && arrayRespostas[5]=="0" && arrayRespostas[6] ==="1" && arrayRespostas[7] ==="0" && arrayRespostas[8]==="0" && arrayRespostas[9]==="0" && arrayRespostas[10]==="0"){
        document.getElementById("displayBacteria").innerText = arrayBacterias[27];
    }
    else if (arrayRespostas[1]==="0" &&  arrayRespostas[1]==="0" && arrayRespostas[2] === "0" && arrayRespostas[3] ==="1" && arrayRespostas[5]=="0" && arrayRespostas[6] ==="0" && arrayRespostas[7] ==="0" && arrayRespostas[8]==="0" && arrayRespostas[9]==="0" && arrayRespostas[10]==="0"){
        document.getElementById("displayBacteria").innerText = arrayBacterias[28];
    }
    else if (arrayRespostas[2]==="0" && arrayRespostas[5]==="0" && arrayRespostas[6]==="0"){
        document.getElementById("displayBacteria").innerText = arrayBacterias[14]; //agglomerans
    }
    else{
        document.getElementById("displayBacteria").innerText = "Bactéria não identificada"
    }
}
