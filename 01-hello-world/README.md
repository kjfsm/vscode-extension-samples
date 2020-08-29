# 01-hello-world README

雛形を自動生成するとこのようなディレクトリが作られる。

## 各ファイルの説明
### package.json
このプロジェクトについての情報が書かれている。

#### engines
動作するvscodeのバージョンを記述できる。

`"^x.xx.x"` とある場合、x.xx.x以降のvscodeで動作確認しているという意味になる。

#### contributes
拡張機能としての機能を定義する。

例えば、 `"commands"` にはコマンドパレットから指定できるコマンドを定義する。

### tsconfig.json
typescript のビルド方法について記述する。

`"outDir"` にはビルドしたものの出力先を書く。

`"rootDir"` にはビルドしたいものをおいた場所を書く。

### .vscodeignore
拡張機能をパッケージ化するときに含める必要がないものを記述する。

パッケージの縮小につながる。

### src/extension.ts
実際のコマンドを用意する部分。

` activate(context: vscode.ExtensionContext)` 内に書いていく。

`vscode.commands.registerCommand()` の第1引数と、 `package.json` の `commands` の名前が一致するようにする必要がある。