const vscode = require('vscode');

// Esta función ordena las líneas según la columna 7 y luego subordena por la columna 8
function sortLinesByColumn7And8(text, firstColumn, secondColumn, splitString) {
  var lines = text.trim().split('\n');

  // Ordenar las líneas por la columna 7 y luego subordenar por la columna 8
  lines.sort(function (a, b) {
    var aValue7 = a.split(splitString)[firstColumn]; // Columna 7
    var bValue7 = b.split(splitString)[firstColumn];
    var aValue8 = a.split(splitString)[secondColumn]; // Columna 8
    var bValue8 = b.split(splitString)[secondColumn];

    // Comparar por la columna 7
    var compareByColumn7 = aValue7.localeCompare(bValue7);

    // Si las columnas 7 son iguales, comparar por la columna 8
    return compareByColumn7 !== 0 ? compareByColumn7 : aValue8.localeCompare(bValue8);
  });

  return lines.join('\n');
}

function activate(context) {
  // Registrar el comando para ordenar por columna 7 y 8
  let disposable = vscode.commands.registerCommand('extension.sortByColumn7And8', () => {
    const editor = vscode.window.activeTextEditor;
    if (editor) {
      const document = editor.document;
      const selection = new vscode.Range(
        new vscode.Position(0, 0),
        new vscode.Position(document.lineCount - 1, document.lineAt(document.lineCount - 1).text.length)
      );
      const selectedText = document.getText(selection);

      // Obtener las configuraciones
      const firstColumn = vscode.workspace.getConfiguration('sortString').get('firstColumn');
      const secondColumn = vscode.workspace.getConfiguration('sortString').get('secondColumn');
      const splitString = vscode.workspace.getConfiguration('sortString').get('splitString');

      // Tu código de ordenación
      const sortedText = sortLinesByColumn7And8(selectedText, firstColumn, secondColumn, splitString);

      // Reemplazar el texto en el editor
      editor.edit(editBuilder => {
        editBuilder.replace(selection, sortedText);
      });
    }
  });

  context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
  activate,
  deactivate
};
