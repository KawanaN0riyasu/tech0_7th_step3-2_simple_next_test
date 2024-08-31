# tech0_7th_step3-2_simple_next_test

page.jsxのHomeコンポーネントが正しく動作することを確認します。


●ヘッディングのレンダリングテスト:

render関数でHomeコンポーネントをレンダリングし、screen.getByTextでヘッディング要素を取得して、存在を確認します。


●ボタンと表示コンポーネントのレンダリングテスト:

screen.getByRoleとscreen.getByTextでボタンと表示コンポーネントを取得し、存在を確認します。


●ボタンクリック時の動作テスト:

global.navigator.geolocationをモックして、getCurrentPositionメソッドの動作をシミュレートします。
fireEvent.clickでボタンクリックをシミュレートし、位置情報とカウントアップの更新を確認します。
