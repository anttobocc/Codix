document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("quiz-overlay");
  const title = document.getElementById("quiz-title");
  const questionsDiv = document.getElementById("quiz-questions");
  const cerrar = document.getElementById("cerrar-quiz");

  // 🧩 Cuestionarios ampliados (10 preguntas por lenguaje)
  const quizzes = {
    HTML: [
      { pregunta: "¿Qué significa HTML?", opciones: ["HyperText Markup Language", "High Tech Modern Language", "Home Tool Modern Language"], correcta: 0 },
      { pregunta: "¿Qué etiqueta se usa para insertar una imagen?", opciones: ["<img>", "<src>", "<image>"], correcta: 0 },
      { pregunta: "¿Qué etiqueta define un párrafo?", opciones: ["<div>", "<p>", "<h1>"], correcta: 1 },
      { pregunta: "¿Qué atributo se usa para enlaces?", opciones: ["src", "href", "link"], correcta: 1 },
      { pregunta: "¿Cuál es la etiqueta raíz de todo documento HTML?", opciones: ["<body>", "<html>", "<head>"], correcta: 1 },
      { pregunta: "¿Qué etiqueta se usa para títulos principales?", opciones: ["<heading>", "<title>", "<h1>"], correcta: 2 },
      { pregunta: "¿Qué etiqueta agrupa elementos de bloque?", opciones: ["<span>", "<div>", "<section>"], correcta: 1 },
      { pregunta: "¿Qué atributo se usa para dar clases a un elemento?", opciones: ["class", "id", "style"], correcta: 0 },
      { pregunta: "¿Qué etiqueta contiene los metadatos del documento?", opciones: ["<meta>", "<head>", "<info>"], correcta: 1 },
      { pregunta: "¿Cuál de estos NO es un elemento HTML válido?", opciones: ["<article>", "<header>", "<footered>"], correcta: 2 }
    ],
    CSS: [
      { pregunta: "¿Qué propiedad cambia el color del fondo?", opciones: ["background-color", "bg-color", "color-bg"], correcta: 0 },
      { pregunta: "¿Qué propiedad cambia el color del texto?", opciones: ["font-color", "color", "text-style"], correcta: 1 },
      { pregunta: "¿Cómo se selecciona un id en CSS?", opciones: [".id", "#id", "id="], correcta: 1 },
      { pregunta: "¿Qué unidad representa porcentaje?", opciones: ["px", "%", "em"], correcta: 1 },
      { pregunta: "¿Qué propiedad cambia el tamaño de la letra?", opciones: ["font-size", "text-size", "letter-size"], correcta: 0 },
      { pregunta: "¿Cómo se comenta una línea en CSS?", opciones: ["// comentario", "/* comentario */", "# comentario"], correcta: 1 },
      { pregunta: "¿Qué propiedad alinea texto al centro?", opciones: ["text-align", "align-text", "center-text"], correcta: 0 },
      { pregunta: "¿Qué propiedad cambia el tipo de letra?", opciones: ["font-family", "text-font", "font-style"], correcta: 0 },
      { pregunta: "¿Qué valor de display coloca los elementos uno al lado del otro?", opciones: ["block", "inline", "flex"], correcta: 2 },
      { pregunta: "¿Qué propiedad controla los bordes?", opciones: ["border", "outline", "frame"], correcta: 0 }
    ],
    JavaScript: [
      { pregunta: "¿Qué palabra clave crea una variable?", opciones: ["var", "make", "create"], correcta: 0 },
      { pregunta: "¿Qué instrucción imprime en consola?", opciones: ["print()", "console.log()", "echo()"], correcta: 1 },
      { pregunta: "¿Cuál de estos es un tipo de dato primitivo?", opciones: ["Array", "String", "Function"], correcta: 1 },
      { pregunta: "¿Qué símbolo se usa para concatenar strings?", opciones: ["+", "&", "%"], correcta: 0 },
      { pregunta: "¿Qué tipo de estructura es un 'for'?", opciones: ["Condicional", "Iterativa", "Declarativa"], correcta: 1 },
      { pregunta: "¿Cómo se declara una función?", opciones: ["func myFunction()", "def myFunction()", "function myFunction()"], correcta: 2 },
      { pregunta: "¿Qué método muestra una alerta?", opciones: ["window.alert()", "console.show()", "alertBox()"], correcta: 0 },
      { pregunta: "¿Cómo se escribe un comentario de una línea?", opciones: ["/* comentario */", "// comentario", "# comentario"], correcta: 1 },
      { pregunta: "¿Qué operador compara valor e igualdad estricta?", opciones: ["==", "=", "==="], correcta: 2 },
      { pregunta: "¿Qué estructura se usa para manejar errores?", opciones: ["catch/try", "try/catch", "error/if"], correcta: 1 }
    ],
    Python: [
      { pregunta: "¿Cómo se comenta una línea en Python?", opciones: ["//", "#", "<!-- -->"], correcta: 1 },
      { pregunta: "¿Cuál es el método para imprimir?", opciones: ["say()", "print()", "echo()"], correcta: 1 },
      { pregunta: "¿Qué tipo de estructura es una lista?", opciones: ["Mutable", "Inmutable", "Constante"], correcta: 0 },
      { pregunta: "¿Cómo se definen funciones?", opciones: ["def nombre():", "func nombre():", "function nombre():"], correcta: 0 },
      { pregunta: "¿Qué palabra clave define una condición?", opciones: ["if", "when", "cond"], correcta: 0 },
      { pregunta: "¿Qué símbolo se usa para importar módulos?", opciones: ["use", "require", "import"], correcta: 2 },
      { pregunta: "¿Qué palabra crea un bucle?", opciones: ["for", "repeat", "iterate"], correcta: 0 },
      { pregunta: "¿Qué estructura almacena pares clave-valor?", opciones: ["list", "tuple", "dict"], correcta: 2 },
      { pregunta: "¿Qué imprime 'len([1,2,3])'?", opciones: ["2", "3", "4"], correcta: 1 },
      { pregunta: "¿Qué palabra clave termina un bucle antes de tiempo?", opciones: ["exit", "stop", "break"], correcta: 2 }
    ],
    "C++": [
      { pregunta: "¿Qué comando imprime en pantalla?", opciones: ["cout <<", "printf()", "System.out.println()"], correcta: 0 },
      { pregunta: "¿Qué extensión tiene un archivo de C++?", opciones: [".cc", ".cplus", ".cpp"], correcta: 2 },
      { pregunta: "¿Cómo se declara una variable entera?", opciones: ["int x;", "var x;", "integer x;"], correcta: 0 },
      { pregunta: "¿Qué palabra incluye librerías?", opciones: ["#import", "#include", "using"], correcta: 1 },
      { pregunta: "¿Qué símbolo finaliza una instrucción?", opciones: [":", ".", ";"], correcta: 2 },
      { pregunta: "¿Cómo se define la función principal?", opciones: ["main()", "int main()", "program main()"], correcta: 1 },
      { pregunta: "¿Qué operador se usa para comentarios de una línea?", opciones: ["//", "/* */", "#"], correcta: 0 },
      { pregunta: "¿Cuál de estos es un tipo de dato flotante?", opciones: ["float", "int", "char"], correcta: 0 },
      { pregunta: "¿Qué palabra clave se usa para definir una constante?", opciones: ["fixed", "const", "define"], correcta: 1 },
      { pregunta: "¿Qué encabezado permite usar cout y cin?", opciones: ["<iostream>", "<stdio.h>", "<stream>"], correcta: 0 }
    ],
  };

  // 🟢 Mostrar el cuestionario correspondiente
  document.querySelectorAll(".tech div").forEach(div => {
    div.addEventListener("click", () => {
      const lang = div.dataset.lang;
      const quiz = quizzes[lang];
      title.textContent = `Cuestionario de ${lang}`;
      questionsDiv.innerHTML = "";

      quiz.forEach((q, index) => {
        const block = document.createElement("div");
        block.classList.add("quiz-question");
        block.innerHTML = `<p><strong>${index + 1}. ${q.pregunta}</strong></p>`;

        q.opciones.forEach((op, i) => {
          const btn = document.createElement("button");
          btn.classList.add("quiz-option");
          btn.textContent = op;
          btn.addEventListener("click", () => {
            btn.classList.add(i === q.correcta ? "correcta" : "incorrecta");
          });
          block.appendChild(btn);
        });

        questionsDiv.appendChild(block);
      });

      overlay.classList.remove("hidden");
    });
  });

  // 🔴 Cerrar el pop-up
  cerrar.addEventListener("click", () => overlay.classList.add("hidden"));
  window.addEventListener("click", e => {
    if (e.target === overlay) overlay.classList.add("hidden");
  });
});
