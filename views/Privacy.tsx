import type { Locale } from "@/lib/locales";
import { translator } from "@/lib/messages";
import { supportEmail } from "@/lib/support";
import { Footer, Header } from "@/components/SiteChrome";

const policy: Record<Locale, { sections: [string, string][]; contact: string }> = {
  en: {
    sections: [
      ["On-device data", "WebAppify does not require an account or include an analytics SDK. Saved website addresses, profile preferences, icons, and saved scripts are stored on your device. WebKit manages browsing data such as cookies and website storage on your device. You can remove saved profiles in the app."],
      ["Websites and optional tools", "When you open a website, fetch its icon, or choose to download a script or extension, the relevant server receives your request and standard connection information such as your IP address. Websites and any scripts or extensions you enable handle data under their own policies and permissions. Review their source and permissions before enabling them."],
      ["Backups and purchases", "If you choose to back up your library, WebAppify encrypts the backup on your device. A backup can include saved settings and supported browsing data, such as cookies and website storage. You choose where to save exported files. iCloud backups are stored in your own iCloud Drive with the key in iCloud Keychain. The developer has no access to these backups. You can delete backup files in Files. Apple processes WebAppify Pro purchases through StoreKit."],
      ["Website and support", "This website is hosted by GitHub Pages. GitHub may process standard connection information to deliver the site. If you email support, your email address and any details you send are used to handle your request. Do not send passwords or backup files."],
    ],
    contact: "For privacy questions, contact",
  },
  "zh-TW": {
    sections: [
      ["裝置上的資料", "WebAppify 無需建立帳號，也沒有整合分析 SDK。已儲存的網站網址、設定檔偏好、圖示及腳本會留在裝置上。Cookie 和網站儲存空間等瀏覽資料由 WebKit 在裝置上管理。你可以在 App 中移除設定檔。"],
      ["網站與選用工具", "當你開啟網站、抓取網站圖示，或選擇下載腳本或延伸功能時，相關伺服器會收到請求及 IP 位址等連線資訊。網站和你主動啟用的腳本或延伸功能，會依各自的政策及權限處理資料。請先檢查來源及權限再啟用。"],
      ["備份與購買", "如果你選擇備份資料庫，WebAppify 會在裝置上加密備份。備份可能包含網站設定和支援的瀏覽資料，例如 Cookie 和網站儲存空間。匯出檔案由你選擇儲存位置。iCloud 備份存放於你自己的 iCloud Drive，金鑰存於 iCloud 鑰匙圈。開發者無法存取這些備份。你可以在「檔案」內刪除備份。WebAppify Pro 的購買由 Apple 透過 StoreKit 處理。"],
      ["官網與客服", "官網由 GitHub Pages 代管，GitHub 可能為了提供網站而處理一般連線資訊。如果你來信尋求協助，我們會以你的 Email 和來信內容處理請求。請勿寄送密碼或備份檔。"],
    ],
    contact: "如有隱私權問題，請聯絡",
  },
  ja: {
    sections: [
      ["端末内のデータ", "WebAppify はアカウント登録を必要とせず、分析 SDK を組み込んでいません。保存した URL、プロファイル設定、アイコン、スクリプトは端末に保存されます。Cookie やウェブサイトのストレージは WebKit が端末上で管理します。プロファイルはアプリ内で削除できます。"],
      ["ウェブサイトと追加機能", "ページの表示、アイコンの取得、スクリプトや拡張機能のダウンロードを行うと、対象のサーバーにリクエストや IP アドレスなどの接続情報が送られます。ウェブサイトや有効にしたスクリプト、拡張機能にはそれぞれの方針と権限が適用されます。有効化する前に提供元と権限を確認してください。"],
      ["バックアップと購入", "ライブラリをバックアップする場合、端末上で暗号化します。バックアップには設定や、Cookie、ウェブサイトのストレージなどの対応する閲覧データが含まれることがあります。書き出し先はご自身で選べます。iCloud バックアップはご自身の iCloud Drive に保存され、鍵は iCloud キーチェーンで管理されます。開発者はバックアップにアクセスできません。バックアップは「ファイル」アプリから削除できます。WebAppify Pro の購入は Apple が StoreKit を通じて処理します。"],
      ["公式サイトとサポート", "このサイトは GitHub Pages で提供されており、GitHub が配信に必要な接続情報を処理する場合があります。サポートにメールで連絡した場合、メールアドレスと送信内容はお問い合わせへの対応に使用します。パスワードやバックアップファイルは送信しないでください。"],
    ],
    contact: "プライバシーに関するお問い合わせ先",
  },
  ko: {
    sections: [
      ["기기에 저장되는 데이터", "WebAppify는 계정을 요구하지 않으며 분석 SDK를 포함하지 않습니다. 저장된 웹사이트 주소, 프로필 설정, 아이콘, 스크립트는 기기에 저장됩니다. 쿠키와 웹사이트 저장소는 WebKit이 기기에서 관리합니다. 앱에서 저장된 프로필을 삭제할 수 있습니다."],
      ["웹사이트 및 선택 기능", "웹사이트를 열거나 아이콘을 가져오거나 스크립트 또는 확장 기능을 내려받으면 해당 서버에 요청과 IP 주소 등 연결 정보가 전송됩니다. 웹사이트와 직접 활성화한 스크립트 또는 확장 기능은 각자의 정책과 권한에 따라 데이터를 처리합니다. 활성화하기 전에 출처와 권한을 확인하세요."],
      ["백업 및 구매", "라이브러리를 백업하면 기기에서 백업을 암호화합니다. 백업에는 설정과 쿠키 및 웹사이트 저장소 등 지원되는 브라우징 데이터가 포함될 수 있습니다. 내보낼 위치는 직접 선택할 수 있습니다. iCloud 백업은 사용자의 iCloud Drive에 저장되고 암호화 키는 iCloud 키체인에 저장됩니다. 개발자는 백업에 접근할 수 없습니다. 파일 앱에서 백업을 삭제할 수 있습니다. WebAppify Pro 구매는 Apple이 StoreKit을 통해 처리합니다."],
      ["공식 웹사이트 및 지원", "이 웹사이트는 GitHub Pages에서 호스팅되며 GitHub는 사이트 제공에 필요한 연결 정보를 처리할 수 있습니다. 지원 이메일을 보내면 답변을 위해 이메일 주소와 문의 내용을 사용합니다. 암호나 백업 파일은 보내지 마세요."],
    ],
    contact: "개인정보 관련 문의",
  },
};

export default function PrivacyPage({ locale }: { locale: Locale }) {
  const t = translator(locale);
  const { sections, contact } = policy[locale];

  return <><Header locale={locale} path="/privacy/" /><main id="main" className="shell subpage">
    <h1>{t("Privacy policy")}</h1>
    {sections.map(([title, body]) => <section key={title} className="mt-8 max-w-prose">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="mt-2">{body}</p>
    </section>)}
    <p className="mt-8">{contact} <a className="underline" href={`mailto:${supportEmail}`}>{supportEmail}</a></p>
  </main><Footer locale={locale} /></>;
}
