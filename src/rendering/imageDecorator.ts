import * as vscode from 'vscode';

export class ImageDecorator {
    constructor(private context: vscode.ExtensionContext) {}

    showImage() {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            return;
        }

        const imageDecoration = vscode.window.createTextEditorDecorationType({
            before: {
                contentIconPath: vscode.Uri.joinPath(this.context.extensionUri, 'resources', 'images', 'boom_1.png'),
                width: '300px',
                height: '200px',
            },
        });
        
        const line = editor.selection.active.line;
        const range = new vscode.Range(line, 0, line, 0);
        editor.setDecorations(imageDecoration, [{range}]);

        setTimeout(() => {
            imageDecoration.dispose();
        }, 5000);
    }
}
