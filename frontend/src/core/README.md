# README
[参考URL](https://zenn.dev/kichion/articles/fddf0eb35ffa2a)

## 大きな概念

- Enterprise Business Rules
domains 表示・操作に関わるコアドメインのロジック、データを表現する

- Application Business Rules
usecases ドメインロジックのアプリケーション固有ユースケースを表現する

- Interface Adapters	
adapters バリデーション/リトライ制御/model変換など業務ロジックが介在しない処理を表現する

- Frameworks & Drivers	infrastructures	フレームワークやAPIの薄いラッパーを実装する