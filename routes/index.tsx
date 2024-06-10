import Header from "../components/Header.tsx";
export default function Home() {
  return (
    <>
      <Header />
      <div class="flex flex-col min-h-[100dvh]">
        <section class="relative w-full h-[80vh] flex items-center justify-center bg-gray-900">
          <img
            src="/main-bg.webp"
            alt="Hero Background"
            class="absolute inset-0 w-full h-full object-cover opacity-60"
          />
          <div class="relative z-10 max-w-4xl px-4 md:px-6 text-center space-y-6">
            <h1 class="text-4xl md:text-6xl font-bold text-gray-50 tracking-tight">
              tako's
            </h1>
            <p class="text-lg md:text-xl text-gray-300">
              Your Chat, Your Server, Your Rules
            </p>
            <p
              class="hidden md:inline-block text-lg md:text-xl text-gray-300"
              >
            tako'sは、日本製の分散型チャットサービスです。軽量でシンプルな設計により、プライバシーとセキュリティを重視したチャット体験を提供します。
            </p>
            <div class="flex justify-center gap-4">
              <a
                href="#"
                class="inline-flex h-10 items-center justify-center rounded-md bg-[#00b894] px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-[#00a185] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#00b894] disabled:pointer-events-none disabled:opacity-50"
              >
                Get Started
              </a>
              <a
                href="#"
                class="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium text-gray-900 shadow-sm transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
              >
                Learn More
              </a>
            </div>
          </div>
        </section>
        <section class="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 dark:text-gray-50">
          <div class="container grid items-center justify-center gap-4 px-4 md:px-6 text-center m-auto">
            <div class="space-y-3">
              <h2 class="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                分散型チャットでつながる世界
              </h2>
              <p class="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                tako'sは、日本発の分散型チャットサービスです。シンプルで軽量な設計により、ユーザーは自分のサーバーを使ってプライベートかつセキュアにチャットを楽しめます。オープンソースのプロジェクトであり、コミュニティによる自由なカスタマイズや拡張が可能です。<br />
                ※本ページの内容はv1.0で実装予定の機能です。
              </p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div class="flex flex-col items-center justify-center space-y-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="w-10 h-10 text-[#00b894]"
                >
                  <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z">
                  </path>
                  <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z">
                  </path>
                  <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                  <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                </svg>
                <h3 class="text-lg font-bold">高速なUI</h3>
                <p class="text-gray-500 dark:text-gray-400 text-center">
                  islandsアーキテクチャを採用したFreshを使用しているため、高速なUIを実現しています。
                </p>
              </div>
              <div class="flex flex-col items-center justify-center space-y-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="w-10 h-10 text-[#00b894]"
                >
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z">
                  </path>
                  <circle cx="12" cy="12" r="4"></circle>
                </svg>
                <h3 class="text-lg font-bold">非中央集権</h3>
                <p class="text-gray-500 dark:text-gray-400 text-center">
                  あなたのデータはあなたのサーバーに保存されるため、プライバシーとセキュリティが保護されます。
                  また、災害時のリスク分散にも役立ちます。
                </p>
              </div>
              <div class="flex flex-col items-center justify-center space-y-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="w-10 h-10 text-[#00b894]"
                >
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z">
                  </path>
                </svg>
                <h3 class="text-lg font-bold">トークデータの暗号化</h3>
                <p class="text-gray-500 dark:text-gray-400 text-center">
                  トークデータは暗号化されて保存されるため、安全なチャットを楽しむことができます。
                </p>
              </div>
            </div>
          </div>
        </section>
        <section class="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 text-gray-50">
          <div class="container grid gap-8 px-4 md:px-6 m-auto">
            <div class="grid md:grid-cols-2 gap-8 items-center">
              <img
                src="/talk2.png"
                alt="Feature 1"
                width="600"
                height="400"
                style="aspect-ratio: 600 / 400; object-fit: cover;"
                class="rounded-lg object-cover"
              />
              <div class="space-y-4">
                <h3 class="text-2xl font-bold">日本人にとって親しみやすいUI</h3>
                <p class="text-gray-500 dark:text-gray-400">
                  tako'sは、日本人にとって親しみやすいUIを提供します。シンプルで使いやすいデザインにより、初心者から上級者まで幅広いユーザーに対応しています。
                  また、無駄な機能を排除することで、ストレスなくチャットを楽しむことができます。
                </p>
                <a
                  href="#"
                  class="inline-flex h-10 items-center justify-center rounded-md bg-[#00b894] px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-[#00a185] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#00b894] disabled:pointer-events-none disabled:opacity-50"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div class="grid md:grid-cols-2 gap-8 items-center">
              <div class="space-y-4 order-2 md:order-1">
                <h3 class="text-2xl font-bold">
                  カスタマイズ性の高いグループチャット
                </h3>
                <p class="text-gray-500 dark:text-gray-400">
                  tako'sでは、グループチャットを自由にカスタマイズすることができます。メンバーの追加や削除、権限の設定など、さまざまな機能を使ってチャットを管理できます。
                </p>
                <a
                  href="#"
                  class="inline-flex h-10 items-center justify-center rounded-md bg-[#00b894] px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-[#00a185] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#00b894] disabled:pointer-events-none disabled:opacity-50"
                >
                  Learn More
                </a>
              </div>
              <img
                src="/main-bg.webp"
                alt="Feature 2"
                width="600"
                height="400"
                class="rounded-lg object-cover order-1 md:order-2"
                style="aspect-ratio: 600 / 400; object-fit: cover;"
              />
            </div>
            <div class="grid md:grid-cols-2 gap-8 items-center">
              <img
                src="/main-bg.webp"
                alt="Feature 3"
                width="600"
                height="400"
                class="rounded-lg object-cover"
                style="aspect-ratio: 600 / 400; object-fit: cover;"
              />
              <div class="space-y-4">
                <h3 class="text-2xl font-bold">独自チャットサービス特化型分散型プロトコル</h3>
                <p class="text-gray-500 dark:text-gray-400">
                  tako'sは、独自のチャットサービス特化型分散型プロトコルを採用しています。これにより、高速で安全なチャットを実現しています。
                </p>
                <a
                  href="#"
                  class="inline-flex h-10 items-center justify-center rounded-md bg-[#00b894] px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-[#00a185] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#00b894] disabled:pointer-events-none disabled:opacity-50"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>
        <section class="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 ">
          <div class="container grid items-center justify-center gap-4 px-4 md:px-6 text-center m-auto ">
            <div class="space-y-3">
              <h2 class="text-3xl font-bold tracking-tighter md:text-4xl/tight text-gray-50">
                他社サービスとの比較
              </h2>
              <p class="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                tako'sは、他社のチャットサービスと比較して、どのような特徴があるのでしょうか。以下に、他社との比較表を示します。
              </p>
            </div>
            <div class="overflow-x-auto">
              <table class="w-full text-left">
                <thead>
                  <tr class="bg-gray-100 dark:bg-gray-800">
                    <th class="px-4 py-3 font-bold text-gray-50">Feature</th>
                    <th class="px-4 py-3 font-bold text-gray-50">tako's</th>
                    <th class="px-4 py-3 font-bold text-gray-50">L社</th>
                    <th class="px-4 py-3 font-bold text-gray-50">D社</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b border-gray-200 dark:border-gray-700">
                    <td class="px-4 py-3 text-gray-100">チャット機能</td>
                    <td class="px-4 py-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="w-6 h-6 text-[#00b894]"
                      >
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </td>
                    <td class="px-4 py-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="w-6 h-6 text-[#00b894]"
                      >
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </td>
                    <td class="px-4 py-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="w-6 h-6 text-[#00b894]"
                      >
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </td>
                  </tr>
                  <tr class="border-b border-gray-200 dark:border-gray-700">
                    <td class="px-4 py-3 text-gray-100">高度なグループ機能</td>
                    <td class="px-4 py-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="w-6 h-6 text-[#00b894]"
                      >
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </td>
                    <td class="px-4 py-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="w-6 h-6 text-red-500"
                      >
                        <path d="M18 6 6 18"></path>
                        <path d="m6 6 12 12"></path>
                      </svg>
                    </td>
                    <td class="px-4 py-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="w-6 h-6 text-[#00b894]"
                      >
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </td>
                  </tr>
                  <tr class="border-b border-gray-200 dark:border-gray-700">
                    <td class="px-4 py-3 text-gray-100">
                      原則一人一アカウント
                    </td>
                    <td class="px-4 py-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="w-6 h-6 text-red-500"
                      >
                        <path d="M18 6 6 18"></path>
                        <path d="m6 6 12 12"></path>
                      </svg>
                    </td>
                    <td class="px-4 py-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="w-6 h-6 text-[#00b894]"
                      >
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </td>
                    <td class="px-4 py-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="w-6 h-6 text-red-500"
                      >
                        <path d="M18 6 6 18"></path>
                        <path d="m6 6 12 12"></path>
                      </svg>
                    </td>
                  </tr>
                  <tr class="border-b border-gray-200 dark:border-gray-700">
                    <td class="px-4 py-3 text-gray-100">分散型サービス</td>
                    <td class="px-4 py-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="w-6 h-6 text-[#00b894]"
                      >
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </td>
                    <td class="px-4 py-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="w-6 h-6 text-red-500"
                      >
                        <path d="M18 6 6 18"></path>
                        <path d="m6 6 12 12"></path>
                      </svg>
                    </td>
                    <td class="px-4 py-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="w-6 h-6 text-red-500"
                      >
                        <path d="M18 6 6 18"></path>
                        <path d="m6 6 12 12"></path>
                      </svg>
                    </td>
                  </tr>
                  <tr class="border-b border-gray-200 dark:border-gray-700">
                    <td class="px-4 py-3 text-gray-100">web版のサポート</td>
                    <td class="px-4 py-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="w-6 h-6 text-[#00b894]"
                      >
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </td>
                    <td class="px-4 py-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="w-6 h-6 text-red-500"
                      >
                        <path d="M18 6 6 18"></path>
                        <path d="m6 6 12 12"></path>
                      </svg>
                    </td>
                    <td class="px-4 py-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="w-6 h-6 text-[#00b894]"
                      >
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="space-y-3">
              <h3 class="text-2xl font-bold tracking-tighter md:text-3xl/tight text-gray-50">
                仕様技術
              </h3>
              <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div class="flex flex-col items-center justify-center space-y-2">
                  <img src="https://camo.githubusercontent.com/f19a97a3e98b17f4c6a398d7b3341cb29495e5b5fddc5fa059c309b46b9dcb56/68747470733a2f2f66726573682e64656e6f2e6465762f6c6f676f2e737667"
                  class="w-12"
                  alt="" />
                  <h4 class="text-lg font-bold text-gray-50">Fresh</h4>
                  <p class="text-gray-500 dark:text-gray-400 text-center">
                    Freshは、高速なUIを提供するために設計された、新しいフロントエンドフレームワークです。
                    tailwindcssと組み合わせることで、効率的な開発が可能です。
                  </p>
                </div>
                <div class="flex flex-col items-center justify-center space-y-2">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Deno.svg/1200px-Deno.svg.png"
                  class="w-14"
                  alt="" />
                  <h4 class="text-lg font-bold text-gray-50">Deno</h4>
                  <p class="text-gray-500 dark:text-gray-400 text-center">
                    Denoは、V8エンジンとRustによって構築された新しいランタイムです。
                    Node.jsよりも安全で高速な実行環境を提供します。
                  </p>
                </div>
                <div class="flex flex-col items-center justify-center space-y-2">
                <svg viewBox="8.738 -5.03622834 17.45992422 39.40619484" class="w-10" xmlns="http://www.w3.org/2000/svg"><path d="m15.9.087.854 1.604c.192.296.4.558.645.802a22.406 22.406 0 0 1 2.004 2.266c1.447 1.9 2.423 4.01 3.12 6.292.418 1.394.645 2.824.662 4.27.07 4.323-1.412 8.035-4.4 11.12a12.7 12.7 0 0 1 -1.57 1.342c-.296 0-.436-.227-.558-.436a3.589 3.589 0 0 1 -.436-1.255c-.105-.523-.174-1.046-.14-1.586v-.244c-.024-.052-.285-24.052-.181-24.175z" fill="#599636"/><path d="m15.9.034c-.035-.07-.07-.017-.105.017.017.35-.105.662-.296.96-.21.296-.488.523-.767.767-1.55 1.342-2.77 2.963-3.747 4.776-1.3 2.44-1.97 5.055-2.16 7.808-.087.993.314 4.497.627 5.508.854 2.684 2.388 4.933 4.375 6.885.488.47 1.01.906 1.55 1.325.157 0 .174-.14.21-.244a4.78 4.78 0 0 0 .157-.68l.35-2.614z" fill="#6cac48"/><path d="m16.754 28.845c.035-.4.227-.732.436-1.063-.21-.087-.366-.26-.488-.453a3.235 3.235 0 0 1 -.26-.575c-.244-.732-.296-1.5-.366-2.248v-.453c-.087.07-.105.662-.105.75a17.37 17.37 0 0 1 -.314 2.353c-.052.314-.087.627-.28.906 0 .035 0 .07.017.122.314.924.4 1.865.453 2.824v.35c0 .418-.017.33.33.47.14.052.296.07.436.174.105 0 .122-.087.122-.157l-.052-.575v-1.604c-.017-.28.035-.558.07-.82z" fill="#c2bfbf"/></svg>
                  <h4 class="text-lg font-bold text-gray-50">mongoose & redis</h4>
                  <p class="text-gray-500 dark:text-gray-400 text-center">
                    mongooseは、MongoDBのためのモデリングツールであり、redisは高速なキャッシュストアです。
                    これらの技術を使用することで、高速かつ安全なデータベースを実現しています。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
