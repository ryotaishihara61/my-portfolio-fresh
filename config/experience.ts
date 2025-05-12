import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ExperienceInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Experiences: ExperienceInterface[] = [
  {
    id: "en-japan",
    companyName: "エン・ジャパン株式会社",
    category: ["事業開発", "営業戦略", "営業企画", "組織マネジメント", "プロジェクトマネジメント", "PMO", "デジタルマーケティング", "採用", "新規事業立ち上げ"],
    shortDescription:
      "創業期のエン・ジャパンに参画し、営業、マネジメント、営業企画、新規事業立ち上げなど多岐にわたり急成長を牽引。300名体制・年商50億円規模の事業を育成し、戦略立案から実行まで現場と企画の両軸で推進。PMOやマーケ責任者も兼任。",
    websiteLink: "https://corp.en-japan.com/",
    companyLogoImg: "/experience/en-japan-logo.png",
    descriptionDetails: {
      paragraphs: [
        "創業間もないエン・ジャパンにて、営業職として高業績を収めたのち、営業マネージャーや営業企画として組織運営と仕組み化に従事。急拡大フェーズを支える中核メンバーとして活躍。",
        "新規事業の企画責任者を務め、事業部を300名体制、売上50億円規模に成長させた。大阪・横浜拠点長も兼務し、戦略策定と現場オペレーションを一貫して推進。",
        "また、基幹システム開発のPMOやデジタルマーケティング責任者も歴任。事業・採用・組織開発に横断的に関わり、年間数百名の採用面談も実施した。",
      ],
      bullets: [
        "営業職としてトップクラスの業績を達成",
        "営業マネージャーおよび営業企画として組織運営を主導",
        "新規事業の立ち上げおよびグロース（事業部300名・売上50億円）",
        "拠点責任者（大阪・横浜）としてプレイングマネジメントを実施",
        "基幹システム開発におけるPMO業務を担当",
        "デジタルマーケティング施策の立案と運用を統括",
      ],
    },
  },
  {
    id: "notas",
    companyName: "ノウタス株式会社",
    category: ["事業開発", "経営企画", "資金調達", "スタートアップ", "人材サービス", "メディア運営", "プロジェクトマネジメント", "農業ビジネス", "関係人口創出"],
    shortDescription:
      "農業の関係人口を増やすことをミッションに掲げ、ノウタス株式会社を共同創業。副社長として事業開発・経営企画・資金調達を担当し、複数の新規事業を推進。人材マッチングやオウンドメディア立ち上げなどを通じ、農と人をつなぐ仕組みを構築。",
    websiteLink: "https://www.notas.co.jp/",
    companyLogoImg: "/experience/notas-logo.png",
    descriptionDetails: {
      paragraphs: [
        "ノウタス株式会社を共同創業し、「農業の関係人口を増やす」ことを軸に、地域・都市間の人と農の接点を創出。副社長としてビジネスの土台づくりを担った。",
        "事業開発面では、農業人材マッチングサービスやオウンドメディアをゼロから企画・立ち上げ。構想から運営体制構築、収益モデル設計まで一貫して担当した。",
        "また、経営企画・資金調達の実務も担い、初期フェーズの資本政策や投資家対応、将来の拡大を見据えた成長戦略を設計。スタートアップとしての推進力を支えた。",
      ],
      bullets: [
        "農業分野における新規サービスを企画・立ち上げ",
        "農業人材マッチング事業の企画・運用",
        "オウンドメディアの設計・編集体制構築・運営",
        "経営企画および中長期戦略の立案",
        "資金調達に関する戦略設計",
      ],
    },
  },
  {
    id: "kit",
    companyName: "Kirirom Institute of Technology",
    category: ["教育開発", "アライアンス", "スタートアップ支援", "資金調達", "イベント運営"],
    shortDescription:
      "カンボジアの先進的なIT大学であるKITにて、Senior Business Development Officerとして勤務。大学の発展を牽引する事業開発部門にて、戦略アライアンスの推進、資金調達、学生スタートアップ支援、そして大規模セミナーの企画運営など、多面的な経営支援を担当。",
    websiteLink: "https://www.kit.edu.kh/",
    companyLogoImg: "/experience/kitlogo.png",
    descriptionDetails: {
      paragraphs: [
        "同大学は、英語と寮生活をベースにソフトウェアエンジニアを育成するアジア有数のIT教育機関。世界各国からの支援や企業連携が不可欠な中、私は日本を中心とする外部連携を主導した。",
        "学生起業家の支援では、アクセラレーションプログラムの構築からメンタリング体制の整備までを担当。将来有望な学生チームに対し、資金調達やプロダクト開発の支援を行った。",
        "また、1000人規模のハイブリッドセミナーの企画・運営責任者として、国内外の登壇者の招聘から全体進行管理までを統括。KITのブランディング向上に貢献した。",
      ],
      bullets: [
        "日本を中心とした戦略的アライアンスの構築と交渉",
        "外部資金調達の支援（政府・民間・財団向け提案）",
        "学生起業プロジェクトのアクセラレーション支援",
        "セミナーイベント（参加者1000人以上）の企画・登壇者交渉・全体統括",
        "創業オーナー直下での経営企画・プロジェクト推進",
      ],
    },
  },
  {
    id: "kd",
    companyName: "キリロムデジタル株式会社",
    category: ["事業開発", "プロジェクトマネジメント", "資金調達", "人事管理", "財務会計", "法務対応", "危機管理", "リモート開発体制", "スタートアップ経営", "アジャイル開発"],
    shortDescription:
      "カンボジア発のソフトウェア開発企業として、海外案件を現地エンジニアチームと共にデリバリー。私はCOOおよび現地法人代表として、資金調達、営業、人事、財務、法務をハンズオンで担当。プロジェクトマネージャーとして現場にも入り、経営危機時にはリストラや資金繰りも主導。事業の黒字化と日本法人設立を実現した。",
    websiteLink: "https://www.kirirom-digital.com/",
    companyLogoImg: "/experience/kdlogo3.png",
    descriptionDetails: {
      paragraphs: [
        "事業の立ち上げ初期、KIT卒業生と共にコロナ禍の渡航制限を逆手に取り、カンボジアからの海外案件受託を展開。日本、中国、シンガポールのクライアントを対象に、遠隔での高品質な開発体制を構築した。",
        "COOとして経営全般を担い、資金調達から営業戦略、法務まで全領域をカバー。現地法人の代表としてチームビルディングにも注力し、企業としての信頼性とスケーラビリティを高めた。",
        "米国進出には失敗し、大幅なリストラや資金繰りの逼迫も経験。厳しい状況下でも、事業継続のための意思決定を行い、全社的な再構築をリードした。",
      ],
      bullets: [
        "海外案件（日本・中国・シンガポール）におけるシステム開発の受託・納品",
        "日本本社取締役COO・カンボジア法人代表として経営業務を統括",
        "プロジェクトマネージャーとして開発現場の進行管理も兼務",
        "資金調達、人事制度構築、法務・会計体制の整備",
        "リストラ対応、資金繰り管理、事業再建の実行",
      ],
    },
  },
  {
    id: "jobify",
    companyName: "Jobify",
    category: ["人材ビジネス", "スタートアップ支援", "KPI設計", "ダッシュボード構築", "エンジェル投資", "経営アドバイザー", "業務改善", "IT人材市場", "マッチングシステム", "数値管理"],
    shortDescription:
      "Jobifyは、KIT発の学生スタートアップとして誕生したカンボジアのITエンジニア専門人材エージェント。創業初期からアドバイザーとして参画し、資金提供を含む経営支援を実施。日本での人材業界の経験を活かして、ビジネスモデル構築、KPIマネジメント、業務システム整備をリードし、同分野における国内トップエージェントへと成長を後押しした。",
    websiteLink: "hhttps://jobify.works/about-us",
    companyLogoImg: "/experience/jobifymember.png",
    descriptionDetails: {
      paragraphs: [
        "Jobifyの創業期から、経営アドバイザーとして戦略設計と実行支援を行いました。特に、ビジネスモデルの整備や顧客開拓プロセスの見直しを通じて、収益性の高い事業基盤の構築を支援しました。",
        "また、KPI設計・ダッシュボード構築・業務オペレーションの見える化などを推進し、属人的な経営からデータドリブンな意思決定体制へと転換しました。現場チームとの継続的な1on1やワークショップも実施。",
        "資金提供も実施し、創業期のキャッシュフローを安定化。現在では登録者1万人以上の国内No.1のエージェントへと成長を遂げています。",
      ],
      bullets: [
          "人材エージェント事業のビジネスモデル構築と実行支援",
          "KPI設計および経営ダッシュボードの導入",
          "エンジェル投資家として資金提供を実施",
          "業務管理・マッチングシステムの要件定義と導入支援",
          "営業・広報・運営各チームへのメンタリングと定期レビュー",
          "カンボジアのIT人材市場調査とレポーティング",
      ],
    },
  },

];

export const featuredExperiences = Experiences.slice(0, 3);
