import BBSCardList from "./components/BBSCardList";
import { BBSData } from "./types/types";

async function getBBSAllAData() {
  // 絶対URLを指定する
  const response = await fetch("http://localhost:3000/api/post", {
    cache: "no-store",
  });

  // SSRの場合はローカルサーバーなのでターミナルを見る
  // レスポンスが配列なので配列にする
  const bbsAllData: BBSData[] = await response.json();

  return bbsAllData;
}

// アクセス頻度が多いSSR, CSRが良いと考えられる
export default async function Home() {
  const bbsAllData = await getBBSAllAData();
  return (
    <main>
      <BBSCardList bbsAllData={bbsAllData} />
    </main>
  );
}
