import HeaderMenu from "../islands/HeaderMenu.tsx";

const Contents = () => (
  <>
  </>
);
const Contents1 = () => (
  <>
    <div>ホーム</div>
    <div>About</div>
    <div>SNS(開発中)</div>
  </>
);
//メモ: grid-cols-4は4個ずつ並べるという意味。増やすときは数字変える
export default function Header() {
  return (
    <header className="bg-gray-900 text-white py-4 px-6 hidden lg:block">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-lg font-bold">tako's | takoserver</span>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#">Features(準備中)</a>
            </li>
            <li>
              <a href="https://x.com/takoserver_com">X</a>
            </li>
            <li>
              <a href="https://line.me/ti/g2/Q0c8YJlkh5f_hkDuODxp39XF9A7BOCFqezaAHA?utm_source=invitation&utm_medium=link_copy&utm_campaign=default">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
