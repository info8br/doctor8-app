const path = require('path');
const fs = require('fs');

const getAllFiles = function(dirPath, arrayOfFiles) {

  files = [];

  files.push('meta.html');
  files.push('head_vercel.html');

  files.push('header.html');
  //files.push('ga.html');
  /*   files.push('banner.html');
    files.push('consulteaqui.html');
    files.push('section.html');
    files.push('section_conhecadoctor.html');
    files.push('section_sejanossoparceiro.html');
    files.push('section_queroconhecer.html'); */
  files.push('footer.html');

  arrayOfFiles = arrayOfFiles || []

  files.forEach(function(file) {
    let dir = dirPath + "/" + file;

    if (fs.statSync(dir).isDirectory()) {

      arrayOfFiles = getAllFiles(dir, arrayOfFiles)

    } else {

      arrayOfFiles.push(path.join("", dirPath, "/", file))
    }
  })

  return arrayOfFiles
}

const result = getAllFiles(process.env['customdir'] + "/import/html")

let text = "";

const teste = result.forEach(element => {

  const data = fs.readFileSync(element, 'utf8');

  text += data;

  text += "\n\n";

});

fs.writeFile('./export/index.html', text, function(err, data) {

  if (err) {
    return console.log(err);
  }

}); 