function update() {
  var idoc = document.getElementById('portfolio-iframe').contentWindow.document;

  idoc.open();
  idoc.write(editor.getValue());
  idoc.close();
}

function setupEditor() {
  window.editor = ace.edit("portfolio-editor");
  editor.setTheme("ace/theme/monokai");
  editor.getSession().setMode("ace/mode/html");
  editor.setAutoScrollEditorIntoView(true);
  editor.setValue(`<!DOCTYPE html>
<html>
  <head>
    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
      integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
      crossorigin="anonymous"> <!-- Font Awesome -->
    <style>
      body { font-family: 'Source Sans Pro', sans-serif; }
      .sign-color { color: forestgreen; font-weight: bold; }
      .word-color { color: darkred; font-weight: bold; }
      a {text-decoration: none; color: black;}
    </style>
  </head>
  <body>
    <p style="font-size:2rem">I'm a <span class="sign-color">&#60;</span>
    <span class="sign-color">&#8725;</span>
    <span class="word-color">Software Developer</span>
    <span class="sign-color">&#62;</span>
    </p>
    <table style="font-size: 1.2rem; color: black border-collapse:separate; border-spacing:0 7px;">
      <tr><td><i class="far fa-hand-point-right"></i> Contact: <a href="mailto: kimnnguyen225@gmail.com">
                                                            kimnnguyen225@gmail.com</a> or 513-410-4388</td></tr>
      <tr><td><i class="far fa-hand-point-right"></i> Dedicated and dependable Software Developer having 2+ years of knowledge and experience in Waterfall and Agile methodologies. I possess expertise in Object-Oriented Analysis/Design, skilled at progressing from problem statements to well-documented designs with diverse operational experience in developing, testing, and supporting multiple languages, operating systems, and web applications.</td></tr>
      <tr><td><i class="far fa-hand-point-right"></i> I graduated from a full stack Java software development bootcamp with 2 days of Scrum Foundation from Cincy Code IT/MAX Technical Training located in Mason, OH. Hence, I'm currently PSM1 licensed. In addition, prior to Java bootcamp, I was also a Software Quality Assurance bootcamp graduate from Per Scholas, located in Cincinnati, OH.</td></tr>
      <tr><td><i class="far fa-hand-point-right"></i> In order to be a successful, well rounded Software Developer, I continue to grow my knowledge and experience daily by learning significant skills from online resources.</td></tr>
      <tr><td><i class="far fa-hand-point-right"></i> Problem resolution, attentive, strong analytical, prioritizing, work under pressure, interpersonal, and project management.</td></tr>
      <tr><td><b class="word-color">Some of my favorite resources to geek:</b></td></tr>
      <tr><td><i class="far fa-hand-point-right"></i> Youtube: <a href="#" onclick="window.open('https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA')">Traversy Media</a>, <a href="#" onclick="window.open('https://www.youtube.com/channel/UCJbPGzawDH1njbqV-D5HqKw')">The New Boston</a>, <a href="#" onclick="window.open('https://www.youtube.com/channel/UC80PWRj_ZU8Zu0HSMNVwKWw/videos')">Codevolution</a>, and more.</td></tr>
      <tr><td><i class="far fa-hand-point-right"></i> stackoverflow</td></tr>
      <tr><td><i class="far fa-hand-point-right"></i> GitHub</td></tr>
      <tr><td><i class="far fa-hand-point-right"></i> W3Schools</td></tr>
      <tr><td><i class="far fa-hand-point-right"></i> Lynda</td></tr>
      <tr><td><i class="far fa-hand-point-right"></i> CodePen</td></tr>
    </table>
  </body>
</html>`,1); // 1 = moves cursor to end

  //listen for the onchange
  editor.getSession().on('change', function() {
    update();
  });

  editor.focus();


  editor.setOptions({
    fontSize: "12pt",
    showLineNumbers:true,
    showGutter: true,
    maxLines: 37,
    minLines: 37,
    vScrollBarAlwaysVisible:true,
    enableBasicAutocompletion: false,
    enableLiveAutocompletion: false
  });

  editor.setShowPrintMargin(false);
  editor.setBehavioursEnabled(false);
}

setupEditor();
update();
