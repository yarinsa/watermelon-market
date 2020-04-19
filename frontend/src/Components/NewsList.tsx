import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { NewsCard } from "./NewsCard";
import gql from "graphql-tag";
import styled from "styled-components/macro";
import { ReactComponent as Loader } from "../assets/news-loader.svg";

export const NewsList: React.FC<any> = ({}) => {
  //   const { data, loading, error } = useQuery(GET_ARTICLES);

  const data = {
    newsBySymbol: [
      {
        source: "Business Insider",
        author:
          "feedback@businessinsider.com (Carmen Reinicke), Carmen Reinicke",
        title:
          "Tesla surges 17% after delivering more cars than expected amid the coronavirus pandemic",
        description:
          "Getty/Justin Sullivan Tesla delivered 88,400 cars in the first quarter of 2020, the company announced Thursday, exceeding Wall Street expectations. Shares jumped as much as 17% in premarket trading Friday. The results come after Tesla had to close some factor…",
        url:
          "https://markets.businessinsider.com/news/stocks/tesla-stock-price-gains-better-expected-vehicle-deliveries-coronavirus-pandemic-2020-4-1029062701",
        urlToImage:
          "https://images.markets.businessinsider.com/image/5c48acb82bdd7f687753de82-2400/justin-sullivangetty2.jpg",
        publishedAt: "2020-04-03T12:19:18Z",
        content:
          "Getty/Justin Sullivan\r\n<ul><li>Tesla delivered 88,400 cars in the first quarter of 2020, the company announced Thursday, exceeding Wall Street expectations.</li><li>Shares jumped as much as 17% in premarket trading Friday. </li><li>The results come after Tesl… [+1950 chars]",
      },
      {
        source: "Business Insider",
        author: "Mark Matousek",
        title:
          "Leaked email reveals 2 Tesla employees have tested positive for COVID-19",
        description:
          "Two Tesla employees have tested positive for COVID-19, according to an internal email sent on Thursday. The employees have been working from home for about two weeks and didn't show symptoms while in the office, the electric-car maker said. Tesla has not prev…",
        url:
          "https://www.businessinsider.com/leaked-email-reveals-two-tesla-employees-tested-positive-covid-19-2020-3",
        urlToImage:
          "https://i.insider.com/5e7cbbfc2d41c14d1201fd9b?width=1200&format=jpeg",
        publishedAt: "2020-03-26T14:30:38Z",
        content:
          "Two Tesla employees have tested positive for COVID-19, the disease caused by the novel coronavirus, Laurie Shelby, the head of Tesla's environmental and safety department, said in an email to employees on Thursday. Business Insider viewed a photo of the email… [+750 chars]",
      },
      {
        source: "Business Insider",
        author:
          "feedback@businessinsider.com (Carmen Reinicke), Carmen Reinicke",
        title:
          "Jefferies says now is the time to buy Tesla, which it says could surge another 35% this year",
        description:
          'Justin Sullivan/Getty Images Jefferies upgraded shares of Tesla to "buy" from "hold" Monday while lowering its price target to $650 from $800 — still implying a 35% upside from where shares traded at Friday\'s market close. Shares gained as much as 8% Monday. …',
        url:
          "https://www.businessinsider.com/tesla-stock-price-could-surge-buy-now-jefferies-says-upgrade-2020-4",
        urlToImage:
          "https://images.markets.businessinsider.com/image/57a890f1ce38f235008b540b-1024/elon-musk-tesla.jpg",
        publishedAt: "2020-04-06T19:19:12Z",
        content:
          'Justin Sullivan/Getty Images\r\n<ul><li>Jefferies upgraded shares of Tesla to "buy" from "hold" Monday while lowering its price target to $650 from $800 — still implying a 35% upside from where shares traded at Friday\'s market close. </li><li>Shares gained as m… [+3446 chars]',
      },
      {
        source: "Business Insider",
        author: "Mark Matousek and Linette Lopez",
        title:
          "Tesla workers say they've been left confused, scared, and frustrated as the coronavirus spreads rapidly through the US",
        description:
          "Nine Tesla employees criticized the company's response to the novel coronavirus in interviews with Business Insider. They said Tesla has been slow to act and hasn't done as much as it can to keep workers safe. Tesla has closed its California car plant and New…",
        url:
          "https://www.businessinsider.com/tesla-workers-scared-frustrated-response-to-coronavirus-2020-3",
        urlToImage:
          "https://i.insider.com/5e7a44ffba85ee0bb435c8e9?width=1200&format=jpeg",
        publishedAt: "2020-03-26T15:51:42Z",
        content:
          "The rapid spread of the novel coronavirus has come at a particularly bad time for one Tesla service employee who's dealing with a health issue.\r\nAfter his request for medical leave was denied, he has found himself with little to do, given the work restriction… [+5001 chars]",
      },
      {
        source: "Business Insider",
        author: "Carmen Reinicke",
        title:
          "Tesla surges 14% after Credit Suisse upgrades the stock, saying it's well positioned after the coronavirus disruption",
        description:
          'Credit Suisse on Tuesday upgraded Tesla to "neutral" from "underperform." Shares of the automaker gained as much as 14% Tuesday. "While coronavirus is expected to drive some near-term demand impact to Tesla, we nevertheless don\'t see much long-term impact to …',
        url:
          "https://markets.businessinsider.com/news/stocks/tesla-stock-price-gains-credit-suisse-upgrade-coronavirus-position-analyst-2020-4-1029090327",
        urlToImage:
          "https://images.markets.businessinsider.com/image/5c48aceb2bdd7f5ae6236546-2400/justin-sullivangetty2.jpg",
        publishedAt: "2020-04-14T14:48:23Z",
        content:
          'Getty/Justin Sullivan\r\n<ul><li>Credit Suisse on Tuesday upgraded Tesla to "neutral" from "underperform."</li><li>Shares of the automaker gained as much as 14% Tuesday. </li><li> "While coronavirus is expected to drive some near-term demand impact to Tesla, we… [+3113 chars]',
      },
      {
        source: "Business Insider",
        author: "feedback@businessinsider.com (Matthew DeBord), Matthew DeBord",
        title:
          "Tesla's history can be traced through its milestones. Here are the top 25 moments that shaped the electric carmaker over the years.",
        description:
          "FREDERIC J. BROWN/AFP via Getty Images Tesla has been around for 16 years, and in that time period, CEO Elon Musk's all-electric carmaker has established an astonishing number of milestones. I rounded up the most significant 25. They range from the original R…",
        url:
          "https://www.businessinsider.com/tesla-history-timeline-2020-biggest-milestones-and-moments-2020-4",
        urlToImage:
          "https://i.insider.com/5a0f0b2d3dbef4ae078b6b84?width=1200&format=jpeg",
        publishedAt: "2020-04-11T13:33:00Z",
        content:
          "Business Insider\r\nTesla is 16 years old. It turns 17 in July. In the nearly two decades it's been around, the Silicon Valley electric-car company has done what nobody in the auto industry thought was possible: create a viable new American car brand.\r\nAlong th… [+386 chars]",
      },
      {
        source: "Business Insider",
        author: "Avery Hartmans",
        title:
          "Elon Musk lashed out at reports that he never delivered ventilators to California hospitals. Here's what's going on, and why Musk's ventilator efforts have become controversial.",
        description:
          "Elon Musk is calling out a report that he didn't follow through on his promise to deliver ventilators to hospitals in California. CNN cited a report from the Sacramento Bee that the governor's office said no California hospital had received the 1,000 ventilat…",
        url:
          "https://www.businessinsider.com/elon-musk-tesla-ventilator-controversy-explained-2020-4",
        urlToImage:
          "https://i.insider.com/5e985ded8427e9575304f006?width=1200&format=jpeg",
        publishedAt: "2020-04-17T16:15:59Z",
        content: null,
      },
      {
        source: "Business Insider",
        author: "Matthew DeBord",
        title:
          "Tesla is shutting down its factory in California as the coronavirus pandemic intensifies and the San Francisco Bay Area shelters in place",
        description:
          "Tesla said that it would suspend production at its Fremont, California, factory beginning March 23. Visit Business Insider's homepage for more stories. On Thursday, Tesla said that it would suspend production at its main factory in Fremont, California, beginn…",
        url:
          "https://www.businessinsider.com/tesla-shutting-down-factory-california-due-to-coronavirus-2020-3",
        urlToImage:
          "https://i.insider.com/59f3447fbcf93d48008b4fd5?width=1200&format=jpeg",
        publishedAt: "2020-03-19T21:12:14Z",
        content:
          'On Thursday, Tesla said that it would suspend production at its main factory in Fremont, California, beginning March 23.\r\n"In the past few days, we have met with local, state and federal officials," Tesla said in a statement.\r\n"We have followed and are contin… [+490 chars]',
      },
      {
        source: "Business Insider",
        author: "Linette Lopez",
        title:
          "Tesla will suspend production at its Fremont factory starting end of day March 23 in response to coronavirus, according to a leaked memo",
        description:
          'Tesla will suspend production at its Fremont facility starting end of day March 23rd, according to an internal email viewed by Business Insider. "You should continue to report to your current location til the end of day Monday as current operations will conti…',
        url:
          "https://www.businessinsider.com/tesla-to-suspend-production-march-23-in-response-to-coronavirus-2020-3",
        urlToImage:
          "https://i.insider.com/5e73dc4bc485401db35d9be2?width=1200&format=jpeg",
        publishedAt: "2020-03-19T21:11:05Z",
        content:
          "Tesla will suspend production at its Fremont facility starting end of day March 23rd, according to an internal email viewed by Business Insider. Fremont is an California's Alameda County which is currently under a shelter-in-place order due to the coronavirus… [+1262 chars]",
      },
      {
        source: "Business Insider",
        author: "Tyler Sonnemaker and Reuters",
        title:
          "A federal judge just ruled that Tesla must face a shareholder lawsuit over Elon Musk's tweet saying he was considering taking the company private",
        description:
          "Tesla must face a lawsuit claiming it misled shareholders when Elon Musk tweeted that he was considering taking the company private, a federal judge ruled Wednesday. Musk tweeted in August 2018 that he had secured funding to take the company private at $420 p…",
        url:
          "https://www.businessinsider.com/tesla-must-face-shareholder-lawsuit-over-musks-going-private-tweet-2020-4",
        urlToImage:
          "https://i.insider.com/5be330bce4218a55d356ec76?width=1200&format=jpeg",
        publishedAt: "2020-04-15T19:39:22Z",
        content:
          "A federal judge said Tesla must face a lawsuit claiming it misled shareholders when CEO Elon Musk tweeted in August 2018 that he was considering taking the electric car company private.\r\nUS District Judge Edward Chen ruled on Wednesday that shareholders could… [+1471 chars]",
      },
      {
        source: "36kr.com",
        author: "出行一客",
        title: "",
        description:
          "编者按：本文来自微信公众号 “出行一客”（ID:carcaijing） ，作者：施智梁团队，36氪经授权发布。 美国时间4月2日，特斯拉(NASDAQ: TSLA)公布今年第一季度生产交付数据：生产10.27万辆，交付8.84万辆，较上年同期的6.3万辆增长40%，且高于分析师普遍预期的7万辆的水平。 受此消息影响，当日纳斯达克交易所盘后交易中，该公司股价每股为535美元，上涨17.72%。 一季度产能创纪录主要得益于2019年底正式投产的特斯拉上海超级工厂。目前特斯拉在美国弗里蒙特和中国上海拥有两家整车组装工厂…",
        url: "https://www.36kr.com/p/5308973?ktm_source=feed",
        urlToImage: "https://img.36krcdn.com/20191024/v2_1571894049839_img_jpg",
        publishedAt: "2020-04-05T02:53:58Z",
        content:
          "ID:carcaijing36\r\n42(NASDAQ: TSLA)10.278.846.340%7\r\n53517.72% \r\n20191000 \r\n20207500 \r\n324 \r\n·(Itay Michaeli)43.451.7312246\r\nCEO·(Elon Musk)202050\r\n431.22Model S/X7.62Model 3/Y49.7%\r\n1-45 \r\n0.5% \r\n10.2710.492%\r\n20207500135632238981.193 \r\n20191230Model 328101000… [+217 chars]",
      },
      {
        source: "Marketwatch.com",
        author: "Claudia Assis",
        title:
          "Tesla to shut down California, New York factories amid coronavirus",
        description:
          "Tesla Inc. will temporarily halt production at its Fremont, Calif., factory and its solar-panel factory in Buffalo, New York, amid efforts to limit the spread of the novel coronavirus.",
        url:
          "https://www.marketwatch.com/story/tesla-to-shut-down-california-new-york-factories-amid-coronavirus-pandemic-2020-03-19",
        urlToImage:
          "http://s.marketwatch.com/public/resources/MWimages/MW-IC665_teslaf_ZG_20200319171822.jpg",
        publishedAt: "2020-03-19T20:21:11Z",
        content:
          "Tesla Inc. said late Thursday it will temporarily halt production at its Fremont, Calif., factory and its solar-panel factory in Buffalo, N.Y., amid efforts to limit the spread of the novel coronavirus. \r\nThe halt appeared to end a game of chicken between Tes… [+1759 chars]",
      },
      {
        source: "Marketwatch.com",
        author: "Ciara Linnane",
        title:
          "CVS plans to hire furloughed workers from its customers as companies get creative during coronavirus pandemic -",
        description:
          "CVS plans to hire furloughed workers from its customers as companies get creative during coronavirus pandemic MarketWatch Coronavirus pandemic causes economic pain, but many companies are booming and hiring ABC News CVS Health hiring 50,000 employees; adding …",
        url:
          "http://www.marketwatch.com/story/cvs-plans-to-hire-furloughed-workers-from-its-customers-as-companies-get-creative-during-coronavirus-2020-03-23",
        urlToImage:
          "https://s.marketwatch.com/public/resources/images/MW-HF432_CVS_20_ZG_20190311112941.jpg",
        publishedAt: "2020-03-24T12:00:43Z",
        content:
          "The coronavirus that causes COVID-19 has led many companies to lay off or furlough workers, temporarily close stores and offices and shut down production, but has also inspired some to become creative in their handling of the crisis.CVS Health\r\n CVS, \r\n -2.94… [+5228 chars]",
      },
      {
        source: "Marketwatch.com",
        author: "Mark DeCambre",
        title:
          "Market Extra: The S&P 500 just posted the most daily swings of 3% or greater in more than a decade—even as the stock market hits a 5-week",
        description:
          "U.S. stocks are attempting to recover from their recent March lows, but even Tuesday’s positive swing highlights why the coronavirus-stricken market is one of the most volatile since the financial crisis.",
        url:
          "https://www.marketwatch.com/story/the-sp-500-just-posted-the-most-daily-swings-of-3-or-greater-in-more-than-a-decadeeven-as-the-stock-market-hits-a-5-week-high-2020-04-14",
        urlToImage:
          "https://s.marketwatch.com/public/resources/images/MW-GJ077_carous_ZG_20180511131208.jpg",
        publishedAt: "2020-04-14T21:45:14Z",
        content:
          "U.S. stocks are attempting to recover from their most recent lows of late March, but the recent market gyrations, even with Tuesdays positive swing, highlight why this coronavirus-stricken market is one of the most volatile since the 2007-09 financial crisis.… [+2296 chars]",
      },
      {
        source: "Marketwatch.com",
        author: "Claudia Assis",
        title:
          "GM, Ford are ‘exploring’ making ventilators for coronavirus patients amid shortage",
        description:
          "U.S. auto makers say they are considering making ventilators amid concern the life-saving devices might be scarce in the ongoing COVID-19 pandemic.",
        url:
          "https://www.marketwatch.com/story/gm-ford-are-exploring-making-ventilators-for-coronavirus-patients-amid-shortage-fears-2020-03-19",
        urlToImage:
          "http://s.marketwatch.com/public/resources/MWimages/MW-IC627_ventil_ZG_20200319113934.jpg",
        publishedAt: "2020-03-19T15:16:54Z",
        content:
          "General Motors Co. and Ford Motor Co. said they are exploring making ventilators amid fears the life-saving devices might become scarce in the U.S. in the COVID-19 pandemic.\r\nI can confirm that GM is exploring the possibility of supporting ventilator producti… [+1981 chars]",
      },
      {
        source: "Marketwatch.com",
        author: "Claudia Assis",
        title:
          "Ford is first auto maker to warn of lower sales, but unlikely to be",
        description:
          "Investors brace for possible warnings from GM, Tesla, other auto makers as coronavirus snuffs out demand for vehicles.",
        url:
          "https://www.marketwatch.com/story/ford-is-first-auto-maker-to-warn-of-lower-sales-but-unlikely-to-be-last-2020-04-13",
        urlToImage:
          "https://s.marketwatch.com/public/resources/images/MW-HD908_f150_ZG_20190213150242.jpg",
        publishedAt: "2020-04-13T17:06:36Z",
        content:
          "Ford Motor Co. on Monday warned about lower sales in the first quarter as the coronavirus pandemic snuffs out demand for autos, with investors bracing for possible, similar announcements from General Motors Co. and Tesla Inc. Ford\r\n F, \r\n -5.49%\r\nshares trade… [+2394 chars]",
      },
      {
        source: "Business Insider",
        author: "Graham Rapier",
        title:
          "A worker at Panasonic's joint factory with Tesla reportedly tested positive for the coronavirus",
        description:
          "A worker at Panasonic's joint factory with Tesla tested positive for the coronavirus, The Verge reports. The Buffalo, New York solar-manufacturing line will be shut down for longer than expected, Panasonic said in an email obtained by the website. Tesla has a…",
        url:
          "https://www.businessinsider.com/panasonic-worker-at-tesla-new-york-gigafactory-contracts-coronavirus-report-2020-4",
        urlToImage:
          "https://i.insider.com/5e86047c92e19166fc133878?width=1200&format=jpeg",
        publishedAt: "2020-04-02T16:02:42Z",
        content:
          "A worker at Tesla and Panasonic's joint solar panel factory in upstate New York was confirmed to have the coronavirus, The Verge's Sean O'Kane reported Wednesday citing an email to employees.\r\nThe Panasonic-employed person is the fourth worker at a Tesla site… [+1952 chars]",
      },
      {
        source: "Marketwatch.com",
        author: "Claudia Assis",
        title: "Tesla stock called a ‘buy’ amid confusion about car maker’s",
        description:
          "Tesla Inc. stock gets upgrades this week while confusion still reigns about the extent the company’s California factory had been affected by a coronavirus-related shutdown.",
        url:
          "https://www.marketwatch.com/story/tesla-stock-called-a-buy-amid-confusion-about-car-makers-factory-2020-03-18",
        urlToImage:
          "http://s.marketwatch.com/public/resources/MWimages/MW-HG303_tesla3_ZG_20190325111531.jpg",
        publishedAt: "2020-03-18T15:29:55Z",
        content:
          "Tesla Inc. stock picked up a couple of upgrades this week while confusion still reigned about the extent the companys California factory had been affected by a coronavirus-related shutdown.\r\nBank of America analysts moved Tesla \r\nTSLA, -11.49%\r\n shares one no… [+3146 chars]",
      },
      {
        source: "Marketwatch.com",
        author: "Claudia Assis",
        title: "The Ratings Game: Tesla’s sales a ‘sigh of relief’ for",
        description:
          "Tesla clears a hurdle this week, reporting sales that were better than many investors had hoped.",
        url:
          "https://www.marketwatch.com/story/teslas-sales-a-sigh-of-relief-for-bulls-2020-04-03",
        urlToImage:
          "http://s.marketwatch.com/public/resources/MWimages/MW-HY047_musk_t_ZG_20200109042851.jpg",
        publishedAt: "2020-04-03T17:19:12Z",
        content:
          "Tesla Inc. may have cleared a hurdle this week, but investors remained cautions about the companys prospects amid the continued fallout from the novel coronavirus pandemic. \r\nTesla late Thursday reported first-quarter deliveries just a bit lower than consensu… [+2983 chars]",
      },
      {
        source: "Marketwatch.com",
        author: "Claudia Assis",
        title:
          "The Ratings Game: Tesla is facing no immediate liquidity crunch, says this",
        description:
          "Tesla Inc.’s sales may be out the window but the Silicon Valley auto maker has enough cash to survive the economic destruction wreaked by the coronavirus pandemic, analysts at Bernstein say.",
        url:
          "https://www.marketwatch.com/story/tesla-is-facing-no-immediate-liquidity-crunch-says-this-analyst-2020-04-01",
        urlToImage:
          "http://s.marketwatch.com/public/resources/MWimages/MW-ID547_tesla4_ZG_20200401114138.jpg",
        publishedAt: "2020-04-01T15:56:36Z",
        content:
          "Tesla Inc. is unlikely to meet its sales goals for the year and its 2020 revenue may drop by about one fifth, but it has enough cash to survive the economic destruction wrought by the coronavirus pandemic.\r\nThats the view of analysts at Bernstein, led by Toni… [+2917 chars]",
      },
    ],
  };

  const dataToNewsCards = (data: any) => {
    return data.newsBySymbol.map((news: any, index: number) => (
      <NewsCard {...news} key={index} />
    ));
  };
  return (
    <Root>
      {data && dataToNewsCards(data)}
      {/* {loading && <Loader />} */}
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  flex-direction: column;
`;

const GET_ARTICLES = gql`
  {
    newsBySymbol(symbol: "TSLA") {
      source
      author
      title
      description
      url
      urlToImage
      publishedAt
    }
  }
`;
