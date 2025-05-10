import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "新規事業立上、既存事業改善",
    description: "0→1フェーズからの事業企画・立ち上げ。1→10フェーズの収益化を経験。各フェーズに合わせて実現可能な投資プランを立案します",
    rating: 5,
    icon: Icons.sparkles,
  },
  {
    name: "生成AI活用",
    description: "各種業務に生成AIをいかに導入するかの企画運用をおこないます。社員向けの研修実施も可能です。個人では生成AIを使ってプログラミングも行います",
    rating: 5,
    icon: Icons.laptop,
  },
  {
    name: "プレゼン・ネゴシエーション",
    description: "法人営業・経営交渉・プレゼンの豊富な実績。社内外のタフなネゴシエーションも双方に利のある形での着地を実現します",
    rating: 5,
    icon: Icons.help,
  },
  {
    name: "組織構築、強化",
    description: "3〜50人規模のチームビルディング、多国籍チームの運営、機能の効率的な再構築などご提案し、推進します",
    rating: 5,
    icon: Icons.user,
  },
  {
    name: "人材採用",
    description: "述べ1000件以上の採用面談経験あり。全職種、全階層の採用戦略策定、実行も支援します",
    rating: 5,
    icon: Icons.work,
  },
  {
    name: "投資家向けピッチ資料作成",
    description: "事業計画作成や資金調達のための資料作成。戦略からエクセルへの落とし込みまで。財務担当として投資家、金融機関との面談同席も可能です",
    rating: 4,
    icon: Icons.fileText,
  },
  {
    name: "契約・会計・労務実務",
    description: "スタートアップCOOとして契約法務・会計・資金繰り・労務の経験も豊富。経営方針に合わせた判断軸で推進します",
    rating: 3,
    icon: Icons.billing,
  },
  {
    name: "デジタルマーケティング、オウンドメディア運営",
    description: "戦略策定から実行（WordPressでの構築・記事執筆・SEO・SNS運用など）まですべて対応できます",
    rating: 3,
    icon: Icons.media,
  },
  

];

export const skills = skillsUnsorted

export const featuredSkills = skills.slice(0, 6);
