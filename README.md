# vscode-extension-samples

## 雛形の作成
https://code.visualstudio.com/api/get-started/your-first-extension

VSCodeの拡張機能は Yeomanというツールで雛形を生成することができる。

```
$ npm i -g yo generator-code
```

```
$ yo code
     _-----_     ╭─────────────────────────╮
    |       |    │   Welcome to the Visual  │
    |--(o)--|    │   Studio Code Extension  │
   `---------´   │        generator!        │
    ( _´U`_ )    ╰─────────────────────────╯
    /___A___\   /
     |  ~  |     
   __'.___.'__   
 ´   `  |° ´ Y ` 

? What type of extension do you want to create? New Extension (TypeScript)
? What's the name of your extension? 01-hello-world
? What's the identifier of your extension? 01-hello-world
? What's the description of your extension? 
? Initialize a git repository? No
? Which package manager to use? npm
```

`yo code` と実行し、質問に答えるとディレクトリが作成される。
