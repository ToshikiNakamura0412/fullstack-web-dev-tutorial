# 01 HTML & CSS 基礎 - Simple Recipes

## Preview
![Preview](https://github.com/ToshikiNakamura0412/fullstack-web-dev-tutorial/wiki/images/preview-01.png)

## 内容

「レシピサイト」を題材に、HTML と CSS の基礎を学ぶ。

見本を生成AI に作成してもらい、そのコードを参考にしながら、実際にコーディングしていく。
見本は [reference](./reference) フォルダに保存してある。

## 学んだことメモ
### HTML
- 各種要素
  - head 要素：メタ情報を記述する
    - meta 要素：文字エンコーディングやビューポートを指定する
    - title 要素：ページのタイトルを指定する
    - link 要素：外部リソース（CSS など）をリンクする
  - body 要素：コンテンツを記述する
    - header 要素：ヘッダーを作成する
    - nav 要素：ナビゲーションを作成する
    - main 要素：メインコンテンツを作成する
      - section 要素：セクションを作成する
      - article 要素：記事を作成する
  - div 要素：汎用コンテナを作成する
    - CSS 適用のために使用など
  - ul 要素：順不同リスト（unordered list）を作成する
  - ol 要素：順序付きリスト（ordered list）を作成する
  - li 要素：リストアイテムを作成する
  - footer 要素：フッターを作成する
- セマンティック要素と非セマンティック要素の違い
  - セマンティック要素は、その要素が持つ意味や役割を明確に示す要素（例：header、nav、main、section、article、footer など）
  - 非セマンティック要素は、その要素が持つ意味や役割を示さない要素（例：div、span など）
- 要素の属性
  - class 属性：要素にクラス名を指定する
  - id 属性：要素に一意の識別子を指定する
  - href 属性：リンク先の URL を指定する（a 要素や link 要素で使用）
  - src 属性：画像やスクリプトのソース URL を指定する（img 要素や script 要素で使用）

### CSS
- セレクタ
  - 要素セレクタ：要素名で指定する（例：body、h1、p など）
  - クラスセレクタ：クラス名で指定する（例：.container、.hero など）
  - ID セレクタ：ID 名で指定する（例：#header、#footer など）
- プロパティと値
  - color：文字色を指定する
  - background-color：背景色を指定する
  - font-size：文字サイズを指定する
  - margin：外側の余白を指定する
  - padding：内側の余白を指定する
  - display：要素の表示方法を指定する（例：block、inline、flex など）
  - flexbox：要素を柔軟に配置するためのレイアウトモデル
    - justify-content：主軸方向の配置を指定する
      - space-between：要素間のスペースを均等に配置する
      - center：要素を中央に配置する
    - align-items：交差軸方向の配置を指定する
  - gap：flexbox や grid レイアウトで要素間の隙間を指定する
  - max-width：要素の最大幅を指定する
  - border-radius：要素の角を丸くする
  - grid-template-columns：グリッドレイアウトの列の幅を指定する
    - repeat() 関数を使用して、同じ幅の列を繰り返し作成する
      - auto-fit：利用可能なスペースに応じて列数を自動調整する
      - minmax() 関数を使用して、列の最小幅と最大幅を指定する
- レスポンシブデザイン
  - ビューポートの設定：meta 要素でビューポートを設定する
  - メディアクエリ：画面サイズに応じてスタイルを変更する
  - @media ルールを使用して、特定の画面幅に対して異なるスタイルを適用する

## Tips
- [sanitize.css](https://csstools.github.io/sanitize.css) を使用して、ブラウザ間のデフォルトスタイルの差異を吸収できる
  - 他にも normalize.css や reset.css などがある
- [Figma](https://www.figma.com/ja-jp/) や生成AI を活用して、デザインの見本を作成するとコーディングがスムーズになる
