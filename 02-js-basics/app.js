// クラス名はアッパーキャメルケース
class TodoApp {
  // コンストラクタメソッド
  constructor() {
    // プロパティの初期化
    // プロパティ名はローワーキャメルケース
    // ";"を行末に付ける
    this.todoInput = document.getElementById('new-todo-input');
    this.addButton = document.getElementById('add-todo-button');
    this.todoList = document.getElementById('todo-list');

    // 必要な要素が存在するか確認
    if (!this.todoInput || !this.addButton || !this.todoList) {
      throw new Error('必要な要素が見つかりません。HTMLを確認してください。');
    }

    // イベントリスナーの設定
    // - addEventListener: イベントリスナーを追加するメソッド
    //   - 第1引数にはイベント名を文字列で指定
    //   - 第2引数には、通常の関数ではなくarrow関数を使用することを推奨
    //     - arrow関数を使うことでthisがクラスインスタンスを指すようになる
    // 日本語入力中かどうかを判定するフラグ(compositionイベント用)
    // - compositionイベント: 日本語入力などの複雑な文字入力を扱うためのイベント
    //   - compositionstart: 日本語入力開始
    //   - compositionend: 日本語入力終了
    this.isComposing = false;

    // 日本語入力中のEnterキー押下を無視するためのイベントリスナー
    this.todoInput.addEventListener('compositionstart', () => {
      this.isComposing = true;
    });

    // 日本語入力終了時のイベントリスナー
    this.todoInput.addEventListener('compositionend', () => {
      this.isComposing = false;
    });

    // キーダウンイベントリスナー
    // - keypressは非推奨のため使用しない
    this.todoInput.addEventListener('keydown', (e) => {
      // "===": 厳密等価演算子(型と値の両方を比較)
      if (e.key === "Enter" && !this.isComposing) {
        this.addTodo();
      }
    });

    // 追加ボタンのクリックイベントリスナー
    this.addButton.addEventListener('click', () => this.addTodo());
  }

  // メソッド名はローワーキャメルケース
  addTodo() {
    // 変数名もローワーキャメルケース
    const value = this.todoInput.value.trim(); // 先頭と末尾の空白を削除
    if (value === '') {
      alert('ToDoの内容を入力してください！！');
      return;
    }

    // createElementで要素を作成
    // - constを使い、再代入されないことを明示
    //   - プロパティの変更は可能
    //   - (letは再代入可能な変数に使用)
    //     - varは使用しない(スコープの問題があるため)
    const newTodoItem = document.createElement('li');

    // チェックボックスを作成
    const checkbox = document.createElement('input');
    // type属性を設定
    // - 他にはradio, textなどもある
    checkbox.type = 'checkbox';
    // 一意なIDを生成
    // - Date.now()で現在のタイムスタンプを取得
    // - これにより、同じIDが生成される可能性を低くする
    const textId = `todo-item-${Date.now()}`;
    // アクセシビリティ向上のため、checkboxとテキストを関連付ける
    // - checkboxにaria-labelledby属性を設定し、対応するテキストのIDを指定する
    // - これにより、スクリーンリーダーがチェックボックスとテキストの関連性を理解できるようになる
    // (setAttribute: 要素に属性を設定するメソッド)
    //   - 第1引数: 属性名
    //   - 第2引数: 属性値
    checkbox.setAttribute('aria-labelledby', textId);

    // テキストノードを作成
    // - span要素を使用してテキストを表示
    // - ノード： DOMツリー内の基本的な構成要素（要素ノード、テキストノードなど）
    const textNode = document.createElement('span');
    textNode.id = textId; // 一意なIDを設定(理由：上記参照)
    textNode.textContent = value; // テキストノードに入力値を設定

    const deleteButton = document.createElement('button'); // 削除ボタンを作成
    deleteButton.textContent = 'Delete';
    // classListを使ってクラスを追加
    // - 複数のクラスを追加する場合にも便利
    deleteButton.classList.add('delete-button');
    // ボタンのデフォルト動作を防ぐ
    // - type属性を設定することで、フォームの送信を防ぐ
    // - これにより、ボタンがクリックされたときにフォームが送信されるのを防ぐことができる
    deleteButton.type = 'button';
    // アクセシビリティ向上のため、aria-label属性を設定
    // - これにより、スクリーンリーダーがボタンの目的を明確に伝えることができる
    deleteButton.setAttribute('aria-label', 'Delete todo item');

    // appendChildで要素を追加
    newTodoItem.appendChild(checkbox);
    newTodoItem.appendChild(textNode);
    newTodoItem.appendChild(deleteButton);

    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        textNode.classList.add('completed');
        // containsメソッドで子要素の存在を確認
        if (newTodoItem.contains(deleteButton))
          // removeChildで要素を削除
          newTodoItem.removeChild(deleteButton);
      } else {
        textNode.classList.remove('completed');
        if (!newTodoItem.contains(deleteButton))
          newTodoItem.appendChild(deleteButton);
      }
    });

    deleteButton.addEventListener('click', () => {
      if (this.todoList.contains(newTodoItem))
        this.todoList.removeChild(newTodoItem);
    });

    this.todoList.appendChild(newTodoItem);
    this.todoInput.value = ''; // 入力フィールドをクリア
    this.todoInput.focus(); // 入力フィールドにフォーカスを戻す
  }
}

// TodoAppクラスのインスタンスを作成
// - newキーワードを使ってクラスのインスタンスを生成
// - これにより、TodoAppクラスのコンストラクタが呼び出され、アプリケーションが初期化される
// ※ class定義の後にインスタンス化すること
const app = new TodoApp();
